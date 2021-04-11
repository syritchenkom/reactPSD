import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './layout.scss';
import { CustomModal } from "../modul/CustomModal";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                position: 'absolute',
                zIndex: 10,
                fontSize: '14px',
                color: '#fff',
                border: '1px solid #fff',
                cursor: 'pointer',
                }}
            onClick={onClick}
        >
            <FaAngleRight />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                position: 'absolute',
                /*top: '245px',*/
                zIndex: 10,
                fontSize: '14px',
                color: '#fff',
                border: '1px solid #fff',
                cursor: 'pointer',}}
            onClick={onClick}
        >
            <FaAngleLeft />
        </div>
    );
}

export default class Fade extends Component {
    constructor(props) {
        super(props);
        this.state={
            openModal: false
        }
    }

    render() {
        const settings = {
            dots: false,
            lazyLoad: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            className: "carousel",
            adaptiveHeight: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                { breakpoint: 768, settings: { nextArrow: false, prevArrow: false } },
           ]

        };
        return (
            <section className="carousel">
                <div className='container'>
                    <div className='carousel-slide'>
                        <Slider {...settings}>
                            <div className="carousel-item">
                                <div className="carousel-title">
                                    <h1>Complex closed enterprise</h1>
                                </div>
                                <div className="carousel-text">
                                    <p>Complete termination of the existence of a legal entity while maintaining the legality of all previous activities.</p>
                                </div>
                                <button
                                    onClick={() => this.setState({openModal:true})}
                                    className='item-btn'
                                >
                                    Send a request
                                    <FaAngleRight />
                                </button>

                                <CustomModal isOpen={this.state.openModal} onRequestClose={() => this.setState({openModal:false})} />

                            </div>
                            <div className="carousel-item">
                                <div className="carousel-title">
                                    <h1>Complex closed enterprise</h1>
                                </div>
                                <div className="carousel-text">
                                    <p>Complete termination of the existence of a legal entity while maintaining the legality of all previous activities.</p>
                                </div>
                                <button
                                    onClick={() => this.setState({openModal:true})}
                                    className='item-btn'
                                >
                                    Send a request
                                    <FaAngleRight />
                                </button>
                                <CustomModal isOpen={this.state.openModal} onRequestClose={() => this.setState({openModal:false})} />
                            </div>
                            <div className="carousel-item">
                                <div className="carousel-title">
                                    <h1>Complex closed enterprise</h1>
                                </div>
                                <div className="carousel-text">
                                    <p>Complete termination of the existence of a legal entity while maintaining the legality of all previous activities.</p>
                                </div>
                                <button
                                    onClick={() => this.setState({openModal:true})}
                                    className='item-btn'
                                >
                                    Send a request
                                    <FaAngleRight />
                                </button>
                                <CustomModal isOpen={this.state.openModal} onRequestClose={() => this.setState({openModal:false})} />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}