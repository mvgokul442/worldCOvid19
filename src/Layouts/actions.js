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