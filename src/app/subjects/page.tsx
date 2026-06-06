import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subjects | Stutterheim International School",
  description: "Explore the 20+ subjects offered at Stutterheim International School.",
};

const subjects = [
  "English Home Language",
  "Afrikaans First Additional Language",
  "isiXhosa",
  "Mathematics",
  "Mathematical Literacy",
  "Physical Sciences",
  "Life Sciences",
  "Geography",
  "History",
  "Accounting",
  "Business Studies",
  "Economics",
  "Life Orientation",
  "Visual Arts",
  "Music",
  "Consumer Studies",
  "Information Technology",
  "Tourism",
  "Agricultural Sciences",
  "Engineering Graphics & Design",
];

export default function SubjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-[#1A3A8F] mb-2">Subjects Offered</h1>
      <div className="w-16 h-1 bg-[#E8A020] rounded mb-8" />
      <p className="text-gray-600 mb-10">
        We offer a broad curriculum of {subjects.length}+ subjects to ensure every learner can find
        their strengths and pursue their passions.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((s) => (
          <li
            key={s}
            className="bg-white border border-gray-100 rounded-lg px-5 py-3 text-sm font-medium text-[#1A3A8F] shadow-sm"
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
