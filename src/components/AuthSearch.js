import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './AuthSearch.css'

const AuthSearch = ({ user, children }) => (
    <div>
        {
            user === null ?
                <div className="auth-box__not-log main-panel">
                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i><br/>
                    Sign in <span>to search</span>
                </div> :
                children
        }
    </div>
)

export default withRouter(connect(
    state => ({
        user: state.auth.user
    })
)(AuthSearch))