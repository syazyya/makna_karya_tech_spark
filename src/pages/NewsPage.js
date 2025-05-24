import React from 'react';

export default function NewsPage() {
  return (
    
    <div className="bg-gray-100 text-gray-800 p-6 rounded-lg max-w-4xl mx-auto mt-10">
 
        <div className="flex flex-col md:flex-row gap-8">
        {/* Kolom Gambar */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">FEATURED NEWS</h1>
          <img
            src="https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Featured"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Kolom Konten */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">
            Makin Produktif, Ini Cara Kolaborasi Programmer dengan AI
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Indonesia bersiap meluncurkan AI Garuda, sebuah kecerdasan buatan yang diklaim memiliki kemampuan setara dengan ChatGPT. Proyek ini merupakan hasil kerja sama antara pemerintah, lembaga riset nasional, serta beberapa universitas teknologi terkemuka di dalam negeri.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Peluncuran ini menandai babak baru dalam transformasi digital nasional, serta membuka peluang kolaborasi yang lebih luas antara manusia dan mesin.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Dengan hadirnya AI Garuda, diharapkan sektor teknologi, pendidikan, dan industri kreatif dapat berkembang pesat dan menghasilkan solusi inovatif lokal.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Kolaborasi ini juga menunjukkan kesiapan Indonesia dalam menyambut era industri 5.0 yang berpusat pada sinergi antara manusia dan teknologi pintar.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Kolaborasi ini juga menunjukkan kesiapan Indonesia dalam menyambut era industri 5.0 yang berpusat pada sinergi antara manusia dan teknologi pintar.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Kolaborasi ini juga menunjukkan kesiapan Indonesia dalam menyambut era industri 5.0 yang berpusat pada sinergi antara manusia dan teknologi pintar.
          </p>

          <Link
              to="/news"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              ← Kembali ke Menu News
            </Link>

        </div>

        {/* Kolom News Terkini */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4">RECENT NEWS</h3>
          <ul className="list-disc list-inside text-blue-700 space-y-2">
            <li>
              <Link to="/berita1" className="hover:underline"
                     onClick={() => window.scrollTo(0, 0)}         
                >
                1. Indonesia siap merilis AI Garuda, Setara ChatGPT
              </Link>
            </li>
            <li>
              <Link to="/berita2" className="hover:underline"
                   onClick={() => window.scrollTo(0, 0)}>
                2. Pertimbangan jadi ahli Front End, Back End, atau DevOPS?
              </Link>
            </li>
            <li>
              <Link to="/berita3" className="hover:underline"
                   onClick={() => window.scrollTo(0, 0)}>
                3. 5 Tips untuk menjadi Programmer yang lebih baik
              </Link>
            </li>
            <li>
              <Link to="/berita4" className="hover:underline"
                   onClick={() => window.scrollTo(0, 0)}     >
                4. Game Developer asal Indonesia jadi Finalis USA Game Award 2025
              </Link>
            </li>
            <li>
              <Link to="/berita5" className="hover:underline"
                   onClick={() => window.scrollTo(0, 0)}
                >
                5. Klarifikasi, Elaborasi, dan Editing: Teknik bagi Content Writer yang Menggunakan AI
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
