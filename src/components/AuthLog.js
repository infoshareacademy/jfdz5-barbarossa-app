import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import firebase from 'firebase'

import './AuthLog.css'

const AuthLog = ({user, children}) => (
    <div>
        {
            user === null ?
                children :
                <div className="main-panel">
                    <h4>
                        You are logged in by <strong>{user.email}</strong>
                    </h4>
                    <Button className="btn-custom" onClick={() => firebase.auth().signOut()}>
                        Sign Out
                    </Button>
                </div>
        }
    </div>
)

export default withRouter(connect(
    state => ({
        user: state.auth.user
    })
)(AuthLog))