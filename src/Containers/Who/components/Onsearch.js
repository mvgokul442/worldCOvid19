import React from "react"
import {Form} from "react-bootstrap"

const searchStyle={
    borderRadius: "20px",
}

export default function SearchBar(props) {

    const handleChange=(e)=>{
          props.handleChange(e.target.value)
    }   
    return (
        <>
            <Form.Group >
                <Form.Control style={searchStyle}   size="lg" type="text" placeholder="search here ..." onChange={handleChange}/>
            </Form.Group>
        </>
    )
}