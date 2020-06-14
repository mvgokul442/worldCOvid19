import * as layoutCon from "./contants"

export const initialState = {
    summary:{}
    
};


export default (state = initialState, action) => {
    switch (action.type) {
        case layoutCon.SUMMARY_SUCCESS: {
            return {
                ...state,
                summary: action.summary,
            }
        }
        default:
            return state;
    }
}
