// components/Projek.jsx
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { projects } from "../data/project";
import ScrollReveal from "./ScrollReveal";

// ==================== SKILL DATA ====================
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaJava,
  FaPhp,
  FaLaravel,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaDatabase,
  FaServer,
  FaCode,
  FaCloud,
  FaRobot,
  FaChartLine,
  FaPaintBrush,
  FaTools,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiPostman,
  SiTensorflow,
  SiOpencv,
  SiLooker,
  SiInertia,
  SiLinux,
  SiNginx,
  SiYolo,
  SiDbeaver,
} from "react-icons/si";
import { TbBrandFramer, TbApi } from "react-icons/tb";
import { FiDatabase as FiDatabaseIcon } from "react-icons/fi";
import { VscVscode } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <FaCode className="text-white/60" />,
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
      { name: "Java", icon: <FaJava />, color: "#007396" },
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
      { name: "SQL", icon: <FiDatabaseIcon />, color: "#4479A1" },
    ],
  },
  {
    title: "Frontend",
    icon: <FaPaintBrush className="text-white/60" />,
    skills: [
      { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
      { name: "Inertia.js", icon: <SiInertia />, color: "#9553E9" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
      { name: "Framer Motion", icon: <TbBrandFramer />, color: "#0055FF" },
    ],
  },
  {
    title: "Backend",
    icon: <FaServer className="text-white/60" />,
    skills: [
      { name: "Laravel", icon: <FaLaravel />, color: "#FF2D20" },
      { name: "REST API", icon: <TbApi />, color: "#00B4D8" },
      { name: "MVC Architecture", icon: <FaServer />, color: "#FF6B35" },
      { name: "Authentication", icon: <FaServer />, color: "#6C63FF" },
      { name: "CRUD Development", icon: <FaDatabase />, color: "#2ECC71" },
    ],
  },
  {
    title: "Database",
    icon: <FaDatabase className="text-white/60" />,
    skills: [
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { name: "MariaDB", icon: <GrMysql />, color: "#003545" },
      { name: "Database Design", icon: <FaDatabase />, color: "#FF6B6B" },
      { name: "DB Optimization", icon: <FaDatabase />, color: "#4ECDC4" },
    ],
  },
  {
    title: "DevOps & Deployment",
    icon: <FaCloud className="text-white/60" />,
    skills: [
      { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
      { name: "Docker Compose", icon: <FaDocker />, color: "#2496ED" },
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#181717" },
      { name: "CI/CD", icon: <FaCloud />, color: "#00C7B1" },
      { name: "Linux", icon: <SiLinux />, color: "#FCC624" },
      { name: "Nginx", icon: <SiNginx />, color: "#009639" },
      { name: "XAMPP", icon: <FaServer />, color: "#FB7A24" },
    ],
  },
  {
    title: "Machine Learning & AI",
    icon: <FaRobot className="text-white/60" />,
    skills: [
      { name: "YOLO", icon: <SiYolo />, color: "#00FFFF" },
      { name: "OpenCV", icon: <SiOpencv />, color: "#5C3EE8" },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
      { name: "Computer Vision", icon: <FaRobot />, color: "#8B5CF6" },
      { name: "Feature Extraction", icon: <FaRobot />, color: "#EC4899" },
    ],
  },
  {
    title: "Data & Analytics",
    icon: <FaChartLine className="text-white/60" />,
    skills: [
      { name: "Looker Studio", icon: <SiLooker />, color: "#4285F4" },
      { name: "Data Visualization", icon: <FaChartLine />, color: "#F59E0B" },
      { name: "Data Analysis", icon: <FaChartLine />, color: "#10B981" },
    ],
  },
  {
    title: "Design",
    icon: <FaPaintBrush className="text-white/60" />,
    skills: [
      { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
      { name: "UI/UX Design", icon: <FaPaintBrush />, color: "#8B5CF6" },
      { name: "Wireframing", icon: <FaPaintBrush />, color: "#3B82F6" },
      { name: "Prototyping", icon: <FaPaintBrush />, color: "#EC4899" },
    ],
  },
  {
    title: "API & Testing",
    icon: <FaTools className="text-white/60" />,
    skills: [{ name: "Postman", icon: <SiPostman />, color: "#FF6C37" }],
  },
  {
    title: "Development Tools",
    icon: <FaTools className="text-white/60" />,
    skills: [
      { name: "DBeaver", icon: <SiDbeaver />, color: "#382B2A" },
      { name: "MySQL Workbench", icon: <SiMysql />, color: "#4479A1" },
      { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
    ],
  },
];

// ==================== PROJECT CARD COMPONENT ====================
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const hasGithub = project.github && project.github !== "";

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative w-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5 hover:bg-gray-800/40 overflow-hidden h-full flex flex-col"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 0.1s ease-out",
        transformStyle: "preserve-3d",
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-white/5 group-hover:to-white/5 transition-all duration-500 pointer-events-none" />

      <div className="relative w-full overflow-hidden flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-medium text-white/90 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
            {project.category}
          </span>
        </div>
      </div>

      <div
        className="p-5 space-y-3 flex-1 flex flex-col"
        style={{ transform: "translateZ(20px)" }}
      >
        <h3 className="text-lg font-semibold text-white group-hover:text-white transition-colors duration-300 line-clamp-1 text-center">
          {project.title}
        </h3>

        <p className="text-white/60 text-sm leading-relaxed line-clamp-2 flex-1 text-center group-hover:text-white/80 transition-colors duration-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1 justify-center">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-white/5 text-white/50 border border-white/5 hover:border-white/20 hover:text-white/80 hover:bg-white/10 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-white/5 text-white/40 border border-white/5">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {hasGithub && (
          <div className="flex items-center justify-center gap-3 pt-3 border-t border-white/5 mt-auto">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/70 bg-white/5 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300 border border-white/5 hover:border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="w-4 h-4" />
              View Code
            </motion.a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ==================== SKILL COMPONENT ====================
const SkillSection = () => {
  const ref = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-black py-16 md:py-20 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={ref}
      >
        <div className="mb-8">
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={3}
            blurStrength={4}
            containerClassName="mb-4"
            textClassName="text-white text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] font-bold"
            textAlign="left"
            rotationEnd="bottom bottom"
            wordAnimationEnd="bottom bottom"
          >
            Tech Stack
          </ScrollReveal>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={categoryVariants}
              className="bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-gray-700/30 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="text-2xl">{category.icon}</div>
                <h3 className="text-base md:text-lg font-medium text-white/80">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-3" />
                <span className="text-xs text-white/20 font-medium">
                  {category.skills.length}
                </span>
              </div>

              <motion.div
                variants={containerVariants}
                className="flex flex-wrap gap-2 md:gap-2.5"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillItemVariants}
                    onMouseEnter={() =>
                      setHoveredSkill(`${catIndex}-${skillIndex}`)
                    }
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div
                      className={`flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full border transition-all duration-300 ${
                        hoveredSkill === `${catIndex}-${skillIndex}`
                          ? "border-white/40 bg-white/10 shadow-lg shadow-white/5 scale-105"
                          : "border-gray-700/30 bg-gray-800/20 hover:border-white/30 hover:bg-gray-800/30"
                      }`}
                    >
                      <span
                        className={`text-sm md:text-base transition-all duration-300 ${
                          hoveredSkill === `${catIndex}-${skillIndex}`
                            ? "scale-110"
                            : ""
                        }`}
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </span>
                      <span
                        className={`text-[11px] sm:text-xs font-medium transition-all duration-300 ${
                          hoveredSkill === `${catIndex}-${skillIndex}`
                            ? "text-white"
                            : "text-white/60"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 pt-6 border-t border-white/5"
        >
          <div className="flex flex-wrap justify-start gap-6 md:gap-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {skillCategories.reduce(
                  (acc, cat) => acc + cat.skills.length,
                  0,
                )}
              </div>
              <div className="text-white/30 text-xs mt-0.5">Skills</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {skillCategories.length}
              </div>
              <div className="text-white/30 text-xs mt-0.5">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white/50">∞</div>
              <div className="text-white/30 text-xs mt-0.5">Learning</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ==================== MAIN PROJEK COMPONENT ====================
const Projek = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* SECTION: PROJECTS */}
      <section className="relative bg-black pt-16 pb-8 md:pt-20 md:pb-10 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur={true}
              baseRotation={3}
              blurStrength={4}
              containerClassName="mb-4"
              textClassName="text-white text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] font-bold"
              textAlign="left"
              rotationEnd="bottom bottom"
              wordAnimationEnd="bottom bottom"
            >
              Project's
            </ScrollReveal>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="h-full"
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION: SKILLS */}
      <SkillSection />

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Projek;
