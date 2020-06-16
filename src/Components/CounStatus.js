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
                <h4>{ Global.cases ? NumberFormat(Global.cases) : 0}</h4>
                <p> {Global.todayCases ? +"+ "+NumberFormat(Global.todayCases) : <br/> }</p>
                Cases
                </Badge>{' '}
                </Col>
                <Col lg={2} md={3} xs={4} >
                <Badge variant="danger" style={divStyle}>
                <h4>{Global.active? +"+ "+ NumberFormat(Global.active): 0}</h4>
                <p><br/></p>
                Active
                </Badge>{' '}
                </Col>
                <Col lg={2} md={3} xs={4}>
                <Badge variant="secondary" style={divStyle}>
                <h4>{Global.deaths ? NumberFormat(Global.deaths): 0}</h4>
                <p>{Global.todayDeaths ? +"+ "+ NumberFormat(Global.todayDeaths) : <br/>}</p>
                Fatal 
                </Badge>{' '}
                </Col>
                <Col lg={2} md={3} xs={4}>
                <Badge variant="info" style={divStyle}>
                <h4>{Global.recovered ? NumberFormat(Global.recovered) : 0}</h4>
                <p> {Global.todayRecovered ? +"+ "+ NumberFormat(Global.todayRecovered) : <br/>}</p>
                Recovered
                </Badge>{' '}
                </Col>
                <Col lg={2} md={3} xs={4}>
                <Badge variant="primary" style={divStyle}>
                <h4>{Global.tests ? NumberFormat(Global.tests): 0}</h4>
                <p><br/></p>
                Tests
                </Badge>{' '}
                </Col>
                <Col lg={2} md={3} xs={4}>
                <Badge variant="success" style={divStyle}>
                <h4>{Global.population ? NumberFormat(Global.population) : 0}</h4>
                <p><br/></p>
                Population
                </Badge> 
                </Col>
            </Row>
        </div>
    )
}

export default CountStatus
