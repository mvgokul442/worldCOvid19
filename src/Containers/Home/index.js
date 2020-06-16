import React, { memo, useEffect, useState } from "react"

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { bindActionCreators } from "redux"
import { Row, Col } from "react-bootstrap"
import moment from "moment"

import makeLayoutselect from "../../Layouts/selectors"
import makeHomeselect from "./selectors"
import { getConInfo } from "./actions"

import { options } from "../../Components/Linecharts"

import Statuses from "./componets/Statuses"
import Search from "./componets/Search"
import CountStatus from "../../Components/CounStatus"
import Mapchart from "../../Components/Mapchart"
import { Loader2 } from "../../Components/Loader"
import LineChart from "../../Components/Linecharts"
import _ from "lodash"

function Home(props) {
    const [loader, SetLoader] = useState(false)
    const [Global, setGlobal] = useState({})
    const [countryDetails, setCountry] = useState({})
    const { summary, countryData } = props.layout

    const changeSelect = async (country) => {
        let coun = await _.find(countryData, ['country', country]);
        setGlobal(coun)
        getConInfo(country).then((res) => {
            if(res.timeline){
            arrangeGraph(res.timeline)
            }
            else{
                alert("network error")
            }
        })
    }

    const arrangeGraph = (timeline) => {
        const { cases, deaths, recovered } = timeline
        let cas = { name: "Cases", data: [] }, death = { name: "Deaths", data: [] }, recover = { name: "Recovered", data: [] }, i = 0, xData = []
        for (i in cases) {
            cas.data.push(cases[i])
            death.data.push(deaths[i])
            recover.data.push(recovered[i])
            xData.push(moment(i).format("MMM Do"))
        }
        var option1 = _.clone(options, true);
        option1["series"] = [cas]
        option1["colors"] = ["#ffc107"]
        option1["xAxis"] ={categories:xData}
        option1["yAxis"] ={title:{text:"no of cases"}}

        var option2 = _.clone(options, true);
        option2["series"] = [death]
        option2["colors"] = ["#6c757d"]
        option2["yAxis"] ={title:{text:"no of deaths"}}
        option2["xAxis"] ={categories:xData}

        var option3 = _.clone(options, true);
        option3["series"] = [recover]
        option3["xAxis"] ={categories:xData} 
        option3["yAxis"] ={title:{text:"no of recovered"}}
        option3["colors"] = ["#17a2b8"]

        setCountry({ cases: option1, deaths: option2, recovered: option3 })
    }
    return (
        <div>
            {summary &&
                <Statuses Global={summary} />
            }
            {countryData.length > 0 &&
                <Search Countries={countryData} changeSelect={changeSelect} />
            }
            {Object.keys(Global).length > 0 &&
                <div>
                    <h2>{Global.country.toUpperCase()}</h2>
                    <CountStatus key={Global.cases} Global={Global} />
                    <Row>
                        <Col lg={6}>
                        {countryDetails.cases &&
                        <Row>
                            <Col lg={12}>
                            
                            </Col>
                            <Col lg={12}>
                                <div style={{padding:"20px 0px"}}>
                                    <LineChart options={countryDetails.cases} />
                                </div>
                                </Col>
                            <Col lg={12}>
                                <div style={{padding:"20px 0px"}}> 
                                    <LineChart options={countryDetails.deaths} />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div style={{padding:"20px 0px"}}>
                                    <LineChart options={countryDetails.recovered} />
                                </div>
                            </Col>
                        
                        </Row>
                        }
                        </Col>
                        
                        <Col lg={6}>
                            <Mapchart countryData={Global.countryInfo} />
                        </Col>
                    </Row>
                </div>
            }

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    layout: makeLayoutselect(),
    home: makeHomeselect()
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