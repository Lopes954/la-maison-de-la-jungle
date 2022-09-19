import React, { Component } from 'react';
import logo from '../assets/logo.png'

export default class Banner extends Component {
  render() {
    const title = 'La maison jungle'
    return (
      <div className="lmj-banner">
        
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
      </div>
    );
  }
}
