import { Download, FileText, Eye } from "lucide-react";
import { SectionHeader, Panel, Badge } from "../components/ui";
export default function Resume() {
  const documents = [
    { name: "Resume", filename: "Mohd_Sayem_Lari_Resume.pdf" },
    { name: "CV", filename: "Mohd_Sayem_Lari_CV.pdf" },
  ];
  return (
    <>
      <SectionHeader
        index="06"
        title="Document inventory"
        description="A place for my resume and curriculum vitae."
      />
      <div className="documents-grid">
        {documents.map(({ name, filename }, i) => (
          <Panel className="document-card" key={name}>
            <div className="document-top">
              <FileText size={32} />
              <span className="field-label">DOCUMENT / 0{i + 1}</span>
            </div>
            <h2>{name}</h2>
            <p>
              {name === "Resume"
                ? "A concise overview of my projects, skills and experience."
                : "A detailed record of my education and development work."}
            </p>
            <div className="document-notice">
              <Badge tone="yellow">PDF DOCUMENT</Badge>
              <p>
                View my {name.toLowerCase()} in a new tab or download a copy
                for later.
              </p>
            </div>
            <div className="document-actions">
              <a
                className="pixel-button"
                href={`/${filename}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye size={16} />
                VIEW {name.toUpperCase()}
                <span className="sr-only"> (PDF, opens in a new tab)</span>
              </a>
              <a
                className="pixel-button secondary"
                href={`/${filename}`}
                download={filename}
              >
                <Download size={16} />
                DOWNLOAD {name.toUpperCase()}
                <span className="sr-only"> (PDF)</span>
              </a>
            </div>
          </Panel>
        ))}
      </div>
    </>
  );
}
