import React, { useState } from 'react';
import aboutImage from '../assets/aboutus.svg';
import FarisPhoto from '../assets/Faris.jpg';
import RestuPhoto from '../assets/Restu.jpg';
import Footer from '../components/Section/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const leaders = [
    {
      id: 1,
      name: "Faris Sundara Putra",
      role: "Co-Founder & CMO",
      bio: "Aktif dalam membangun ekosistem bisnis. Ahli bisnis model dan customer acquisition. Memilih teknologi untuk memberi manfaat dan impact nyata.",
      photo: FarisPhoto,
      details: "Lebih dari 10 tahun pengalaman di bidang teknologi dan bisnis. Pendiri beberapa startup sukses dan aktif sebagai mentor di berbagai program akselerator bisnis. Berpengalaman dalam membangun strategi pemasaran digital dan pertumbuhan bisnis berbasis teknologi.",
      achievements: [

      ]
    },
    {
      id: 2,
      name: "Restu Arif Priyono",
      role: "Founder & CEO",
      bio: "Latar belakang TI dan manajemen bisnis. Fokus pada solusi teknologi dan kontribusi terhadap kemajuan masyarakat.",
      photo: RestuPhoto,
      details: "Seorang tech enthusiast yang memiliki latar belakang pendidikan teknik informatika dan manajemen bisnis. Tertarik dalam pengembangan produk berbasis teknologi yang berorientasi pada solusi. Melihat kemajuan peradaban di masa depan terletak pada kemajuan teknologi.",
      achievements: [

      ]
    }
  ];

  const openModal = (leader) => {
    setSelectedLeader(leader);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLeader(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LDEzMCwyNDYsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')]"></div>
      </div>

      {/* Main content */}
      <main className="flex-grow relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="grid md:grid-cols-2 items-center gap-12 mb-16" data-aos="fade-up">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About TechSpark</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Makna Karya Tech Spark adalah komunitas teknologi yang bertujuan membentuk talenta digital unggulan melalui pelatihan, mentoring, dan proyek nyata.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kami percaya bahwa setiap individu punya potensi besar untuk bersinar di dunia teknologi – dengan bimbingan yang tepat dan lingkungan yang mendukung.
              </p>
            </div>
            <div className="text-center">
              <img
                src={aboutImage}
                alt="About TechSpark"
                className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md"
                data-aos="fade-left"
              />
            </div>
          </div>

          {/* Our Story */}
          <div className="mb-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100" data-aos="fade-up">
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Setiap kemajuan peradaban ditandai dengan kemajuan teknologi. Di era digital ini, teknologi informasi telah menjadi tulang punggung berbagai aspek kehidupan.
              </p>
              <p>
                Indonesia menghadapi tantangan unik: banyak perusahaan membutuhkan pengembang perangkat lunak, namun banyak individu yang antusias tidak memiliki latar belakang formal.
              </p>
              <p>
                MKTS hadir sebagai jembatan antara semangat belajar dan kebutuhan industri. Kami membekali peserta dengan pelatihan praktis dan pengalaman nyata.
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic bg-blue-50/50 p-2 rounded-r">
                "Menjadi bagian dari perubahan yang lebih baik dengan fokus pada solusi — dimulai dari memahami akar masalah."
              </blockquote>
            </div>
          </div>

          {/* Meet Our Team */}
          <div className="mb-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100" data-aos="fade-up">
            <h3 className="text-2xl font-bold mb-4">Meet Our Team</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Tim MKTS adalah individu passionate yang bersatu membangun ekosistem edukasi teknologi yang menyenangkan, relevan, dan berdampak.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Kami percaya bahwa perubahan dimulai dari edukasi. Melalui program pelatihan dan mentoring, kami membentuk talenta digital yang siap kerja dan berkontribusi.
            </p>
          </div>

          {/* Our Leaders */}
          <div className="mb-16" data-aos="fade-up">
            <h3 className="text-2xl font-bold mb-6">Our Leaders</h3>
            <div className="grid gap-8 md:grid-cols-2">
              {leaders.map((leader) => (
                <div
                  key={leader.id}
                  onClick={() => openModal(leader)}
                  className="text-center bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                  />
                  <h4 className="font-bold text-lg text-gray-800">{leader.name}</h4>
                  <p className="text-blue-600 mb-2 font-medium">{leader.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Leader Modal */}
      {isModalOpen && selectedLeader && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-800">{selectedLeader.name}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={selectedLeader.photo}
                    alt={selectedLeader.name}
                    className="w-40 h-40 rounded-full object-cover border-4 border-blue-100 mx-auto"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-blue-600 font-medium text-lg">{selectedLeader.role}</p>
                  <p className="text-gray-700">{selectedLeader.bio}</p>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-800">Detailed Profile</h4>
                    <p className="text-gray-600">{selectedLeader.details}</p>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}