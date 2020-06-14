import Url from "../../utils/Url"
import {API2} from "../../utils/Api" 


export async function getWhoNew(){
    try {
        let res = await(API2.get(Url.who_news))
        if(res.status===200){
            return res.data
        }
    } catch (error) {
        console.log(error)
    }
}