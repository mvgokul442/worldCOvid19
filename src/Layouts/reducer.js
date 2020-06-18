import * as layoutCon from "./contants"

export const initialState = {
    summary:{},
    countryData:[],
    loader:false,
    newsData:{},
    whoData:{}
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
        case layoutCon.NEWS_SUCCESS:{
            return{
                ...state,
                newsData:action.newsData
            }
        }
        case layoutCon.WHO_NEWS_SUCCESS:{
            return{
                ...state,
                whoData:action.whonewsData
            }
        }
        default:
            return state;
    }
}
