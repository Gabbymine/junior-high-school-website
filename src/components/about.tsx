"use client";

import { motion } from "framer-motion";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Rafif",
    role: "05-08-2007",
    image: "/img/rapip.jpg",
    quote: "Sesungguhnya, setelah kesulitan pasti ada kemudahan.",
  },
  {
    id: 2,
    name: "Khalisa",
    role: "23-03-2008",
    image: "/img/khalisa.jpg",
    quote: "we're what we choose to be",
  },
  {
    id: 3,
    name: "Raisa",
    role: "12-3-2008",
    image: "/img/team-3.jpg",
    quote: "Logic above all",
  },
  {
    id: 4,
    name: "Ojan",
    role: "8-11-2007",
    image: "/img/ojan.jpg",
    quote: "Story creates impact",
  },
  {
    id: 5,
    name: "galih",
    role: "",
    image: "/img/team-5.jpg",
    quote: "Teamwork wins",
  },
  {
    id: 6,
    name: "Ferdinand",
    role: "",
    image: "/img/team-6.jpg",
    quote: "Growth mindset",
  },
  {
    id: 7,
    name: "ihsan permana",
    role: "",
    image: "/img/team-7.jpg",
    quote: "Code everywhere",
  },
  {
    id: 8,
    name: "Dara",
    role: "",
    image: "/img/team-8.jpg",
    quote: "Ship it fast",
  },
  {
    id: 9,
    name: "Ihsan Subhan",
    role: "",
    image: "/img/team-9.jpg",
    quote: "Quality matters",
  },
  {
    id: 10,
    name: "",
    role: "Fullstack",
    image: "/img/team-10.jpg",
    quote: "Solve real problems",
  },
];

/* Animation */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="bg-[#020617] px-4 sm:px-6 lg:px-20 py-24">
      {/* TITLE */}
      <div className="text-center mb-16">
        <div className="w-20 h-2 bg-cyan-400 mx-auto mb-6 rounded-full" />
        <h2 className="text-4xl font-extrabold text-white">About us</h2>
        <p className="mt-3 text-gray-400">
          People who make everything possible
        </p>
      </div>

      {/* DESKTOP GRID / MOBILE SLIDER */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          grid gap-8
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5

          max-md:flex
          max-md:overflow-x-auto
          max-md:snap-x
          max-md:snap-mandatory
          max-md:pb-6
        "
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            variants={item}
            className="
              relative
              snap-center
              min-w-[160px]

              [perspective:1000px]
            "
          >
            {/* FLIP CARD */}
            <div
              className="
                relative w-full h-[260px]
                transition-transform duration-700
                [transform-style:preserve-3d]
                hover:[transform:rotateY(180deg)]
              "
            >
              {/* FRONT */}
              <div
                className="
                  absolute inset-0
                  bg-[#050B14]
                  rounded-2xl p-6
                  flex flex-col items-center text-center
                  backface-hidden
                "
              >
                {/* Glow Ring */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-xl animate-pulse" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="
                      relative
                      w-24 h-24
                      rounded-full
                      object-cover
                      border-2 border-cyan-400
                    "
                  />
                </div>

                <h3 className="text-white font-semibold">{member.name}</h3>
                <p className="text-sm text-cyan-400 mt-1">{member.role}</p>
              </div>

              {/* BACK */}
              <div
                className="
                  absolute inset-0
                  bg-[#050B14]
                  rounded-2xl p-6
                  flex items-center justify-center
                  text-center
                  [transform:rotateY(180deg)]
                  backface-hidden
                "
              >
                <p className="text-gray-300 italic">“{member.quote}”</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
