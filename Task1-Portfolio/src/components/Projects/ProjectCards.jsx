import React from "react";
import Tilt from "react-parallax-tilt";
import { Github, ExternalLink } from "lucide-react";

function ProjectCards(props) {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.02}
      transitionSpeed={2000}
      className="h-full"
    >
      <div className="h-full flex flex-col bg-white border border-brand-border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(22,163,74,0.15)] hover:border-brand-primary/40 group">
        
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img 
            src={props.imgPath} 
            alt="project-img" 
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="flex flex-col flex-grow p-6">
          <h3 className="text-2xl font-bold text-brand-light mb-3 tracking-tight">
            {props.title}
          </h3>
          
          <p className="text-brand-light/60 text-sm leading-relaxed mb-6 flex-grow">
            {props.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-auto">
            <a 
              href={props.ghLink} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-brand-primary text-white text-sm font-semibold rounded-lg transition-all hover:bg-brand-primary/90 hover:shadow-[0_0_15px_rgba(22,163,74,0.3)]"
            >
              <Github className="w-4 h-4" />
              {props.isBlog ? "Blog" : "GitHub"}
            </a>

            {!props.isBlog && props.demoLink && (
              <a 
                href={props.demoLink} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-brand-muted text-brand-primary text-sm font-semibold rounded-lg border border-brand-primary/20 transition-all hover:bg-brand-primary/10"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default ProjectCards;
