import { RETRIEVE_BILLS } from "../actions/types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch (type) {
        case RETRIEVE_BILLS:
            return [...payload];
        default:
            return state;
    }
}