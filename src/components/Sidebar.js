import React from 'react';
import TagBar from './TagBar';

import inboxIcon from '../images/inbox.svg';

function Sidebar({ tags, handleTagClick, resetEmails }) {
  return(
    <div className="sidebar">
      <div className="button-sidebar" onClick={resetEmails}>
        <img src={inboxIcon} alt=""/>
        <span>Inbox (reset)</span>
      </div>
      <TagBar tags={tags} handleTagClick={handleTagClick} />
    </div>
  )
}

export default Sidebar;