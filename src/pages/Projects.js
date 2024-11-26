import React from "react";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({ project }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.5s ease",
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "blue", textDecoration: "underline" }}
      >
        Check it out
      </a>
    </div>
  );
};

const AboutProjects = () => {
  const projects = [
    {
      title: "Community Notes Analysis",
      description: "Analyzed X's crowdsourced fact-checking platform on election day.",
      link: "https://github.com/AlexMahadevan/community-notes",
    },
    {
      title: "Find Facts Fast: A media literacy SMS course",
      description: "Led the editorial development of a text message course featuring celebrity and journalist ambassadors.",
      link: "https://www.poynter.org/mediawise/programs/find-facts-fast/",
    },
    {
      title: "Poynter research on AI ethics in journalism",
      description: "Led the development of an AI ethics summit and accompanying report outlining the principles for ethical AI product development.",
      link: "https://www.poynter.org/ethics-trust/2024/poynter-when-it-comes-to-using-ai-in-journalism-put-audience-and-ethics-first/",
    },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Some projects</h1>
      <p>Here are some projects I've led of which I am particularly proud. They showcase my interests in digital media literacy and emerging technologies.</p>
      <div style={{ display: "grid", gap: "1.5rem" }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default AboutProjects;
