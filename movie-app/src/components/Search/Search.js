import { useEffect, useState } from "react";
import tmdbAPI  from"../../tmdbAPI";

function Search(setData){
    let movdata = [];
    let [movie, setMovie] = useState([]);
    const search = document.getElementById('search');

    useEffect(()=>{
        if(movie.length) {
            return;
        }
        tmdbAPI.get('movie/popular')
        .then(res => {
            setMovie(res.data.results);
        })
    },[search])

    for(let i = 0; i <movie.length; i ++) {
        movdata[i] = movie[i]
    }
    return (
        <div>
            <input type = "text" id = "search"></input>
            <button onClick = {(() => {SearchName( setData ,movdata,search.value);})}>검색</button>
        </div>
    ) 
}

function SearchName(setData, movdata=[], value="") {
    let movie = [];

    //첫 글자 대문자 (original_title도 검색하기 위해)
    if(value.length !== 0) {
        value = value.charAt(0).toUpperCase() + value.slice(1);
    }
    for(let i = 0; i < movdata.length; i++) {
        if(movdata[i].title.includes(value) || movdata[i].original_title.includes(value)) {
            movie[i] = movdata[i];
        }
    }
    console.log(movie);
    setData(movie);
}


export default Search;