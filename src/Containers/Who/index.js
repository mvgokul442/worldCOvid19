import React, { useEffect, useState } from "react"
import { getWhoNew } from "./actions"
import Whoresults from "./components/whoResults"
import Search from "./components/Search"
var parseString = require('xml2js').parseString;


function Who(props) {

    const [result,setResults] = useState({})
    const [filterRes,setFilter] = useState([])

    useEffect(() => {
        parseString(props.result, function (err, result) {
            if (result) {
                setResults(result)
                setFilter(result.rss.channel[0].item)
            }
        });
    }, [props.result])

    const handleChange=(searchName)=>{
        let newArray =   
        result.rss.channel[0].item.filter(wine=>{
                return Object.values(wine).some( val => 
                    String(val).toLowerCase().includes(searchName.toLowerCase()) 
                );
            });
            setFilter(newArray)
    }
    return (
        <div>
            {result.rss &&
            <div>
                <div className="search-box">
                <Search handleChange={handleChange} />
                </div>
                <br/>
                {filterRes.length>0 ?
                <Whoresults result={filterRes}/>
                :
                <p>No results found</p>
                }
            </div>
            }
        </div>
    )
}

Who.getInitialProps = async () => {
    let result
    await getWhoNew().then((res) => {
        result = { result: res }
    })
    return result

}

export default Who