import React from 'react';
import { Link } from 'react-static';
import AppConfig from '../../AppConfig';
import './style';

const Footer = () => (
  <div className="footer">
    <div className="description">
      <div className="about">
        <p className="title">Open Agenda</p>
        <p>
          An open source project to promote and share events and meetups.<br />
          Please fork the project and help improving it.
        </p>
      </div>
      <div className="links">
        <p className="title">Links</p>
        <ul>
          <li className="listItem">
            <Link
              to={AppConfig.githubUrl}
              href={AppConfig.githubUrl}
              target="_blank"
              rel="noopener"
            >
              GitHub
            </Link>
          </li>
          <li className="listItem">
            <Link to="/about" href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="copywrite">
      Made with <span className="love">❤</span> !
    </div>
  </div>
);

export default Footer;
