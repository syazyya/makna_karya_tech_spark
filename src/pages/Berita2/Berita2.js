import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../../components/Section/Footer'; // Make sure to import your Footer component

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center flex-col"> {/* Main container with flex column layout */}

      {/* Content container with flex-grow to push footer down */}
      <div className="flex-grow flex justify-center px-4 py-10" data-aos="fade-up">
        <div className="bg-white text-gray-800 p-6 rounded-lg max-w-4xl w-full shadow-lg pt-12">


          <img
            src="https://dashboard.primakara.ac.id/uploads/full_stack_developer_adalah_28fc15e4c2.jpeg"
            alt="Ilustrasi pengembangan perangkat lunak"
            className="w-full h-64 object-cover rounded-md mb-6"
          />
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Pertimbangan Jadi Ahli Front End, Back End, atau DevOps?
          </h1>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Dalam era digital saat ini, kebutuhan akan pengembang perangkat lunak semakin meningkat. Namun, banyak orang yang masih bingung memilih jalur karier di dunia IT: apakah menjadi ahli Front End, Back End, atau DevOps? Ketiga jalur ini memiliki fokus dan tanggung jawab yang berbeda, serta membutuhkan skill set yang unik. Memahami karakteristik dan tantangan masing-masing peran sangat penting sebelum menentukan pilihan.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Front End Developer berfokus pada tampilan dan interaksi pengguna dalam sebuah aplikasi atau situs web. Mereka bekerja dengan HTML, CSS, dan JavaScript serta framework seperti React atau Vue. Jika kamu tertarik pada desain, pengalaman pengguna, dan suka melihat hasil kerjamu langsung terlihat, maka Front End bisa menjadi pilihan yang tepat.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Di sisi lain, Back End Developer menangani logika server, database, dan integrasi sistem. Mereka sering bekerja dengan bahasa seperti Node.js, Python, Java, atau PHP. Back End cocok bagi mereka yang lebih menyukai pemrosesan data, algoritma, dan bekerja di balik layar untuk memastikan sistem berjalan lancar.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            DevOps adalah kombinasi dari pengembangan (Development) dan operasi sistem (Operations). Peran ini menggabungkan pemahaman tentang coding dan infrastruktur IT. DevOps engineer bertanggung jawab dalam otomatisasi, deployment, monitoring, dan keamanan sistem. Mereka biasanya menggunakan alat seperti Docker, Kubernetes, Jenkins, dan cloud platform seperti AWS atau Azure.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Memilih antara Front End, Back End, atau DevOps sebaiknya disesuaikan dengan minat, gaya kerja, dan keahlian yang ingin dikembangkan. Tidak ada pilihan yang "lebih baik"—semuanya penting dan saling melengkapi dalam membangun sistem teknologi yang solid. Yang terpenting adalah memahami apa yang membuatmu termotivasi dan terus berkembang di bidang yang kamu pilih.
          </p>

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