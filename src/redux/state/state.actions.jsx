import StateTypes from "./state.types";

export const setStateProject = (title,posts) =>({
    type:StateTypes.SET_STATE_PROJECT,
    payload: {title:title,posts:posts}
})
