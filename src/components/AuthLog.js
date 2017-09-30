import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Button} from 'react-bootstrap'
import firebase from 'firebase'

import './AuthLog.css'
import UsersList from './menu-items/UsersList'

class AuthLog extends React.Component {
    state = {
        error: null
    }

    render() {
        return (
            <div>
                {
                    this.props.user === null ?
                        this.props.children :
                        <div className="main-panel">
                            <h4>
                                You are logged in as <strong>{this.props.user.displayName}</strong>
                            </h4>

                            <LinkContainer exact to="/">
                                <Button>
                                    X
                                </Button>
                            </LinkContainer>

                            <Button className="btn-custom" onClick={() => firebase.auth().signOut()}>
                                Sign Out
                            </Button>

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
                                    }
                                    }
                            >
                                Delete account
                            </Button>

                            {
                                this.state.error !== null ?
                                    <div className="error-message">
                                        <p>{this.state.error}</p>
                                    </div> :
                                    null
                            }

                            <UsersList/>
                        </div>
                }
            </div>
        )
    }

}

export default withRouter(connect(
    state => ({
        user: state.auth.user
    })
)(AuthLog))