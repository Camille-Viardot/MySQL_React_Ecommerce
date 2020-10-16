import React, { Component } from 'react';
import axios from 'axios'

class ProductPage extends Component {
    state = {
        element: []
    }

    componentDidMount(){
        axios.get(`http://localhost:4000/products/1`)
        .then(res => {
            const product = res.data;
            console.log(product);
                
            
        })
    }
    render() {
        return (
            <div>
                <h1>Product Page !</h1>
            </div>
        )
    }
}

export default ProductPage; 



