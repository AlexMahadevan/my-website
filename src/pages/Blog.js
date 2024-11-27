import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import fm from 'front-matter';
import rehypeRaw from 'rehype-raw'; // Allows raw HTML rendering
import { marked } from 'marked'; // Markdown parser
import styles from '../styles/Blog.module.css';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedPost, setExpandedPost] = useState(null);

  const postFiles = ['/posts/post1.md', '/posts/post2.md', '/posts/post3.md'];

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await Promise.all(
        postFiles.map(async (file) => {
          const response = await fetch(file);
          const text = await response.text();
          const { attributes, body } = fm(text);
          return { attributes, body };
        })
      );
      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);

  // Function to safely truncate Markdown content
  const truncateMarkdown = (content, length) => {
    const plainText = marked(content).replace(/<[^>]*>/g, ''); // Convert to plain text
    return plainText.length > length ? `${plainText.substring(0, length)}...` : plainText;
  };

  // Custom components for ReactMarkdown
  const components = {
    a: ({ href, children }) => (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  };

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.title}>Some writing</h1>
      <p className={styles.description}>
        Some random thoughts and Bad Writing with links to my work and Edited Writing.
      </p>

      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="What do you want from me???"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchBar}
        />
      </div>

      {/* Blog Posts */}
      <div className={styles.postsContainer}>
        {posts
          .filter((post) =>
            post.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((post, index) => (
            <div key={index} className={styles.post}>
              <h2 className={styles.postTitle}>{post.attributes.title}</h2>
              <p className={styles.dek}>{post.attributes.dek}</p>
              <p className={styles.date}>{post.attributes.date}</p>
              {expandedPost === index ? (
                <>
                  {/* Render full content */}
                  <ReactMarkdown
                    className={styles.content}
                    rehypePlugins={[rehypeRaw]}
                    components={components}
                  >
                    {post.body}
                  </ReactMarkdown>
                  <button
                    onClick={() => setExpandedPost(null)}
                    className={styles.toggleButton}
                  >
                    Show Less
                  </button>
                </>
              ) : (
                <>
                  {/* Render preview safely */}
                  <p className={styles.contentPreview}>
                    {truncateMarkdown(post.body, 150)}
                  </p>
                  <button
                    onClick={() => setExpandedPost(index)}
                    className={styles.toggleButton}
                  >
                    Read More
                  </button>
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Blog;
