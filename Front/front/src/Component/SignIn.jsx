import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken'
//store
import {connect} from 'react-redux'
import { enregistreToken } from '../store/action/user';
import {enregistreid} from '../store/action/user'
//store



class SignIn extends Component {
    state = {
        email: '',
        password: '',
        redirect: false
        // Redirection fausse par defaut
    }
    // ---------REDIRECTION SUR LE DASHBOARD
    setRedirect = () =>{
        this.setState({
            redirect: true
        })
        // Quand redirection devient vraie cest a dire la personne cest loger correctement
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/Dashboard'/>
            // Redirige vers Dashboard 
        }
    }
    //--------ONCHANGE
    //onChange. changer la valeur du state
    inputemail = event => {
        // concerne le input de email un evenement y est creer
        this.setState({ email: event.target.value });
        // Recupere la valeur rentrer dans le input de email et le modifie en fonction de ce qui y est entrer
    }
    inputpassword = event => {
        // concerne le input du password un evenement y est creer
        this.setState({ password: event.target.value });
         // Recupere la valeur rentrer dans le input de password et le modifie en fonction de ce qui y est entrer

    }
    //---------ONSUBMIT
    //onSubmit creer un evenement au moment du clic
    buttonsubmit = event => {
        event.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
            // user contient les data de email et passeword
        };

        axios.post(`http://localhost:4000/sign-in`, user)
            .then(res => {
                console.log(res.data);
                this.setState({ email: '' });
                this.setState({ password: '' });
                 // Modifie les donnees et les reboot ""

                let decodetoken = jwt.decode (res.data.token);
                // va decoder le jwt
                console.log(decodetoken);

                 this.setRedirect()
                // Redirige vers Dashboard

                localStorage.setItem("token" , res.data.token)
                // enregistre le token pour localstorage
                 localStorage.setItem("idkey" , decodetoken.id) 
                //  va recuperer le id dans decodetoken et le stock dans la clef idkey

                this.props.enregistreToken(res.data.token)
                // Recupere le token dans la data et Enregistre le token dans 'enregistretoken' qui sera c ontenu dans la props
                this.props.enregistreid(decodetoken.id)
                
               
               
            })
            .catch(error => {
                console.error(error)
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
                    {/* On appel on Submit dans le form */}


                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={this.inputemail} />
                            {/* onChange={this.inputemail} appel la fonction onChange */}
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.inputpassword} />
                        </Form.Group>

                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Jumbotron>
            </div>
        )
    }

}
const mapDispatchToProps = { enregistreToken,enregistreid}
export default connect(null, mapDispatchToProps )(SignIn);
// mapDispatchToProps lie les actions a nos props du components 