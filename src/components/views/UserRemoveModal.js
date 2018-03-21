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
                <Modal.Header className="modal-custom modal-custom-header">
                    <Modal.Title>
                        <Button className="btn-exit"
                                onClick={() => this.props.toggleUserRemoveModal(false)}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </Button>
                        <i className="fa fa-frown-o" aria-hidden="true"></i><br/>
                        Are you <span>sure</span> to <span>delete</span> your account?
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className="modal-custom modal-custom-body">
                    <Button className="btn-custom"
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
        toggleUserRemoveModal: boolean => dispatch(toggleUserRemoveModal(boolean)),
    })
)(UserRemoveModal)