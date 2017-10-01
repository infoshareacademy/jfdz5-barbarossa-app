import React from 'react'
import firebase from 'firebase'
import {connect} from 'react-redux'
import {
    Form,
    FormControl,
    FormGroup,
    Col,
    ControlLabel,
    Button
} from 'react-bootstrap'

import {toggleResetPasswordModal} from '../../state/modals'
import ResetPasswordModal from '../views/ResetPasswordModal'

class SignInForm extends React.Component {

    state = {
        email: '',
        password: '',
        error: null
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    handleSubmit = event => {
        event.preventDefault()

        firebase.auth().signInWithEmailAndPassword(
            this.state.email,
            this.state.password
        ).catch(
            (function (error) {
                this.setState({
                    error: error.message
                })
            }).bind(this)
        )
    }

    render() {
        return (
            <Form horizontal onSubmit={this.handleSubmit} className="main-panel auth-panel">
                <h3>Sign In</h3>
                <FormGroup controlId="formHorizontalEmail">
                    <Col style={{paddingTop: '10px'}} componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl
                            type="email"
                            placeholder="Email..."
                            name="email"
                            style={{height: '40px'}}
                            onChange={this.handleChange}
                        />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col style={{paddingTop: '10px'}} componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl
                            type="password"
                            placeholder="Password..."
                            name="password"
                            style={{height: '40px'}}
                            onChange={this.handleChange}
                        />
                    </Col>
                </FormGroup>

                {
                    this.state.error !== null ?
                        <div className="error-message">
                            <p>{this.state.error}</p>
                        </div> :
                        null
                }

                <Button type="submit">
                    Sign In
                </Button>

                <a onClick={() => this.props.toggleResetPasswordModal(true)}>
                    Don't you remember the password?
                </a>
                {
                    this.props.modals.showResetPasswordModal ? <ResetPasswordModal/> : null
                }
            </Form>
        )
    }
}

export default connect(
    state => ({
        modals: state.modals
    }),
    dispatch => ({
        toggleResetPasswordModal: boolean => dispatch(toggleResetPasswordModal(boolean)),
    })
)(SignInForm)