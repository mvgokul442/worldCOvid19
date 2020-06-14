import React, { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import Select from 'react-select'
import _ from "lodash"

const formStyle = {
    // padding: "20px 0",
    // borderRadius: "5px",
    // width: '100%',
    // textAlign: 'center',
    marginTop:"35px",
    // backgroundColor:"#fff",
    // boxShadow: "2px 0px 27px -6px rgba(0,0,0,0.21)"
}

const colourStyles = {
    control: styles => ({ ...styles,padding:"20px", backgroundColor: 'white',height:"100%",border:"none",":hover":{cursor:"pointer"},border:"2px solid #757373",borderRadius:"40px"}),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = "black";
      return {
        ...styles,
        padding:"20px",
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? data.color
          : isFocused
          ? "#f2f2f2e0"
          : null,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? 
             'black'
          : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',
  
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled && (isSelected ? data.color : "grey"),
        },
      };
    },
    menu:(styles)=>{
        return{
            ...styles,
            border:"none",
            boxShadow: "2px 0px 27px -6px rgba(0,0,0,0.21)",
            borderRadius:"0px",
        }
    }
    // multiValue: (styles, { data }) => {
    //   const color = "red";
    //   return {
    //     ...styles,
    //     backgroundColor: color.alpha(0.1).css(),
    //   };
    // },
    // multiValueLabel: (styles, { data }) => ({
    //   ...styles,
    //   color: data.color,
    // }),
    // multiValueRemove: (styles, { data }) => ({
    //   ...styles,
    //   color: data.color,
    //   ':hover': {
    //     backgroundColor: data.color,
    //     color: 'white',
    //   },
    // }),
  };


function Search(props) {
    const [options, setOptions] = useState([])
   

    useEffect(() => {
        arrangeOptions(props.Countries)
    }, [props.Countries])
    const arrangeOptions = (countries) => {
        let options = []
        countries = _.orderBy(countries, ['TotalConfirmed'],['desc'])
        countries.forEach(element => {
            options.push({
                label: element.Country,
                value: element.Slug
            })
        });
        setOptions(options)
    }

    const changeSelect=(selected)=>{
        let res = _.find(props.Countries, ['Slug', selected.value])
        props.changeSelect(res)
    }
    return (
        <>
        <div style={formStyle}>
            <Form>
                <Form.Group >
                    <Select  options={options} onChange={changeSelect} styles={colourStyles} />
                </Form.Group>
            </Form>
        </div>
        </>
    )
}
export default Search