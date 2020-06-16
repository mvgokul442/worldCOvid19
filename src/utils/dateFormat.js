import  moment from "moment"

export const Datetime=(date)=>{
    return moment(date).format("dddd, MMMM Do YYYY, h:mm a")
}