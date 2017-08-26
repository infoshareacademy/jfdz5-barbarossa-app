import React from 'react'
import './Search.css';
import {
    Button,
    Form,
    FormGroup,
    ControlLabel,
    FormControl
} from 'react-bootstrap'

const Search = () => (
            <div className="col-sm-6">
                <div className="main-panel">
                    <Form inline>
                        <FormGroup controlId="formInlineName">
                            <ControlLabel>From:</ControlLabel>
                            {' '}
                            <FormControl type="text" placeholder="Jane Doe"/>
                        </FormGroup>
                        {' '}
                        <FormGroup controlId="formInlineEmail">
                            <ControlLabel>Where:</ControlLabel>
                            {' '}
                            <FormControl type="email" placeholder="jane.doe@example.com"/>
                        </FormGroup><br/>
                        {' '}
                        <Button bsStyle="info" type="submit">
                            Search
                        </Button>
                    </Form>
                </div>
            </div>
);

export default Search