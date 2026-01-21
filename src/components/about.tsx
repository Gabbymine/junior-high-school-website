"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ================= TYPES ================= */
type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
};

/* ================= DATA ================= */
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
    image: "/img/raisa.jpg",
    quote: "Logic above all",
  },
  {
    id: 4,
    name: "Ojan",
    role: "08-11-2007",
    image: "/img/ojan.jpg",
    quote: "Story creates impact",
  },
  {
    id: 5,
    name: "Galih",
    role: "12-11-2007",
    image: "/img/galih.jpg",
    quote: "Tidak ada kata kata adanya bukti nyata",
  },
  {
    id: 6,
    name: "Ferdinand",
    role: "05-07-2008",
    image: "/img/bone.jpg",
    quote: "Growth mindset",
  },
  {
    id: 7,
    name: "Ihsan Permana",
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
    name: "Mora",
    role: "",
    image: "/img/team-10.jpg",
    quote: "Solve real problems",
  },
  {
    id: 11,
    name: "Farel",
    role: "",
    image: "/img/team-11.jpg",
    quote: "Simplicity is the ultimate sophistication",
  },
];

/* ================= ANIMATION ================= */
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

/* ================= PARTICLE ================= */
const Particle = ({ delay }: { delay: number }) => (
  <motion.span
    className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
    initial={{
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 50,
      opacity: 0,
    }}
    animate={{
      y: -150,
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: 10 + Math.random() * 6,
      repeat: Infinity,
      delay,
      ease: "linear",
    }}
  />
);

/* ================= COMPONENT ================= */
export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section
      id="about"
      className="relative bg-[#020617] px-4 sm:px-6 lg:px-20 py-24 overflow-hidden"
    >
      {/* ================= PARTICLE LAYER ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Particles */}
        {[...Array(30)].map((_, i) => (
          <Particle key={i} delay={i * 0.3} />
        ))}

        {/* Glow Orbs */}
        <motion.div
          className="absolute top-24 left-20 w-44 h-44 bg-cyan-400/20 rounded-full blur-3xl"
          animate={{ y: [0, -80, 0], x: [0, 60, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-20 right-32 w-52 h-52 bg-violet-500/20 rounded-full blur-3xl"
          animate={{ y: [0, 100, 0], x: [0, -80, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Square */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-20 h-20 border border-cyan-400/40 rotate-12"
          animate={{ rotate: [12, 180, 360], y: [0, -60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10">
        {/* TITLE */}
        <div className="text-center mb-16">
          <div
            data-aos="zoom-in"
            className="w-20 h-2 bg-cyan-400 mx-auto mb-6 rounded-full"
          />
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl font-extrabold text-white"
          >
            About Us
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-3 text-gray-400"
          >
            People who make everything possible
          </p>
        </div>

        {/* GRID / SLIDER */}
        <motion.div
          data-aos="fade-up"
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
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={item}
              data-aos="fade-up"
              data-aos-delay={index * 80}
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
                <div className="absolute inset-0 bg-[#050B14] rounded-2xl p-6 flex flex-col items-center text-center backface-hidden">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-xl animate-pulse" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-24 h-24 rounded-full object-cover border-2 border-cyan-400"
                    />
                  </div>
                  <h3 className="text-white font-semibold">{member.name}</h3>
                  {member.role && (
                    <p className="text-sm text-cyan-400 mt-1">{member.role}</p>
                  )}
                </div>

                {/* BACK */}
                <div className="absolute inset-0 bg-[#050B14] rounded-2xl p-6 flex items-center justify-center text-center [transform:rotateY(180deg)] backface-hidden">
                  <p className="text-gray-300 italic">“{member.quote}”</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
