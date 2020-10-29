const initialStates = {
    products: ''
};

const productsreducer = (state = initialStates, action) => {
switch (action.type) {
    case "ENREGISTRE_PRODUCTS":
        return {
            ...state,
            products: action.products,
        };
    case "CREATE_STORE_PRODUCTS":
        return{
            ...state,
            createproductsforstore: action.createproductsforstore,
        }
        default:
            return {
                ...state,
            };
    }
};

export default productsreducer;