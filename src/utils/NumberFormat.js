
const NumberFormat=(number)=>{
    if(number){
   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    else{
        return ""
    }
}

export default NumberFormat