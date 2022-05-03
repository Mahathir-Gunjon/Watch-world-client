import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <ul>
        <Link
          style={{ color: match ? 'cyan' : 'black' }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </ul>
    </div>
  );
}

export default CustomLink;