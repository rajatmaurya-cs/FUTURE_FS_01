import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Store,
  HeartPulse,
  ShoppingCart,
  Building2,
  GraduationCap,
  Plane,
  DollarSign,
  Stethoscope,
  Truck,
  Monitor,
  Landmark,
} from "lucide-react";

const industries = [
  { name: "Coaches & Consultants", icon: Users, bg: "bg-sky-200", iconColor: "text-sky-600" },
  { name: "Local Service Businesses", icon: Store, bg: "bg-lime-200", iconColor: "text-lime-600" },
  { name: "Health & Wellness", icon: HeartPulse, bg: "bg-pink-200", iconColor: "text-pink-600" },
  { name: "E-commerce & Small Product Brands", icon: ShoppingCart, bg: "bg-orange-200", iconColor: "text-orange-600" },
  { name: "Real Estate Agencies", icon: Building2, bg: "bg-blue-200", iconColor: "text-blue-600" },
  { name: "Education & eLearning", icon: GraduationCap, bg: "bg-fuchsia-200", iconColor: "text-fuchsia-600" },
  { name: "Travel & Hospitality", icon: Plane, bg: "bg-purple-200", iconColor: "text-purple-600" },
  { name: "Finance / Insurance", icon: DollarSign, bg: "bg-green-200", iconColor: "text-green-600" },
  { name: "Healthcare", icon: Stethoscope, bg: "bg-yellow-200", iconColor: "text-yellow-600" },
  { name: "Logistics & Supply Chain", icon: Truck, bg: "bg-violet-200", iconColor: "text-violet-600" },
  { name: "SaaS & Tech Startups", icon: Monitor, bg: "bg-teal-200", iconColor: "text-teal-600" },
  { name: "Banking Service", icon: Landmark, bg: "bg-emerald-200", iconColor: "text-emerald-600" },
];

function Toolstack() {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 max-w-6xl mx-auto pb-12">
      
      {/* Left: Heading + Description */}
      <motion.div
        className="w-full lg:w-2/5 lg:sticky lg:top-40"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-brand-primary font-semibold uppercase tracking-wider text-sm mb-4">
          Industries We Work For
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-brand-light leading-tight mb-6">
          Helping Businesses in All Domains
        </h2>
        <p className="text-brand-light/60 text-lg leading-relaxed">
          Trusted by businesses worldwide, we deliver exceptional digital solutions tailored to your industry needs. Our proven expertise helps companies grow and succeed in today's competitive digital landscape.
        </p>
      </motion.div>

      {/* Right: Industry Cards Grid */}
      <div className="w-full lg:w-3/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {industries.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.name}
              className={`${item.bg} rounded-2xl p-5 flex flex-col items-center justify-center text-center gap-3 min-h-[120px] cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.04]`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className={`w-10 h-10 flex items-center justify-center rounded-xl bg-white/60 ${item.iconColor}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-brand-light/80 leading-tight">
                {item.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Toolstack;
