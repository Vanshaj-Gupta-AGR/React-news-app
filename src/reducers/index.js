import { combineReducers } from "redux";
const initialNewsState={
    list:[],
}

export  function news (state=initialNewsState,action){
    if(action.type==='ADD_NEWS'){
        return {
            ...state,
            list: action.news
        }
    }

    return state;
}


export default combineReducers({
    news: news,
})