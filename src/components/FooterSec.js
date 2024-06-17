import React from 'react';
import './css/styleToAll.css';
import './css/footer.css';
import toButton from '../photos/toButton.png';
import logoName from '../photos/logo-name.png';
import logoIcon from '../photos/logo-icon.png';
export default function FooterSec(){
    return (
       <footer>
            <div className="container">
                <div className='hire'>
                    <p> Hire the best developers and <br/>
                    designers around here</p> 
                    <div className='right-hire'>
                        <img src= {toButton}/>
                       <button> Hire Top Developers</button>
                    </div>
                    </div>

                    <div className='footer-end'>
                        <div className='logo-end'>
                            <img src={logoIcon}/>
                            <img src={logoName}/>
                            <p>Lorem ipsum dolor here sit amet consectetur adipisicing elit. Animi quam ex doloribus et illum minus a vitae dicta architecto! Sapiente, voluptatibus.</p>
                            <div className="google-icon"> Google 100</div>
                        </div>
                        <div className='links-end'>
                            <h5>Links</h5>
                            <ul> 
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Case Studies</li>
                                <li>How It works</li>
                                <li>Blog</li>
                                <li>Careers</li>
                                <li>Areas We Serve</li>
                            </ul>
                        </div>
                        <div className='contact-end'>
                            <h5>Contact Us</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quam ex doloribus et illum minus a vitae dicta architecto! Sapiente, voluptatibus.</p>
                            <p> +9223435345345</p>
                        </div>
                        <div className='social-end'> 
                            <span>  Social icons</span>
                            <i class="fa fa-address-book" aria-hidden="true"></i>
                        </div>

                    </div>
                
            </div>
            <hr/>
            <p> 2024 CopyWright IK Developers All rights reserved</p>
        </footer>
    );
}