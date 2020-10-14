import React, { Component } from 'react';
import CreateProduct from './CreateProducts'



class Dashboard extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>Bienvenue sur votre espace personelle !</h1>
                <CreateProduct />

            </div>
        )
    }
}

export default Dashboard; 

