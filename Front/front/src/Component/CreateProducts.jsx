import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios'
import { connect } from 'react-redux';
import { createstoreproducts } from '../store/action/products';

class CreateProducts extends Component {
    state = {
        ProductName: '',
        Category: '',
        Description: '',
        Price: '',
        Picture: '',
    }
    //onChange
    inputProductName = event => {
        this.setState({ ProductName: event.target.value });
    }
    inputCategory = event => {
        this.setState({ Category: event.target.value });
    }
    inputDescription = event => {
        this.setState({ Description: event.target.value });
    }
    inputPrice = event => {
        this.setState({ Price: event.target.value });
    }
    inputPicture = event => {
        this.setState({ Picture: event.target.value });
    }
    //onSubmit
    buttonsubmit = event => {
        event.preventDefault();

        const user = {
            productName: this.state.ProductName,
            prix: this.state.Price,
            description: this.state.Description,
            photo: this.state.Picture,
            categorie: this.state.Category,
            user_affiliate: 2
        };

        axios.post(`http://localhost:4000/products`, user)
            .then(res => {
                console.log(res)
                console.log(res.data)

                this.props.createproductsforstore(res.data)

                
            })
    }
    render() {
        return (
            <Jumbotron>
                <div>
                    <h1>Bienvenue sur Jolieplante !</h1>
                    <p>Veuillez ajoutez un produit </p>

                    <Form onSubmit={this.buttonsubmit}>

                        <Form.Group controlId="formBasicName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="texte" placeholder="Enter your first Name" onChange={this.inputProductName} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasiccategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="texte" placeholder="Enter a category" onChange={this.inputCategory} />
                        </Form.Group>

                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="texte" placeholder="Enter a short description" onChange={this.inputDescription} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="numbers" placeholder="Enter a price" onChange={this.inputPrice} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPicture">
                            <Form.Label>Picture</Form.Label>
                            <Form.Control type="jpeg" placeholder="Enter a Picture link" onChange={this.inputPicture} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                    </Button>
                    </Form>
                </div>
            </Jumbotron>

        );
    }

}
const mapDispatchToProps = {createstoreproducts }

export default connect(mapDispatchToProps)(CreateProducts);