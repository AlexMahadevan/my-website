import React from 'react';
import styles from '../styles/Home.module.css';
import profileImage from '../assets/profile.jpg'; // Add a professional image here
import workImage1 from '../assets/work1.jpg'; // Example work image
import workImage2 from '../assets/work2.jpg'; // Example work image

function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img src={profileImage} alt="Profile" className={styles.profileImage} />
        <div className={styles.introText}>
          <h1>Hi, I'm Alex Mahadevan</h1>
          <p>
            I'm a journalist, data nerd, trainer and researcher working at the intersection of generative AI, media literacy and misinformation. I'm also a drummer, runner and smartass. 
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <h2>What I do</h2>
        <p>
          I'm currently the director of MediaWise, a digital media literacy program based out out of the Poynter Institute.
          I'm also on faculty, where I lead our AI Steering Committee and run workshops on emerging technologies, verification and OSINT.
          I also write about X's Community Notes. A lot. 
        </p>
      </section>

          {/* Work Showcase */}
          <section className={styles.workSection}>
        <h2>Some of My Work</h2>
        <div className={styles.workGrid}>
          <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer" className={styles.workItem}>
            <img src={workImage1} alt="Work 1" />
            <p>Project 1: Media Literacy Campaign</p>
          </a>
          <a href="https://example.com/project2" target="_blank" rel="noopener noreferrer" className={styles.workItem}>
            <img src={workImage2} alt="Work 2" />
            <p>Project 2: AI-Powered Fact-Checker</p>
          </a>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className={styles.ctaSection}>
        <h2>Want to Learn More?</h2>
        <p>Check out my blog or get in touch with me!</p>
        <div className={styles.ctaButtons}>
          <a href="/blog" className={styles.ctaButton}>Visit My Blog</a>
          <a href="/contact" className={styles.ctaButton}>Contact Me</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
