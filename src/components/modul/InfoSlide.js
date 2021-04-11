import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../layout/layout.scss';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '40px',
                height: '40px',
                marginTop: '20px',
                position: 'absolute',
                zIndex: 10,
                fontSize: '14px',
                color: '#dadada',
                border: '1px solid #dadada',
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
                justifyContent: 'center',
                alignItems: 'center',
                width: '40px',
                height: '40px',
                marginTop: '20px',
                position: 'absolute',
                zIndex: 10,
                fontSize: '14px',
                color: '#dadada',
                border: '1px solid #dadada',
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
        this.state = {
            openModal: false
        }
    }

    render() {
        const settings = {
            lazyLoad: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            /*className: "carousel",*/
            adaptiveHeight: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                { breakpoint: 725, settings: { nextArrow: false, prevArrow: null } },
            ]
        };

        return (
            <div className='news-desk'>
                <Slider {...settings}>
                    <div className="news-item">
                        <div className="news-title">
                            <h4>Bankruptcy and liquidation of an enterprise in Poland</h4>
                        </div>
                        <div className="news-text">
                            <p>“Today, the company's staff unites highly professional experts with specializations in certain areas of law. Today, the company's team brings together highly professional experts with specializations in certain areas of law. Today, the company's team unites highly professional experts with specializations in certain areas of law ... "</p>
                        </div>
                        <div className='news-author'>
                            <p>Andrzej Voroshilov, CEO of Bankom</p>
                        </div>
                    </div>
                    <div className="news-item">
                        <div className="news-title">
                            <h4>Bankruptcy and liquidation of an enterprise in Poland</h4>
                        </div>
                        <div className="news-text">
                            <p>“Today, the company's staff unites highly professional experts with specializations in certain areas of law. Today, the company's team brings together highly professional experts with specializations in certain areas of law. Today, the company's team unites highly professional experts with specializations in certain areas of law ... "</p>
                        </div>
                        <div className='news-author'>
                            <p>Andrzej Voroshilov, CEO of Bankom</p>
                        </div>
                    </div>
                    <div className="news-item">
                        <div className="news-title">
                            <h4>Bankruptcy and liquidation of an enterprise in Poland</h4>
                        </div>
                        <div className="news-text">
                            <p>“Today, the company's staff unites highly professional experts with specializations in certain areas of law. Today, the company's team brings together highly professional experts with specializations in certain areas of law. Today, the company's team unites highly professional experts with specializations in certain areas of law ... "</p>
                        </div>
                        <div className='news-author'>
                            <p>Andrzej Voroshilov, CEO of Bankom</p>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}