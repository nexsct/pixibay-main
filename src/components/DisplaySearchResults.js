import React, { Component } from 'react'
import { Row, Col, Media, Fade, Modal, ModalHeader, ModalBody, ModalFooter, ButtonGroup, Button} from "reactstrap";
import { Link } from "react-router-dom";
import DisplayImageMasonry from "./DisplayImageMasonry";

export default class DisplaySearchResults extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            dataForModal : {},
            modalIsOpen: false,
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        
    }


    openModal(keyNo) {

        if(keyNo == null) {
            keyNo = 1;

        }
        this.setState({
                dataForModal : this.props.data.results.hits[keyNo],
                modalIsOpen: true
            }, () => {
                document.title = "Pixabay: " + this.state.dataForModal.tags;
        })


    }


    closeModal () {
        this.setState({modalIsOpen: false});
        document.title = "Images from Pixabay, using React";
    }


    render() {

        let modal = (
            
            <Modal isOpen={this.state.modalIsOpen} toggle={this.closeModal} className="modalFull">
                <ModalHeader toggle={this.closeModal}>Tags: {this.state.dataForModal.tags}</ModalHeader>
                <ModalBody className="p-0">
                <Row>
                    <Col xs="12" lg="8" className="p-0 ">
                        <Media object src={this.state.dataForModal.largeImageURL} alt="" className="img-fluid" />
                    </Col>
                    <Col xs="12" lg="4" className="p-3 ">
                        <ButtonGroup className="textAlignCenter p-3">
                            <Button color="primary">
                                Comments: {this.state.dataForModal.comments} <i className="fa fa-comments"></i> 
                            </Button>
                            <Button color="primary">
                                Downloads: {this.state.dataForModal.downloads} <i className="fa fa-download"></i>                            
                            </Button>
                            <Button color="primary">
                                Favorites: {this.state.dataForModal.favorites} <i className="fa fa-heart"></i>                            
                            </Button>
                        </ButtonGroup>
 
                         <h2 className="p-3">
                            User: {this.state.dataForModal.user}
                        </h2>
                        <h3 className="p-3">
                            <Link to="https://pixabay.com/en/service/license/" target="_blank">Pixabay License</Link>
                            <span className="d-block">
                                Free for commercial use, no attribution required
                            </span>

                            <a target="_blank" rel="noopener noreferrer"  href={this.state.dataForModal.largeImageURL} download="pixabay-react" className="btn btn-primary mt-3">Download</a>
                        </h3>

                        <a href={this.state.dataForModal.pageURL} target="_blank" rel="noopener noreferrer" className="m-3">
                            More info on pixabay.com
                        </a>
                    </Col>
                </Row>

                </ModalBody>

                <ModalFooter>
                    
                    <Button color="secondary" onClick={this.closeModal}>Close</Button>
                </ModalFooter>
            </Modal>
        );


         let resultsTitle = (
                <Col xs="12">
                    <span>Total: <b>{ 
                        new Intl.NumberFormat('hu-HU', { maximumSignificantDigits: 3 }).format(this.props.data.results.total)
                         }</b></span>
                </Col>

         );



        return (
            <Row>
                <Fade>
                    { resultsTitle }
                </Fade>
                <Fade>
                    <DisplayImageMasonry data={this.props.data.results.hits} openModal={this.openModal}/>
                </Fade>
                {modal}
                
            </Row>
        )
    }
}
 