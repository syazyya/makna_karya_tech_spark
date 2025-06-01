import React from 'react';
import Footer from '../../components/Section/Footer';
import ArticleLayout from '../../components/common/ArticleLayout';

export default function Berita1() {
  return (
    <>
      <ArticleLayout
        title="Indonesia Siap Rilis AI Garuda, Penantang ChatGPT"
        date="1 Juni 2025"
        category="Teknologi AI"
        image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1374&auto=format&fit=crop"
      >
        <p>
          Indonesia bersiap meluncurkan <strong>AI Garuda</strong>, sebuah kecerdasan buatan yang diklaim memiliki kemampuan setara dengan ChatGPT.Proyek ini merupakan hasil kerja sama antara pemerintah, lembaga riset nasional, serta beberapa universitas teknologi terkemuka di dalam negeri.
        </p>
        <p>
          Pemerintah menyatakan bahwa AI Garuda adalah bagian dari strategi besar untuk mencapai <em>kedaulatan digital,</em> Dengan memanfaatkan data dan bahasa lokal, AI ini diharapkan bisa menjadi solusi cerdas yang relevan dan aman bagi masyarakat Indonesia.
        </p>
        <p>
          Salah satu keunggulan utama dari AI Garuda adalah kemampuannya memahami konteks budaya Indonesia, termasuk variasi bahasa daerah. Ini memberi keunggulan dalam aplikasi pendidikan, layanan pemerintahan, dan bahkan sektor hukum serta UMKM.
        </p>
        <p>
          Peluncuran versi beta AI Garuda dijadwalkan pada kuartal ketiga tahun ini. Masyarakat dapat mencoba langsung teknologi ini secara gratis melalui platform daring yang akan segera diumumkan. Harapannya, AI Garuda dapat membuka jalan bagi Indonesia sebagai pemain utama di bidang AI global.
        </p>
      </ArticleLayout>

      <Footer />
    </>
  );
}
