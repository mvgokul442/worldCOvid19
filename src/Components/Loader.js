import React from "react"
import { Modal, Spinner } from "react-bootstrap"

function Loader() {

    return (
        <>
            <Modal
                show={true}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body style={{textAlign:"center",backgroundColor:"transparent"}}>
                    <Spinner animation="grow" variant="primary" /><br/>
                    loading please wait
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Loader

export const Loader2=()=>{
    return(
        <Spinner animation="border" role="status" variant="primary" />
    )
}

