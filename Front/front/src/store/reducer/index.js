import {combineReducers} from 'redux';
import userReducer from './user';
import productsreducer from './products'

export default combineReducers(
     {
        userReducer,
        productsreducer
    }
)