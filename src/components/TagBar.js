import React from 'react';

function TagBar({ tags, handleTagClick }) {
  return (
    <div className="tagbar">
      <h5>Tags</h5>
      <hr/>
      <ul>
        {
          tags.map(tag => (
            <li key={tag}>
              <div className="tag" onClick={() => handleTagClick(tag)}>{tag}</div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TagBar;