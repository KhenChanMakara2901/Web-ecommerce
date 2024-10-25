"use client";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  description: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Fashion Trends in 2024",
    author: "Jane Doe",
    date: "October 10, 2024",
    description:
      "Explore the latest fashion trends that are making waves in 2024, from bold patterns to minimalist designs.",
    imageUrl: "/images/fashion-trends-2024.jpg",
  },
  {
    id: 2,
    title: "Sustainable Fashion: The Future of Style",
    author: "John Smith",
    date: "October 5, 2024",
    description:
      "Discover how sustainable fashion is reshaping the industry and paving the way for a greener future.",
    imageUrl: "/images/sustainable-fashion.jpg",
  },
  // Add more blog posts
];

const BlogSection = () => {
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel"); // Manage the view mode state

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 15 },
  });

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Fashion Blog</h1>

      {/* Button to toggle between carousel and grid */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setViewMode("carousel")}
          className={`px-4 py-2 mx-2 rounded-lg font-semibold ${
            viewMode === "carousel"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          Carousel View
        </button>
        <button
          onClick={() => setViewMode("grid")}
          className={`px-4 py-2 mx-2 rounded-lg font-semibold ${
            viewMode === "grid"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          Grid View
        </button>
      </div>

      {/* Conditional rendering for carousel or grid view */}
      {viewMode === "carousel" ? (
        <div ref={sliderRef} className="keen-slider">
          {blogPosts.map((post) => (
            <div key={post.id} className="keen-slider__slide">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    By {post.author} on {post.date}
                  </p>
                  <p className="text-gray-700 mb-4">{post.description}</p>
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-600 mb-4">
                  By {post.author} on {post.date}
                </p>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogSection;
