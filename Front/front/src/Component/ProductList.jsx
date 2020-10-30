import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';
//store
import {connect} from 'react-redux'
import { enregistreProducts } from '../store/action/products';
//store

class ProductList extends Component {
   

    state = {
        productslist: [],
    }

    componentDidMount() {
        
        // On recupere la liste entiere
        axios.get(`http://localhost:4000/allproducts/1`) 
            .then(res => {
                this.setState({ productslist: res.data });
                // insere les data dans productslist

                this.props.enregistreProducts(res.data)
                // enregistre les data dans la props 'enregistreProducts'

            })
    }

    render() {
        return (
            <div>
                {console.log(this.state.productslist)}
                <h1> Hello </h1>
                {/*.map itere le tableau product */}
                { this.props.products && this.props.products.map(elem => {
                    // parcours le tableau productlist grace a .map et insere dans elem et le products de reducer
                    return (
                        <div key={elem._id}>
                          
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={elem.photo} />
                            {/* Recupere photo dans elem */}
                                <Card.Body>
                                    <Card.Title>{elem.productName}</Card.Title>
                                    <Card.Text>
                                        {elem.prix}
                                    </Card.Text>
                                   <Link to={`/product/${elem._id}`}> <Button variant="primary">Submit</Button></Link>
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

const mapStateToProps = (state /*, ownProps*/) => {
    return {
      products: state.productsreducer.products
      //mapStateToProps permet de parcourir les props
    }
  }

const mapDispatchToProps = {enregistreProducts}
    //mapDispatchToProps dispatche l'action a toutes les props
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

