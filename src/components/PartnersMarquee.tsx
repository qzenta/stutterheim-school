const BASE = "https://www.stutterheimschool.co.za/extra-images";

const partners = [
  { src: `${BASE}/flicker-01.jpg`, name: "Dept. of Basic Education" },
  { src: `${BASE}/flicker-02.jpg`, name: "Sikatrix Accountants" },
  { src: `${BASE}/flicker-03.jpg`, name: "EC Dept. of Education" },
  { src: `${BASE}/flicker-04.jpg`, name: "UMALUSI" },
  { src: `${BASE}/flicker-05.jpg`, name: "Education South Africa" },
  { src: `${BASE}/flicker-06.jpg`, name: "W&RSETA" },
  { src: `${BASE}/flicker-07.jpg`, name: "Macmillan Education" },
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
        <div className="animate-partners flex items-center gap-12 will-change-transform">
          {track.map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: "180px", height: "72px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.name}
                className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
