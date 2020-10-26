import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';
//import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
//import ProductPage from ProductPage

class ProductList extends Component {
   

    state = {
        products: [],
    }

    componentDidMount() {
        
        // On recupere la liste entiere
        axios.get(`http://localhost:4000/allproducts`) 
            .then(res => {
                this.setState({ products: res.data });
                // insere les data dans products
              
            })
    }

    render() {
        return (
            <div>
                {console.log(this.state.products)}
                <h1> Hello </h1>
                {/*.map itere le tableau product */}
                { this.state.products.map(elem => {
                    // parcours le tableau product grace a .map et insere dans elem
                    return (
                        <div>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={elem.photo} />
                            {/* Recupere photo dans elem */}
                                <Card.Body>
                                    <Card.Title>{elem.productName}</Card.Title>
                                    <Card.Text>
                                        {elem.prix}
                                    </Card.Text>
                                   <Link to={`/ProductPage/${elem._id}`}> <Button variant="primary">Submit</Button></Link>
                                   {/* ${elem._id} recupere le id de la bdd et le log dans URL ETAPE 2 */ } 
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ProductList;