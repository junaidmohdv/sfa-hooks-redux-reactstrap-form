import { ADD_USER } from "../constants/action-types"

export const addUser = payload => {
    return {
        type: ADD_USER,
        payload
    }
}