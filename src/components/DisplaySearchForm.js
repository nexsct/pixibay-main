import React, { Component } from 'react'
import DisplayInputs from "./formElements/DisplayInputs";
import DisplaySelect from "./formElements/DisplaySelect";
import DisplayButton from "./formElements/DisplayButton";
import DisplayInlineError from "./formElements/DisplayInlineError";

import { Row, Col, Form } from 'reactstrap';

class DisplaySearchForm extends Component {

    

    
    constructor (props) {
        super(props);

        this.state = { data : this.props.data};

        this.onFormChange = this.onFormChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    onFormChange (e) {
        let prevState = this.state.data;
        let targetName = e.target.name;
        let targetValue = e.target.value;
        prevState[targetName] = targetValue;
        prevState.searchChanged = true;
        this.setState({ data : prevState});
        return;
    }

  
    onFormSubmit (e) {
        e.preventDefault();
        if (this.state.data.searchChanged) {
            this.props.searchData(this.state.data);
        }
        return;     
    }


    render() {
        return (
            <React.Fragment>
                <h1 className="text-center pt-3">Search images on Pixabay</h1>

                <Form onSubmit={this.onFormSubmit}  method="post" className="w-100  floatCenter mb-3">
                <Row>

                    <Col className="mb-2" sm="6" md="3" lg={{ size: 2, offset: 1 }} >
                        <DisplayInputs name="searchString" onChange={this.onFormChange} labelText="Search for something" defaultValue={this.props.data.searchString}/>
                    </Col>
                    
                    <Col className="mb-2" sm="6" md="3" lg="2">
                        <DisplaySelect name="searchImageCategory"  data={dataImageCategory}   defaultValue={this.props.data.searchImageCategory}      onChange={this.onFormChange} labelText="Image category" />
                    </Col>

                    <Col className="mb-2" sm="4" md="2" lg="2">
                        <DisplaySelect name="searchImageType"     data={dataImageType}        defaultValue={this.props.data.searchImageType}      onChange={this.onFormChange} labelText="Image type" />
                    </Col>
                    

                    <Col className="mb-2" sm="4" md="2" lg="2">
                        <DisplaySelect name="searchImageOrder"     data={dataOrder}   defaultValue={this.props.data.searchImageOrder}      onChange={this.onFormChange} labelText="Order" />                        
                    </Col>
                    
                    <Col className="my-auto" sm="4" md="2" lg="2">
                        <DisplayButton name="submit" type="submit" text="Search" className="w-100" />                    
                    </Col>
                </Row>
                </Form>
                
                { this.error && <DisplayInlineError errorText={ this.error } />}
            </React.Fragment>
        )
  }
}

export default DisplaySearchForm;








const dataImageType = [
    { key: 'all', text: 'all', value: 'all' },
    { key: 'photo', text: 'photo', value: 'photo' },
    { key: 'illustration', text: 'illustration', value: 'illustration' },
    { key: 'vector', text: 'vector', value: 'vector' }
  ];
  
  
  const dataImageCategory = [
    { key: 'all', text: 'all', value: 'all' },
    { key: 'fashion', text: 'fashion', value: 'fashion' },
    { key: 'nature', text: 'nature', value: 'nature' },
    { key: 'science', text: 'science', value: 'science' },
    { key: 'education', text: 'education', value: 'education' },
    { key: 'people', text: 'people', value: 'people' },
    { key: 'feelings', text: 'feelings', value: 'feelings' },
    { key: 'religion', text: 'religion', value: 'religion' },
    { key: 'health', text: 'health', value: 'health' },
    { key: 'places', text: 'places', value: 'places' },
    { key: 'animals', text: 'animals', value: 'animals' },
    { key: 'industry', text: 'industry', value: 'industry' },
    { key: 'food', text: 'food', value: 'food' },
    { key: 'computer', text: 'computer', value: 'alcomputerl' },
    { key: 'sports', text: 'sports', value: 'sports' },
    { key: 'transportation', text: 'transportation', value: 'transportation' },
    { key: 'travel', text: 'travel', value: 'travel' },
    { key: 'buildings', text: 'buildings', value: 'buildings' },
    { key: 'business', text: 'business', value: 'business' },
    { key: 'music', text: 'music', value: 'music' },
  ];
  
  const dataOrder = [
    { key: 'latest', text: 'latest', value: 'latest' },
    { key: 'popular', text: 'popular', value: 'popular' },
  ]

  