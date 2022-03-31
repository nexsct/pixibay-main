import React, { Component } from 'react'
import DisplaySearchForm from "./DisplaySearchForm";
import DisplaySearchResults from "./DisplaySearchResults";
import Preloader from "./Preloader";
import DisplayPagination from "./DisplayPagination";


export default class DisplaySearch extends Component {
      constructor(props) {
        super(props);

        this.state = {
          apiKey              : process.env.REACT_APP_PIXABAY_API_KEY,
          results             : {},
          displayLoader       : true,
          itemPerPage         : 24,
          data  : {
            searchChanged       : false,
            searchString        : '',
            searchImageType     : 'all', 
            searchImageCategory : 'all',
            searchImageOrder    : 'latest', 
            pageNo              : 1, 
            disabledPrevPage    : true,
            disabledNextPage    : false,
          }
        };

        this.searchData = this.searchData.bind(this);
        this.nextPage   = this.nextPage.bind(this);
        this.prevPage   = this.prevPage.bind(this);

        this.myRef = null;
      }

      componentDidMount(){
          this.searchData(this.state.data);
      }


      nextPage() {
          if ( ( this.state.itemPerPage * this.state.data.pageNo ) > this.state.results.total) {
              return;
          }
          
          let prevState = this.state.data;
          prevState.pageNo++;
          prevState.disabledPrevPage = false;
          this.setState({ data : prevState }, () => {
            this.searchData(this.state.data);
          });
      }

      prevPage() {
          let prevState = this.state.data;          
          if (prevState.pageNo > 1) {
            prevState.pageNo--;
            prevState.disabledNextPage = false;
            this.setState({ data : prevState }, () => {
              this.searchData(this.state.data);
            });
          }


      }
  

      searchData (changedData) {
        changedData.searchChanged = false;
        this.setState({ 
            displayLoader :  true,
            data          : changedData,
            results       : {}
        });

        let url = 'https://pixabay.com/api/?key='+this.state.apiKey+'&per_page='+this.state.itemPerPage+'&page='+changedData.pageNo+'&q='+changedData.searchString+'&image_type='+changedData.searchImageType+'&category='+changedData.searchImageCategory+'&order='+changedData.searchImageOrder;

        fetch( url ) 
        .then( response => response.json() )
        .then( d =>  {
              this.setState({
                displayLoader: false,
                results      : d,
              }, () => {
                this.scrollToMyRef();
              });
        })   
      }


    scrollToMyRef = () => window.scrollTo(0, this.resultsElement.offsetTop)


  render() {
    return (
      
      <React.Fragment>
          <DisplaySearchForm data={this.state.data} searchData={this.searchData}/>
          { this.state.displayLoader ?
            <Preloader /> : 
            <div ref={ (ref) => this.resultsElement=ref }>
                <DisplaySearchResults data={this.state} nextPage={this.nextPage} prevPage={this.prevPage} /> 
                <DisplayPagination data={this.state} prevPage= {this.prevPage} nextPage={this.nextPage} />
              </div>
           }
      </React.Fragment>
      
    )
  }
}
