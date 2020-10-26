export const enregistreToken = (newToken) => ({
    type: "ENREGISTRE_TOKEN",
    token: newToken
})

export const changeAge = (newAge) => ({
    type: "CHANGE_AGE",
    age: newAge
})