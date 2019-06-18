import React, { Component } from 'react';
import { connect } from "react-redux";
import * as malyshkiActions from './reducer';
import get from 'lodash.get';
import classnames from 'classnames';

class MalyshkiWidgetContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount=() => {
        //this.props.dispatch({type:'sobaka_event_toRedux'});
        this.props.getListData();
    }
    
    render() { 
        console.log('====Malyski props=====', this.props);
        return ( 
            <h1>Список дівчат</h1>

         );
    }
}
const mapStateToProps = (state) => {
    return {
        list: get(state, 'malyshki.list.data'),
        isListLoading: get(state, 'malyshki.list.loading'),
        isListError: get(state, 'malyshki.list.error')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListData: () => {
            dispatch(malyshkiActions.getListData());
        }
    }
}

const MalyshkiWidget = connect(mapStateToProps, mapDispatchToProps)(MalyshkiWidgetContainer);
 
export default MalyshkiWidget;