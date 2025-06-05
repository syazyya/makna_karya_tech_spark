import React, { useState } from 'react';
import joinus from '../../assets/join.svg';
import { join } from 'lodash';

const FormGabung = ({ navHeight = 0 }) => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    nomor: '',
    alasan: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nama, email, nomor, alasan } = formData;
    const subject = encodeURIComponent("Form Bergabung");
    const body = encodeURIComponent(
      `Nama: ${nama}\nEmail: ${email}\nNomor: ${nomor}\nAlasan Ingin Bergabung: ${alasan}`
    );

    window.location.href = `mailto:suratmaknakarya@gmail.com?subject=${subject}&body=${body}`;

    setFormData({ nama: '', email: '', nomor: '', alasan: '' });
  };

  return (
    <section
      id="join"
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50"
      style={{ minHeight: navHeight ? `calc(100vh - ${navHeight}px)` : '100vh' }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-center py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-5xl">
          {/* Form Section */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden mx-2 sm:mx-0 mr-6" data-aos="fade-right">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-white">Bergabung Bersama Kami</h1>
              <p className="text-blue-100 mt-2">
                <i>Siap berkembang di dunia teknologi? Daftar sekarang dan jadi bagian dari gerakan digital!</i>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-8 space-y-5">
              {/* Nama */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="contoh@email.com"
                />
              </div>

              {/* Nomor */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Nomor WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="nomor"
                  value={formData.nomor}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="0812-3456-7890"
                />
              </div>

              {/* Alasan */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Alasan Ingin Bergabung <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="alasan"
                  value={formData.alasan}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none h-28"
                  placeholder="Tulis alasan Anda di sini..."
                ></textarea>
              </div>

              {/* Tombol */}
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

          {/* Ilustrasi */}
          <div className="hidden lg:block" data-aos="fade-left">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative" data-aos="fade-up">
                {/* Tambahkan ilustrasi di sini jika ada */}
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
      </div>
    </section>
  );
};

export default FormGabung;
