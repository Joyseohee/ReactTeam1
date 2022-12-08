import { useEffect, useState, memo } from "react";
import tmdbAPI from "./tmdbAPI";

function RenderMovie(){
    // 가져올 영화 담을 배열
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        tmdbAPI.get('movie/popular')
        .then(res => {
            console.log(res.data.results);
            setMovie(res.data.results);
        })
    }, [])

    return(
        <div>
            {
                movie.map((movie, i)=>{
                    return(
                        <div key={i}>
                            <div>{movie.title}</div>
                            <div>{movie.overview}</div>
                            <div></div>
                        </div>
                    );
                })
            }
        </div>
    );
    // return(
    //     <>
    //     movie.map((movie)=>{
    //         return(
    //             <div>
    //             </div>
    //         );
    //     })
        

    //     </>
    // );


    
}

export default RenderMovie;