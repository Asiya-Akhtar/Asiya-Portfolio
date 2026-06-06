import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  ChevronDown,
  Send,
  Menu,
  X,
  Brain,
  Code2,
  Eye,
  Cpu,
  Star,
  Award,
  BookOpen,
  Briefcase,
  Camera,
  MessageCircle,
  Globe,
  Sun,
  Moon,
} from "lucide-react";

// Social SVG icons
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ─── Data ────────────────────────────────────────────────────────────────────

const WHATSAPP_NUMBER = "923170640128"; // Replace with actual number

const skills = [
  { name: "PyTorch / TensorFlow", level: 90, color: "#f59e0b" },
  { name: "Computer Vision", level: 92, color: "#a78bfa" },
  { name: "OpenCV / MediaPipe", level: 88, color: "#60a5fa" },
  { name: "Python / C++", level: 85, color: "#34d399" },
  { name: "React / JavaScript", level: 80, color: "#f472b6" },
  { name: "ESP32 / IoT", level: 78, color: "#fb923c" },
  { name: "YOLO / Object Detection", level: 87, color: "#818cf8" },
  { name: "Machine Learning", level: 89, color: "#2dd4bf" },
];

const projects = [
  {
    title: "Multimodal Engagement Recognition",
    period: "2024-2025",
    tags: ["Python", "PyTorch", "MediaPipe", "TensorFlow"],
    description:
      "Real-time multimodal pipeline integrating facial emotion, gaze vector estimation, and 2D human pose. Achieved 70% engagement classification accuracy across combined vision streams.",
    link: "https://doi.org/10.5281/zenodo.17770660",
    icon: "🧠",
    color: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/30",
  },
  {
    title: "Automated Gate — Face Recognition",
    period: "Bachelor's Thesis",
    tags: ["ESP32", "OpenCV", "Embedded Vision"],
    description:
      "Embedded face-recognition system for automated access control, optimized to run at 20 FPS under varying illumination.",
    link: "https://github.com/Asiya-Akhtar/Face-recognition",
    icon: "🚪",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
  },
  {
    title: "Object Detection Benchmarking",
    period: "Research",
    tags: ["YOLOv5", "YOLOv7", "PyTorch"],
    description:
      "Constructed a 200-image custom dataset. Analyzed inference latency, model complexity, and deployment constraints for real-time robotics use cases.",
    link: "https://github.com/Asiya-Akhtar/Object-Detection",
    icon: "🎯",
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30",
  },
  {
    title: "Emotion Detection Using CNN",
    period: "Research",
    tags: ["CNN", "FER2013", "Keras", "Grad-CAM"],
    description:
      "Trained a custom CNN achieving 85% accuracy using extensive augmentation and regularization. Implemented Grad-CAM visualizations for interpretability.",
    link: "#",
    icon: "😊",
    color: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/30",
  },
  {
    title: "Human Action Recognition",
    period: "Research",
    tags: ["MediaPipe", "OpenPose", "CNN-LSTM", "IoT"],
    description:
      "Spatiotemporal model combining pose landmarks with LSTM-based temporal reasoning. Designed for robotics, elderly-care monitoring, and behavioural analysis.",
    link: "#",
    icon: "🏃",
    color: "from-orange-500/20 to-amber-500/20",
    border: "border-orange-500/30",
  },
  {
    title: "Edu-Mentor",
    period: "Software Project",
    tags: ["React", "Firebase", "Node.js"],
    description:
      "A comprehensive educational mentorship platform designed to connect students with expert mentors for career guidance and skill development.",
    link: "https://github.com/Asiya-Akhtar/Edu-Mentor",
    icon: "🎓",
    color: "from-indigo-500/20 to-blue-500/20",
    border: "border-indigo-500/30",
  },
  {
    title: "Modern Weather App",
    period: "Software Project",
    tags: ["JavaScript", "OpenWeatherMap API", "CSS3"],
    description:
      "Real-time weather tracking application featuring dynamic backgrounds, multi-city search, and detailed forecasts.",
    link: "https://github.com/Asiya-Akhtar/Weather_app",
    icon: "☁️",
    color: "from-blue-400/20 to-sky-500/20",
    border: "border-blue-400/30",
  },
  {
    title: "Employee Management System",
    period: "Software Project",
    tags: ["React", "CRUD Operations", "Local Storage"],
    description:
      "Robust management tool for tracking employee records, handling hiring data, and maintaining organizational hierarchies.",
    link: "https://github.com/Asiya-Akhtar/Employee-Records-App",
    icon: "👥",
    color: "from-teal-500/20 to-emerald-500/20",
    border: "border-teal-500/30",
  },
  {
    title: "Smart Todo List",
    period: "Software Project",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    description:
      "Intuitive task management app with smooth animations, priority tagging, and persistent data storage.",
    link: "https://github.com/Asiya-Akhtar/Todo-List",
    icon: "📝",
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/30",
  },
];

const experiences = [
  {
    role: "Agentic & Robotic AI Engineer",
    company: "PIAIC — Presidential Initiative for AI & Computing",
    period: "08/2025 – Present",
    location: "Faisalabad, Pakistan",
    points: [
      "Working on multimodal and agentic AI workflows for perception-driven systems",
      "Developing computer vision pipelines, including data preprocessing, model inference, and evaluation",
      "Implementing CNN-based image classification and recognition models",
      "Gaining exposure to robotics-related AI systems and applied research practices",
    ],
    icon: "🤖",
    color: "from-violet-500 to-purple-600",
  },
  {
    role: "Software Engineer",
    company: "Al-Karam Builders, Pakistan",
    period: "2023 – 2025",
    location: "Pakistan",
    points: [
      "Developed and maintained responsive web applications supporting organisational workflows",
      "Assisted in integrating data-driven features and basic automation into software systems",
      "Improved UI/UX design, enhancing usability and overall user satisfaction",
      "Automated testing processes to improve system reliability and reduce manual effort",
    ],
    icon: "💼",
    color: "from-blue-500 to-cyan-600",
  },
  {
    role: "Web Developer",
    company: "E-Rozgar — Government College Women University Faisalabad",
    period: "2022 – 2023",
    location: "Faisalabad, Pakistan",
    points: [
      "Developed and customised client-ready WordPress websites",
      "Built responsive, mobile-first layouts using HTML and CSS",
      "Customised themes, plugins, and content structures",
      "Delivered multiple projects under strict deadlines",
    ],
    icon: "🌐",
    color: "from-green-500 to-emerald-600",
  },
];

const certifications = [
  "Prompt & Context Engineering — PIAIC",
  "Crash Course on Python — Coursera (Google)",
  "HTML, CSS & JavaScript for Web Developers — Coursera",
  "Programming Fundamentals — Coursera",
  "Java for Android — Coursera",
  "Foundations of Project Management — Coursera",
  "English for Career Development — Coursera",
];

const conferences = [
  "IEEE Student SIGHT Congress — GCWUF",
  "PIAIC Robotics & AI Workshops",
  "GCWUF AI & Software Engineering Seminars",
];

// ─── Animated Section Wrapper ─────────────────────────────────────────────────
function Section({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// ─── Floating Orb ─────────────────────────────────────────────────────────────
function FloatingOrb({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
      animate={{
        y: [0, -30, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

// ─── Skill Bar ────────────────────────────────────────────────────────────────
function SkillBar({ name, level, color, isDark }: { name: string; level: number; color: string; isDark: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}>{name}</span>
        <span className="text-sm font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full skill-bar"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);


  // Password Modal State
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [pendingFile, setPendingFile] = useState<File | null>(null);

  // Fetch initial profile image
  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(data => {
        if (data.url) setProfileImage(data.url);
      })
      .catch(err => console.error("Failed to load profile image:", err));
  }, []);

  // Toggle theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Track active section
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Handle profile image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPendingFile(file);
      setShowPasswordModal(true);
      setAdminPassword("");
      setShowPassword(false);
    }
  };

  const handlePasswordSubmit = async () => {
    if (!adminPassword || !pendingFile) {
      if (fileInputRef.current) fileInputRef.current.value = '';
      setShowPasswordModal(false);
      return;
    }

    setIsUploading(true);
    setShowPasswordModal(false);

    const reader = new FileReader();
    reader.onload = async (ev) => {
      const base64Image = ev.target?.result as string;
      try {
        const res = await fetch('/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: base64Image, password: adminPassword })
        });
        
        const data = await res.json();
        if (res.ok && data.url) {
          setProfileImage(data.url);
          alert("Profile picture updated successfully!");
        } else {
          alert("Upload failed: " + (data.error || "Unknown error"));
        }
      } catch (err) {
        // Fallback for local testing when the backend isn't running
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
          console.warn("Backend not found. Falling back to local state update for testing.");
          setProfileImage(base64Image);
          alert("[Local Test Mode] Profile picture updated successfully (frontend only)!");
        } else {
          alert("Upload failed. Check your connection.");
        }
      } finally {
        setIsUploading(false);
        setPendingFile(null);
        setAdminPassword("");
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    };
    reader.readAsDataURL(pendingFile);
  };

  const handlePasswordCancel = () => {
    setShowPasswordModal(false);
    setPendingFile(null);
    setAdminPassword("");
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Send WhatsApp message
  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const text = encodeURIComponent(
      `*New Portfolio Contact*\n\n*Name:* ${contactForm.name}\n*Email:* ${contactForm.email}\n\n*Message:*\n${contactForm.message}`
    );
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    setTimeout(() => {
      window.open(url, "_blank");
      setSending(false);
      setSent(true);
      setContactForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 800);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-[#080818] text-white" : "bg-gray-50 text-gray-900"} overflow-x-hidden`}>
      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl font-bold text-gradient"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            AA
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link text-sm font-medium transition-colors ${activeSection === link.id ? "text-violet-400" : `${isDark ? "text-gray-400" : "text-gray-500"} hover:${isDark ? "text-white" : "text-gray-900"}`}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme Toggle & Mobile burger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full glass border ${isDark ? "border-white/10" : "border-gray-200"} ${isDark ? "text-gray-400" : "text-gray-500"} hover:text-violet-400 transition-all`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} className="text-violet-600" />}
            </button>
            <button
              className={`md:hidden ${isDark ? "text-gray-400" : "text-gray-500"} hover:${isDark ? "text-white" : "text-gray-900"}`}
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-dark border-t border-white/5 px-6 py-4 space-y-3"
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`block ${isDark ? "text-gray-300" : "text-gray-600"} hover:${isDark ? "text-white" : "text-gray-900"} py-1`}
                  onClick={() => setNavOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ════════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════════ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background orbs */}
        <FloatingOrb className="w-96 h-96 bg-violet-600 -top-20 -left-20" delay={0} />
        <FloatingOrb className="w-80 h-80 bg-blue-600 top-1/3 -right-20" delay={2} />
        <FloatingOrb className="w-64 h-64 bg-emerald-500 bottom-20 left-1/4" delay={4} />
        <FloatingOrb className="w-48 h-48 bg-pink-500 top-1/4 left-1/2" delay={1.5} />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left — Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/30 text-violet-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Research & Collaboration
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black mb-4 leading-tight"
            >
              Asiya{" "}
              <span className="text-gradient">Akhtar</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={`text-xl md:text-2xl ${isDark ? "text-gray-400" : "text-gray-500"} mb-6 h-10`}
            >
              <TypeAnimation
                sequence={[
                  "AI & Computer Vision Engineer",
                  2000,
                  "Deep Learning Researcher",
                  2000,
                  "IoT & Embedded Systems Dev",
                  2000,
                  "Full-Stack Web Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8 }}
              className={`${isDark ? "text-gray-400" : "text-gray-500"} text-lg leading-relaxed mb-10 max-w-xl`}
            >
              Graduated Computer Scientist with a passion for AI, building smart systems
              using Deep Learning, Computer Vision, and IoT. Seeking a research-oriented
              Master's program in AI / Computer Vision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#projects"
                className={`px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 ${isDark ? "text-white" : "text-gray-900"} font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-1`}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className={`px-8 py-3.5 rounded-full glass border border-white/20 hover:border-violet-400/50 ${isDark ? "text-white" : "text-gray-900"} font-semibold transition-all duration-300 hover:-translate-y-1`}
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.8 }}
              className="flex gap-4"
            >
              {[
                { href: "https://github.com/Asiya-Akhtar", icon: <GithubIcon />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/asiya-akhtar-33025026b", icon: <LinkedinIcon />, label: "LinkedIn" },
                { href: "mailto:asiyaakhtar17@gmail.com", icon: <Mail size={20} />, label: "Email" },
                { href: `https://wa.me/${WHATSAPP_NUMBER}`, icon: <MessageCircle size={20} />, label: "WhatsApp" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-11 h-11 flex items-center justify-center rounded-full glass border ${isDark ? "border-white/10" : "border-gray-200"} ${isDark ? "text-gray-400" : "text-gray-500"} hover:text-violet-400 hover:border-violet-400/50 transition-all duration-300`}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile photo */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Spinning ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-violet-500/40"
                style={{ width: "130%", height: "130%", top: "-15%", left: "-15%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              {/* Pulsing glow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-violet-600/20 blur-2xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Photo container */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-violet-500/50 animate-pulse-glow"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
              >
                {profileImage ? (
                  <div className="relative w-full h-full">
                    <img
                      src={profileImage}
                      alt="Asiya Akhtar"
                      className={`w-full h-full object-cover ${isUploading ? 'opacity-50' : 'opacity-100'}`}
                    />
                    {isUploading && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-violet-900/60 to-blue-900/60 flex flex-col items-center justify-center text-center gap-3 relative cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}>
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-3xl font-black ${isUploading ? 'opacity-50' : 'opacity-100'}`}>
                      AA
                    </div>
                    <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"} px-4 ${isUploading ? 'opacity-50' : 'opacity-100'}`}>
                      {isUploading ? "Uploading..." : "Click to upload your photo"}
                    </p>
                    {isUploading && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                  </div>
                )}
              </motion.div>

              {/* Upload button overlay */}
              <motion.button
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-violet-600 hover:bg-violet-500 flex items-center justify-center shadow-lg transition-colors z-10 text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Upload photo from gallery"
              >
                <Camera size={16} />
              </motion.button>

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />

              {/* Floating badges */}
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <motion.div
                  className="relative w-full h-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      />
                    </defs>
                    <text className={`text-[11px] font-black ${isDark ? "fill-violet-400" : "fill-gray-900"} tracking-[0.15em] uppercase`}>
                      <textPath href="#circlePath">
                        Come On Let's Talk • Come On Let's Talk •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute w-12 h-12 rounded-full border border-violet-500/20 bg-violet-500/5 blur-[2px]" />
                </motion.div>
              </motion.div>

              <motion.div
                className={`absolute -bottom-4 -left-4 glass border border-blue-500/30 rounded-2xl px-3 py-2 text-xs font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🤖 AI Researcher
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>Scroll Down</span>
          <ChevronDown size={18} />
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════
          ABOUT SECTION
      ════════════════════════════════════════════════════════ */}
      <Section id="about" className="section-gap relative">
        <FloatingOrb className="w-72 h-72 bg-blue-600 -right-20 top-10" delay={1} />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — Info cards */}
            <div className="space-y-6">
              {[
                {
                  icon: <Brain className="text-violet-400" size={24} />,
                  title: "Research Focus",
                  desc: "Artificial Intelligence, Computer Vision, and Multimodal Learning systems.",
                },
                {
                  icon: <Cpu className="text-blue-400" size={24} />,
                  title: "Embedded Systems",
                  desc: "IoT architectures with ESP32, OpenCV, and real-time inference pipelines.",
                },
                {
                  icon: <Code2 className="text-emerald-400" size={24} />,
                  title: "Software Engineering",
                  desc: "Full-stack web development, data pipelines, and automation workflows.",
                },
                {
                  icon: <Eye className="text-pink-400" size={24} />,
                  title: "Academic Goal",
                  desc: "Research-oriented Master's in AI / Computer Vision at a top institution.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className={`glass border ${isDark ? "border-white/10" : "border-gray-200"} rounded-2xl p-5 flex gap-4 items-start card-hover`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-12 h-12 rounded-xl ${isDark ? "bg-white/5" : "bg-gray-200/50"} flex items-center justify-center shrink-0`}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold ${isDark ? "text-white" : "text-gray-900"} mb-1`}>{card.title}</h3>
                    <p className={`${isDark ? "text-gray-400" : "text-gray-500"} text-sm leading-relaxed`}>{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right — Bio & quick facts */}
            <div className="space-y-8">
              <div className={`glass border ${isDark ? "border-white/10" : "border-gray-200"} rounded-3xl p-8`}>
                <h3 className="text-xl font-bold mb-4 text-gradient">Research Summary</h3>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"} leading-relaxed mb-6`}>
                  Graduated in Computer Science from Government College Women University Faisalabad
                  with a solid academic and practical background in Artificial Intelligence and
                  Computer Vision. My projects involve building smart systems with CNNs, YOLO,
                  OpenCV, and ESP32 platforms.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Location", value: "Faisalabad, PK", icon: <MapPin size={14} /> },
                    { label: "Email", value: "asiyaakhtar17@gmail.com", icon: <Mail size={14} /> },
                    { label: "Phone", value: "+92 317 0640128", icon: <Phone size={14} /> },
                  ].map((item, i) => (
                    <div key={i} className={`${isDark ? "text-white" : "text-gray-200/50"} rounded-xl p-3`}>
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-1">
                        {item.icon}
                        {item.label}
                      </div>
                      <p className={`${isDark ? "text-white" : "text-gray-900"} text-sm font-medium break-all`}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education card */}
              <div className="glass border border-violet-500/20 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-violet-400" size={22} />
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
                <div className="border-l-2 border-violet-500/40 pl-5">
                  <p className="text-violet-400 text-sm font-medium">2019 – 2023</p>
                  <p className={`${isDark ? "text-white" : "text-gray-900"} font-bold mt-1`}>
                    Bachelor of Science in Computer Science (BSCS)
                  </p>
                  <p className={`${isDark ? "text-gray-400" : "text-gray-500"} text-sm mt-1`}>
                    Government College Women University Faisalabad
                  </p>
                  <p className="text-gray-500 text-xs mt-2">
                    Final Year Project: Automated Smart Gate System using Real-Time Face Recognition
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Supervisor: Prof. Sidra Nasir
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════
          SKILLS SECTION
      ════════════════════════════════════════════════════════ */}
      <Section id="skills" className="section-gap relative bg-white/[0.02]">
        <FloatingOrb className="w-80 h-80 bg-emerald-600 -left-20 top-20" delay={2} />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Skill bars */}
            <div className={`glass border ${isDark ? "border-white/10" : "border-gray-200"} rounded-3xl p-8`}>
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Brain size={20} className="text-violet-400" />
                Proficiency Levels
              </h3>
              {skills.map((s) => (
                <SkillBar key={s.name} {...s} isDark={isDark} />
              ))}
            </div>

            {/* Tag clouds */}
            <div className="space-y-6">
              {[
                {
                  title: "Deep Learning & Vision",
                  icon: "🧠",
                  tags: ["PyTorch", "TensorFlow", "Keras", "YOLO", "MediaPipe", "OpenPose", "FER", "Temporal Modeling"],
                  tagClass: "bg-violet-500/10 border-violet-500/20 text-violet-300",
                },
                {
                  title: "Core Programming",
                  icon: "💻",
                  tags: ["Python", "C/C++", "JavaScript", "HTML/CSS", "SQL", "SQLite"],
                  tagClass: "bg-blue-500/10 border-blue-500/20 text-blue-300",
                },
                {
                  title: "Embedded & IoT",
                  icon: "🔌",
                  tags: ["ESP32", "Arduino", "OpenCV", "IoT Sensor Integration"],
                  tagClass: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
                },
                {
                  title: "Tools & Platforms",
                  icon: "🛠️",
                  tags: ["Git", "Jupyter", "Colab", "VS Code", "Jupyter Notebook", "Grad-CAM"],
                  tagClass: "bg-pink-500/10 border-pink-500/20 text-pink-300",
                },
                {
                  title: "Research",
                  icon: "📄",
                  tags: ["Dataset Creation", "Experiment Design", "Model Evaluation", "Scientific Writing"],
                  tagClass: "bg-amber-500/10 border-amber-500/20 text-amber-300",
                },
              ].map((group, gi) => (
                <motion.div
                  key={gi}
                  className={`glass border ${isDark ? "border-white/10" : "border-gray-200"} rounded-2xl p-5`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: gi * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className={`font-bold text-sm ${isDark ? "text-gray-300" : "text-gray-600"} mb-3 flex items-center gap-2`}>
                    <span>{group.icon}</span>
                    {group.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${group.tagClass}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════
          PROJECTS SECTION
      ════════════════════════════════════════════════════════ */}
      <Section id="projects" className="section-gap relative">
        <FloatingOrb className="w-72 h-72 bg-pink-600 -right-10 bottom-20" delay={3} />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Research & <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className={`glass border ${project.border} rounded-3xl p-7 flex flex-col card-hover`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl mb-5`}>
                  {project.icon}
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500 font-medium">{project.period}</span>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-violet-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"} mb-3`}>{project.title}</h3>
                <p className={`${isDark ? "text-gray-400" : "text-gray-500"} text-sm leading-relaxed mb-5 flex-1`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-full text-xs ${isDark ? "bg-white/5" : "bg-gray-200/50"} border ${isDark ? "border-white/10" : "border-gray-200"} ${isDark ? "text-gray-300" : "text-gray-600"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════
          EXPERIENCE SECTION
      ════════════════════════════════════════════════════════ */}
      <Section id="experience" className="section-gap relative bg-white/[0.02]">
        <FloatingOrb className="w-80 h-80 bg-violet-600 left-1/2 top-10" delay={1} />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-blue-500 to-emerald-500 opacity-30 md:-translate-x-px" />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  className={`relative flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 border-4 border-[#080818] md:-translate-x-2.5 mt-6 z-10" />

                  {/* Card */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <div className={`glass border ${isDark ? "border-white/10" : "border-gray-200"} rounded-3xl p-7 card-hover`}>
                      <div className="flex items-start gap-4 mb-5">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-xl shrink-0`}>
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className={`font-bold ${isDark ? "text-white" : "text-gray-900"} text-lg leading-tight`}>{exp.role}</h3>
                          <p className="text-violet-400 text-sm font-medium mt-0.5">{exp.company}</p>
                          <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Briefcase size={11} /> {exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={11} /> {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.points.map((pt, pi) => (
                          <li key={pi} className={`flex gap-2 ${isDark ? "text-gray-400" : "text-gray-500"} text-sm leading-relaxed`}>
                            <span className="text-violet-400 mt-1 shrink-0">▸</span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Conferences */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className={`glass border ${isDark ? "border-white/10" : "border-gray-200"} rounded-3xl p-8`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="text-amber-400" size={22} />
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, i) => (
                  <motion.li
                    key={i}
                    className={`flex items-start gap-3 ${isDark ? "text-gray-400" : "text-gray-500"} text-sm`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    viewport={{ once: true }}
                  >
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xs shrink-0 mt-0.5">✓</span>
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className={`glass border ${isDark ? "border-white/10" : "border-gray-200"} rounded-3xl p-8`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="text-blue-400" size={22} />
                Conferences & Seminars
              </h3>
              <ul className="space-y-3">
                {conferences.map((conf, i) => (
                  <motion.li
                    key={i}
                    className={`flex items-start gap-3 ${isDark ? "text-gray-400" : "text-gray-500"} text-sm`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xs shrink-0 mt-0.5">🎓</span>
                    {conf}
                  </motion.li>
                ))}
              </ul>

              {/* References */}
              <div className={`mt-8 pt-6 border-t ${isDark ? "border-white/10" : "border-gray-200"}`}>
                <h4 className={`font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4 flex items-center gap-2`}>
                  <Star size={16} className="text-violet-400" />
                  References
                </h4>
                {[
                  { name: "Ms. Sadia Riaz", email: "sadiriaz@gcwuf.edu.pk" },
                  { name: "Ms. Sidra Nasir", email: "sidranasir@gcwuf.edu.pk" },
                ].map((ref) => (
                  <div key={ref.name} className="mb-3 last:mb-0">
                    <p className={`${isDark ? "text-white" : "text-gray-900"} text-sm font-semibold`}>{ref.name}</p>
                    <p className="text-gray-500 text-xs">Government College Women's University</p>
                    <a href={`mailto:${ref.email}`} className="text-violet-400 text-xs hover:underline">
                      {ref.email}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════
          CONTACT SECTION
      ════════════════════════════════════════════════════════ */}
      <Section id="contact" className="section-gap relative">
        <FloatingOrb className="w-96 h-96 bg-violet-600 -left-20 -bottom-20" delay={0} />
        <FloatingOrb className="w-64 h-64 bg-blue-600 -right-10 top-10" delay={2} />

        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className={`${isDark ? "text-gray-400" : "text-gray-500"} max-w-xl mx-auto`}>
              Interested in research collaboration, job opportunities, or just want to say hello?
              Send me a message — it goes straight to my WhatsApp!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-green-500 mx-auto rounded-full mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left — contact info */}
            <div className="lg:col-span-2 space-y-5">
              {[
                {
                  icon: <Mail className="text-violet-400" size={20} />,
                  label: "Email",
                  value: "asiyaakhtar17@gmail.com",
                  href: "mailto:asiyaakhtar17@gmail.com",
                },

                {
                  icon: <MessageCircle className="text-green-400" size={20} />,
                  label: "WhatsApp",
                  value: "Chat on WhatsApp",
                  href: `https://wa.me/${WHATSAPP_NUMBER}`,
                },
                {
                  icon: <span className="text-blue-400"><LinkedinIcon /></span>,
                  label: "LinkedIn",
                  value: "Asiya Akhtar",
                  href: "https://www.linkedin.com/in/asiya-akhtar-33025026b",
                },
                {
                  icon: <span className={`${isDark ? "text-gray-400" : "text-gray-500"}`}><GithubIcon /></span>,
                  label: "GitHub",
                  value: "Asiya-Akhtar",
                  href: "https://github.com/Asiya-Akhtar",
                },
                {
                  icon: <MapPin className="text-red-400" size={20} />,
                  label: "Location",
                  value: "Faisalabad, Pakistan",
                  href: "#",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 glass border ${isDark ? "border-white/10" : "border-gray-200"} rounded-2xl p-4 hover:border-violet-500/30 transition-all duration-300 group`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className={`w-10 h-10 rounded-xl ${isDark ? "bg-white/5" : "bg-gray-200/50"} flex items-center justify-center shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">{item.label}</p>
                    <p className={`${isDark ? "text-white" : "text-gray-900"} text-sm font-medium group-hover:text-violet-300 transition-colors`}>
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Right — contact form */}
            <motion.div
              className={`lg:col-span-3 glass border ${isDark ? "border-white/10" : "border-gray-200"} rounded-3xl p-8`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* WhatsApp badge */}
              <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 w-fit">
                <MessageCircle size={16} className="text-green-400" />
                <span className="text-green-400 text-sm font-medium">Message sent via WhatsApp</span>
              </div>

              <form onSubmit={handleSendWhatsApp} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={`block ${isDark ? "text-gray-400" : "text-gray-500"} text-sm mb-2`}>Your Name *</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="John Doe"
                      className={`w-full ${isDark ? "bg-white/5" : "bg-gray-200/50"} border ${isDark ? "border-white/10" : "border-gray-200"} rounded-xl px-4 py-3 ${isDark ? "text-white" : "text-gray-900"} placeholder-gray-600 focus:outline-none focus:border-violet-500/50 transition-colors`}
                    />
                  </div>
                  <div>
                    <label className={`block ${isDark ? "text-gray-400" : "text-gray-500"} text-sm mb-2`}>Email Address *</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="john@example.com"
                      className={`w-full ${isDark ? "bg-white/5" : "bg-gray-200/50"} border ${isDark ? "border-white/10" : "border-gray-200"} rounded-xl px-4 py-3 ${isDark ? "text-white" : "text-gray-900"} placeholder-gray-600 focus:outline-none focus:border-violet-500/50 transition-colors`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block ${isDark ? "text-gray-400" : "text-gray-500"} text-sm mb-2`}>Message *</label>
                  <textarea
                    required
                    rows={6}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Tell me about your project, opportunity, or research..."
                    className={`w-full ${isDark ? "bg-white/5" : "bg-gray-200/50"} border ${isDark ? "border-white/10" : "border-gray-200"} rounded-xl px-4 py-3 ${isDark ? "text-white" : "text-gray-900"} placeholder-gray-600 focus:outline-none focus:border-violet-500/50 transition-colors resize-none`}
                  />
                </div>

                <AnimatePresence>
                  {sent && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-green-400 text-sm bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3"
                    >
                      ✅ WhatsApp opened! Your message is ready to send.
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={sending}
                  className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 ${isDark ? "text-white" : "text-gray-900"} font-semibold transition-all duration-300 disabled:opacity-70`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {sending ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      />
                      Opening WhatsApp…
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send via WhatsApp
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── Password Modal ── */}
      <AnimatePresence>
        {showPasswordModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`w-full max-w-md p-6 rounded-2xl shadow-2xl ${isDark ? "bg-[#0f0f23] border border-white/10" : "bg-white border border-gray-200"}`}
            >
              <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                Enter Admin Password
              </h3>
              <p className={`text-sm mb-6 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                Please enter the password to update your profile picture.
              </p>
              
              <div className="mb-4">
                <div className={`relative border ${isDark ? "border-gray-600 focus-within:border-violet-500" : "border-gray-300 focus-within:border-violet-500"} rounded-lg transition-colors`}>
                  <label className={`absolute -top-2.5 left-3 px-1 text-xs font-medium ${isDark ? "bg-[#0f0f23] text-gray-400" : "bg-white text-gray-500"}`}>
                    Enter your password
                  </label>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    className={`w-full px-4 py-3 bg-transparent outline-none ${isDark ? "text-white" : "text-gray-900"} rounded-lg`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handlePasswordSubmit();
                      }
                    }}
                    autoFocus
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-8">
                <input 
                  type="checkbox" 
                  id="showPasswordCheck"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-400 text-violet-600 focus:ring-violet-500 bg-transparent cursor-pointer"
                />
                <label htmlFor="showPasswordCheck" className={`text-sm cursor-pointer select-none ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  Show password
                </label>
              </div>

              <div className="flex justify-end gap-3">
                <button 
                  onClick={handlePasswordCancel}
                  className={`px-5 py-2.5 rounded-xl font-medium ${isDark ? "bg-white/5 hover:bg-white/10 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900"} transition-colors`}
                >
                  Cancel
                </button>
                <button 
                  onClick={handlePasswordSubmit}
                  className="px-5 py-2.5 rounded-xl font-medium bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-500/25 transition-all hover:-translate-y-0.5"
                >
                  Submit
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Footer ── */}
      <footer className="py-10 border-t border-white/5 text-center text-gray-600 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p className="mb-2">
            Designed & developed by{" "}
            <span className="text-gradient font-semibold">Asiya Akhtar</span>
          </p>
          <p>© {new Date().getFullYear()} — All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
