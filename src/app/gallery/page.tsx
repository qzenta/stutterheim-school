import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Stutterheim International School",
  description: "Photos from events, activities, and life at Stutterheim International School.",
};

// Add image entries here when the school sends through photos
// { src: "/gallery/event-name.jpg", alt: "Description", category: "Sports" }
const images: { src: string; alt: string; category: string }[] = [];

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-[#111480] mb-2">Gallery</h1>
      <div className="w-16 h-1 bg-[#FFD000] rounded mb-8" />

      {images.length === 0 ? (
        <div className="text-center py-24 text-gray-400">
          <p className="text-lg">Photos coming soon.</p>
          <p className="text-sm mt-2">Check back after the next school event.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className="w-full aspect-square object-cover rounded-lg shadow-sm"
            />
          ))}
        </div>
      )}
    </div>
  );
}
