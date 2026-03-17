import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

function Home2() {
  return (
    <div id="about" className="relative z-10 container mx-auto px-6 py-24 md:py-32 border-t border-brand-border">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        <motion.div 
          className="w-full lg:w-2/3"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-light mb-8 tracking-tight">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-green-400">FUTURE INTERNS</span>
          </h2>

          <div className="space-y-6 text-lg text-brand-light/70 leading-relaxed font-light">
            <p>
              At <strong className="text-brand-light font-semibold">Future Interns</strong>, we are redefining how students and young professionals gain real-world experience through <em className="text-brand-primary font-medium not-italic">short-term, milestone-based internships</em>. Our mission is to make learning practical, accessible, and career-focused—empowering individuals from all backgrounds to build confidence, skills, and industry exposure from anywhere in the world.
            </p>
            
            <p>
              With <em className="text-brand-primary font-medium not-italic">ISO-certified programs, hands-on projects, and personalized mentorship</em>, we go beyond traditional internships. Whether you're looking to strengthen your resume, explore new domains, or gain verified credentials, Future Interns acts as your launchpad for professional growth.
            </p>
            
            <div className="p-6 rounded-2xl bg-brand-muted border border-brand-primary/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <p className="relative z-10 text-xl font-medium text-brand-light">
                We proudly support a growing community of <span className="text-brand-primary font-bold">10,000+ interns</span> who are actively learning, building, and advancing in their careers.
              </p>
            </div>

            <p>
              Beyond internships, we also deliver <em className="text-brand-primary font-medium not-italic">custom business solutions including data analytics, dashboards, web development, and AI-powered chatbot systems</em>. Our approach combines fresh talent with innovative thinking to create scalable and impactful digital solutions.
            </p>

            <p className="text-xl text-brand-light font-medium pt-4">
              Whether you're here to learn, build, or collaborate— <span className="text-brand-primary font-bold">Future Interns</span> is your partner in shaping a smarter, future-ready world.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/3 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={2500}
            className="w-full max-w-sm"
          >
            <div className="relative p-2 rounded-full overflow-hidden border border-brand-border shadow-[0_0_50px_rgba(22,163,74,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-green-300/10" />
              <img
                src="https://futureinterns.com/wp-content/uploads/2025/05/cropped-cropped-Future-Interns-Site-Logo.png"
                className="w-full h-auto rounded-full"
                alt="Future Interns Avatar"
              />
            </div>
          </Tilt>
        </motion.div>
      </div>
    </div>
  );
}

export default Home2;
