import React,{memo} from "react"
import {Row,Col,Badge} from "react-bootstrap"


const divStyle = {
    padding: "20px 20px",
    textAlign: 'center',
    width:"100%",
    margin:"5px"
}

function CountStatus(props){

    const{Global}=props
    return(
        <div>
            <Row>
                <Col lg={2} md={3} xs={4} >
                <Badge variant="danger" style={divStyle}>
                <h4>{Global.NewConfirmed}</h4>
                New Confirmed
                </Badge>{' '}
                </Col>
                <Col lg={2} md={3} xs={4}>
                <Badge variant="primary" style={divStyle}>
                <h4>{Global.TotalConfirmed}</h4>
                Total Confirmed
                </Badge>{' '}
                </Col>
                <Col lg={2} md={3} xs={4}>
                <Badge variant="warning" style={divStyle}>
                <h4>{Global.NewDeaths}</h4>
                New Deaths
                </Badge>{' '}
                </Col>
                <Col lg={2} md={3} xs={4}>
                <Badge variant="secondary" style={divStyle}>
                <h4>{Global.TotalDeaths}</h4>
                Total Deaths
                </Badge>{' '}
                </Col>
                <Col lg={2} md={3} xs={4}>
                <Badge variant="success" style={divStyle}>
                <h4>{Global.NewRecovered}</h4>
                New Recovered
                </Badge> 
                </Col>
                <Col lg={2} md={3} xs={4}>
                <Badge variant="info" style={divStyle}>
                <h4>{Global.TotalRecovered}</h4>
                Total Recovered
                </Badge>{' '}
                </Col>
            </Row>
        </div>
    )
}

export default CountStatus
