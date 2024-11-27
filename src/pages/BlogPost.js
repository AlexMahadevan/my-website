import React from 'react';
import { BlueskyComments } from 'bluesky-comments';

function BlogPost({ post }) {
  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      {/* Bluesky Comments Section */}
      <div style={{ marginTop: '2rem' }}>
        <h2>Comments</h2>
        <BlueskyComments threadUrl={`https://bsky.app/profile/alexmahadevan.com/post/${post.slug}`} />
      </div>
    </div>
  );
}

export default BlogPost;
