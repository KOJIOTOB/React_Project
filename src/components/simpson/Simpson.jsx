import React from 'react';
import './style.css'

const Simpson = (props) => {
    const {heroName, biography, image} = props;

    return (
            <div className='hero'>
                <h2>{heroName}</h2>
                <p>{biography}</p>
                <img src={image} alt={'hero'}/>
            </div>
    );
};

export default Simpson;