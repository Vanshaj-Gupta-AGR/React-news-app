import React from "react";
import { handleMovieSearch } from "../actions";
import { connect } from 'react-redux';




class Navbar extends React.Component{
  constructor(props){
    super(props)
    this.state={
      searchText: '',
    };
    
  }


  handleSearch=()=>{
    const {searchText}= this.state;
    console.log("okay")

    this.props.dispatch(handleMovieSearch(searchText));

  }

    


  handleChange=(e)=>{
    this.setState({
      searchText: e.target.value,
    })
  }


    render(){
     
  return (
    <div className="nav">
        <div className="search-container">
            <input onChange={this.handleChange} />
            <button id="search-btn" onClick={this.handleSearch}>Search</button>
            
        </div>
     
    </div>
  );
}
}




function callback(state){
  return {
    news: state.news
  }
}

const connectedAppComponent=connect(callback)(Navbar)

export default connectedAppComponent;

