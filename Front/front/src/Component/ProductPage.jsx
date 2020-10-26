import React, { Component } from 'react';
import axios from 'axios'
//import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
//import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

class ProductPage extends Component {
    state = {
        element: {} 
        // On passe le state de tableau a element pour rentrer a linterieur
    }

    componentDidMount() {
        console.log(this);

        const { id } = this.props.match.params
        // On passe les props a la const id
        axios.get(`http://localhost:4000/products/${id}`)
        // Recupere LE produit + ${id} correspondant
            .then(res => {
                this.setState({ element: res.data[0] });
                // element recoit les data de lobjet correspondant a lID envoyer 
            })
    }
    render() {

        return (
            <div>

                <h1>Product Page !</h1>

                <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src={this.state.element.photo} />
                <Card.Body>
                    <Card.Title>{this.state.element.productName}</Card.Title>
                    <Card.Text>
                    {this.state.element.description}
                    </Card.Text>
                    <Card.Text>
                    {this.state.element.prix}
                    </Card.Text>
                    <Button variant="primary" size="sm">
                Add to Basket
                </Button>{' '}
                </Card.Body>
                </Card>

                {/* <p>{this.state.element.photo}</p>
                <p>{this.state.element.productName}</p>
                <p>{this.state.element.description}</p>
                <p>{this.state.element.prix}</p>

                <Button variant="primary" size="sm">
                Add to Basket
                </Button>{' '} */}
                
            </div>
        )
    }
}

export default ProductPage;



