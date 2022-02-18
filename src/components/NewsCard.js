import React from "react";



class NewsCard extends React.Component {



    render(){
        const { news }=this.props;
  
  return (
    <div className="movie-card">
        <div className="left">
            <img alt="movie-poster" src={news.urlToImage} />
        </div>
        <div className="right">

        <div className="title">{news.title}</div>
        <div className="plot">{news.description}</div>
         <a href={news.url}>click to know more</a>
         <div className="footer">
            <div className="rating">
                <span>{news.publishedAt.split("T")[0]}</span>
            </div>

           </div>
            
        </div>
        
            
        </div>
        

       
    
  );
}
}

export default NewsCard;
