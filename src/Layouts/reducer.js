import * as layoutCon from "./contants"

export const initialState = {
    summary:{},
    countryData:[],
    loader:false
    
};


export default (state = initialState, action) => {
    switch (action.type) {
        case layoutCon.SUMMARY_SUCCESS: {
            return {
                ...state,
                summary: action.summary,
            }
        }
        case layoutCon.ALL_COUNTRY_SUCCESS: {
            return {
                ...state,
                countryData: action.countryData,
            }
        }
        case layoutCon.LOADER: {
            return {
                ...state,
                loader: action.loader,
            }
        }
        default:
            return state;
    }
}
