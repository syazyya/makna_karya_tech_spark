import React from 'react';
import Footer from '../components/Section/Footer';
import { Link } from 'react-router-dom';

export default function NewsPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen flex flex-col">
      {/* Konten Utama */}
      <div className="flex-grow py-10 text-gray-800 mr-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
          
          {/* Featured News */}
          <div className="flex-1 md:pr-6" data-aos="fade-up">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 pt-10">Featured News</h1>
            <img
              src="https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?q=80&w=1632&auto=format&fit=crop"
              alt="Featured"
              className="w-full rounded-lg shadow-md mb-6 object-cover"
            />
            <h2 className="text-lg md:text-2xl font-semibold mb-4">
              Makin Produktif, Ini Cara Kolaborasi Programmer dengan AI
            </h2>
            <hr className="border-gray-400 mb-6" />
            <p className="text-gray-800 mb-4 leading-relaxed">
               Indonesia bersiap meluncurkan AI Garuda, sebuah kecerdasan buatan yang diklaim memiliki kemampuan setara dengan ChatGPT. Proyek ini merupakan hasil kerja sama antara pemerintah, lembaga riset nasional, serta beberapa universitas teknologi terkemuka di dalam negeri.
            </p>
            <p className="text-gray-800 mb-4 leading-relaxed">
              Peluncuran ini menandai babak baru dalam transformasi digital nasional, serta membuka peluang kolaborasi yang lebih luas antara manusia dan mesin.
            </p>
            <p className="text-gray-800 mb-4 leading-relaxed">
              Dengan hadirnya AI Garuda, diharapkan sektor teknologi, pendidikan, dan industri kreatif dapat berkembang pesat dan menghasilkan solusi inovatif lokal.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Kolaborasi ini menunjukkan kesiapan Indonesia dalam menyambut era industri 5.0 yang berpusat pada sinergi antara manusia dan teknologi pintar.
            </p>
          </div>

          {/* Sidebar Recent News */}
          <div className="w-full md:w-[320px] lg:w-[360px] sticky top-24 self-start bg-white p-6 rounded-lg space-y-4 shadow" data-aos="fade-up">
            <h2 className="text-xl font-bold mb-4 pt-4">Recent News</h2>

            {/* Card 1 */}
            <div className="bg-white rounded-md shadow hover:shadow-lg overflow-hidden transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1374&auto=format&fit=crop"
                alt="AI Garuda"
                className="w-full h-28 object-cover"
              />
              <div className="p-3">
                <Link to="/berita1" className="text-blue-700 hover:underline text-sm font-medium block">
                  Indonesia siap merilis AI Garuda, setara ChatGPT
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-md shadow hover:shadow-lg overflow-hidden transition duration-300">
              <img
                src="https://dashboard.primakara.ac.id/uploads/full_stack_developer_adalah_28fc15e4c2.jpeg"
                alt="Front-End vs Back-End"
                className="w-full h-28 object-cover"
              />
              <div className="p-3">
                <Link to="/berita2" className="text-blue-700 hover:underline text-sm font-medium block">
                  Pertimbangan jadi ahli Front End, Back End, atau DevOps
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-md shadow hover:shadow-lg overflow-hidden transition duration-300">
              <img
                src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXduCXuk8FsWhPejbP6fyDndjFp1d5Is5iCBEeWID-QJiNZmwVXjFObqntTLYIZC66ne6sTnxYcMnhl95gTFU0PTExa4vy2_q3Qwrk7AcxfPAV3LVvY7GIvxO4miuowavruS8PBeYVASBEIcCw5CUd36jnJrIWUOxOu6eK2C3HjoXCh_SVwWYx8?key=pfiTtLfCK9oc95qD-hhoZg"
                alt="Tips Programmer"
                className="w-full h-28 object-cover"
              />
              <div className="p-3">
                <Link to="/berita3" className="text-blue-700 hover:underline text-sm font-medium block">
                  5 Tips untuk menjadi programmer yang lebih baik
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-md shadow hover:shadow-lg overflow-hidden transition duration-300">
              <img
                src="https://www.baker.edu/wp-content/uploads/how-to-become-a-game-developer.jpg"
                alt="Game Developer Indonesia"
                className="w-full h-28 object-cover"
              />
              <div className="p-3">
                <Link to="/berita4" className="text-blue-700 hover:underline text-sm font-medium block">
                  Game Developer asal Indonesia jadi finalis USA Game Award 2025
                </Link>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-md shadow hover:shadow-lg overflow-hidden transition duration-300">
              <img
                src="https://contentwriters.com/blog/wp-content/uploads/content-writer-750x500.jpg"
                alt="AI untuk Content Writer"
                className="w-full h-28 object-cover"
              />
              <div className="p-3">
                <Link to="/berita5" className="text-blue-700 hover:underline text-sm font-medium block">
                  Teknik Klarifikasi & Editing bagi Content Writer dengan AI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
