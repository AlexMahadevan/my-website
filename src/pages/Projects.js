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
        View Project
      </a>
    </div>
  );
};

const AboutProjects = () => {
  const projects = [
    {
      title: "Community Notes Analysis",
      description: "Analyzed X's crowdsourced fact-checking platform on election day.",
      link: "https://github.com/yourgithubrepo/community-notes-analysis",
    },
    {
      title: "MediaWise RAG Chatbot",
      description: "Built a chatbot for fact-checking using Retrieval-Augmented Generation.",
      link: "https://mediawise.org/chatbot-demo",
    },
    {
      title: "AI Ethics Summit",
      description: "Hosted a summit on AI's impact on journalism and ethics.",
      link: "https://poynter.org/ai-ethics-summit",
    },
    {
      title: "Data Journalism Course",
      description: "Developed a course to teach journalists how to leverage data storytelling.",
      link: "https://datajournalism.org/course",
    },
    {
      title: "Generative AI Tools for Newsrooms",
      description: "Created an AI tool suite for enhancing newsroom workflows.",
      link: "https://github.com/yourgithubrepo/ai-newsroom-tools",
    },
    {
      title: "Media Literacy Podcast",
      description: "Produced a podcast series on combatting misinformation.",
      link: "https://mediawise.org/podcast",
    },
    {
      title: "Audience Engagement Metrics Dashboard",
      description: "Designed an interactive dashboard for measuring engagement across platforms.",
      link: "https://github.com/yourgithubrepo/engagement-dashboard",
    },
    {
      title: "YouTube Influencer Research",
      description: "Conducted research on influencer impact on audience trust.",
      link: "https://example.com/influencer-research",
    },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>My Projects</h1>
      <p>Here are some of the key projects that highlight my skills in media literacy, technology, and journalism:</p>
      <div style={{ display: "grid", gap: "1.5rem" }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default AboutProjects;
