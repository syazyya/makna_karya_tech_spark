import React from 'react';

export default function Media() {
    // Data contoh media (6 item)
    const mediaItems = [
        {
            id: 1,
            type: 'gallery',
            title: 'Diskusi Tim',
            description: 'Di Makna Karya Tech Spark, kolaborasi adalah kunci. Kami mendorong peserta untuk aktif berdiskusi, bertukar ide, dan menyusun solusi secara tim.',
            url: '#',
            thumbnail: 'media/diskusi.png',
            date: '15 Maret 2025'
        },
        {
            id: 2,
            type: 'gallery',
            title: 'Presentasi / Pitching Project',
            description: 'Kami percaya bahwa kemampuan komunikasi teknis sama pentingnya dengan kemampuan teknis itu sendiri.',
            url: '#',
            thumbnail: 'media/presentasi.png',
            date: '28 April 2025'
        },
        {
            id: 3,
            type: 'gallery',
            title: 'Ngoding Bareng',
            description: 'Suasana ngoding bareng jadi salah satu rutinitas seru di MKTS. ',
            url: '#',
            thumbnail: 'media/ngoding.png',
            date: '30 April 2025'
        },
        {
            id: 4,
            type: 'gallery',
            title: 'Foto Bareng Tim MKTS',
            description: 'Makna Karya Tech Spark bukan hanya tempat belajar, tapi juga tempat tumbuh bersama.',
            url: '#',
            thumbnail: 'media/fotobrg.png',
            date: '5 Mei 2025'
        },
        {
            id: 5,
            type: 'gallery',
            title: 'Hands-on Workshop',
            description: 'Belajar di MKTS bersifat praktikal dan aplikatif. Dalam setiap workshop, peserta diajak memahami alur kerja nyata seorang developer – mulai dari merancang solusi, mengimplementasikan teknologi, hingga menguji hasilnya. ',
            url: '#',
            thumbnail: 'media/hands.png',
            date: '21 Mei 2025'
        },
        {
            id: 6,
            type: 'gallery',
            title: 'Workshop UI/UX Design',
            description: 'Dokumentasi kompetisi coding',
            url: '#',
            thumbnail: '/media/uiux.jpg',
            date: '23 Mei 2025'
        }
    ];

    return (
        <section id="media" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        <span className="text-blue-600">TechSpark</span> Media
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Dokumentasi kegiatan dan konten edukasi teknologi kami
                    </p>
                </div>

                {/* Grid 3x2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
                    {mediaItems.map((item) => (
                        <MediaCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Komponen MediaCard yang dipisah
function MediaCard({ item }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 h-full flex flex-col">
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />

                {/* Video Badge */}
                {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-blue-600/80 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                            <svg className="w-6 h-6 text-white ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                )}
                {/* Type Badge */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <span className="inline-block px-2 py-1 text-xs font-medium text-white bg-blue-600 rounded">
                        {item.type === 'video' ? 'Video' :
                            item.type === 'article' ? 'Artikel' : 'Galeri'}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {item.date}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    <a href={item.url} className="hover:text-blue-600 transition-colors">
                        {item.title}
                    </a>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {item.description}
                </p>

               
    
            </div>
        </div>
    );
}