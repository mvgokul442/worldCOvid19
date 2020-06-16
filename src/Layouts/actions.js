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

export function onLoader(loader){
  return{
    type:layoutCon.LOADER,
    loader
  }
}