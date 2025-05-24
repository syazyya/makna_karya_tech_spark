import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../../components/Section/Footer'; // Import your Footer component

function App() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-100 flex flex-col"> {/* Main flex container */}
=======
    <div className="bg-gray-100 text-gray-800 p-6 rounded-lg max-w-4xl mx-auto mt-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <img 
          src=""https://www.baker.edu/wp-content/uploads/how-to-become-a-game-developer.jpg" 
          alt="Game Developer Indonesia" 
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          Game Developer asal Indonesia Jadi Finalis USA Game Award 2025
        </h1>
        
        <p className="text-lg leading-relaxed mb-4">
          Sebuah prestasi membanggakan kembali ditorehkan oleh anak bangsa di kancah internasional. Sebuah studio game indie asal Bandung, Indonesia, bernama <strong>PixelPlay Studio</strong>, resmi diumumkan sebagai salah satu finalis dalam ajang bergengsi <em>USA Game Award 2025</em>. Penghargaan ini merupakan salah satu ajang paling prestisius di industri game global yang mempertemukan talenta-talenta terbaik dari berbagai belahan dunia.
        </p>
>>>>>>> b9de4e2cc6238802e3650529a347a9e964e1a606

      {/* Content area with flex-grow */}
      <div className="flex-grow py-10 px-4" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 pt-12">
            <img
              src="https://www.baker.edu/wp-content/uploads/how-to-become-a-game-developer.jpg"
              alt="Game Developer Indonesia"
              className="w-full h-64 object-cover rounded-md mb-6"
            />
            <h1 className="text-3xl font-bold text-blue-700 mb-4">
              Game Developer asal Indonesia Jadi Finalis USA Game Award 2025
            </h1>

            <p className="text-lg leading-relaxed mb-4">
              Sebuah prestasi membanggakan kembali ditorehkan oleh anak bangsa di kancah internasional. Sebuah studio game indie asal Bandung, Indonesia, bernama <strong>PixelPlay Studio</strong>, resmi diumumkan sebagai salah satu finalis dalam ajang bergengsi <em>USA Game Award 2025</em>. Penghargaan ini merupakan salah satu ajang paling prestisius di industri game global yang mempertemukan talenta-talenta terbaik dari berbagai belahan dunia.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Game buatan mereka yang berjudul <em>"Eclipse of Nusantara"</em> berhasil menarik perhatian dewan juri karena memadukan elemen budaya Indonesia dengan gameplay modern berbasis RPG strategi. Tak hanya itu, grafis dan musik latar yang kental dengan nuansa lokal juga menjadi daya tarik tersendiri. PixelPlay Studio menjadi satu-satunya wakil Asia Tenggara yang lolos sebagai finalis tahun ini, bersanding dengan developer dari Amerika Serikat, Kanada, dan Eropa.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Menurut CEO PixelPlay, Dimas Arya, perjalanan menuju panggung internasional ini tidak mudah. "Kami memulai dari tim kecil dengan dana terbatas. Tapi semangat untuk memperkenalkan budaya Indonesia ke dunia melalui game membuat kami tidak menyerah," ujarnya. Dimas juga menambahkan bahwa nominasi ini menjadi motivasi besar bagi timnya untuk terus berkarya dan berinovasi.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Final USA Game Award 2025 dijadwalkan berlangsung pada bulan September mendatang di San Francisco. Para finalis akan mempresentasikan karya mereka di depan panel juri serta pengunjung dari seluruh dunia. PixelPlay Studio berharap pencapaian ini bisa membuka lebih banyak peluang kolaborasi internasional dan membawa nama Indonesia semakin dikenal dalam dunia pengembangan game global.
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
      </div>

      {/* Footer will now stick to the bottom */}
      <Footer />
    </div>
  );
}

export default App;