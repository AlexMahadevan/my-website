import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function BlogPost({ file }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + file) // Ensure it fetches from the public folder
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load file');
        }
        return response.text();
      })
      .then((text) => setContent(text))
      .catch((error) => {
        console.error('Error fetching markdown:', error);
        setContent('# Error\nUnable to load content.');
      });
  }, [file]);

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default BlogPost;

