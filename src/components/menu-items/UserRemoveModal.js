import React from 'react'
import {connect} from 'react-redux'
import {Modal, Button} from 'react-bootstrap'
import firebase from 'firebase'

import {toggleUserRemoveModal} from '../../state/modals'

class UserRemoveModal extends React.Component {

    state = {
        error: null
    }

    render() {
        return (
            <Modal show={true}>
                <Modal.Header>
                    <Modal.Title>Are you sure to delete your account?</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Button bsStyle="danger"
                            onClick={() => {
                                const userId = firebase.auth().currentUser.uid

                                firebase.database().ref('/users/' + userId).remove()

                                firebase.auth().currentUser.delete()
                                    .catch((function (error) {
                                        this.setState({
                                            error: error.message
                                        })
                                    }).bind(this))
                            }}>
                        Delete
                    </Button>
                    <Button bsStyle="primary"
                            onClick={() => this.props.toggleUserRemoveModal(false)}>
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
        toggleUserRemoveModal: boolean => dispatch(toggleUserRemoveModal(boolean)),
    })
)(UserRemoveModal)