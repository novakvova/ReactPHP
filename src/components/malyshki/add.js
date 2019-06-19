import React, { Component } from 'react';

class MalyshkiAddWidgetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: ''
        };
    }

    render() { 
        return ( 
            <h1>Додати дівчину</h1> 
        );
    }
}
 
const MalyshkiAddWidget = MalyshkiAddWidgetContainer;
export default MalyshkiAddWidget;