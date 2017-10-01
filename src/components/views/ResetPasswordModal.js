import React from 'react'
import {connect} from 'react-redux'
import {Modal, Button} from 'react-bootstrap'
import firebase from 'firebase'

import {toggleResetPasswordModal} from '../../state/modals'

class ResetPasswordModal extends React.Component {

    state = {
        email: null,
        error: null
    }

    handleChange = event => this.setState({
        email: event.currentTarget.value
    })

    render() {
        return (
            <Modal show={true}>
                <Modal.Header className="modal-custom modal-custom-header modal-custom-header_reset">
                    <Button className="btn-exit"
                            onClick={() => this.props.toggleResetPasswordModal(false)}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </Button>
                    <Modal.Title>
                        <h4>Want to reset your password?</h4>
                        <p>Enter your email and click <span>send</span> to get new password:</p>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className="modal-custom modal-custom-body">
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <Button className="btn-custom"
                            onClick={() => {
                                if (this.state.email) {
                                    firebase.auth().sendPasswordResetEmail(this.state.email).then(
                                        this.setState({
                                            error: 'Email sent!'
                                        })
                                    )
                                        .catch((function (error) {
                                            this.setState({
                                                error: error.message
                                            })
                                        }).bind(this));
                                }
                                else {
                                    this.setState({
                                        error: 'Please, enter your email'
                                    })
                                }
                            }}>
                        Reset
                    </Button>
                </Modal.Body>

                <Modal.Footer className="modal-custom modal-custom-footer">
                    {
                        this.state.error !== null ?
                            <div className="error-message">
                                <p>{this.state.error}</p>
                            </div> :
                            null
                    }
                </Modal.Footer>
            </Modal>
        )
    }
}

export default connect(
    null,
    dispatch => ({
        toggleResetPasswordModal: boolean => dispatch(toggleResetPasswordModal(boolean)),
    })
)(ResetPasswordModal)