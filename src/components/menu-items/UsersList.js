import React from 'react'
import {connect} from 'react-redux'

const UsersList = ({usersList}) => {

    if (usersList) {
        var usersListArray = Object.keys(usersList).map(key => usersList[key]);
    }

    return (
        <div>
            <h3>See who's already using our app:</h3>
            <ul>
                {
                    usersList ?
                        usersListArray.map(
                            (item, index) => (
                                <li key={index}>
                                    {
                                        item.username
                                    }
                                </li>
                            )
                        )
                        :
                        <li>
                            No users found
                        </li>
                }
            </ul>
        </div>
    )
}

export default connect(
    state => ({
        usersList: state.usersList
    })
)(UsersList)