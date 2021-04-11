import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaAngleRight} from "react-icons/fa";
import {CustomModal} from "./CustomModal";

function ServiceItem(props) {

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className='service-item'>
                <img src={props.src} alt='Image_1' className='service-img' />
                <div className='service-item-title'>
                    <h3>{props.title}</h3>
                </div>
                <div className='service-text'>
                    <p>{props.text}</p>
                </div>
                <div className='service-item-button'>
                    <Link
                        to={props.item}
                        className='service-left'
                    >
                        More details
                    </Link>
                    <button
                        onClick={() => setOpenModal(true)}
                        className='service-item-btn'
                    >
                        To order
                        <FaAngleRight />
                    </button>
                    <CustomModal isOpen={openModal} onRequestClose={() => setOpenModal(false)} />
                </div>
            </div>
        </>
    )
}

export default ServiceItem;
