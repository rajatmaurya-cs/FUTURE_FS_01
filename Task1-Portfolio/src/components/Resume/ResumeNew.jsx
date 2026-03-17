import React, { useState, useEffect } from "react";
import Particle from "../Particle";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

function ResumeNew() {
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [loadError, setLoadError] = useState(false);
  const pdf = "/Resume.pdf";

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoadError(false);
  }

  return (
    <section className="relative min-h-screen pt-32 pb-24 bg-brand-surface overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 z-0">
        <Particle />
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center gap-12">
        
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-center gap-2 px-8 py-3 bg-brand-primary text-white font-semibold rounded-full shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:bg-brand-primary/90 hover:scale-105 transition-all"
        >
          <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          Download Resume
        </a>

        <div className="w-full flex flex-col items-center bg-white border border-brand-border p-4 md:p-8 rounded-3xl shadow-lg max-w-4xl mx-auto min-h-[500px] overflow-hidden">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={() => setLoadError(true)}
            loading={
              <div className="text-brand-light/60 animate-pulse text-lg">
                Loading resume...
              </div>
            }
            className="flex flex-col items-center gap-4"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <div key={`page_${index + 1}`} className="shadow-lg mb-4 overflow-hidden rounded-xl border border-brand-border">
                <Page
                  pageNumber={index + 1}
                  scale={width > 786 ? 1.4 : 0.6}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  className="bg-transparent"
                />
              </div>
            ))}
          </Document>

          {loadError && (
            <div className="text-red-600 bg-red-50 px-6 py-4 rounded-xl border border-red-200 text-center mt-8 text-sm md:text-base">
              Unable to preview resume. Please use the download button.
            </div>
          )}
        </div>

        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-center gap-2 px-8 py-3 bg-brand-primary text-white font-semibold rounded-full shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:bg-brand-primary/90 hover:scale-105 transition-all"
        >
          <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default ResumeNew;
