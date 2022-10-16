import React from 'react';
import Sorter from './Sorter';
import ReceipsList from './ReceipsList';

class Selector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            obligatoryTypes: [],
            obligatoryIngredients: [],
            receipsList: props.receipsList,
            onClick: props.onClick
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(sorter, label) {
        if(sorter==="type") {
            let currentTypes = this.state.obligatoryIngredients;
            currentTypes.push(label)
            this.setState({
                obligatoryTypes: currentTypes
            });
        } else {
            this.setState({
                obligatoryIngredients: () => {
                    let newObligatoryIngredients = this.state.obligatoryIngredients.push(label);
                    return newObligatoryIngredients}
            });
        }
        console.log(this.state.obligatoryTypes)
    }

    render() {
        return (
            <div className='selector'>
                <Sorter receipsList={this.state.receipsList} onChange={(sorter, label) => this.handleChange(sorter, label)} />
                <ReceipsList receipsList={this.state.receipsList} onClick={this.state.onClick} />
            </div>
        );
    }

};

export default Selector;