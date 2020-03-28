import React from 'react';
import './Comment.css';

function Comment({ data }) {
  return (
    
    <div className="comment">
      <a href={data.author.facebook_url}><div className="avatar" style={{backgroundImage: 'url(' + data.author.avatar + ')'}}></div></a>
      <div className="comment-text">
          <span className="comment-author"><a href={data.author.facebook_url}>{data.author.name}</a></span>&nbsp;
          {data.content}
      </div>
    </div>

  );
};

export default Comment;