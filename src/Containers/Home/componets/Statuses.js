import React from "react"
import { Row, Col,Jumbotron } from "react-bootstrap"
import {Datetime} from "../../../utils/dateFormat"
import NumberFormat from "../../../utils/NumberFormat"

const divStyle = {
    // backgroundColor: "#f5f5f5",
    padding: "20px 0",
    borderRadius: "5px",
    width: '100%',
    textAlign: 'center',
    margin:"5px",
    backgroundColor:"#fff",
    boxShadow: "2px 0px 27px -6px rgba(0,0,0,0.21)"
}

export default function Statuses(props) {
 
    const {Global}=props
    return (
        <div>
            <Row className="justify-content-md-center">
            <Col lg={9}>
                <p className="secondary-para"> Updated <strong>{Datetime(Global.updated)}</strong></p>
                </Col>
            </Row>
            <Row className="justify-content-md-center"> 
                <Col lg={3} xs={4}>
                    <div style={divStyle}>
                        <span style={{color:"#007bff"}}>
                        <h2>{NumberFormat(Global.cases)}</h2>
                        <p>+ {NumberFormat(Global.todayCases)}</p>
                         Confirmed
                         
                        </span>
                    </div>
                </Col>

                <Col lg={3} xs={4}>
                    <div style={divStyle}>
                    <span style={{color:"#6c757d"}}>
                        <h2>{NumberFormat(Global.deaths)}</h2>
                        <p>+ {NumberFormat(Global.todayDeaths)}</p>
                         Deaths
                        </span>
                    </div>
                </Col>

                <Col lg={3} xs={4}>
                    <div style={divStyle}>
                    <span style={{color:"#17a2b8"}}>
                        <h2>{NumberFormat(Global.recovered)}</h2>
                        <p>+ {NumberFormat(Global.todayRecovered)}</p>
                         Recovered
                        </span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
