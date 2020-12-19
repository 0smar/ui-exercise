import React from 'react';

import infoIcon from '../images/info.svg';
import logo from '../images/slmail.svg';

function Header() {
  return(
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" data-testid="project-logo"/>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search email" />
      </div>
      <div className="user-controls">
        <a className="button" href="https://github.com/0smar/ui-exercise" target="_blank" rel="noreferrer">
          <img src={infoIcon} alt=""/>
        </a>
        <div className="avatar">
          OR
        </div>
      </div>
    </div>
  )
}

export default Header;