export const enregistreProducts = (allproducts) => ({
    type: "ENREGISTRE_PRODUCTS",
    products: allproducts
})

export const createstoreproducts = (storeproducts) => ({
    type: "CREATE_STORE_PRODUCTS",
    createproductsforstore: storeproducts
})