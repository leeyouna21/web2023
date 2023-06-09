import React from 'react';

import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header id="header" className={props.attr} role="heading" aria-level="1">
      <div className="header__inner container">
        <h1 className="header__logo">
          <Link to="/">
            web <em>site</em>
          </Link>
        </h1>
        <nav className="header__nav" role="navigation">
          <ul>
            <li>
              <a href="#introSection">소개</a>
            </li>
            <li>
              <Link to="/member">맴버 소개</Link>
            </li>
            <li>
              <Link to="/port">포트폴리오</Link>
            </li>
            <li>
              <Link to="/youtube">유튜브</Link>
            </li>
            <li>
              <Link to="/unsplash">이미지</Link>
            </li>
            <li>
              <Link to="/movie">영화</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
