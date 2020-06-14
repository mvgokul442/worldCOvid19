import React, { useState } from 'react';
import Router from 'next/router'

import Layout from '../src/Layouts';
import Loader from "../src/Components/Loader"

import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux"
import configureStore from "../src/Saga"

import "../src/assests/css/style.css"

export const Store = configureStore();


export default function MyApp({ Component, pageProps }) {
    const [loader,setLoader] = useState(false)

    Router.events.on('routeChangeStart', (url) => {
        setLoader(true)
      })
    Router.events.on('routeChangeComplete', () =>  setLoader(false))
    Router.events.on('routeChangeError', () => setLoader(false))  
       
    return (
        <Provider store={Store} >
        <Layout>
            {loader &&
            <Loader/>
            }
            <Component {...pageProps} />
        </Layout>
        </Provider>
    )
}