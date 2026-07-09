import { motion, useScroll } from "framer-motion";
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import { experiences } from "../data/experiences";
import ScrollReveal from "./ScrollReveal";
import LiquidChrome from "./LiquidChrome";
import { GitHubCalendar } from "react-github-calendar";
import ModelViewer from "./ModelViewer";
// Import file GLB lokal
import astonModel from "../assets/aston.glb";

const About = () => {
  const target = useRef(null);

  useScroll({
    target: target,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={target}
      className="w-full relative bg-black justify-center py-8 sm:py-12 md:py-16"
    >
      <div className="flex-col items-center justify-center pt-8 sm:pt-12 md:pt-16">
        {/* About Me Section - Hanya 1 Model 3D di sisi kanan */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="relative z-10">
            {/* Judul About Me - Full Width */}
            <div className="mb-3 sm:mb-4">
              <ScrollReveal
                baseOpacity={0.1}
                enableBlur={true}
                baseRotation={3}
                blurStrength={4}
                containerClassName="mb-3 sm:mb-4"
                textClassName="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
                textAlign="left"
                rotationEnd="bottom bottom"
                wordAnimationEnd="bottom bottom"
              >
                About Me
              </ScrollReveal>
            </div>

            {/* Grid untuk deskripsi dan GLB */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
              {/* Left Side - Deskripsi (2/3) */}
              <div className="lg:col-span-2 flex flex-col justify-center">
                <div className="mt-2 sm:mt-3 md:mt-4">
                  <ScrollReveal
                    baseOpacity={0.1}
                    enableBlur={true}
                    baseRotation={2}
                    blurStrength={3}
                    containerClassName="mt-1 sm:mt-2"
                    textClassName="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-extralight leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed text-justify"
                    textAlign="justify"
                    rotationEnd="bottom bottom"
                    wordAnimationEnd="bottom bottom"
                  >
                    Welcome to my portfolio! I'm a fresh graduate with a
                    Bachelor's degree in Information Systems from Universitas
                    Brawijaya who is passionate about backend engineering,
                    full-stack development, and building scalable web
                    applications. Through internships, academic projects, and
                    organizational experiences, I have developed expertise in
                    Laravel, React, Inertia.js, RESTful APIs, Docker, database
                    optimization, and machine learning. I enjoy transforming
                    ideas into reliable, efficient, and user-focused solutions
                    while continuously exploring new technologies and best
                    practices. This portfolio showcases the projects,
                    experiences, and skills that reflect my journey as a
                    software engineer and my commitment to continuous learning
                    and innovation.
                  </ScrollReveal>
                </div>
              </div>

              {/* Right Side - 3D Model (1/3) dengan background seperti card experience */}
              <div className="lg:col-span-1 flex items-center justify-center h-full">
                <div className="w-full h-full relative min-h-[250px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px] xl:min-h-[400px]">
                  {/* Background seperti card experience */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700/50" />

                  {/* Line separator seperti card experience */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/0 via-white/0 to-white/0 group-hover:from-white/10 group-hover:via-white/5 group-hover:to-white/10 transition-all duration-500 pointer-events-none" />

                  <div className="relative z-10 w-full h-full p-2 sm:p-3 md:p-4">
                    <ModelContainer>
                      <ModelViewer url={astonModel} />
                    </ModelContainer>
                  </div>

                  {/* Tulisan "Move Me!" di bagian atas tengah */}
                  <div className="absolute top-2 sm:top-3 md:top-4 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
                    <div className="text-white/100 text-[10px] xs:text-xs sm:text-sm font-light tracking-wider bg-black/30 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full border border-white/10">
                      <span className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                        Move Me!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Experiences - Infinite Horizontal Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 md:mt-10 lg:mt-12"
        >
          <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-left w-full">
            Experience's
          </h3>

          <ExperienceCarousel />
        </motion.div>

        {/* GitHub Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 md:mt-10 lg:mt-12"
        >
          <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 text-left w-full">
            GitHub Activity
          </h3>

          <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {/* Profile Card */}
            <div className="w-full lg:w-1/3">
              <div className="h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-700/50 hover:border-white/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 text-center flex flex-col items-center justify-center">
                <a
                  href="https://github.com/Satrio215"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://github.com/Satrio215.png"
                    alt="Profile"
                    className="rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 border-2 border-gray-500 grayscale hover:grayscale-0 transition duration-300"
                  />
                </a>
                <h4 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                  <a
                    href="https://github.com/Satrio215"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white/80 transition-colors"
                  >
                    Satrio215
                  </a>
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  <a
                    href="https://github.com/Satrio215"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Check out my GitHub Profile
                  </a>
                </p>
              </div>
            </div>

            {/* GitHub Calendar */}
            <div className="w-full lg:w-2/3">
              <div className="h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-700/50 hover:border-white/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 flex flex-col items-center justify-center">
                <div className="flex justify-center w-full overflow-x-auto">
                  <GitHubCalendar
                    username="Satrio215"
                    colorScheme="dark"
                    fontSize={12}
                    blockSize={10}
                    blockMargin={4}
                    style={{ color: "white" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Liquid Chrome Page Break */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full mt-12 sm:mt-16 md:mt-20 lg:mt-24"
      >
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <LiquidChrome
            baseColor={[0.1, 0.1, 0.1]}
            speed={0.3}
            amplitude={0.38}
            interactive={true}
          />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white/90 drop-shadow-2xl">
                Explore More
              </h2>
              <p className="text-gray-300/80 text-xs sm:text-sm md:text-base lg:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto px-4">
                Explore my journey through innovative projects, technical
                expertise, and real world experience.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// Komponen wrapper untuk mengatasi masalah ukuran
function ModelContainer({ children }) {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isReady, setIsReady] = useState(false);

  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width || 400;
      const height = rect.height || 400;
      setDimensions({ width, height });
      setIsReady(true);
    }
  }, []);

  useLayoutEffect(() => {
    updateDimensions();

    let resizeObserver;
    if (containerRef.current && window.ResizeObserver) {
      resizeObserver = new ResizeObserver(() => {
        updateDimensions();
      });
      resizeObserver.observe(containerRef.current);
    }

    const timeoutId = setTimeout(() => {
      updateDimensions();
    }, 50);

    const mutationObserver = new MutationObserver(() => {
      updateDimensions();
    });

    if (containerRef.current) {
      mutationObserver.observe(containerRef.current, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      clearTimeout(timeoutId);
      mutationObserver.disconnect();
    };
  }, [updateDimensions]);

  useEffect(() => {
    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", () => {
      setTimeout(updateDimensions, 300);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [updateDimensions]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative"
      style={{
        minHeight: "100%",
        height: "100%",
        width: "100%",
        position: "relative",
      }}
    >
      {!isReady && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/50 rounded-xl sm:rounded-2xl animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-3 sm:border-4 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
        </div>
      )}
      <div
        className="w-full h-full"
        style={{
          opacity: isReady ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
          position: "absolute",
          inset: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function ExperienceCarousel() {
  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [trackWidth, setTrackWidth] = useState(0);
  const offsetRef = useRef(0);
  const dragBaseOffsetRef = useRef(0);
  const dragStartXRef = useRef(0);

  const duplicatedExperiences = useMemo(
    () => [...experiences, ...experiences],
    [],
  );

  useEffect(() => {
    const updateTrackWidth = () => {
      if (!trackRef.current) return;
      const width = trackRef.current.scrollWidth / 2;
      setTrackWidth(width);
      if (!offsetRef.current) {
        offsetRef.current = 0;
        setOffset(0);
      }
    };

    updateTrackWidth();
    window.addEventListener("resize", updateTrackWidth);
    return () => window.removeEventListener("resize", updateTrackWidth);
  }, []);

  useEffect(() => {
    if (!trackWidth) return;

    let frameId = 0;
    let lastTime = 0;
    const speed = 70;

    const animate = (time) => {
      if (!lastTime) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isPaused && !isDragging) {
        offsetRef.current -= speed * delta;
        if (offsetRef.current <= -trackWidth) {
          offsetRef.current = 0;
        }
        setOffset(offsetRef.current);
      }

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [trackWidth, isPaused, isDragging]);

  const handleTouchStart = (event) => {
    setIsPaused(true);
    setIsDragging(true);
    dragStartXRef.current = event.touches[0].clientX;
    dragBaseOffsetRef.current = offsetRef.current;
  };

  const handleTouchMove = (event) => {
    const delta = event.touches[0].clientX - dragStartXRef.current;
    setOffset(dragBaseOffsetRef.current + delta);
  };

  const handleTouchEnd = () => {
    offsetRef.current = offset;
    setIsDragging(false);
    setIsPaused(false);
  };

  return (
    <div
      className="relative mt-3 sm:mt-4 md:mt-5 lg:mt-6 w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      style={{
        touchAction: "pan-y",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
      }}
    >
      <div
        ref={trackRef}
        className="flex w-max gap-2 sm:gap-3 md:gap-4 lg:gap-5"
        style={{
          transform: `translate3d(${offset}px, 0, 0)`,
          willChange: "transform",
          transition: isDragging ? "none" : "transform 0s linear",
        }}
      >
        {duplicatedExperiences.map((exp, index) => (
          <ExperienceCard key={`${exp.id}-${index}`} exp={exp} index={index} />
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group relative w-[80vw] sm:w-[75vw] md:w-[70vw] lg:max-w-[22rem] xl:max-w-[24rem] 2xl:max-w-[28rem] shrink-0 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-5 border border-gray-700/50 hover:border-white/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 hover:bg-gray-800/40 text-left overflow-hidden"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/0 to-white/0 group-hover:from-white/10 group-hover:via-white/5 group-hover:to-white/10 transition-all duration-500 pointer-events-none" />

      <div>
        <h4 className="font-semibold text-white text-[10px] sm:text-[11px] md:text-[13px] lg:text-[15px] leading-tight group-hover:text-white transition-colors duration-300">
          {exp.company}
        </h4>
        <p className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] text-gray-400 font-medium mt-0.5 group-hover:text-gray-300 transition-colors duration-300">
          {exp.position}
        </p>
        <div className="flex items-center gap-1 sm:gap-1.5 mt-1 sm:mt-1.5">
          <svg
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-400 group-hover:text-white/70 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] text-gray-400 group-hover:text-white/70 transition-colors duration-300">
            {exp.period}
          </span>
        </div>
        <p className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] text-gray-300 mt-1 sm:mt-2 leading-relaxed line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
          {exp.description}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
