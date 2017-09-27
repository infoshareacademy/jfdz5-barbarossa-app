import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './AuthSearch.css'

const AuthSearch = ({ user, children }) => (
    <div>
        {
            user === null ?
                <div className="auth-box__not-log">
                    Sign in to search
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