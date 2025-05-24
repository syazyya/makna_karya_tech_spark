import React from 'react';
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="bg-gray-100 text-gray-800 p-6 rounded-lg max-w-4xl mx-auto mt-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <img 
          src="https://source.unsplash.com/featured/?programming,developer" 
          alt="Programmer Illustration" 
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          5 Tips untuk Menjadi Programmer yang Lebih Baik
        </h1>

        <p className="text-gray-700 text-lg mb-4">
          Menjadi programmer yang lebih baik bukan hanya soal menguasai bahasa pemrograman terbaru, tetapi juga memahami cara berpikir, menyusun kode, dan terus berkembang. Dalam dunia teknologi yang terus berubah, penting untuk membekali diri dengan prinsip-prinsip dasar dan kebiasaan yang positif. Artikel ini membahas lima tips utama yang bisa membantu Anda tumbuh sebagai developer profesional dan efektif.
        </p>

        <p className="text-gray-700 text-lg mb-4">
          Pertama, latih kemampuan berpikir logis dan algoritmis. Banyak masalah pemrograman sebenarnya bisa diselesaikan dengan pendekatan yang sistematis. Belajar struktur data dan algoritma bukan hanya untuk menghadapi wawancara kerja, tetapi juga membantu Anda membuat solusi yang lebih efisien dan elegan dalam kehidupan nyata. Jangan hanya menyalin kode — pahami mengapa solusi itu berhasil.
        </p>

        <p className="text-gray-700 text-lg mb-4">
          Kedua, terbiasa membaca dokumentasi dan open source. Dokumentasi adalah senjata utama seorang programmer. Banyak orang melewatkannya, padahal dengan membaca dokumentasi resmi, Anda bisa menghindari banyak kesalahan umum. Selain itu, mempelajari kode dari proyek open source bisa memberi wawasan tentang praktik terbaik dan struktur aplikasi nyata.
        </p>

        <p className="text-gray-700 text-lg">
          Ketiga, jaga komunikasi dalam tim. Skill komunikasi sering kali dianggap sepele, padahal sangat penting terutama dalam lingkungan kerja kolaboratif. Gunakan tools seperti Git secara benar, tulis commit message yang jelas, dan jangan takut bertanya atau memberi feedback. Terakhir, tetap rendah hati dan terus belajar. Dunia programming selalu berkembang, dan Anda harus siap beradaptasi.
        </p>

          <br/>

            <Link
               to="/news"
               onClick={() => window.scrollTo(0, 0)}
               className="inline-block mt-4 text-blue-600 hover:underline"
                >
                ← Kembali ke Menu News
            </Link>
          

      </div>
    </div>
  );
}

export default App;
