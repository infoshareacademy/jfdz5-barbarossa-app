import React from 'react'
import firebase from 'firebase'
import {
    Form,
    FormControl,
    FormGroup,
    Col,
    ControlLabel,
    Button
} from 'react-bootstrap'

class SignUpForm extends React.Component {

    state = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: null
    };

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    handleSubmit = event => {
        event.preventDefault()

        if (this.state.password === this.state.confirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(
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
        else {
            this.setState({
                error: "'Password' and 'Confirm password' must match."
            })
        }

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase.auth().currentUser.updateProfile({
                    displayName: this.state.username
                }).then(function () {
                        const userId = firebase.auth().currentUser.uid

                        firebase.database().ref('/users/' + userId).set({
                            username: firebase.auth().currentUser.displayName,
                            email: firebase.auth().currentUser.email

                        })
                    }
                )
            }
        })
    }

    render() {
        return (
            <Form horizontal onSubmit={this.handleSubmit} className="main-panel auth-panel">
                <h3>Sign Up</h3>

                <FormGroup controlId="formHorizontalEmail">
                    <Col style={{paddingTop: '10px'}} componentClass={ControlLabel} sm={2}>
                        Username
                    </Col>
                    <Col sm={10}>
                        <FormControl
                            type="text"
                            placeholder="Username..."
                            name="username"
                            style={{height: '40px'}}
                            onChange={this.handleChange}
                            value={this.state.username}
                        />
                    </Col>
                </FormGroup>

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
                            value={this.state.email}
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
                            value={this.state.password}
                        />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col style={{paddingTop: '0px'}} componentClass={ControlLabel} sm={2}>
                        Confirm Password
                    </Col>
                    <Col sm={10}>
                        <FormControl
                            type="password"
                            placeholder="Confirm password..."
                            name="confirmPassword"
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
                    Sign Up
                </Button>
            </Form>
        )
    }
}

export default SignUpForm