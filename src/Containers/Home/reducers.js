import * as homeCon from "./contants"

export const initialState = {
    countryData:[]
    
};


export default (state = initialState, action) => {
    switch (action.type) {
        case homeCon.GET_BY_COUNTRY_SUCCESS: {
            return {
                ...state,
                countryData: action.data,
            }
        }
        default:
            return state;
    }
}
