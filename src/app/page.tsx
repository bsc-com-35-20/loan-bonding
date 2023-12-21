'use client'
import React, { useState } from 'react';
import './landingPage.css'; 
import Image from 'next/image';
import logoImage from './images.jpg';
import menu from './menu.png'
import StudentImage from './image_by_url.jpeg';

function App() {
  const [menuHeight, setMenuHeight] = useState('0px');

  const toggleMenu = () => {
    const newHeight = menuHeight === '0px' ? '130px' : '0px';
    setMenuHeight(newHeight);
  };

  return (
    <main>
      <div className="container">
      <div className="navbar">
        <Image src={logoImage} width={200} height={152} alt="Logo" />
        <nav>
          <ul id="menuList" style={{ maxHeight: menuHeight }}>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Login</a></li>
            <li><a href="">Sign up</a></li>
          </ul>
        </nav>
        <Image src={menu}  width = {300} height= {30} alt="menu" className="menu" onClick={toggleMenu} />
      </div>
      <div className="row">
        <div className="col-1">
          <h2>Online Bonding <br />for Students</h2>
          <h3>Streamline your bonding process with our online platform.</h3>
          <p>Say goodbye to long queues and paperwork! Submit your bond application electronically and get a faster response.</p>
          <br />
          <br />
          <button>Get started <img src="img/arrow.png" alt="" /></button>
        </div>
        <div className="col-2">
          <Image src={StudentImage} width={500} height={500} className='students' alt="students" />
        </div>
      </div>
      </div>
      <div className="links">
        
        <footer className="footer">
          
  <h3>CONTACT INFO</h3>
  <p>Get in touch with us today!</p>
  <div className='foo'>
  <p>You can always contact us via email or phone.</p>
  
  </div>
  <hr className='hr'/>   <address className='foo'>
    <p>Area 10 Off Mphonongo Street<br />
    Lilongwe<br />
    Malawi<br />
    +265 1 795 955 / 979<br />
    +265 885890520<br />
    <a href="mailto:heslgbsecretariat@heslgb.com">heslgbsecretariat@heslgb.com</a></p>
  </address>
  <p>&copy; 2023 Loans Board. All rights reserved.</p>
</footer>

        
      </div>
      
    </main>
  );
}

export default App;
