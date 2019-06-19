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
        const listContent = this.props.list.map(item => {
            return (
            <div key={item.id} className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src={item.name} alt="" />
                </a>
            </div>
            )
        });
        return ( 
            <div>
                
                <h1>Список дівчат</h1>
                <div className="container">

                    <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Thumbnail Gallery</h1>

                    <hr className="mt-2 mb-5" />

                    <div className="row text-center text-lg-left">
                        
                       {listContent}
                    </div>

                </div>
            </div>

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