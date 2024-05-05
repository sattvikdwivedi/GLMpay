import React from 'react';
import Page from './page';
import '../App.css';
import Footer from './Footer';


const ContactUsPage = () => {
    return (
        <>
<div className="App">

<h1 class='text-center heading'>Contact Us</h1>
<div class="container text-start">
  <div class="row">
                    <div class="col-6 p-5 g-col-6">
                        <div className='descriptionss'>
                        <div className='text1'>Let's discuss</div>
                        <div> on something <span style={{ color: '#5DEBD7' }}>cool</span> <div>together
                            </div></div>
                            </div>
      <br/><br/>
      <p>  <i class="fa-solid fa-envelope"> </i>SaulDesign@gmail.com </p>
      <p><i class="fa-solid fa-phone"></i>+123456789</p>
      <p><i class="fa-solid fa-location-dot"></i>123 Street 456 House</p>
    </div>
    <div class="col-6 p-5 g-col-6">
      <p>I'm interested in...</p>
      <button class="btn1 m-2">Be partner</button>
      <button class="btn1 m-2">Advertise</button>
      <button class="btn1 m-2">Complaint</button>
      <button class="btn1 m-2">Careers</button>
      <button class="btn1 m-2">Other</button>
      <input
        class="form-control form-control-sm mt-3"
        type="text"
        placeholder="Your name"
        aria-label=".form-control-sm example"
      />
      <input
        class="form-control form-control-sm mt-3"
        type="text"
        placeholder="Your email"
        aria-label="default input example"
      />
      <input
        class="form-control form-control-sm mt-3"
        type="text"
        placeholder="Your message"
        aria-label=".form-control-sm example"
      />
      <div class="wrapper">
      <button class='btn21 m-4'><i class="fa-solid fa-paper-plane"></i>&nbsp;Send Message</button>
      </div>
    </div>
  </div>
</div>
            </div>
            <Footer></Footer>
        </>


    );
}

export default ContactUsPage;
