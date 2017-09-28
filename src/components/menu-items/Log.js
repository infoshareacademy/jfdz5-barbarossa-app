import React from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import AuthLog from '../AuthLog'

import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import UsersList from './UsersList'
import './Log.css'


const Log = () => (
    <div className="log">
        <AuthLog>
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Sign In">
                    <SignInForm/>
                </Tab>
                <Tab eventKey={2} title="Sign Up">
                    <SignUpForm/>
                </Tab>
                <Tab eventKey={3} title="Users List">
                    <UsersList/>
                </Tab>
            </Tabs>
        </AuthLog>
    </div>
);

export default Log