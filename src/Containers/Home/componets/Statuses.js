import React from "react"
import { Row, Col,Jumbotron } from "react-bootstrap"

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

                <Col lg={3} xs={4}>
                    <div style={divStyle}>
                        <span style={{color:"#007bff"}}>
                        <h2>{Global.TotalConfirmed}</h2>
                        <p>+{Global.NewConfirmed}</p>
                         Confirmed
                        </span>
                    </div>
                </Col>

                <Col lg={3} xs={4}>
                    <div style={divStyle}>
                    <span style={{color:"#6c757d"}}>
                        <h2>{Global.TotalDeaths}</h2>
                        <p>+{Global.NewDeaths}</p>
                         Deaths
                        </span>
                    </div>
                </Col>

                <Col lg={3} xs={4}>
                    <div style={divStyle}>
                    <span style={{color:"#17a2b8"}}>
                        <h2>{Global.TotalRecovered}</h2>
                        <p>+{Global.NewRecovered}</p>
                         Recovered
                        </span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
