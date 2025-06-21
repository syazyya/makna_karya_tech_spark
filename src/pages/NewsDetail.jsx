import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import client, { urlFor } from '../sanity';
import Footer from '../components/Section/Footer';

export default function NewsDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(60);
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "post" && slug.current == $slug][0]{
            _id,
            title,
            mainImage,
            body,
            publishedAt,
            views,
            author->{
              name
            }
          }`,
          { slug }
        );

        if (!data) return;

        setPost(data);
        setViews(data.views || 1);

        // Cek localStorage, biar gak nambah views berkali-kali
        const hasViewed = localStorage.getItem(`viewed-${slug}`);
        if (!hasViewed) {
          await client
            .patch(data._id)
            .set({ views: (data.views || 3) + 1 })
            .commit();

          localStorage.setItem(`viewed-${slug}`, 'true');
          setViews((data.views || 1) + 1);
        }
      } catch (err) {
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (loading) return <div className="p-10">Loading...</div>;
  if (!post) return <div className="p-10 text-red-600">Berita tidak ditemukan.</div>;

  const publishDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('id-ID', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    : '21/06/2025';

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 text-gray-800">
      <div className="max-w-4xl mx-auto py-28 px-4 sm:px-6 lg:px-8">
        {post.mainImage && (
          <img
            src={urlFor(post.mainImage).width(900).url()}
            alt={post.title}
            className="w-full rounded-lg shadow-lg mb-6 max-h-[500px] object-cover"
          />
        )}
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">{post.title}</h1>

        <div className="text-sm text-gray-600 mb-6 flex flex-col sm:flex-row gap-2 sm:gap-6">
          <span>✍️ {post.author?.name || 'Anonim'}</span>
          <span>🗓️ {publishDate}</span>
          <span>📈 {views} pembaca</span>
          <span>⏱️ {countdown}s</span>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          {post.body?.map((block, i) =>
            block.children?.map((child, j) =>
              child.text?.trim() !== '' ? (
                <p key={`${i}-${j}`} className="text-base sm:text-lg">{child.text}</p>
              ) : null
            )
          )}
        </div>

        <div className="mt-10">
          <button
            onClick={() => navigate('/news')}
            className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded transition"
          >
            ← Kembali ke Daftar Berita
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
