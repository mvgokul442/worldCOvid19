import React,{memo} from "react"
import {Row,Col,Badge} from "react-bootstrap"
import NumberFormat from "../utils/NumberFormat"


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
                <Badge variant="warning" style={divStyle}>
                <h4>{NumberFormat(Global.cases)}</h4>
                <p>+ {NumberFormat(Global.todayCases)}</p>
                Cases
                </Badge>{' '}
                </Col>
                <Col lg={2} md={3} xs={4} >
                <Badge variant="danger" style={divStyle}>
                <h4>{NumberFormat(Global.active)}</h4>
                <p><br/></p>
                Active
                </Badge>{' '}
                </Col>
                <Col lg={2} md={3} xs={4}>
                <Badge variant="secondary" style={divStyle}>
                <h4>{NumberFormat(Global.deaths)}</h4>
                <p>+ {NumberFormat(Global.todayDeaths)}</p>
                Fatal 
                </Badge>{' '}
                </Col>
                <Col lg={2} md={3} xs={4}>
                <Badge variant="info" style={divStyle}>
                <h4>{NumberFormat(Global.recovered)}</h4>
                <p>+ {NumberFormat(Global.todayRecovered)}</p>
                Recovered
                </Badge>{' '}
                </Col>
                <Col lg={2} md={3} xs={4}>
                <Badge variant="primary" style={divStyle}>
                <h4>{NumberFormat(Global.tests)}</h4>
                <p><br/></p>
                Tests
                </Badge>{' '}
                </Col>
                <Col lg={2} md={3} xs={4}>
                <Badge variant="success" style={divStyle}>
                <h4>{NumberFormat(Global.population)}</h4>
                <p><br/></p>
                Population
                </Badge> 
                </Col>
            </Row>
        </div>
    )
}

export default CountStatus
