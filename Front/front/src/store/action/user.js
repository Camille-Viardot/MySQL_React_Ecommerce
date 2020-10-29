export const enregistreToken = (newToken) => ({
    type: "ENREGISTRE_TOKEN",
    token: newToken
})

export const enregistreid = (keepid) => ({
    type: "ENREGISTRE_ID",
    id: keepid
})