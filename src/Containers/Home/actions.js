import * as homeCon from "./contants"
import {API} from "../../utils/Api"
import Url from "../../utils/Url"

export const getByCountry=(countryName)=>{
return{
    type:homeCon.GET_BY_COUNTRY,
    countryName
}
} 

export const getByCountrySuccess=(data)=>{
    return{
        type:homeCon.GET_BY_COUNTRY_SUCCESS,
        data
    }
    } 

    export async function getConInfo(countryName) {
        try {
            const result = await API.get(Url.getbycountry+countryName+"?lastdays=30")
            if (result.status === 200) {
                return (result.data)
            }
        } catch (error) {
           return []
        }
    
    }