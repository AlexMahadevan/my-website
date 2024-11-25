import React, { useEffect } from 'react';
import './CustomCursor.css'; // Ensure the correct path to CSS file

function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    const moveCursor = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return <div className="custom-cursor"></div>;
}

export default CustomCursor;
