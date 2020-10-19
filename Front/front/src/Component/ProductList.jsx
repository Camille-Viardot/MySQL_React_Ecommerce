import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Redirect,Link} from 'react-router-dom';


class ProductList extends Component {
   

    state = {
        product: []
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/productslist/2`)
            .then(res => {
                // console.log(res.data);
                this.setState({ product: res.data });
              
            })
    }

    render() {
        return (
            <div>
                {console.log(this.state.product)}
                <h1> Hello </h1>
                {/*.map itere le tableau product */}
                { this.state.product.map(elem => {
                    return (
                        <div>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={elem.photo} />
                                <Card.Body>
                                    <Card.Title>{elem.productName}</Card.Title>
                                    <Card.Text>
                                        {elem.prix}
                                    </Card.Text>
                                   <Link to="/ProductPage"> <Button variant="primary">Submit</Button></Link>
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