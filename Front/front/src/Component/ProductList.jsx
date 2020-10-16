import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class ProductList extends Component {
    state = {
        product: []
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/productslist/1`)
            .then(res => {
                // console.log(res.data);
                this.setState({ product: res.data });
                // const article = res.data;
                // for (let i = 0; i < article.length; i++) {
                //     let element = article[i];
                //     // console.log(article[i]);
                //     // console.log(element);

                // }
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
                                    <Button variant="primary">Go somewhere</Button>
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