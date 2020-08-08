import React, { Component } from 'react';
import './HamburgerButton.css';

const HamburgerButton = () => {
  const toggleActive = () => {
    let HamButton = document.getElementById('hamburger');
    HamButton.classList.toggle('active')
  };
  return (
    <svg
      className='ham hamRotate ham1'
      id='hamburger'
      viewBox='0 0 100 100'
      width='45'
      onClick={toggleActive}
    >
      <path
        className='line top'
        d='m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40'
      />
      <path className='line middle' d='m 30,50 h 40' />
      <path
        className='line bottom'
        d='m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40'
      />
    </svg>
  );
};

export default HamburgerButton;
