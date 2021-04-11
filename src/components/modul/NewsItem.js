import React from 'react';
import { Link } from 'react-router-dom';

export default function NewsItem (props) {

    return (
        <>
            <Link
                to={props.item}
                className='news-blog'
            >
                <div className='news-blog-img'>
                    <img src={props.src} alt='News' />
                    <div className='news-date'>
                        <p>{props.date}</p>
                    </div>
                </div>
                <div className='news-blog-title'>
                    <h4>{props.title}</h4>
                </div>
                <div className='news-blog-text'>
                    <p>{props.text}</p>
                </div>
            </Link>
        </>
    );
}