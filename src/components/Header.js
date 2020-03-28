import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  state={
    profile: {
      name: 'Roberto',
      facebook_url: 'https://www.facebook.com/RobertoSchuster',
      avatar: 'https://scontent.fria3-1.fna.fbcdn.net/v/t1.0-1/p240x240/26733604_10214731659955197_3447193399133910388_n.jpg?_nc_cat=106&_nc_sid=dbb9e7&_nc_eui2=AeH3BUcGU8V6906jSfnFy-42tohvs0sIbHib6dywHp1F2yT5hrggo2-MR8IJ95a190hNbc03B8C2anx1MejM_TXdytXT4cverFH_WJEh4VeLfA&_nc_ohc=Ga75iN6hU8oAX8nR-ry&_nc_ht=scontent.fria3-1.fna&_nc_tp=6&oh=a00082670704dd3e28193f7d2b8cb9f9&oe=5EA688BD'
    }
  }

  render() {
    return (

      <div className="header">
          <div className="header-logo">facebook</div>
          <div className="header-profile-box">
              <div className="header-avatar" style={{backgroundImage: 'url(' + this.state.profile.avatar + ')'}}></div>            
              <div className="header-profile"><a href={this.state.profile.facebook_url}>{this.state.profile.name}</a></div>
          </div>
      </div>    

    );
  };
};

export default Header;