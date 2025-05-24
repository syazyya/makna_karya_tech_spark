import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../../components/Section/Footer'; // Import the Footer component

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col"> {/* Changed to flex-col */}
      {/* Main content container with flex-grow */}
      <div className="flex-grow flex justify-center px-4 py-10">
        <div className="max-w-3xl bg-white shadow-lg rounded-lg p-6 pt-12 w-full" data-aos="fade-up">


          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ilustrasi AI Garuda"
              className="w-1/2 h-auto rounded-md mb-6"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Indonesia Siap Rilis AI Garuda, Penantang ChatGPT
          </h1>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Indonesia bersiap meluncurkan AI Garuda, sebuah kecerdasan buatan yang diklaim memiliki kemampuan setara dengan ChatGPT. Proyek ini merupakan hasil kerja sama antara pemerintah, lembaga riset nasional, serta beberapa universitas teknologi terkemuka di dalam negeri.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Pemerintah menyatakan bahwa AI Garuda adalah bagian dari strategi besar untuk mencapai kedaulatan digital. Dengan memanfaatkan data dan bahasa lokal, AI ini diharapkan bisa menjadi solusi cerdas yang relevan dan aman bagi masyarakat Indonesia.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            "Kita harus memiliki teknologi AI sendiri yang bisa kita kendalikan dan kembangkan sesuai dengan nilai-nilai kita," ujar Menteri Komunikasi dan Informatika. AI Garuda nantinya akan mampu merespons pertanyaan, menulis teks, hingga membantu pelayanan publik.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Salah satu keunggulan utama dari AI Garuda adalah kemampuannya memahami konteks budaya Indonesia, termasuk variasi bahasa daerah. Ini memberi keunggulan dalam aplikasi pendidikan, layanan pemerintahan, dan bahkan sektor hukum serta UMKM.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Peluncuran versi beta AI Garuda dijadwalkan pada kuartal ketiga tahun ini. Masyarakat dapat mencoba langsung teknologi ini secara gratis melalui platform daring yang akan segera diumumkan. Harapannya, AI Garuda dapat membuka jalan bagi Indonesia sebagai pemain utama di bidang AI global.
          </p>

          <br />

          <Link
            to="/news"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            ← Kembali ke Menu News
          </Link>
        </div>
      </div>

      {/* Footer will now stick to the bottom */}
      <Footer />
    </div>
  );
}

export default App;