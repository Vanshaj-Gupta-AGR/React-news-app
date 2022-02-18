import Navbar from './Navbar';
import React from 'react';
import { search } from '../reducers';
import { connect } from 'react-redux';
import {getnews} from    '../actions'
import NewsCard from './NewsCard';


class App extends React.Component{

  async componentDidMount() {
    try {
      const response = await getnews();
      console.log(response.articles,"from cmp")
      this.props.dispatch({
        type: "ADD_NEWS",
        news: response.articles
      })
    } catch (error) {
        console.log("err");
    }
  

  
}


    
  

  render(){
    const {news,search}=this.props
    const {list}= news;

    const displayMovies =list
    return (
      <div className="App">
        <Navbar search={search}/>
        <div className="main">
          <div className="list">
            {displayMovies.map((news,index) =>{
              return <NewsCard news={news} key={`movies-${index}`} dispatch={this.props.dispatch} />
            })}
          </div>
        </div>
      </div>
  );
}
}


function callback(state){
    return {
      news: state.news,
      search: state.search
    }
}

const connectedAppComponent=connect(callback)(App)

export default connectedAppComponent;
