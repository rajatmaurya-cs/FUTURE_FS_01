import React from "react";
import { Github, Linkedin } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-white/80 backdrop-blur-lg border-t border-brand-border py-6">

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* LEFT */}
        <div className="flex items-center text-sm font-medium text-brand-light/60 gap-2 whitespace-nowrap">
          <span>Designed and Developed by</span>

          <span className="text-green-500 font-semibold">
            Rajat Maurya
          </span>

          <a
            href="https://rajat-dev.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green-500 hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-external-link"
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </a>
        </div>

        {/* CENTER */}
        <div className="text-sm font-medium text-brand-light/40 text-center">
          © {year} All rights reserved
        </div>

        {/* RIGHT */}
        <ul className="flex items-center gap-5">
          <li>
            <a
              href="https://github.com/rajatmaurya-cs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-light/50 hover:text-black transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/rajat-maurya-3a172331b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-light/50 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </li>
        </ul>

      </div>
    </footer>
  );
}

export default Footer;