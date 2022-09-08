import { createContext } from 'react';
import { useState } from 'react';
import horoscopesObj from '../data/horoscopes';

export const HoroscopeContext = createContext();

function HoroscopeProvider(props) {

    const [currentSign, setCurrentSign] = useState('Aquarius');
    const sign = horoscopesObj[currentSign];

    return (
        <HoroscopeContext.Provider value ={{sign, setCurrentSign}}>
            {props.children}
        </HoroscopeContext.Provider>
    );
};

export default HoroscopeProvider;