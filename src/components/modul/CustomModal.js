import React from "react";
import Modal from 'react-modal';
import '../modul/modul.scss';
import '../layout/layout.scss';
import { ImCross } from 'react-icons/im';


const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 500
    },
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        display               : 'flex',
        justifyContent        : 'center',
        alignItems            : 'flex-end',
        flexDirection         : 'column'
    }

};

export const CustomModal = (props) => {
    return (
        <>
            <Modal
                isOpen={props.isOpen}
                onRequestClose={props.onRequestClose}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <ImCross onClick={props.onRequestClose} />
                <div className="popup-container">
                    <form>
                        <input type="text" aria-label="" placeholder="Your name" />
                        <input type="tel" aria-label="" maxLength="13" placeholder="Phone number" />
                        <button datasrc="" type="submit" id="button">Send message</button>
                    </form>
                </div>
            </Modal>
        </>
    )
}
