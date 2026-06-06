import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staff & Teachers | Stutterheim International School",
  description: "Meet the qualified staff and teachers at Stutterheim International School.",
};

// Update this array when the school sends through staff photos and details
const staff: { name: string; role: string; photo?: string }[] = [
  { name: "Dr Suraj Haruna", role: "Director / Principal" },
];

export default function StaffPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-[#111480] mb-2">Staff & Teachers</h1>
      <div className="w-16 h-1 bg-[#FFD000] rounded mb-8" />
      <p className="text-gray-600 mb-10">
        Our dedicated team of qualified educators is committed to every learner&apos;s success.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {staff.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-center"
          >
            <div className="h-48 bg-[#111480]/10 flex items-center justify-center">
              {member.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
              ) : (
                <div className="w-20 h-20 rounded-full bg-[#111480]/20 flex items-center justify-center">
                  <span className="text-3xl font-bold text-[#111480]">
                    {member.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div className="p-4">
              <p className="font-bold text-[#111480]">{member.name}</p>
              <p className="text-sm text-gray-500 mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
