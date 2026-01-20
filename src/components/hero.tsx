"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const images = ["/img/ojan.jpg", "/img/ojan2.jpg", "/img/ojan3.jpg"];

export default function Hero() {
  /* INIT AOS */
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  /* PARALLAX */
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 400], [0, -30]);
  const imageY = useTransform(scrollY, [0, 400], [0, 50]);

  /* SLIDER STATE */
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const paginate = (dir: number) => {
    setIndex(([prev]) => [(prev + dir + images.length) % images.length, dir]);
  };

  /* AUTO SLIDE */
  useEffect(() => {
    if (paused) return;

    intervalRef.current = setInterval(() => {
      paginate(1);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  return (
    <section
      id="home"
      className="
        relative flex items-center overflow-hidden
        min-h-[calc(115vh-75px)]
        pt-[64px] sm:pt-[72px] lg:pt-[80px]
        bg-gradient-to-br from-[#050B14] via-[#070F1F] to-[#020617]
        px-4 sm:px-6 lg:px-20
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-[#22D3EE]/20 blur-[160px]" />
      <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] bg-[#7C3AED]/20 blur-[160px]" />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* TEXT */}
        <motion.div
          data-aos="fade-up"
          style={{ y: textY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >
          <h1
            data-aos="zoom-in"
            data-aos-delay="150"
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight"
          >
            <span
              className="
                block bg-gradient-to-r from-[#22D3EE] via-[#7C3AED] to-[#EC4899]
                bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient
              "
            >
              Welcome To
            </span>

            <span
              className="
                block mt-2 bg-gradient-to-r from-[#22D3EE] via-[#7C3AED] to-[#EC4899]
                bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient
              "
            >
              Keluh Kesah Basah
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-6 text-base sm:text-lg md:text-xl text-[#E5E7EB]/70 max-w-xl mx-auto lg:mx-0"
          >
            Where authentic friendships flourish and every moment becomes a
            cherished memory.
          </p>
        </motion.div>

        {/* IMAGE SLIDER */}
        <motion.div
          data-aos="fade-left"
          data-aos-delay="200"
          style={{ y: imageY }}
          className="relative w-full flex flex-col items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div
            className="
              relative w-full overflow-hidden rounded-xl
              h-[calc(100vh-96px)]
              sm:h-[420px] lg:h-[460px]
              max-w-md sm:max-w-lg
            "
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={index}
                src={images[index]}
                alt="Hero Slide"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
                initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.9}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 120) paginate(-1);
                  if (info.offset.x < -120) paginate(1);
                }}
              />
            </AnimatePresence>

            {/* IMAGE GLOW */}
            <div className="absolute inset-0 bg-[#7C3AED]/25 blur-3xl rounded-full -z-10" />
          </div>

          {/* DOT INDICATOR */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex gap-3 mt-6"
          >
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex([i, i > index ? 1 : -1])}
                className={`
                  w-3 h-3 rounded-full transition
                  ${
                    i === index
                      ? "bg-[#22D3EE] shadow-[0_0_12px_#22D3EE]"
                      : "bg-white/30 hover:bg-white/50"
                  }
                `}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
