import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import tmdbAPI from "../tmdbAPI";

function Detail(){

     let id = useParams();
     const [movie, setMovie] = useState([]);
     const API_IMAGEURL = 'https://image.tmdb.org/t/p/w400';
    
    console.log(id.id);

    useEffect(()=>{
        tmdbAPI.get(`movie/${id.id}`)
        .then(res => {
            console.log(res.data);
            setMovie(res.data);
        })
    },[])

    return(
        <div>
            <h3 style={{color:'white'}}>{movie.title}</h3>
            <img className="img" src={`${API_IMAGEURL}${movie.poster_path}`} />
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                </div>
            </nav>
                    <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">...</div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
                    <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
                </div>
        </div>
    )
}

export default Detail;