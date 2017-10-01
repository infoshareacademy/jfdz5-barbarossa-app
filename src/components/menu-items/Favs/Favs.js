import React from 'react'
import {connect} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Button} from 'react-bootstrap'

import {addLocations} from '../../../state/routeMap'
import {FavsTable} from './FavsTable'

const Favs = ({user, favs, showOnMapClick}) => (
    <div className="main-panel menu-panel">
        {
            user === null ?
                <div>
                    <h4>You must be log in to see your favorite connections!</h4>
                    <LinkContainer exact to="/log">
                        <Button className="btn-custom">
                            Sign In
                        </Button>
                    </LinkContainer>
                    <LinkContainer exact to="/">
                        <Button>
                            X
                        </Button>
                    </LinkContainer>
                </div>
                :
                <div>
                    <h4>Hello {user.displayName} !</h4>
                    <LinkContainer exact to="/">
                        <Button>
                            X
                        </Button>
                    </LinkContainer>
                    <FavsTable
                        favs={favs}
                        showOnMapClick={showOnMapClick}
                    />
                </div>
        }
    </div>
);

const mapStateToProps = state => ({
    user: state.auth.user,
    favs: state.favs
});

const mapDispatchToProps = dispatch => ({
    showOnMapClick: selectedConnection => dispatch(addLocations(selectedConnection))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favs)