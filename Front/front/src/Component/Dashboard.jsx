import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import axios from "axios";
import {connect} from 'react-redux'
import ProductProfil from './ProductProfil'



class Dashboard extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        avatar: "",
    };

    inputName = (event) => {
        this.setState({ name: event.target.value });
    };

    inputEmail = (event) => {
        this.setState({ email: event.target.value });
    };

    inputPassword = (event) => {
        this.setState({ password: event.target.value });
    };

    inputAvatar = (event) => {
        this.setState({ avatar: event.target.value });
    };


    buttonSubmit = (event) => {
        event.preventDefault();

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            avatar: this.state.avatar,
        };
        axios.post(`http://localhost:4000/change/${localStorage.getItem('idkey')}`,user)
        // On recupere la clef idkey qui se trouve dans le localstorage + les infos contenue dans user qui represente les champs saisie
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
};

        
    render() {
        return (
            <div> 
                {this.props.token}
               <Jumbotron>
                   <h1>Votre Page</h1>                
               <Form onSubmit={this.buttonSubmit}>
                        <Form.Group controlId="signUpName">
                            <Form.Label> Name </Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter name" onChange={this.inputName} />
                            <Form.Text className="text-muted"> Veuillez rentrer votre pseudo </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="signUpEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" name="email" placeholder="Enter email" onChange={this.inputEmail} />
                            <Form.Text className="text-muted"> Veuillez rentrer votre adresse mail </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="signUpPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" name="password" placeholder="Password" onChange={this.inputPassword} />
                            <Form.Text className="text-muted"> Veuillez rentrer votre mot de passe </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="signUpAvatar">
                            <Form.Label>Avatar</Form.Label>
                            <Form.Control type="text" name="avatar" placeholder="Avatar" onChange={this.inputAvatar} />
                            <Form.Text className="text-muted"> Veuillez rentrer l'url de votre avatar </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit"> Submit </Button>
                    </Form>

               </Jumbotron>
  
            <ProductProfil />
            </div>
        )
    }
}
const mapStateToProps = (state /*, ownProps*/) => {
    return {
      token: state.userReducer.token
    }
  }

export default connect(mapStateToProps)(Dashboard);
//lie les states du store au props du component


