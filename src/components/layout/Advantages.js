import React from 'react';
import './layout.scss';
import { FaCheck } from "react-icons/fa";

const Advantages = () => {

    return (
            <>
            <section className='advantages'>
                <div className='container'>
                    <div className='advantages-section'>
                        <div className='advantages-item'>
                            <div className='advantages-icon'>
                                <FaCheck />
                            </div>
                            <div className='advantages-title'>
                                <h3>Dozens of voluntary liquidations every month</h3>
                            </div>
                            <div className='advantages-text'>
                                <p>We are able to minimize all risks in the process of voluntary liquidation of legal entities.</p>
                            </div>
                        </div>
                        <div className='advantages-item'>
                            <div className='advantages-icon'>
                                <FaCheck />
                            </div>
                            <div className='advantages-title'>
                                <h3>Excellent knowledge of bankruptcy laws</h3>
                            </div>
                            <div className='advantages-text'>
                                <p>They allow us to effectively defend both the interests of creditors and the interests of the owners of the troubled organization.</p>
                            </div>
                        </div>
                        <div className='advantages-item'>
                            <div className='advantages-icon'>
                                <FaCheck />
                            </div>
                            <div className='advantages-title'>
                                <h3>Dozens of voluntary liquidations every month</h3>
                            </div>
                            <div className='advantages-text'>
                                <p>We are able to minimize all risks in the process of voluntary liquidation of legal entities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Advantages;
