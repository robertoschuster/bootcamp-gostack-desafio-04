import React from 'react';
import './Post.css';
import Comment from './Comment';

function Post({ data }) {
  return (
    <>
      <div className="post">            
          <div className="post-header">
            <a href={data.author.facebook_url}><div className="avatar" style={{backgroundImage: 'url(' + data.author.avatar + ')'}}></div></a>
            <div>
                <div className="post-author"><a href={data.author.facebook_url}>{data.author.name}</a></div>
                <div className="post-date">{data.date}</div>    
            </div>
          </div>
          <div className="post-text">{data.content}</div> 

          { data.image && <img className="post-img" src={data.image}/>} 
          
                    
          

          { data.comments.length > 0 && <hr/>}

          { data.comments &&
            data.comments.map(comment => 
              <Comment 
                key={comment.id} 
                data={comment}
              />
            )
          }


      </div>
    </>
  );
};

export default Post;