import React from 'react';
import Selector from './Selector';
import Displayer from './Displayer';
import { receipsList } from '../data/receipsList';

class Window extends React.Component {

    constructor(props) {
        super(props);
        this.state = {selectedReceip: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.setState({
            selectedReceip: id
        });
    }

    render() {
        return (
            <main className='window'>
                <Selector receipsList={receipsList} onClick={id => this.handleClick(id)} />
                <Displayer selectedReceip={receipsList[this.state.selectedReceip]} />
            </main>
        );
    }
};

export default Window;