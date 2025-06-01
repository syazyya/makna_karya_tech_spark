import React from 'react';
import workshop from '../../assets/workshop.svg';
import program from '../../assets/program.svg';

// Komponen Reusable - FeatureCard
const FeatureCard = ({ icon, title, desc, colorClass, delay }) => (
  <div
    className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-transparent"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className={`${colorClass} w-14 h-14 rounded-lg flex items-center justify-center mb-6`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

// Komponen Reusable - SectionHeader
const SectionHeader = ({ subtitle, title, align = 'center' }) => (
  <div className={`pt-10 text-${align}`}>
    {subtitle && (
      <p className="uppercase text-sm font-medium text-gray-500 tracking-widest mb-3">
        {subtitle}
      </p>
    )}
    <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">{title}</h2>
  </div>
);

export default function Hero({ navHeight = 0 }) {
  // Data untuk fitur-fitur
  const features = [
    {
      title: 'Upgrade Tech Skills',
      desc: 'Mempelajari pengetahuan dan kemampuan menggunakan teknologi, bahkan turut serta dalam inovasinya.',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      colorClass: 'bg-blue-100',
      delay: 0
    },
    {
      title: 'Developing Network',
      desc: 'Bertemu dengan mereka yang memiliki passion sama; temukan partner kerja atau perusahaan idaman.',
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      colorClass: 'bg-indigo-100',
      delay: 100
    },
    {
      title: 'Industry Ready',
      desc: 'Mempelajari materi pengembangan software yang sesuai dengan kebutuhan industri teknologi terkini.',
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      colorClass: 'bg-purple-100',
      delay: 200
    }
  ];

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-50 to-indigo-50"
      style={{ paddingTop: navHeight ? `${navHeight}px` : '10px' }}
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Flex Layout */}
        <div className="flex flex-col lg:flex-row items-center pt-12 md:pt-20 gap-12">
          {/* Content */}
          <div className="flex-1 space-y-6" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl pt-3 font-bold text-gray-900 leading-tight">
              <span className="block">Mulai</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Ciptakan Karya
              </span>
              <span className="block">dan Beri Makna</span>
            </h1>

            <div className="flex items-center space-x-2">
              <div className="h-1 w-8 bg-blue-500 rounded-full"></div>
              <p className="text-xl text-gray-700 font-medium">
                #do<span className="text-blue-600">IT</span>smart
              </p>
            </div>

            <p className="text-lg text-gray-600 max-w-lg">
              Temukan potensi terbaikmu di dunia digital bersama Makna Karya Tech Spark.
              Kami memiliki visi untuk membentuk masyarakat sadar teknologi melalui
              program edukasi programming berkualitas.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#join"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              > 
                Join Us
              </a>
              <a
                href="#media"
                className="px-8 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative" data-aos="fade-up" data-aos-delay="100">
            
            <img
              src={workshop}
              alt="Workshop Illustration"
              loading="lazy"
              className="relative w-full max-w-lg mx-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Why TechSpark Section - Flex Layout */}
        <div className="mt-20 flex flex-col md:flex-row gap-8 items-start" data-aos="fade-up">
          <div className="flex-1">
            <SectionHeader
              subtitle="All New Institute"
              title="Why TechSpark"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-transparent">
            <p className="text-gray-700 leading-relaxed">
              Menjadi pemrogram yang andal, bukan hanya membutuhkan keberuntungan dan waktu singkat/instan.
              Melainkan membutuhkan attitude yang mengedepankan kerja keras dan terus mau belajar.
              TechSpark meramu materi ajar dan mendidik attitude yang bisa menghasilkan pemrogram yang siap menghadapi kebutuhan industri saat ini dan terus belajar.
            </p>
          </div>
        </div>

        {/* Features Grid - Still using grid for better alignment */}
        <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* TechSpark Program Section - Flex Layout */}
        <div className="mt-16 relative py-10" data-aos="fade-up">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Left Column - Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0" data-aos="fade-right">
              <img
                src={program}
                alt="Ilustrasi Program TechSpark"
                className="w-full max-w-xs sm:max-w-md lg:max-w-none"
              />
            </div>

            {/* Right Column - Content */}
            <div className="w-full lg:w-1/2 rounded-xl p-6 sm:p-12 bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-transparent" data-aos="fade-left">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                TechSpark Program
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Memandirikan diri dan membangun attitude untuk terus belajar. Pendampingan dan ramuan
                kurikulum yang tepat dari TechSpark, dapat membuat proses belajar efektif dan efisien.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Kurikulum berbasis industri terkini</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Pembelajaran personalisasi sesuai kebutuhan</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Mentor berpengalaman di bidangnya</span>
                </li>
              </ul>

              <a
                href="#program"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Selengkapnya
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Hiring Network & Partners Section - Flex Layout */}
        <div className="flex flex-col lg:flex-row rounded-xl shadow-lg overflow-hidden bg-white mt-16" data-aos="fade-up">
          {/* Kolom Kiri (Hiring Network - 60%) */}
          <div className="w-full lg:w-[60%] relative p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
            {/* Tech Pattern Background */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h10v10H0V0zm20 20h10v10H20V20zm-20 20h10v10H0V40zm20 0h10v10H20V40z' fill='%234f46e5' fill-opacity='0.6' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}
            />

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-start mb-8">
                <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="uppercase text-sm text-blue-300 mb-2 tracking-wider">Jaringan Karir</p>
                  <h3 className="text-3xl md:text-4xl font-bold">Hiring Network</h3>
                </div>
              </div>

              <p className="text-lg text-blue-100 leading-relaxed mb-8 flex-grow">
                Techlab membangun jaringan bekerja sama dengan perusahaan-perusahaan teknologi, berkolaborasi dan menerima alumni Techlab. Mari bekerjasama menemukan talent enginer terbaik bagi perusahaan, dan temukan pengalaman bekerja di perusahaan yang menjadi idaman Anda dengan bergabung dengan Techlab program.
                <span className="block mt-4 text-white/90">
                  "TechSpark membantu kami menemukan talenta teknis berkualitas tinggi."
                  <span className="block text-sm mt-2 text-blue-300">- CTO Prelo</span>
                </span>
              </p>

              <div className="flex flex-wrap gap-4 mt-auto">
                <a
                  href="#hiring"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium flex items-center"
                >
                  Lihat Selengkapnya
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Kolom Kanan (Partner - 40%) */}
          <div className="w-full lg:w-[40%] bg-gray-50 p-6 sm:p-10 lg:p-14 border-t lg:border-t-0 lg:border-l border-gray-200">
            <h4 className="text-2xl font-semibold text-gray-900 mb-6">Collaborating Network</h4>
            <p className="text-gray-700 mb-6">
              Techlab berkolaborasi dengan rekan-rekan industri teknologi yang aktif memecahkan solusi dari masalah yang ada saat ini. Alumni Techlab berkesempatan untuk bergabung bersama hiring partner kami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}