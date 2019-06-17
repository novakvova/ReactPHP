import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import { connect } from 'react-redux';
import Notifications, {notify} from './Notifications';
import './Modal.css';
import Modal from './Modal';


class Home extends Component {
    state = { 
        loading: true,
        stateDeleteDialog: false
    }

    componentDidMount() {
        const url='https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
        axios.get(url)
            .then(
                (res)=> {
                    console.log('----response prinvat bank---', res.data);
                    this.setState({loading: false});
                    notify('Дані отримано успішно', '#28a745');
                },
                (err) => {
                    console.log('-----Error upload data------', err.response.data);
                }
            );
        // setTimeout(
        //     () => {
        //         console.log('Completed');
        //         this.setState({loading: false});
        //     },
        //     3000
        // );
        // setTimeout(
        //     function() {
        //         console.log('Completed');
        //         this.setState({loading: false});
        //     }.bind(this),
        //     3000
        // );
        // var self=this;
        // setTimeout(
        //     function() {
        //         console.log('Completed');
        //         self.setState({loading: false});
        //     },
        //     3000
        // );
        
    }
    getDataFromInput = (message)=>{
        this.setState({stateDeleteDialog: false});
        notify(message,'#34d390');
    }
    btnIncrementCounter = (e)=> {
        e.preventDefault();
        this.props.dispatch({type: "INCREMENT"})
        console.log('Hello click');
        notify('Дані отримано успішно', '#dc3545');
    }
    callBackCloseDeleteDialog = () => {
        this.setState({stateDeleteDialog: false});
    }    
    render() { 
        const {loading, stateDeleteDialog} = this.state;
        const {count} = this.props;
        console.log('----Render component Home----', this.state);
        console.log('----Render component Home----', this.props);
        return ( 
            <div>
                <h1>Hello Peter {count}</h1>
                <button onClick={()=>notify('Hello Peter', '#723')}>Click me</button>
                <Notifications />
                <button className="btn btn-success" onClick={this.btnIncrementCounter}>Counter++</button>
                

                <div className={classnames('progressmodal', { 'open': stateDeleteDialog })}>
                    <Modal 
                        funcClose = {this.callBackCloseDeleteDialog} 
                        getDataFromInput={this.getDataFromInput} />
                </div>


                <button 
                    className="btn btn-danger" 
                    onClick={()=> this.setState({stateDeleteDialog:true})}>Видалити</button>

                {/* <div className={classnames('progressmodal', { 'open': loading })}>
                    <div className="position-center">
                        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> */}
            </div>
         );
    }
}

const mapStateProps = (state) =>
{
    console.log('----redux store connect----', state);
    return {
        count: state.counter.counterStore
    };
}
 
export default connect(mapStateProps)(Home);