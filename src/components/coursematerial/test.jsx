import React, { Component } from 'react';
import {Row,Col} from "react-bootstrap";
import ReferenceRightContainer from './referenceRightContainer'

export default class Test extends Component {
    render() {
        return (
            <>
            <Row>
                <Col md="9">
                <div className="m-t-50 verticalhorizontalMiddle m-b-50">
                <h1>Test materials</h1>
                
            </div>

                </Col>
                <Col md="3">
                    <ReferenceRightContainer/>

                </Col>
            </Row>
            </>
            
        )
    }
}
