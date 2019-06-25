import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import * as malyshkiActions from './reducer';
import get from 'lodash.get';
import Notifications, {notify} from '../Notifications';


class MalyshkiAddWidgetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: ''
        };
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        console.log('new props', newProps);
        const {isSuccess, history}= newProps;
        if(isSuccess)
        {
            console.log('-----hsitory push-----');
            history.push('/girls');
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        console.log('----submit form---');

        const model = { 
            name: this.state.name,
            image: this.state.image 
        };
        this.props.createNewPost(model);
        
    }

    onChangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.name, e.target.value);
    }

    render() {
        console.log('---GirlCreate props----', this.props);
        console.log('---GirlCreate state----', this.state);
        const { name, image } = this.state;
        return (

            <React.Fragment>
                <h1>Додати дівчину</h1>
                <form onSubmit={this.onSubmitForm}>
                    <div className="form-group">
                        <label htmlFor="name">Назва тварини:</label>
                        <input type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            onChange={this.onChangeInput}
                            value={name} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Фото:</label>
                        <input type="text"
                            className="form-control"
                            name="image"
                            id="image"
                            onChange={this.onChangeInput}
                            value={image} />
                    </div>
                    <button type="submit" className="btn btn-info">Додати</button>
                </form>

                <Notifications />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isPostLoading: get(state, 'malyshki.post.loading'),
        isPostError: get(state, 'malyshki.post.error'),
        isSuccess: get(state, 'malyshki.post.success')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewPost: (model) => {
            dispatch(malyshkiActions.createNewPost(model));
        },
    }
}

const MalyshkiAddWidget = withRouter(connect(mapStateToProps, mapDispatchToProps)(MalyshkiAddWidgetContainer));
export default MalyshkiAddWidget;