import React from 'react';
import './Comment.css';

function Comment() {
  return (
    
    <div class="comment">
      <div class="avatar avatar-diego"></div>                
      <div class="comment-text">
          <span class="comment-author">Diego Fernandes</span>
          A rocketseat esta sempre em busca de novos membros para
          o time, e geralmente ficamos de olho em quem se destaca 
          no bootcamp, inclusive 80% do nosso time e composto 
          por ex alunos do bootcamp. Além disso, se você tem 
          vontade de ensinar gravando vídeos e criando conteúdo,
          pode me chamar no Discord!
      </div>
    </div>

  );
};

export default Comment;