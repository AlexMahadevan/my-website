import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import fm from 'front-matter'; // For parsing metadata
import styles from '../styles/Blog.module.css';

function Blog() {
  const [posts, setPosts] = useState([]);

  // Markdown files
  const postFiles = ['/posts/post1.md', '/posts/post2.md', '/posts/post3.md'];

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await Promise.all(
        postFiles.map(async (file) => {
          const response = await fetch(file);
          if (!response.ok) {
            return { attributes: { title: 'Error', date: 'N/A' }, body: 'Failed to load content.' };
          }
          const text = await response.text();
          const { attributes, body } = fm(text); // Parse metadata and content
          return { attributes, body };
        })
      );
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.title}>Some writing</h1>
      <div className={styles.postsContainer}>
        {posts.map((post, index) => (
          <div key={index} className={styles.post}>
            <h2 className={styles.postTitle}>{post.attributes.title}</h2>
            <p className={styles.date}>{post.attributes.date}</p>
            <ReactMarkdown className={styles.content}>{post.body}</ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
