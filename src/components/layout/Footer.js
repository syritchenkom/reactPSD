import React, { useState } from 'react';
import './layout.scss';
import {ImBriefcase, ImMail2, ImPhone, ImLocation} from "react-icons/im"
import {Link} from 'react-router-dom';
import {CustomModal} from "../modul/CustomModal";
import GoogleMaps from '../modul/GoogleMaps'

const Footer = () => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <footer>
            <div className='footer-top'>
               <div className='container'>
                   <div className='footer-section'>
                       <div className='footer-contact'>
                            <div className='footer-title'>
                                <h4> Comprehensive plant closure</h4>
                            </div>
                           <div className='footer-text'>
                               <p>Complete termination of the existence of a legal entity while maintaining the legality of all previous activities.</p>
                           </div>
                           <div className='footer-btn'>
                               <button
                                   onClick={() => setOpenModal(true)}
                                   className='btn'
                               >
                                   <ImBriefcase />
                                   Free consultation
                               </button>
                               <CustomModal isOpen={openModal} onRequestClose={() => setOpenModal(false)} />
                           </div>
                           <div className='footer-social'>
                               <Link to='tel:3809630921' className="footer-phone">
                                   <ImPhone />
                                   +18 (065) 309 21 45
                               </Link>
                               <Link to='/' className="footer-mail">
                                   <ImMail2 />
                                   layout585@gmail.com
                               </Link>
                               <Link to='/' className='footer-location'>
                                   <ImLocation />
                                   Wrocław, ul Lwowska 25
                               </Link>
                           </div>
                       </div>
                       <div className='footer-map'>
                            <GoogleMaps />
                       </div>
                   </div>
               </div>
            </div>
            <div className='footer-content'>
                <div className='container'>
                    <div className='footer-copyright'>
                        <p>© 2017 Template by Anastasia Shaposhnyk. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;