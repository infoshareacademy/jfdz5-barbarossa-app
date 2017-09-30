import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import {Button} from 'react-bootstrap'
import firebase from 'firebase'

import './AuthLog.css'
import UsersList from './menu-items/UsersList'

const AuthLog = ({user, children}) => (
    <div>
        {
            user === null ?
                children :
                <div className="main-panel">
                    <h4>
                        You are logged in by <strong>{user.displayName}</strong>
                    </h4>
                    <Button className="btn-custom" onClick={() => firebase.auth().signOut()}>
                        Sign Out
                    </Button>
                    <LinkContainer exact to="/">
                        <Button>
                            X
                        </Button>
                    </LinkContainer>
                    <UsersList/>
                </div>
        }
    </div>
)

export default withRouter(connect(
    state => ({
        user: state.auth.user
    })
)(AuthLog))