import React from 'react';
import './success.css'; // Import the CSS file assuming it's in the same directory
import Image from 'next/image';
import logoImage from '../images.jpg';
function SuccessComponent() {
  return (
    <div>
      <div className="navbar">
        <Image src={logoImage} width="100" height="96" alt="Logo" />
        <nav>
          <ul id="menuList" style={{ maxHeight: '200px' }}>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="/auth/signout">Sign Out</a></li>
          </ul>
        </nav>
      </div>

      <div className="card">
        <div className="circle">
          <i className="checkmark">✓</i>
        </div>
        <h1>Success</h1>
        <p>You have successfully submitted your form<br /> we'll be in touch shortly!</p>
      </div>
    </div>
  );
}

export default SuccessComponent;