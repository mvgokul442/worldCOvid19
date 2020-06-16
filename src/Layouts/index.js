import React,{memo, useEffect, useState} from "react"
import Sidebar from "./components/sidebar"
import Footer from "./components/footer"
import { Container } from "react-bootstrap"

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { bindActionCreators } from "redux"

import {getSummary} from "./actions"
import makeLayoutselect from "./selectors"
import Loader from "../Components/Loader"



 function Layout(props) {
    useEffect(()=>{
        callSummary()
    },[])

    const callSummary=()=>{
         props.getSummary()
    }
    const {loader} = props.layout
    return (
        <div>
            {loader &&
            <Loader/>}
            <Sidebar />
            <div style={{ minHeight: "84.5vh", margin: "20px 0px" }}>
                <Container>
                    {props.children}
                </Container>
            </div>
            <Footer />
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    layout: makeLayoutselect()
  });
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getSummary
    }, dispatch);
  }
  
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
  );
  
  export default compose(
    withConnect,
    memo
  )(Layout);