import React from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { motion } from "framer-motion";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const projects = [
    {
      title: "Postify - AI Powered Blogging Platform",
      description: "Building a production-grade AI-powered blogging platform with React, Node, Express, and MongoDB that supports one-click summaries and AI-assisted content/report creation for admins. Includes secure OTP and Google sign-in, guarded routes, and scalable REST services. Focused on shipping a responsive product.",
      ghLink: "https://github.com/rajatmaurya-cs/Postify-AI-Powered-Blogging-Platform",
      imgPath: bitsOfCode,
      isBlog: false
    },
  
      {
      title: "AI auto category & Tag Generator ",
      description: "Built an AI-driven auto category and tag generation system that analyzes content context to automatically assign relevant categories and tags. Integrated machine learning APIs, optimized data processing pipelines, and designed a responsive UI for real-time interaction, improving content discoverability and system efficiency.",
      ghLink: "https://github.com/rajatmaurya-cs/ai-auto-category-tag-generator",
      imgPath: bitsOfCode,
      isBlog: false
    },

      {
      title: "AI B2b Proposal Generator ",
      description: "Built an AI-driven B2B proposal generation system that dynamically creates personalized business proposals using contextual input and NLP models. Implemented intelligent content structuring, template automation, and real-time data processing, significantly reducing proposal creation time and enhancing business productivity.",
      ghLink: "https://github.com/rajatmaurya-cs/ai-auto-category-tag-generator",
      imgPath: bitsOfCode,
      isBlog: false
    },

  ];

  return (
    <section className="relative min-h-screen pt-32 pb-24 bg-brand-surface overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particle />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-brand-light mb-4">
            My Recent <span className="text-brand-primary">Works</span>
          </h1>
          <p className="text-lg text-brand-light/60">
            Here are a few projects I've worked on recently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
