import { ADD_TODO, EDIT_TODO } from "../config"

export default (value) => async dispatch =>{
    dispatch({
        type: ADD_TODO,
        data: value
    })
}