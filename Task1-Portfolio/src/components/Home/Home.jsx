import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Linkedin, Mail, ArrowRight, Facebook } from "lucide-react";

const socialLinks = [
  { href: "mailto:contact@futureinterns.com", icon: Mail, label: "Email" },
  { href: "https://www.linkedin.com/company/future-interns/posts/?feedView=all", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/people/FutureInterns/61562591295542/?mibextid=wwXIfr", icon: Facebook, label: "Facebook" },
];

const Home = () => {
  // Advanced Mouse Tracking Parallax setup
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Derived parallax layers (Close to Far)
  const layer1X = useTransform(smoothMouseX, [-800, 800], [-15, 15]);
  const layer1Y = useTransform(smoothMouseY, [-800, 800], [-15, 15]);

  const layer2X = useTransform(smoothMouseX, [-800, 800], [40, -40]);
  const layer2Y = useTransform(smoothMouseY, [-800, 800], [40, -40]);

  const layer3X = useTransform(smoothMouseX, [-800, 800], [-80, 80]);
  const layer3Y = useTransform(smoothMouseY, [-800, 800], [-80, 80]);

  // Dynamic lighting/spotlight effect behind elements
  const spotLightX = useTransform(smoothMouseX, [-800, 800], ["0%", "100%"]);
  const spotLightY = useTransform(smoothMouseY, [-800, 800], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-20 overflow-hidden bg-brand-surface selection:bg-brand-primary/20">
      
      {/* 1. Underlying Particle Net (Far Back) */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply">
        <Particle />
      </div>

      {/* 2. Interactive Spotlight Gradient */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          background: "radial-gradient(circle 800px at var(--x) var(--y), rgba(22, 163, 74, 0.1), transparent 80%)",
          "--x": spotLightX,
          "--y": spotLightY,
        }}
      />

      {/* 3. Floating Geometric Parallax Elements (Midground) */}
      <motion.div 
        className="absolute top-1/4 left-10 w-64 h-64 bg-green-300/30 rounded-full blur-[80px] pointer-events-none z-0"
        style={{ x: layer3X, y: layer3Y }}
      />
      <motion.div 
        className="absolute bottom-10 right-20 w-96 h-96 bg-emerald-200/40 rounded-full blur-[100px] pointer-events-none z-0"
        style={{ x: layer2X, y: layer2Y }}
      />

      {/* Custom Live Animated Shapes */}
      <motion.div 
        className="absolute top-32 right-[20%] w-16 h-16 border border-brand-primary/20 rounded-xl rotate-45 pointer-events-none z-0 backdrop-blur-sm"
        style={{ x: layer2X, y: layer2Y }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-40 left-[10%] w-12 h-12 border-2 border-brand-primary/10 rounded-full pointer-events-none z-0 backdrop-blur-[2px]"
        style={{ x: layer3X, y: layer3Y }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* HERO SECTION CONTAINER */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 pt-16 pb-24 md:pt-32 md:pb-32">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-3/5 text-center lg:text-left"
            style={{ x: layer1X, y: layer1Y }}
          >
            {/* Live pulsating badge */}
            <motion.div 
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 border border-brand-primary/10 shadow-sm mb-6 backdrop-blur-md"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-primary"></span>
              </span>
              <span className="text-sm font-semibold text-brand-primary tracking-wide uppercase">
                Welcome to the Future
              </span>
            </motion.div>

            {/* Staggered Title Reveal */}
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tight text-brand-light mb-4 leading-tight">
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="block"
              >
                Hi There! <motion.span 
                  className="inline-block origin-bottom-right"
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                >👋🏻</motion.span>
              </motion.span>
              
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-green-500 to-emerald-400 mt-2"
                style={{ backgroundSize: "200% auto" }}
              >
                We are Future Interns
              </motion.span>
            </h1>

            <motion.div 
              className="text-2xl md:text-3xl font-medium text-brand-light/60 h-[40px] mb-10 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Type />
            </motion.div>

            {/* Magnetic & Animated Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a 
                href="#about"
                className="group relative flex items-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-full font-bold overflow-hidden shadow-[0_10px_40px_-10px_rgba(22,163,74,0.6)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shine effect passing across button */}
                <motion.div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  animate={{ translateX: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="relative z-10">Discover More</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
              </motion.a>
              
              <motion.a 
                href="/project" 
                className="px-8 py-4 bg-white text-brand-light border border-brand-border rounded-full font-bold transition-colors hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/5 shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 3D Animated Central Image */}
          <motion.div 
            className="w-full max-w-sm lg:w-2/5 relative"
            style={{ x: layer2X, y: layer2Y }} // Parallax movement
          >
            {/* Main floating container */}
            <motion.div 
              className="relative z-10 p-5 rounded-3xl bg-white/40 border border-white/60 shadow-2xl backdrop-blur-xl"
              animate={{ y: [-15, 15, -15] }} // Live vertical floating
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="https://futureinterns.com/wp-content/uploads/2025/05/cropped-cropped-Future-Interns-Site-Logo.png"
                alt="Future Interns Logo"
                className="w-full h-auto rounded-2xl shadow-inner bg-white"
                loading="lazy"
              />
            </motion.div>
            
            {/* Orbiting rings */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-brand-primary/20 rounded-full z-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute top-0 bottom-0 left-0 right-0 -m-10 border border-brand-primary/10 rounded-full z-0 pointer-events-none"
              animate={{ rotate: -360, scale: [1, 1.05, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

        </div>
      </div>

      <Home2 />

      {/* CONTACT SECTION (With live tracking interactions) */}
      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-light mb-4">
            Get In <span className="text-brand-primary">Touch</span>
          </h2>
          <p className="text-lg text-brand-light/60 mb-10">
            Feel free to connect. Let's create something extraordinary together.
          </p>

          <div className="flex justify-center gap-6">
            {socialLinks.map(({ href, icon: Icon, label }, idx) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white border border-brand-border text-brand-light shadow-md hover:border-brand-primary hover:text-brand-primary transition-colors group overflow-hidden"
                whileHover={{ y: -8, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1, type: "spring" }}
              >
                <div className="absolute inset-0 bg-brand-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Icon className="w-6 h-6 relative z-10" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
