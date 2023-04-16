import React from 'react';

import './styles.css'
const Person = (props) => {
    const {id, name, status, species, gender, image} = props;
    return (
        <div className='card'>
            <h4>ID: {id}</h4>
            <h4>Name: {name}</h4>
            <h4>Status: {status}</h4>
            <h4>Species: {species}</h4>
            <h4>Gender: {gender}</h4>
            <img src={image} alt="hero"/>

        </div>
    );
};

export default Person;