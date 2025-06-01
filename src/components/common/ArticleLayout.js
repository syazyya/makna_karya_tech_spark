import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ArticleLayout({ title, date, category, image, children }) {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        // Update time every second
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Simulate visitor count (increment every load)
        const count = localStorage.getItem('visitorCount');
        const updatedCount = count ? parseInt(count) + 1 : 1;
        localStorage.setItem('visitorCount', updatedCount);
        setVisitorCount(updatedCount);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (date) => date.toLocaleTimeString('id-ID', { hour12: false });
    const formatDate = (date) => date.toLocaleDateString('id-ID');

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <div className="flex-grow flex justify-center max-w-9xl px-4 py-10">
                <div className="bg-white text-gray-800 p-6 rounded-lg max-w-4xl w-full shadow-lg pt-10" data-aos="fade-up">
                    {/* Info Bar */}
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                        <span className="bg-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">{category}</span>
                        <div className="flex items-center gap-4">
                            <span>{date}</span>
                            <span>🕒 {formatTime(currentTime)}</span>
                            <span>👁️ {visitorCount.toLocaleString()} pengunjung</span>
                        </div>
                    </div>

                    {/* Gambar dan Judul */}
                    <img src={image} alt={title} className="w-full h-64 object-cover rounded-md mb-6" />
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>


                    <hr className="border-gray-200 mb-6" />
                    {/* Isi Konten */}
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                        {children}
                    </div>

                    {/* Back Link */}
                    <Link
                        to="/news"
                        onClick={() => window.scrollTo(0, 0)}
                        className="inline-block mt-8 text-blue-600 hover:underline"
                    >
                        ← Kembali ke Menu News
                    </Link>
                </div>
            </div>
        </div>
    );
}
