import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import './Modal.css';

class Home extends Component {
    state = { 
        loading: true
    }

    componentDidMount() {
        const url='https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
        axios.get(url)
            .then(
                (res)=> {
                    console.log('----response prinvat bank---', res.data);
                    this.setState({loading: false});
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
    render() { 
        const {loading} = this.state;
        console.log('----Render component Home----', this.state);
        return ( 
            <div>
                <h1>Hello Peter</h1>
                <div className={classnames('modal', { 'open': loading })}>
                    <div className="position-center">
                        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Home;