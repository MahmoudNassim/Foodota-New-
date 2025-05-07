import React from "react";
import span from "../../assets/images/span.png";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";
import team4 from "../../assets/images/team4.png";

const teamMembers = [
  {
    id: 1,
    name: "Alizeh Anderson",
    role: "Senior Chef",
    image: team1,
  },
  {
    id: 2,
    name: "Angelina John",
    role: "Master Chef",
    image: team2,
  },
  {
    id: 3,
    name: "Andre Smith",
    role: "Professor",
    image: team3,
  },
  {
    id: 4,
    name: "Christina Chi",
    role: "Psychologist",
    image: team4,
  },
];

export default function TeamMember() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-10 md:p-10">
      <div className="flex flex-col items-center mb-12">
        <p className="text-center text-warning font-bold text-lg md:text-xl">
          Team Members
        </p>
        <h2 className="text-center text-3xl md:text-4xl lg:text-[42px] font-bold mt-2">
          Meet Our Best Team
        </h2>
        <div className="mt-4">
          <img src={span} alt="Decorative underline" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="card group mt-8 cursor-pointer bg-gray-100 hover:bg-white w-full max-w-[350px] mx-auto transition-all duration-300 shadow-sm hover:shadow-md hover:text-warning"
          >
            <figure className="overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </figure>
            <div className="card-body p-6">
              <h3 className="card-title text-xl md:text-2xl font-semibold">
                {member.name}
              </h3>
              <p className="text-gray-500 font-normal mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
