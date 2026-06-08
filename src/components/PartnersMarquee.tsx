const BASE = "/extra-images";

const partners = [
  { src: `${BASE}/flicker-01.jpg`, name: "Dept. of Basic Education", h: 96, maxW: 160 },
  { src: `/extra-images/sikatrix.webp`, name: "Sikatrix Accountants", h: 72, maxW: 160 },
  { src: `${BASE}/flicker-03.jpg`, name: "EC Dept. of Education", h: 96, maxW: 160 },
  { src: `${BASE}/flicker-04.jpg`, name: "UMALUSI", h: 96, maxW: 160 },
  { src: `${BASE}/flicker-05.jpg`, name: "Education South Africa", h: 96, maxW: 160 },
  { src: `${BASE}/flicker-06.jpg`, name: "W&RSETA", h: 96, maxW: 180 },
  { src: `${BASE}/flicker-07.jpg`, name: "Macmillan Education", h: 96, maxW: 180 },
];

// Double the array for seamless loop
const track = [...partners, ...partners];

export default function PartnersMarquee() {
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
          Our Partners &amp; Accreditations
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative flex overflow-hidden select-none">
        <div className="animate-partners flex items-center gap-2 will-change-transform">
          {track.map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ height: "80px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.name}
                style={{ height: `${p.h}px`, width: "auto", maxWidth: `${p.maxW}px`, objectFit: "contain" }}
                className="transition-all duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
