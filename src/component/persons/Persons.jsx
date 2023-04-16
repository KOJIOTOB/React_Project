import React from 'react';

import '../person/styles.css'

import Person from "../person/Person";

const Persons = () => {
    return (
        <div className='container'>
            <h1>The Rick and Morty API</h1>
            <Person
                id={'147'}
                name={'Gobo'}
                status={'Dead'}
                species={'Alien'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/147.jpeg'}
            />

            <Person
                id={'453'}
                name={'Vampire Master\'s Assistant'}
                status={'Alive'}
                species={'Mythological Creature'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/453.jpeg'}
            />

            <Person
                id={'574'}
                name={'Snake Lincoln'}
                status={'Dead'}
                species={'Animal'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/574.jpeg'}
            />

            <Person
                id={'192'}
                name={'King Flippy Nips'}
                status={'Alive'}
                species={'Alien'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/192.jpeg'}
            />

            <Person
                id={'538'}
                name={'Priest Witherspoon'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/538.jpeg'}
            />

            <Person
                id={'589'}
                name={'Snake Reporter'}
                status={'Alive'}
                species={'Animal'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/589.jpeg'}
            />
        </div>
    );
};

export default Persons;