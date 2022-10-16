import React from 'react';
import img from '../assets/img/logo.png'

const Logo = () => {
    return (
        <div className='logo'>
            <img className='logo__img' src={img} alt="Logo FindMeal" />
        </div>
    );
};

export default Logo;