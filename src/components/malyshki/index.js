import React, { Component } from 'react';
import { connect } from "react-redux";
import * as malyshkiActions from './reducer';
import get from 'lodash.get';
import classnames from 'classnames';

class MalyshkiWidgetContainer extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        console.log('====Malyski props=====', this.props);
        return ( 
            <h1>Список дівчат</h1>

         );
    }
}

const MalyshkiWidget = connect(null)(MalyshkiWidgetContainer);
 
export default MalyshkiWidget;