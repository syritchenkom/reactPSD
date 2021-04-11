import React from 'react';
import './layout.scss';
import { FaRegWindowMinimize } from 'react-icons/fa';
import AdviceForm from '../modul/AdviceForm';

export const Advice = () => {

    return (
        <>
            <section className='advice'>
                <div className='container'>
                    <div className='advice-top'>
                        <FaRegWindowMinimize />
                        <div className='advice-section'>
                            <div className='advice-title'>
                                <h2>To get the consultation</h2>
                            </div>
                            <div className='advice-text'>
                                <p>An integrated approach to your issue, timely legal assistance, representation of interests in all courts.</p>
                            </div>
                        </div>
                    </div>
                    <div className='advice-form'>
                        <AdviceForm />
                    </div>
                </div>
            </section>
        </>
    );
};
