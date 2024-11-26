import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import fm from 'front-matter';
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

  const filteredPosts = posts.filter((post) =>
    post.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.title}>Some writing</h1>

      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchBar}
        />
      </div>

      {/* Blog Posts */}
      <div className={styles.postsContainer}>
        {filteredPosts.map((post, index) => (
          <div key={index} className={styles.post}>
            <h2 className={styles.postTitle}>{post.attributes.title}</h2>
            <p className={styles.date}>{post.attributes.date}</p>
            {expandedPost === index ? (
              <>
                <ReactMarkdown className={styles.content}>{post.body}</ReactMarkdown>
                <button onClick={() => setExpandedPost(null)} className={styles.toggleButton}>
                  Show Less
                </button>
              </>
            ) : (
              <>
                <p className={styles.contentPreview}>
                  {post.body.substring(0, 150)}... {/* Show preview */}
                </p>
                <button onClick={() => setExpandedPost(index)} className={styles.toggleButton}>
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
