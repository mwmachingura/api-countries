import { FETCH_ALL, FETCH_REGION } from "../constants/actionTypes";


export default (countries = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case FETCH_REGION:
            return action.payload;
        default:
            return countries;
    }
}