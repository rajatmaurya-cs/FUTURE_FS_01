import React from "react";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import { motion } from "framer-motion";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particle />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
          <motion.div 
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-brand-light mb-8">
              Know Who <span className="text-brand-primary">we are</span>
            </h1>
            <Aboutcard />
          </motion.div>

          <motion.div 
            className="w-full lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative p-2 rounded-3xl bg-brand-muted border border-brand-border shadow-md -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-brand-primary/10 blur-2xl -z-10 rounded-full" />
              <img src={laptopImg} alt="about" className="w-full max-w-sm rounded-2xl" />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-light mb-12">
            Our Impact <span className="text-brand-primary">in Numbers</span>
          </h2>
          <Techstack />
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Toolstack />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
