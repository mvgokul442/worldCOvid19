import React, { useEffect, useState,memo } from "react"

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import makeLayoutselect from "../../Layouts/selectors"
import Search from "../../Components/SearchOn"
import Whoresults from "../../components/whoResults"
var parseString = require('xml2js').parseString;

function FeedsData(props){
    const [result,setResults] = useState({})
    const [filterRes,setFilter] = useState([])

    useEffect(() => {
        parseString(props.layout.newsData, function (err, result) {
            if (result) {
                setResults(result)
                setFilter(result.rss.channel[0].item)
            }
        });
    }, [props.layout.newsData])

    const handleChange=(searchName)=>{
        let newArray =   
        result.rss.channel[0].item.filter(wine=>{
                return Object.values(wine).some( val => 
                    String(val).toLowerCase().includes(searchName.toLowerCase()) 
                );
            });
            setFilter(newArray)
    }
    return(
        <div>
            {/* {result.rss && */}
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
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    layout: makeLayoutselect()
  });
  

  
  
  const withConnect = connect(
    mapStateToProps,
    null
  );
  
  export default compose(
    withConnect,
    memo
  )(FeedsData);