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
                <Modal.Header>
                    <Modal.Title>Enter your email and click send to get new password:</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input
                        type="text"
                        value={this.state.content}
                        onChange={this.handleChange}
                    />
                    <Button bsStyle="primary"
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
                    <Button bsStyle="danger"
                            onClick={() => this.props.toggleResetPasswordModal(false)}>
                        Close
                    </Button>
                </Modal.Body>

                <Modal.Footer>
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