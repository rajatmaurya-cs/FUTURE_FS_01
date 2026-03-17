import React from "react";
import { motion } from "framer-motion";
import { Rocket, Globe, Handshake, Users, MessageSquare } from "lucide-react";

const stats = [
  {
    icon: Rocket,
    value: "200+",
    label: "Projects Delivered",
    color: "text-blue-500",
  },
  {
    icon: Globe,
    value: "10+",
    label: "Countries Represented",
    color: "text-green-500",
  },
  {
    icon: Handshake,
    value: "50+",
    label: "Clients Served",
    color: "text-yellow-500",
  },
  {
    icon: Users,
    value: "100+",
    label: "Team Members",
    color: "text-blue-600",
  },
  {
    icon: MessageSquare,
    value: "24/7",
    label: "Support Available",
    color: "text-cyan-500",
  },
];

function Techstack() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 max-w-6xl mx-auto py-12 px-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Animated Icon Container */}
            <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
              {/* Rotating Circle Background */}
              <motion.div
                className="absolute inset-0 border-2 border-dashed border-brand-primary/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 border border-brand-primary/10 rounded-full bg-brand-primary/5"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Icon with float animation */}
              <motion.div
                className={`${stat.color} relative z-10 transition-transform duration-300 group-hover:scale-110`}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
              >
                <Icon size={40} strokeWidth={1.5} />
              </motion.div>
            </div>

            {/* Content */}
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-brand-light mb-1"
              whileHover={{ scale: 1.05 }}
            >
              {stat.value}
            </motion.h3>
            <p className="text-brand-light/60 text-sm md:text-base font-medium">
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Techstack;
