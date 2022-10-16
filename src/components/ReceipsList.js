import React from 'react';
import Receip from './Receip';

const ReceipsList = (props) => {
    const receipsList = props.receipsList;
    const receips = receipsList.map((receip) =>
        <Receip key={receip.id} elementReceip={receip} onClick={() => props.onClick(receip.id)} />
    );
    return (
        <ul className='receips-list'>
            {receips}
        </ul>
    );
};

export default ReceipsList;