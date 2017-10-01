import React from 'react'
import {connect} from 'react-redux'

import './UsersList.css'

const UsersList = ({usersList}) => {

    if (usersList) {
        var usersListArray = Object.keys(usersList).map(key => usersList[key]);
    }

    return (
        <div className="users-list">
            <h2><span>Many people</span> already using our app!</h2>
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