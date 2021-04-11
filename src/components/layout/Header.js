import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../../images/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import './layout.scss';
import {ImPhone, ImMail2, ImBriefcase} from 'react-icons/im';
import { CustomModal } from "../modul/CustomModal";


export const Header = () => {
    const [click, setClick] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
             <header>
                 <div className="header-top">
                     <div className="container">
                         <div className="header-info">
                            <div className="header-social">
                                <NavLink to='tel:3809630921' className="header-phone phone">
                                   <ImPhone />
                                   +18 (065) 309 21 45
                                </NavLink>
                                <NavLink to='/' className="header-mail mail">
                                    <ImMail2 />
                                    layout585@gmail.com
                                </NavLink>
                            </div>
                             <div className='header-btn'>
                                 <button
                                     onClick={() => setOpenModal(true)}
                                     className='btn'
                                     >
                                     <ImBriefcase />
                                     Free consultation
                                 </button>
                                 <CustomModal isOpen={openModal} onRequestClose={() => setOpenModal(false)} />
                             </div>
                         </div>
                     </div>
                 </div>

                 <nav className="navbar">
                     <div className='container'>
                         <div className="navbar-container">
                             <NavLink
                                 to='/'
                                 onClick={closeMobileMenu}
                                 className="header-logo"
                             >
                                 <img src={ Logo } alt="Logos"/>
                             </NavLink>
                             <div className="menu-icon" onClick={handleClick}>
                                 {click ? <FaTimes /> : <FaBars />}
                             </div>
                             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                <li className='nav-item'>
                                    <NavLink
                                        exact to='/'
                                        onClick={closeMobileMenu}
                                        className='nav-links'
                                        activeClassName="active"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                 <li className='nav-item'>
                                    <NavLink
                                        to='/about'
                                        onClick={closeMobileMenu}
                                        className='nav-links'
                                        activeClassName="active"
                                    >
                                        About
                                    </NavLink>
                                </li>
                                 <li className='nav-item'>
                                    <NavLink
                                        to='/services'
                                        onClick={closeMobileMenu}
                                        className='nav-links'
                                        activeClassName="active"
                                    >
                                        Services
                                    </NavLink>
                                </li>
                                 <li className='nav-item'>
                                     <NavLink
                                         to='/contacts'
                                         onClick={closeMobileMenu}
                                         className='nav-links'
                                         activeClassName="active"
                                     >
                                         Contacts
                                     </NavLink>
                                 </li>
                            </ul>
                         </div>
                     </div>
                 </nav>
             </header>
        </>
    );
};

export default Header;
