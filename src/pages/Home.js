import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import profileImage from '../assets/profile.jpg';
import workImage1 from '../assets/work1.jpg';
import workImage2 from '../assets/work2.jpg';
import workImage3 from '../assets/work3.jpg';

function Home() {
  const [greeting, setGreeting] = useState('Hi');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img src={profileImage} alt="Profile" className={styles.profileImage} />
        <div className={styles.introText}>
          <h1>I'm Alex Mahadevan</h1>
          <p>
            I'm a journalist, data nerd, trainer and researcher working at the intersection of generative AI, media literacy and misinformation. I'm also a drummer, runner and smartass.
          </p>
          <p>
            <em>Note: I am using this site as a crash course in React. So don't judge, pls.</em>
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <h2>What I do</h2>
        <p>
          I'm currently the director of <a href="https://poynter.org/mediawise" target="_blank">MediaWise</a>, a digital media literacy program based out out of the Poynter Institute.
          I'm also <a href="https://www.poynter.org/news-release/2024/kristen-hare-local-news-alex-mahadevan-ai/" target="_blank">on faculty</a>, where I lead our AI Steering Committee and run workshops on emerging technologies, verification and OSINT.
          I spend more time than I'd care to admit studying X's <a href="https://www.poynter.org/fact-checking/2023/why-twitters-community-notes-feature-mostly-fails-to-combat-misinformation/" target="_blank">Community Notes</a>.
        </p>
      </section>

{/* Work Showcase */}
<section className={styles.workSection}>
  <h2>Stuff I've done</h2>
  <div className={styles.workGrid}>
    <a href="https://www.poynter.org/mediawise/programs/seniors/" target="_blank" rel="noopener noreferrer" className={styles.workItem}>
      <img src={workImage1} alt="Work 1" />
      <p className={styles.projectTitle}>MediaWise for Seniors</p>
      <p className={styles.projectSubText}>
      My first program at Poynter was an AARP partnership that included courses, videos and social media PSAs — plus Joan Lunden — teaching older adults how to fight misinformation.
      </p>
    </a>
    <a href="https://www.poynter.org/ethics-trust/2024/poynter-when-it-comes-to-using-ai-in-journalism-put-audience-and-ethics-first/" target="_blank" rel="noopener noreferrer" className={styles.workItem}>
      <img src={workImage2} alt="Work 2" />
      <p className={styles.projectTitle}>Poynter's work on generative AI</p>
      <p className={styles.projectSubText}>
        What started as some ad-hoc generative AI trainings I did for fun in 2023 evolved into a full-blow AI program at Poynter. 
      </p>
    </a>
    <a href="/training" target="_blank" rel="noopener noreferrer" className={styles.workItem}>
      <img src={workImage3} alt="Work 3" />
      <p className={styles.projectTitle}>Tunisia to Bangladesh: Tons of international training</p>
      <p className={styles.projectSubText}>
        Delivering impactful training sessions to journalists worldwide.
      </p>
    </a>
  </div>
</section>

      {/* Call-to-Action */}
      <section className={styles.ctaSection}>
  <h2>Reach out</h2>
  <p>I'm always down to chat about media literacy, misinformation and generative AI. Find me at any of these places to partner on something cool, put me on a panel or for an interview.</p>
  <div className={styles.ctaLinks}>
    <a href="mailto:alex@poynter.org" className={styles.ctaLink}>
      📧 Email me
    </a>
    <a
      href="https://www.linkedin.com/in/alexmahadevan/"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.ctaLink}
    >
      💼 Connect on LinkedIn
    </a>
    <a
      href="https://bsky.app/profile/alexmahadevan.com"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.ctaLink}
    >
      🌐 Follow me on Bluesky
    </a>
  </div>
</section>
    </div>
  );
}

export default Home;
