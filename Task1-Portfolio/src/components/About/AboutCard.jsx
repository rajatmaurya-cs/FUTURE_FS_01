import React from "react";
import { ArrowRight } from "lucide-react";

function AboutCard() {
  return (
    <div className="p-8 rounded-3xl bg-brand-muted border border-brand-border shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl -z-10" />

      <blockquote className="space-y-6 text-brand-light/70 text-lg leading-relaxed">
        <p>
          <strong className="text-brand-primary font-semibold">Future Interns</strong> is a <strong className="text-brand-light font-medium">skill-first learning and experience platform</strong> built to bridge the gap between education and real-world work.
          <br /><br />
          We help students and young professionals gain <strong className="text-brand-light font-medium">practical, industry-relevant experience</strong> through internships, hands-on projects, and career-focused programs.
        </p>

        <p>
          Founded in <span className="text-brand-primary font-medium">2024</span>, we are a <strong className="text-brand-light font-medium">MSME-registered and ISO-certified</strong> organization serving thousands of learners across India. Our growing community includes <strong className="text-brand-light font-medium">40,000+ students and professionals</strong> actively building real-world skills.
        </p>

        <ul className="space-y-3 mt-6">
          <li className="flex items-center gap-3">
            <ArrowRight className="w-5 h-5 text-brand-primary" />
            <span>Skill-Based Internships & Real Projects 🚀</span>
          </li>
          <li className="flex items-center gap-3">
            <ArrowRight className="w-5 h-5 text-brand-primary" />
            <span>Hands-On Learning & Career Readiness 💼</span>
          </li>
          <li className="flex items-center gap-3">
            <ArrowRight className="w-5 h-5 text-brand-primary" />
            <span>Business Solutions (Web, Data, AI) 🧠</span>
          </li>
        </ul>

        <div className="pt-6 border-t border-brand-border mt-6">
          <p className="text-brand-primary font-semibold mb-3">Why Future Interns?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-brand-light/60">
            <div className="flex items-center gap-2">✅ MSME Registered</div>
            <div className="flex items-center gap-2">✅ ISO Certified</div>
            <div className="flex items-center gap-2">✅ 40,000+ Community</div>
            <div className="flex items-center gap-2">✅ Real Projects</div>
          </div>
        </div>

        <p className="text-brand-primary/80 italic font-medium mt-6">
          "Building skills through real-world execution."
        </p>
      </blockquote>
    </div>
  );
}

export default AboutCard;
