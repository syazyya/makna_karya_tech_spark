import React from 'react';
import joinus from '../../assets/join.svg';
import { join } from 'lodash';

export default function JoinUsForm({ navHeight = 0 }) {
  return (
    <section
      id="join"
      className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50"
      style={{ minHeight: navHeight ? `calc(100vh - ${navHeight}px)` : '100vh' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 overflow-hidden -z-0">

      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left Column - Form */}
          <div
            className="bg-white rounded-xl shadow-xl overflow-hidden"
            data-aos="fade-right"
          >
            {/* Form header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Bergabung Bersama Kami
              </h1>
              <p className="text-blue-100 mt-2">
                Siap berkembang di dunia teknologi? Daftar sekarang!
              </p>
            </div>

            {/* Form body */}
            <form
              action="https://formsubmit.co/suratmaknakarya@gmail.com"
              method="POST"
              className="p-6 sm:p-8 space-y-5"
            >


              {/* Name field */}
              <div className="space-y-1">
                <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              {/* Email field */}
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="contoh@email.com"
                />
              </div>

              {/* Phone field */}
              <div className="space-y-1">
                <label htmlFor="telepon" className="block text-sm font-medium text-gray-700">
                  Nomor WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="telepon"
                  name="telepon"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="0812-3456-7890"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="alasan" className="block text-sm font-medium text-gray-700">
                  Alasan Ingin Bergabung <span className="text-red-500">*</span>
                </label>
                <textarea
                  type="alasan"
                  id="alasan"
                  name="alasan"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              {/* Submit button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Kirim Pendaftaran
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center pt-2">
                Data Anda aman bersama kami
              </p>
            </form>
          </div>

          {/* Right Column - Illustration */}
          <div className="hidden lg:block" data-aos="fade-left">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

              {/* Illustration SVG */}
              <div className="relative" data-aos="fade-up">
                <img
                  src={joinus}
                  alt="Workshop Illustration"
                  loading="lazy"
                  className="relative w-full max-w-lg mx-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile contact info */}
        <div className="mt-8 text-center lg:hidden">
          <p className="text-gray-600">
            Butuh bantuan? <a href="mailto:info@techspark.com" className="text-blue-600 hover:underline">Hubungi kami</a>
          </p>
        </div>
      </div>


    </section>
  );
}