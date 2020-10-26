const initialStates = {
    age:0,
    token: ''
 };
 
 const userReducer = (state = initialStates, action) => {
   switch (action.type) {
     case "ENREGISTRE_TOKEN":
       return {
         ...state,
         token: action.token,
       };
     case "CHANGE_AGE":
       return {
         ...state,
         age: action.age,
       };
     default:
       return {
         ...state,
       };
   }
 };
 
 export default userReducer;