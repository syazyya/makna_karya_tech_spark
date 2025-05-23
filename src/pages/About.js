import React from 'react';
import aboutImage from '../assets/aboutus.svg';
import FarisPhoto from '../assets/Faris.jpg';
import RestuPhoto from '../assets/Restu.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 overflow-hidden">
      {/* Background dots pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#3B82F6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-pattern)" />
        </svg>
      </div>

      {/* Container utama */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid md:grid-cols-2 items-center gap-12 mb-16">
          <div data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About TechSpark</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Makna Karya Tech Spark adalah komunitas teknologi yang bertujuan membentuk talenta digital unggulan melalui pelatihan, mentoring, dan proyek nyata.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Kami percaya bahwa setiap individu punya potensi besar untuk bersinar di dunia teknologi – dengan bimbingan yang tepat dan lingkungan yang mendukung.
            </p>
          </div>
          <div className="text-center" data-aos="fade-up">
            <img src={aboutImage} alt="About us" className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md" />
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-4">Our Story</h3>
          <div className="space-y-4 text-gray-700 text-base leading-relaxed">
            <p>
              Setiap kemajuan peradaban ditandai dengan kemajuan teknologi. Di era digital ini, teknologi informasi telah menjadi tulang punggung berbagai aspek kehidupan — mulai dari komunikasi, transportasi, hingga perdagangan.
            </p>
            <p>
              Indonesia menghadapi tantangan unik: banyak perusahaan membutuhkan pengembang perangkat lunak, namun banyak individu yang antusias tidak memiliki latar belakang formal.
            </p>
            <p>
              MKTS hadir sebagai jembatan antara semangat belajar dan kebutuhan industri. Kami membekali peserta dengan pelatihan praktis dan pengalaman nyata.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic">
              “Menjadi bagian dari perubahan yang lebih baik dengan fokus pada solusi — dimulai dari memahami akar masalah.”
            </blockquote>
            <p>
              Kami percaya bahwa teknologi informasi bukan sekadar tren, tetapi alat untuk menyelesaikan persoalan nyata di masyarakat.
            </p>
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-4">Meet Our Team</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Tim MKTS adalah individu passionate yang bersatu membangun ekosistem edukasi teknologi yang menyenangkan, relevan, dan berdampak.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Kami percaya bahwa perubahan dimulai dari edukasi. Melalui program pelatihan dan mentoring, kami membentuk talenta digital yang siap kerja dan berkontribusi.
          </p>
        </div>

        {/* Our Leaders */}
        <div className="mb-8" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-6">Our Leaders</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md">
              <img src={FarisPhoto} alt="Faris Sundara Putra" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
              <h4 className="font-bold text-lg">Faris Sundara Putra</h4>
              <p className="text-blue-500 mb-2">Co-Founder & CMO</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Aktif dalam membangun ekosistem bisnis. Ahli bisnis model dan customer acquisition. Memilih teknologi untuk memberi manfaat dan impact nyata.
              </p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md">
              <img src={RestuPhoto} alt="Restu Arif Priyono" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
              <h4 className="font-bold text-lg">Restu Arif Priyono</h4>
              <p className="text-blue-500 mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Latar belakang TI dan manajemen bisnis. Fokus pada solusi teknologi dan kontribusi terhadap kemajuan masyarakat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
