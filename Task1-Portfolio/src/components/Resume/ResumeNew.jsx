
import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle";

import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";


pdfjs.GlobalWorkerOptions.workerSrc =
  pdfWorker;

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
    <Container fluid className="resume-section">

      <Particle />

      
       <Row style={{ justifyContent: "center", position: "relative", marginBottom: "5px"}}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download Resume
        </Button>
      </Row>


      <Row style={{ justifyContent: "center" }}>
        <Document
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={() => setLoadError(true)}
          loading="Loading resume..."
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Row key={index} style={{ justifyContent: "center" }}>
              <Page
                pageNumber={index + 1}
                scale={width > 786 ? 1.6 : 0.9}
              />
            </Row>
          ))}
        </Document>
      </Row>
      {loadError && (
        <Row style={{ justifyContent: "center", marginTop: "8px" }}>
          <p>Unable to preview resume. Please use the download button.</p>
        </Row>
      )}

    

      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download Resume
        </Button>
      </Row>

    </Container>
  );
}

export default ResumeNew;
