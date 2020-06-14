import React, { useEffect, useState } from "react"


function Whoresults({result}) {

    return (
        <div>
            {
            result.map(idata=>
            <div key={idata.link[0]} style={{margin:"0px 0px 30px 0px"}}>
                <h4 onClick={()=>window.open(idata.link[0])}>{idata.title[0]}</h4>
                {idata.description[0].length<300 ?
                <div style={{color:"#818080"}} dangerouslySetInnerHTML={{ __html: idata.description[0] }}></div>
                :
                <div style={{color:"#818080"}} dangerouslySetInnerHTML={{ __html: idata.description[0].substr(0,300)+"..." }}></div>
                }
            </div>
            )}
        </div>
    )
}


export default Whoresults