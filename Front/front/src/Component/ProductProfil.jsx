import React, { Component } from 'react';
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button'

class Home extends Component {
    state = {
        products: [],
    }

    componentDidMount() {

        // On recupere la liste entiere
        axios.get(`http://localhost:4000/allproducts/1`)
            .then(res => {
                this.setState({ products: res.data });
                // insere les data dans products    

            })
    }

    render() {
        return (
            <div>
                <h1>Bienvenue sur le site Jolieplante</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Picture</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {console.log(this.state.products)}
                    {/*.map itere le tableau product */}
                    {this.state.products.map(elem => {
                        // parcours le tableau product grace a .map et insere dans elem
                        return (
                            <tbody>
                                <tr>
                                    <td>{elem.productName}</td>
                                    <td>{elem.description}</td>
                                    <td>{elem.categorie}</td>
                                    <td><img src={elem.photo} alt="" width="15%" /></td>
                                    <td>{elem.prix}</td>
                                    <td><Button variant="primary">Modif</Button> <Button variant="danger">Delete</Button></td>
                                </tr>
                            </tbody>
                        )
                    })}
                </Table>
            </div>
        )
    }
}

export default Home; 