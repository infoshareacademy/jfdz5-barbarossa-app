import React from 'react'
import {connect} from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'

const Favs = ({user}) => (
        <div className="main-panel">
            {
                user === null ?
                    <div>
                        <h4>You must be log in to see your favorite connections!</h4>
                        <LinkContainer exact to="/log">
                            <a>Sign in</a>
                        </LinkContainer>
                    </div>
                    :
                    <div>
                        <h4>Hello {user.email} !</h4>
                        <h5>This is your favorite connections:</h5>
                    </div>
            }
        </div>
);

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(
    mapStateToProps
)(Favs)