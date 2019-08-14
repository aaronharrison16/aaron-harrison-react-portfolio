import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return (
    <div>
      <h2>This is the blog page</h2>

      <div>
        <Link to="/about">About Me</Link>
      </div>
    </div>
  );
}