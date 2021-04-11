import React, { useState } from 'react';
import {FaAngleRight} from "react-icons/fa";
import {CustomModal} from "../modul/CustomModal";
import {Link} from "react-router-dom";

export default function AboutCompany () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <section className='about'>
                <div className='container'>
                    <div className='about-content'>
                        <div className='about-title'>
                            <h2>About company</h2>
                        </div>
                        <div className='about-text'>
                            <p>The company specializes in providing services in the field of corporate law, tax consulting, representation in courts, liquidation and bankruptcy of enterprises. Today, the team of the company unites highly professional experts with</p>
                        </div>
                        <div className='about-btn'>
                            <Link
                                to='/about'
                                onClick={() => setOpenModal(true)}
                                className='about-item-btn'
                            >
                                To know more...
                                <FaAngleRight />
                            </Link>
                            <CustomModal isOpen={openModal} onRequestClose={() => setOpenModal(false)} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
