import React from 'react'
import {connect} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'

import {Button} from 'react-bootstrap'

const Favs = ({user}) => (
    <div className="main-panel menu-panel">
        {
            user === null ?
                <div>
                    <h4>You must be log in to see your favorite connections!</h4>
                </div>
                :
                <div>
                    <h4>Hello {user.displayName} !</h4>
                    <LinkContainer exact to="/">
                        <Button>
                            X
                        </Button>
                    </LinkContainer>
                    <h5>This is your favorite connections:</h5>
                </div>
        }
        <LinkContainer exact to="/">
            <Button className="btn-exit">
                <i className="fa fa-times" aria-hidden="true"></i>
            </Button>
        </LinkContainer>
    </div>
);

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(
    mapStateToProps
)(Favs)