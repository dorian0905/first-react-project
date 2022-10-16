import React from 'react';

const Receip = (props) => {
    const img = props.elementReceip.img;
    const name = props.elementReceip.name;
    return (
        <div className='receip-card' onClick={props.onClick}>
            <div className='receip-card__img-container'>
                <img className='receip-card__img-container__img' src={require("../assets/img/" + img)} alt={"Photo du plat " + name} />
            </div>
            <h2 className='receip-card__name'>{name}</h2>
        </div>
    );
};

export default Receip;