import React from 'react';
import './Post.css';
import Comment from './Comment';

function Post() {
  return (
    <>
      <div class="post">            
          <div class="post-header">
              <div class="avatar avatar-julio"></div>
              <div>
                  <div class="post-author">Júlio Alcantara</div>
                  <div class="post-date">04 Jun 2019</div>    
              </div>
          </div>
          <div class="post-text">Pessoal, algém sabe se a Rocketseat está contratando?</div>            
          <hr/>
          <Comment />
          <Comment />
      </div>
    </>
  );
};

export default Post;