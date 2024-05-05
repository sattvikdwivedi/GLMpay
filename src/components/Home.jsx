import React from 'react';
import { Link } from 'react-router-dom';
import Images from './Logo/GlmLogo.png';
import Images2 from './Logo/google-play-badge.png';
import Images3 from './Logo/file.png';
import MobileImage from "./Logo/mobile.png";
import Circle from './Logo/circle.png';
import '../App.css';

const Home = () => {
  return (
    <div className='main' style={{ background: 'linear-gradient(180deg, rgba(40, 161, 151, 0.03) 0%, rgba(15, 59, 55, 0.03) 100%)' }}>
      <div className="containers">
        <img src={Images} alt='Myimages' className="logo" />
        <div className='main_middle'>
          <h4><Link to="/" className="Link">Home</Link></h4>
          <h4><Link to="/about-us" className="Link">About Us</Link></h4>
          <h4><Link to="/careers" className="Link">Careers</Link></h4>
          <h4><Link to="/contactus" className="Link">Contact Us</Link></h4>
          <h4><Link to="/OurTeams" className="Link">OurTeams</Link></h4>
        </div>
        <div className='header_end'>
          <button className='btn2'>Download Now</button>
        </div>
      </div>
      <div className='secondMiddle'>
        <div className='contents'>
          <div className='inner'>
            <span className='innerText'>International </span><span>Fund Transfer..</span>
            <p>Utility Bill Payments & <span className='innerText'>Recharges</span></p>
          </div>
          <div className='contents2'>
            <p className='content2text'> Coming Soon!</p>
            <p className='description'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className='images'>
              <img src={Images2} alt='Error1' style={{ marginRight: '10px' }} width={"135px"} height={"40px"} />
              <img src={Images3} alt='Error2' width={"135px"} height={"40px"} />
            </div>
          </div>
        </div>
        <div className='photos1'>
          <img className='MobileImage' src={MobileImage} width={400} height={512} alt='Mobile'></img>
        </div>
        <div className='photos2'>
          <img className='CircleImage' src={Circle} width={239} height={231} alt='Circle'></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
