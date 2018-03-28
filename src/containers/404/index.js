import React from 'react';
import { Link } from 'react-static';
import './style';

export default () => (
  <div className="pagenotfound">
    <p className="notfound">4<span role="img" aria-label="sad face">😞</span>4</p>
    <p>Oh noes! Page not found!</p>
    <p className="link">
      <Link to="/" href="/">Go to homepage</Link>
    </p>
  </div>
);
