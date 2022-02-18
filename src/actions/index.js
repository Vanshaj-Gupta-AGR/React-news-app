
export function handleMovieSearch(news){
    
    console.log("gbg")

    return function (dispatch){
    const url=`https://newsapi.org/v2/everything?q=${news}&sortBy=publishedAt&apiKey=d2c63b6a60104154a5162eee705632e2`
    console.log("gbg")
    fetch(url)
      .then((response)=>response.json())
      .then((news)=>{
        console.log(news.articles,"okay");
        news=news.articles

        dispatch({type: "ADD_NEWS",news})
      })
    
    }
 

}

export const getnews = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=d2c63b6a60104154a5162eee705632e2"
  );
  const json = await response.json();
  console.log(json)
  return json;
};




