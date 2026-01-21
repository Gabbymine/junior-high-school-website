"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
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
];

/* ================= FRAMER ================= */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

/* ================= COMPONENT ================= */
export default function About() {
  const [flippedId, setFlippedId] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [12, -12]);
  const rotateY = useTransform(mouseX, [-100, 100], [-12, 12]);

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
      className=" relative bg-[#020617]
    px-4 sm:px-6 lg:px-20
    -mt-24
    pt-24
    pb-24
    overflow-hidden scroll-mt-[64px] sm:scroll-mt-[72px] lg:scroll-mt-[80px]
"
    >
      {/* ================= PARTICLE BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(35)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/40"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
              opacity: 0,
            }}
            animate={{
              y: ["0vh", "-120vh"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 14 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Glow Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-44 h-44 bg-cyan-400/20 blur-3xl rounded-full"
          animate={{ y: [0, -80, 0], x: [0, 60, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-24 w-56 h-56 bg-violet-500/20 blur-3xl rounded-full"
          animate={{ y: [0, 100, 0], x: [0, -80, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10">
        {/* TITLE */}
        <div className="text-center mb-16">
          <div className="w-20 h-2 bg-cyan-400 mx-auto mb-6 rounded-full" />
          <h2 className="text-4xl font-extrabold text-white">About Us</h2>
          <p className="mt-3 text-gray-400">
            People who make everything possible
          </p>
        </div>

        {/* GRID / SLIDER */}
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
          {teamMembers.map((member) => {
            const isFlipped = flippedId === member.id;

            return (
              <motion.div
                key={member.id}
                variants={item}
                style={{ rotateX, rotateY }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  mouseX.set(e.clientX - rect.left - rect.width / 2);
                  mouseY.set(e.clientY - rect.top - rect.height / 2);
                }}
                onMouseLeave={() => {
                  mouseX.set(0);
                  mouseY.set(0);
                }}
                onClick={() => setFlippedId(isFlipped ? null : member.id)}
                className="
                  relative snap-center min-w-[160px]
                  [perspective:1200px]
                  cursor-pointer
                "
              >
                {/* FLIP CARD */}
                <div
                  className="
                    relative w-full h-[260px]
                    transition-transform duration-700
                    [transform-style:preserve-3d]
                  "
                  style={{
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* FRONT */}
                  <div className="absolute inset-0 bg-[#050B14] rounded-2xl p-6 flex flex-col items-center text-center backface-hidden">
                    <div className="relative mb-4">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                        className="absolute inset-0 rounded-full bg-cyan-400/30 blur-xl"
                      />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="relative w-24 h-24 rounded-full object-cover border-2 border-cyan-400"
                      />
                    </div>
                    <h3 className="text-white font-semibold">{member.name}</h3>
                    {member.role && (
                      <p className="text-sm text-cyan-400 mt-1">
                        {member.role}
                      </p>
                    )}
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 bg-[#050B14] rounded-2xl p-6 flex items-center justify-center text-center [transform:rotateY(180deg)] backface-hidden">
                    <p className="text-gray-300 italic">“{member.quote}”</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
