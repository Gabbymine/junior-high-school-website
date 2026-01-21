"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ================= PARTICLE ================= */
const Particle = ({
  delay,
  size = 1,
  opacity = 0.6,
}: {
  delay: number;
  size?: number;
  opacity?: number;
}) => (
  <motion.span
    className="absolute bg-cyan-400 rounded-full"
    style={{
      width: size,
      height: size,
      opacity,
    }}
    initial={{
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 60,
    }}
    animate={{
      y: -200,
      opacity: [0, opacity, opacity, 0],
    }}
    transition={{
      duration: 10 + Math.random() * 8,
      repeat: Infinity,
      delay,
      ease: "linear",
    }}
  />
);

export default function Hero() {
  /* ================= AOS ================= */
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  /* ================= PARALLAX ================= */
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 500], [0, -40]);
  const bgY = useTransform(scrollY, [0, 500], [0, 60]);

  return (
    <section
      id="home"
      className="
        relative flex items-center justify-center
    overflow-hidden
    min-h-screen
    pt-[64px] sm:pt-[72px] lg:pt-[80px]
    bg-gradient-to-br from-[#050B14] via-[#070F1F] to-[#020617]
    px-4 sm:px-6 lg:px-20
      "
    >
      {/* ================= BACKGROUND LAYERS ================= */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        {/* Soft Glow Fog */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_70%)]" />

        {/* BACK PARTICLES */}
        {[...Array(25)].map((_, i) => (
          <Particle key={`b-${i}`} delay={i * 0.4} size={1} opacity={0.35} />
        ))}

        {/* FRONT PARTICLES */}
        {[...Array(20)].map((_, i) => (
          <Particle key={`f-${i}`} delay={i * 0.5} size={2} opacity={0.8} />
        ))}

        {/* FLOATING ORBS */}
        <motion.div
          className="absolute top-24 left-10 w-48 h-48 bg-cyan-400/30 rounded-full blur-3xl"
          animate={{ y: [0, -120, 0], x: [0, 80, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-24 right-16 w-56 h-56 bg-violet-500/30 rounded-full blur-3xl"
          animate={{ y: [0, 140, 0], x: [0, -100, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* GEOMETRY */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-24 h-24 border border-cyan-400/50 rotate-12"
          animate={{ rotate: [12, 360], y: [0, -80, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="
            absolute bottom-36 left-1/4
            w-0 h-0
            border-l-[32px] border-l-transparent
            border-r-[32px] border-r-transparent
            border-b-[64px] border-b-pink-500/50
          "
          animate={{ y: [0, -90, 0], rotate: [0, 360] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* ================= CONTENT ================= */}
      <motion.div
        data-aos="fade-up"
        style={{ y: textY }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-4xl mx-auto text-center
  -mt-18 sm:-mt-10 md:mt-0"
      >
        <h1
          data-aos="zoom-in"
          data-aos-delay="150"
          className="
            font-extrabold leading-tight tracking-tight
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          "
        >
          <span
            className="
              block
              bg-gradient-to-r from-[#22D3EE] via-[#7C3AED] to-[#EC4899]
              bg-[length:200%_200%]
              bg-clip-text text-transparent
              animate-gradient
              drop-shadow-[0_0_24px_rgba(34,211,238,0.35)]
            "
          >
            Welcome To
          </span>

          <span
            className="
              block mt-3
              bg-gradient-to-r from-[#22D3EE] via-[#7C3AED] to-[#EC4899]
              bg-[length:200%_200%]
              bg-clip-text text-transparent
              animate-gradient
              drop-shadow-[0_0_30px_rgba(124,58,237,0.4)]
            "
          >
            Keluh Kesah Basah
          </span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="
            mt-8
            text-lg sm:text-xl md:text-2xl
            text-[#E5E7EB]/75
            max-w-2xl mx-auto
          "
        >
          Where authentic friendships flourish and every moment becomes a
          cherished memory.
        </p>
      </motion.div>
    </section>
  );
}
