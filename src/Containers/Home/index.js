import React, { memo, useEffect,useState } from "react"

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { bindActionCreators } from "redux"

import makeLayoutselect from "../../Layouts/selectors"
import makeHomeselect from "./selectors"
import {getConInfo} from "./actions"

import Statuses from "./componets/Statuses"
import Search from "./componets/Search"
import CountStatus from "../../Components/CounStatus"
import Mapchart from "../../Components/Mapchart"
import {Loader2} from "../../Components/Loader"

function Home(props) {
    const [loader,SetLoader] = useState(false)
    const [Global, setGlobal] = useState({})
    const [countryData,setCountry] = useState([])
    const { summary } = props.layout

    const changeSelect = (country) => {
        setGlobal(country)
        setCountry([])
        SetLoader(true)
        getConInfo(country.Slug).then((countryData)=>{
            setCountry(countryData)
            SetLoader(false)
        })
    }

    return (
        <div>
            {summary.Global &&
                <Statuses Global={summary.Global} />
            }
            {summary.Countries &&
                <Search Countries={summary.Countries} changeSelect={changeSelect} />
            }
            {Object.keys(Global).length > 0 &&
                <div>
                    <h2>{Global.Country.toUpperCase()}</h2>
                    <CountStatus key={Global[0]} Global={Global} />
                </div>
            }
              {loader &&
            <div style={{textAlign:"center",padding:"50px"}}>
                <Loader2/>
            </div>
            }
            {countryData.length>0 &&
            <Mapchart countryData={countryData}/>
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    layout: makeLayoutselect(),
    home:makeHomeselect()
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        
    }, dispatch);
}


const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(
    withConnect,
    memo
)(Home);