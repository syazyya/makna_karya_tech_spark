import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import client, { urlFor } from '../sanity';
import Footer from '../components/Section/Footer';

export default function NewsPage() {
  const [posts, setPosts] = useState([]);
  const [fadeIn, setFadeIn] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setFadeIn(true), 20);
  return () => clearTimeout(timer);
}, []);

  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await client.fetch(`*[_type == "post"] | order(_createdAt desc){
          _id,
          title,
          mainImage,
          body,
          slug
        }`);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div className="text-gray-700 p-10">Loading...</div>;
  if (!posts.length) return <div className="text-gray-700 p-10">No news available</div>;

  const featured = posts[0];
  const recent = posts.slice(1, 6);
  

  return (
   <div
  className={`flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-300 text-gray-800 transition-all duration-700 ease-out
    ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
>
      <div className="flex-grow pt-24 px-1 sm:px-2 lg:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Featured News */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-6">Featured News</h1>
            {featured.mainImage && (
              <img
                src={urlFor(featured.mainImage).width(800).url()}
                alt={featured.title}
                className="w-full rounded-lg shadow mb-6 max-h-[400px] object-cover"
              />
            )}
            <h2 className="text-2xl font-semibold mb-4">{featured.title}</h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              {featured.body?.map((block, i) =>
                block.children?.map((child, j) => <p key={`${i}-${j}`}>{child.text}</p>)
              )}
            </div>
          </div>

          {/* Recent News */}
          <div className="bg-darkgray/200 p-6 rounded-lg space-y-4 h-fit sticky top-35 shadow-md">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Recent News</h2>
            {recent.map((item) => (
              <Link
                to={`/news/${item.slug?.current || item._id}`}
                key={item._id}
                className="group block rounded-md bg-white shadow hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  {item.mainImage && (
                    <img
                      src={urlFor(item.mainImage).width(400).url()}
                      alt={item.title}
                      className="w-full h-28 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-3">
                  <h3 className="text-blue-900 group-hover:text-blue-600 text-sm font-semibold ">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs mt-1 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {item.body?.[0]?.children?.[0]?.text?.slice(0, 90)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
