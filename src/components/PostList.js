import React, { Component } from 'react';
import './PostList.css';
import Post from './Post';

class PostList extends Component {

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          facebook_url: 'https://www.facebook.com/julio.alcantara.9619',          
          avatar: "https://scontent.fria3-1.fna.fbcdn.net/v/t1.0-1/p160x160/66128512_2292809240829422_1074498378194223104_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_eui2=AeEAOaf-uUhiNNHlJpMsL1IxRE98JRk-5ODdKpetZ4hnILWdWqesfNHNIRXbRiNOpJr0uZYBQNGKnxfM0zJlDa2YEMajmqoF1Z7sYqhDvj81MQ&_nc_ohc=EvTKhOfiL60AX9ORvU0&_nc_ht=scontent.fria3-1.fna&_nc_tp=6&oh=d8c902ea2623ab4343b5fd3a0e431f4d&oe=5EA60308"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              facebook_url: 'https://www.facebook.com/diego.schell.fernandes',              
              avatar: "https://scontent.fria3-1.fna.fbcdn.net/v/t1.0-1/p160x160/59480734_2249174048509235_2974090043016085504_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_eui2=AeErnS1aKiF0jPq-lQoM6bufnUZIublyMpeU3V0l1mDv1X23RxEMFd-NF6aaXAqh6bPvo8wz159xPOTnp2FFuDDP3qoGYyUosUilFvxPZp-33Q&_nc_ohc=tL2sQu_KxNsAX9L7el2&_nc_ht=scontent.fria3-1.fna&_nc_tp=6&oh=b38c0435b60cb73da156b36909dbe45f&oe=5EA55733"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real!)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          facebook_url: 'https://www.facebook.com/gabriel.lisboa.7',          
          avatar: "https://scontent.fria3-1.fna.fbcdn.net/v/t1.0-1/p160x160/87936848_3065350366850186_5212260946218582016_o.jpg?_nc_cat=106&_nc_sid=dbb9e7&_nc_eui2=AeH2jk65ozix1KbHytUN0TFljHd2HtKT3xmiIRVay21nAfq3vihknskm_mQEaIoJk2293XQncQRvnprN-_EHvCKHH6yNUpcZhatK-o6_5A6jUA&_nc_ohc=6mZfXjMvmFIAX_Gz2Pn&_nc_ht=scontent.fria3-1.fna&_nc_tp=6&oh=d3b3763900cef509ba5d5b18e57d7f14&oe=5EA59D32"
        },
        date: "04 Jun 2019",
        content: "Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa!Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.", 
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              facebook_url: 'https://www.facebook.com/clara.lisboa.39',
              avatar: "https://scontent.fria3-1.fna.fbcdn.net/v/t1.0-1/p160x160/85131307_2636258863140097_2795835353905233920_n.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_eui2=AeE6dn_WLDR5--XOUh8aq29_F3P267Xl5pvXy_RF-TOGe_bGdxq88_pc3X2mPcy5QiVDXMsyRsExrtP2hTV2FDaFBjtEBl63pRDJMw1_7z7TNQ&_nc_ohc=qAT7Wova39IAX96fPLI&_nc_ht=scontent.fria3-1.fna&_nc_tp=6&oh=7228e4665e191b0359986b16929d9a0a&oe=5EA3C517"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios concluída."
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              facebook_url: 'https://www.facebook.com/cezar.toledo.7',
              avatar: "https://scontent.fria3-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/88316136_10215575657048901_9203691946948689920_o.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_eui2=AeGHj5KLjhBn-GrGOFq1k59R8YIAC4K7bFDx4LlGLmFl4SQvl76ugkQ0tj_AE7UZgK_VVP5yEqC0TsqP7ZA9v4iR2hYBbsIksqKo2iQm_iHjRQ&_nc_ohc=lr5h7b22SbkAX96EiCl&_nc_ht=scontent.fria3-1.fna&oh=12a5a8566783fbbea946eeb6f17e378a&oe=5EA60100"
            },
            content: "Que maaaassa! Estou pensando em me inscrever na próxima turma para ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!."
          },
        ]
      },
      {
        id: 3,
        author: {
          name: "Rocketseat",
          facebook_url: 'https://www.facebook.com/rocketseat',          
          avatar: "https://scontent.fria3-1.fna.fbcdn.net/v/t1.0-9/26731144_211705696042579_7038053465160362224_n.png?_nc_cat=101&_nc_sid=85a577&_nc_eui2=AeHOfqlUqDGFbu_m3qMNu8rVMvEMxKASBs-TM7eHnQtTBP3l1SunGaVFJkhTNTJ9uAiNibbHlpfrBp9bQtNf1LEfdvzRQd1dQVnhdvOX8IIGAA&_nc_ohc=3I6FOp5_F0EAX-K2xuR&_nc_ht=scontent.fria3-1.fna&oh=ef3dd84574457f3719f0e430406dfa3d&oe=5EA3BBA1"
        },
        date: "04 Jun 2019",
        content: "Qual você utiliza, yarn ou npm?", 
        image: 'https://scontent.fria3-1.fna.fbcdn.net/v/t15.5256-10/p480x480/83905639_1194835257574758_547728284381609984_n.jpg?_nc_cat=111&_nc_sid=08861d&_nc_eui2=AeHnHjypjHaiRZwZpKghZoAIkhocHSPgfCvXaoL2lKrK5fKjx6as2Nsmb69jKucnp4R63FPLLtFicMv7aQpxE6BLx527UDrpmLroBCBEn2IEXw&_nc_ohc=dbO1cy7GAHIAX8QeZrP&_nc_ht=scontent.fria3-1.fna&_nc_tp=6&oh=a52977b2f532e125357c04c0d8d11691&oe=5EA70F52',
        comments: [],
      },

    ]
  };

  render() {
    return (
      <div className="post-list">
        {this.state.posts && this.state.posts.map(post => (
          <Post
            key={post.id}
            data={post}
          />
        ))}
      </div>
    );
  };

}


export default PostList;