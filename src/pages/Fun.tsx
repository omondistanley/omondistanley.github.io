import React, { useState } from "react";
import CustomNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layouts/Layout";
import "../components/Projects/_projects.scss";
import "./_fun-gallery.scss";

interface GalleryItem {
  src: string;
  alt: string;
  type?: "image" | "video";
}

interface GallerySubsection {
  title: string;
  items: GalleryItem[];
}

interface FunSection {
  title: string;
  subsections?: GallerySubsection[];
  items?: GalleryItem[];
}

const funSections: FunSection[] = [
  {
    title: "Art Wall",
    subsections: [
      {
        title: "Walks",
        items: [
          { src: "/art/walks/img-3630.jpg", alt: "Walks 1" },
          { src: "/art/walks/img-3631.jpg", alt: "Walks 2" },
          { src: "/art/walks/img-3632.jpg", alt: "Walks 3" },
        ],
      },
      {
        title: "Views",
        items: [
          { src: "/art/views/img-8540.jpg", alt: "Views 1" },
          { src: "/art/views/img-8543.jpg", alt: "Views 2" },
        ],
      },
      {
        title: "Cooking",
        items: [
          { src: "/fun/cooking/img-9270.jpg", alt: "Cooking 1" },
          { src: "/fun/cooking/img-9268.jpg", alt: "Cooking 2" },
          { src: "/fun/cooking/img-9269.jpg", alt: "Cooking 3" },
          { src: "/fun/cooking/img-9276.jpg", alt: "Cooking 4" },
        ],
      },
    ],
  },
  {
    title: "Photography & Visuals",
    items: [],
  },
  {
    title: "Memes & Gimmicks",
    items: [
      { src: "/fun/memes-gimmicks/img-6517.jpg", alt: "Memes & Gimmicks 1" },
      { src: "/fun/memes-gimmicks/img-9269.jpg", alt: "Memes & Gimmicks 2" },
      { src: "/fun/memes-gimmicks/img-8577.jpg", alt: "Memes & Gimmicks 3" },
      { src: "/fun/memes-gimmicks/img-8588.jpg", alt: "Memes & Gimmicks 4" },
      { src: "/fun/memes-gimmicks/img-2691-clip.mp4", alt: "Memes & Gimmicks clip", type: "video" },
    ],
  },
];

const GalleryGrid: React.FC<{ items: GalleryItem[] }> = ({ items }) => {
  if (items.length === 0) {
    return <p className="gallery-empty">More coming soon.</p>;
  }
  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <a
          key={item.src}
          href={item.src}
          target="_blank"
          rel="noopener noreferrer"
          className="gallery-item"
        >
          {item.type === "video" ? (
            <video src={item.src} muted loop playsInline preload="metadata" />
          ) : (
            <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
          )}
        </a>
      ))}
    </div>
  );
};

const Toggle: React.FC<{
  label: string;
  count: number;
  open: boolean;
  onClick: () => void;
  as: "h3" | "h4";
}> = ({ label, count, open, onClick, as: Tag }) => (
  <Tag className="fun-toggle-heading">
    <button
      type="button"
      className="fun-toggle"
      onClick={onClick}
      aria-expanded={open}
    >
      <i className={`fa fa-chevron-${open ? "down" : "right"} fun-toggle-icon`} aria-hidden="true" />
      <span>{label}</span>
      <span className="fun-toggle-count">{count}</span>
    </button>
  </Tag>
);

const Fun: React.FC = () => {
  const [openKeys, setOpenKeys] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <div className="app-container">
      <CustomNavbar />
      <div className="navbar-spacer" aria-hidden />
      <Layout sidebarVariant="spotifyOnly">
        <section id="fun" className="projects-section my-1">
          <h2>Quests</h2>
          {funSections.map((section) => {
            const sectionKey = section.title;
            return (
              <div key={sectionKey} className="fun-section">
                {section.subsections ? (
                  <>
                    <h3>{section.title}</h3>
                    {section.subsections.map((sub) => {
                      const key = `${sectionKey}::${sub.title}`;
                      const open = openKeys.has(key);
                      return (
                        <div key={key} className="fun-subsection">
                          <Toggle
                            as="h4"
                            label={sub.title}
                            count={sub.items.length}
                            open={open}
                            onClick={() => toggle(key)}
                          />
                          {open && <GalleryGrid items={sub.items} />}
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <Toggle
                    as="h3"
                    label={section.title}
                    count={section.items?.length ?? 0}
                    open={openKeys.has(sectionKey)}
                    onClick={() => toggle(sectionKey)}
                  />
                )}
                {!section.subsections && openKeys.has(sectionKey) && (
                  <GalleryGrid items={section.items ?? []} />
                )}
              </div>
            );
          })}
        </section>
      </Layout>
      <Footer />
    </div>
  );
};

export default Fun;