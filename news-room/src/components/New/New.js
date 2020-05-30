import React from 'react';
import ShowMore from '../ShowMore/ShowMore';
import './New.scss';
import spacex from '../../assets/spacex.jpg';

const New = () => {
    return (
        <div className="new">
            <img className="new__img" src={spacex} alt="spacex"/>
            <p className="new__description">La NASA firmó un contrato por u$s1.000 millones con Ellon Musk y Jeff Bezos para construir módulos de alunizaje</p>
            <h3 className="new__newspaper">Ámbito</h3>
            <ShowMore />
        </div>
    );
};

export default New;