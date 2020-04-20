import { ADD_USER } from "../constants/action-types";

const initialState = {
    users: []
};
  
const  rootReducer = (state = initialState, action) => {

    if(action.type === ADD_USER){
        return Object.assign({}, state, {
            // users: state.users.concat(action.payload)
            users: action.payload
        });

        
    }
    return state
};
  
export default rootReducer;