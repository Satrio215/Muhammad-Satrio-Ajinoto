// data/project.js
import ptpn from "../assets/ptpn.png";
import skinpathoscan from "../assets/skinpathoscan.png";
import rabraw from "../assets/rabraw.png";
import kambud from "../assets/kambud.png";
import em from "../assets/em.png";
import kbmdsi from "../assets/kbmdsi.png";

export const projects = [
  {
    id: 1,
    title: "Legal Service Website",
    image: ptpn,  // ← menggunakan imported variable
    category: "Full Stack Web Application",
    description: "Digital platform for managing legal service requests efficiently.",
    techStack: ["Laravel", "React", "Inertia.js"],
  },
  {
    id: 2,
    title: "Sugarcane Detection",
    image: ptpn,
    category: "Machine Learning",
    description: "YOLO-based computer vision for sugarcane area detection.",
    techStack: ["Python", "YOLO", "OpenCV"],
  },
  {
    id: 3,
    title: "Financial System",
    image: ptpn,
    category: "UI/UX Design",
    description: "Designed intuitive interfaces for financial management and reporting.",
    techStack: ["Figma", "Prototyping"],
  },
  {
    id: 4,
    title: "SkinPathoScan Website",
    image: skinpathoscan,
    category: "AI Healthcare",
    description: "AI-powered platform for skin disease classification and diagnosis.",
    techStack: ["React", "TensorFlow", "Flask"],
  },
  {
    id: 5,
    title: "RAJA Brawijaya 2024",
    image: rabraw,
    category: "Full Stack Web Application",
    description: "Official website with registration and participant management features.",
    techStack: ["Laravel", "React", "Inertia.js"],
  },
  {
    id: 6,
    title: "Kampung Budaya 2024",
    image: kambud,
    category: "Web Application",
    description: "Registration system for a national cultural event.",
    techStack: ["Laravel", "React", "MySQL"],
  },
  {
    id: 7,
    title: "EM UB 2024",
    image: em,
    category: "Backend Development",
    description: "Backend services and RESTful APIs for organizational systems.",
    techStack: ["Laravel", "REST API", "MySQL"],
  },
  {
    id: 8,
    title: "KBMDSI 2024",
    image: kbmdsi,
    category: "Organization Website",
    description: "Official organization website for information and activities.",
    techStack: ["Laravel", "Bootstrap", "MySQL"],
  },
];