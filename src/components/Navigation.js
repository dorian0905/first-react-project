import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul className='navigation__list'>
                <NavLink to="/" className='navigation__list__link' end>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/contact" className='navigation__list__link'>
                    <li>Nous contacter</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;