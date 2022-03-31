import React, { Component } from 'react'
import Gallery from "react-photo-gallery"
  
export default class DisplayImageMasonry extends Component {
  constructor(props) {
    super(props);

    this.imageClick = this.imageClick.bind(this);
  }

  imageClick (e) {
    this.props.openModal(e.target.id);
  }
  


  
  render() {

    console.log(this.props.data);
  

  const photos = this.props.data.map((image, key) => { 
    return { 
      src: image.largeImageURL,
      width :  image.imageWidth,
      height : image.imageHeight,
      key : key,
      alt: image.tags + " : " + image.type,
      id : key
     }
  });


    return (
    <div onClick={this.imageClick} onMouseOver={this.imageHoverStart} onMouseOut={this.imageHoverEnd}>
      <Gallery photos={photos} />
      </div>
    )
  }
}
