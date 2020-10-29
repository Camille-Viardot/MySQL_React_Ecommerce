const initialStates = {
    id: '',
    token: ''
 };
 
 const userReducer = (state = initialStates, action) => {
   switch (action.type) {
     case "ENREGISTRE_TOKEN":
       return {
         ...state,
         token: action.token,
       };
     case "ENREGISTRE_ID":
       return {
         ...state,
         id: action.id,
       };
     default:
       return {
         ...state,
       };
   }
 };
 
 export default userReducer;