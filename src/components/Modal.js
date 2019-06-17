import React, { Component } from 'react';

class Modal extends Component {
    state = {
        message: ''
    }
    render() {
        // console.log('----modal props-----', this.props);
        return (
            <div className="modal" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" onClick={() => this.props.funcClose()} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input className="form-control"
                                name="message"
                                value={this.state.message}
                                onChange={(e)=> {
                                    this.setState({[e.target.name]: e.target.value});
                                }}
                            />
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                onClick={() => this.props.getDataFromInput(this.state.message)}
                                className="btn btn-primary">
                                Save changes
                            </button>
                            <button type="button"
                                onClick={() => this.props.funcClose()}
                                className="btn btn-secondary" >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;