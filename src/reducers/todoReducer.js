import { ADD_TODO, EDIT_TODO } from "../config"

export default (state = {},action) =>{
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.data
      ]
    case EDIT_TODO:
      return action.data;
    default:
      return state;
  }
}