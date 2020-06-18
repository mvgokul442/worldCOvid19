import * as layoutCon from "./contants"

export function getSummary(){
    return{
      type:layoutCon.SUMMARY,
    }
}

export function getSummarySuccess(summary){
    return{
      type:layoutCon.SUMMARY_SUCCESS,
      summary
    }
}

export function getAllcountrySuccess(countryData){
  return{
    type:layoutCon.ALL_COUNTRY_SUCCESS,
    countryData
  }
}

export function getNewsdata(newsData){
  return{
    type:layoutCon.NEWS_SUCCESS,
    newsData
  }
}

export function getWhoNewsdata(whonewsData){
  return{
    type:layoutCon.WHO_NEWS_SUCCESS,
    whonewsData
  }
}

export function onLoader(loader){
  return{
    type:layoutCon.LOADER,
    loader
  }
}

