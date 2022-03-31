import React, { Component } from 'react';
import {Col, Pagination, PaginationItem, PaginationLink} from "reactstrap";
export default class DisplayPagination extends Component {
  render() {

    let disablePrev = {};
    if (this.props.data.data.pageNo === 1 )  {
        disablePrev = {'disabled' : true};
    }
    
    let disableNext = {};
    if ( ( this.props.data.itemPerPage * this.props.data.data.pageNo ) > this.props.data.results.total) {
        disableNext = {'disabled' : true};
    }

    return (
        <Col className="paginationWrapper pt-3 mb-5" xs={12} >
            <Pagination aria-label="pagination" className="floatCenter" size="lg">
                <PaginationItem  { ...disablePrev }>
                    <PaginationLink previous href="#" onClick={this.props.prevPage} >
                        <i className="fa fa-arrow-circle-left " /> Prev
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem { ...disableNext }>
                    <PaginationLink next href="#" onClick={this.props.nextPage}>
                        Next <i className="fa fa-arrow-circle-right " />
                    </PaginationLink>
                </PaginationItem>
            </Pagination>
        </Col>

    )
  }
}


