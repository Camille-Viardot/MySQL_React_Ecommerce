import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios'
import { Redirect } from 'react-router-dom';



class SignIn extends Component {
    state = {
        email: '',
        password: '',
        redirect: false
    }

    setRedirect = () =>{
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/Dashboard'/>
        }
    }
    //onChange. changer la valeur du state
    inputemail = event => {
        this.setState({ email: event.target.value });
    }
    inputpassword = event => {
        this.setState({ password: event.target.value });
    }
    //onSubmit creer un evenement au moment du clic

    

    buttonsubmit = event => {
        event.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        };

        axios.post(`http://localhost:4000/sign-in`, user)
            .then(res => {
                console.log(res.data);
                this.setState({ email: '' });
                this.setState({ password: '' });

            })
    }
    render() {
        return (
            <div>
                {this.renderRedirect()}
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.</p>

                    <Form onSubmit={this.buttonsubmit}>


                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={this.inputemail} />
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.inputpassword} />
                        </Form.Group>

                        <Button onClick= {this.setRedirect} variant="primary" type="submit">Submit</Button>
                    </Form>
                </Jumbotron>
            </div>
        )
    }

}

export default SignIn; 