import Image from "next/image";

const teamMembers = [
  {
    name: "Mark Dave Zepeda",
    photo: "/images/team-images/dave-150x150.jpg",
  },
  {
    name: "Jay-M Sabusap",
    photo: "/images/team-images/j-m-150x150.png",
  },
  {
    name: "John Adrian Gozun",
    photo: "/images/team-images/G-1-150x150.png",
  },
  {
    name: "Adrian Bernardino",
    photo: "/images/team-images/ian-150x150.png",
  },
  {
    name: "Jay Ann Lumanas",
    photo: "/images/team-images/j-ann-150x150.png",
  },
];

export default function Team() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Meet the Team</h2>
        <div className="section-divider" />
        <div className="flex flex-wrap justify-center gap-10">
          {teamMembers.map((member, i) => (
            <div key={member.name} className="flex flex-col items-center gap-3 w-36">
              <div
                className="w-24 h-24 rounded-full overflow-hidden shadow-md"
                style={{
                  outline: `4px solid ${i % 2 === 0 ? "#e01870" : "#2255cc"}`,
                  outlineOffset: "2px",
                }}
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-semibold text-slate-800 text-center leading-snug">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
