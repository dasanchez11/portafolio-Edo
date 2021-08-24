import StateTypes from "./state.types";

const INITIAL_STATE = {
    title: "",
    posts:[]
}

const stateReducer = (state=INITIAL_STATE,action) =>{
    switch (action.type) {
        case StateTypes.SET_STATE_PROJECT:
            return {
                ...state,
                title: action.payload.title,
                posts: action.payload.posts 
            }
        default:
            return state;
    }


};

export default stateReducer;