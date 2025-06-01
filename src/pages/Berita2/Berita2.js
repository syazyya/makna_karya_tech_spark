import React from 'react';
import Footer from '../../components/Section/Footer';
import ArticleLayout from '../../components/common/ArticleLayout';

export default function Berita2() {
  return (
    <>
      <ArticleLayout
        title="Pertimbangan Jadi Ahli Front End, Back End, atau DevOps"
        date="2 Juni 2025"
        category="Karier Teknologi"
        image="https://dashboard.primakara.ac.id/uploads/full_stack_developer_adalah_28fc15e4c2.jpeg"
      >
        <p>
          Dalam dunia pengembangan perangkat lunak, peran seperti <strong>Front End</strong>, <strong>Back End</strong>, dan <strong>DevOps</strong> sering kali menjadi pilihan karier utama. Namun, bagaimana cara memilih yang tepat?
        </p>
        <p>
          Front End berfokus pada antarmuka pengguna, sedangkan Back End mengatur logika bisnis dan database. DevOps, di sisi lain, menjembatani pengembangan dan operasional dengan otomasi dan integrasi berkelanjutan.
        </p>
        <p>
          Pertimbangkan minat, gaya kerja, serta kebutuhan pasar sebelum memilih jalur karier Anda. Semua peran ini saling melengkapi dalam ekosistem teknologi modern.
        </p>
      </ArticleLayout>

      <Footer />
    </>
  );
}
