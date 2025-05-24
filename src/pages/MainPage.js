import React from 'react';
import Hero from '../components/Section/Hero';
import Media from '../components/Section/Media';
import JoinUsForm from '../components/Section/JoinUsForm';
import Footer from '../components/Section/Footer';

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      <section id="media">
        <Media />
      </section>

      <section id="join">
        <JoinUsForm />
      </section>

      {/* Main Content */}
      {/* <main className="flex-grow">
        <section id="media" className="py-20">
          <Media />
        </section>

        <section id="join" className="py-20 bg-gray-50">
          <JoinUsForm />
        </section>
      </main> */}

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}