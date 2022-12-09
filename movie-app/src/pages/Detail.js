import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import style from "./Detail.module.css"
import tmdbAPI from "../tmdbAPI";
import ReactPlayer from 'react-player'

import {Nav} from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";

function Detail(){

     let id = useParams();
     const [movie, setMovie] = useState([]);
     const API_IMAGEURL = 'https://image.tmdb.org/t/p/w400';
     const [video, setVideo] = useState([]);
     const [movieKey, setMoviekey] = useState();

     let [clickTab, setClickTab] = useState(0);
    
    console.log(id.id);

    useEffect(()=>{
        tmdbAPI.get(`movie/${id.id}`)
        .then(res => {
            console.log(res.data);
            setMovie(res.data);
        })
    },[])
    
    useEffect(()=>{
        tmdbAPI.get(`movie/${id.id}/videos`,{ params: {  language: "en-US"  }})
        .then(res => {
            console.log(111212)
            console.log(res.data.results);
            setVideo(res.data.results);
            setMoviekey(res.data.results[0].key)
        })
    },[])
    console.log("movieKey: " + movieKey)
    // console.log(video[0].key)
    //kyodvzc5GHU
    //https://www.youtube.com/watch?v=${movieKey}
    return(
        <div className={style.back}>
            <section>
                <img className={style.img} src={`${API_IMAGEURL}${movie.poster_path}`} />
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url={`https://www.youtu.be/${movieKey}`}    // 플레이어 url
                    width='800px'         // 플레이어 크기 (가로)
                    height='500px'        // 플레이어 크기 (세로)
                    playing={true}        // 자동 재생 on
                    muted={true}          // 자동 재생 on
                    controls={true}       // 플레이어 컨트롤 노출 여부
                    light={false}         // 플레이어 모드
                    pip={true}            // pip 모드 설정 여부
                />
            </div>
                <div style={{color:'white'}}>{movie.title}</div>
                <span style={{color:'white'}}>{movie.overview}</span>
            </section>
            <Nav fill variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{setClickTab(0)}} eventKey="link-0">상세정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setClickTab(1)}} eventKey="link-1">관련소식</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setClickTab(2)}} eventKey="link-2">실관람평</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent clickTab={clickTab} movies={movie}/>
        </div>
    )
}

function TabContent(props){
    console.log(props.clickTab)
    if(props.clickTab == 0){
        return <div style={{color:'white'}}>{props.movies.original_title}</div> }
    if(props.clickTab == 1){
        return <div style={{color:'white'}}>{props.movies.tagline}</div> }
    if(props.clickTab == 2){
        return <div style={{color:'white'}}>{props.movies.production_companies[0].name}</div>}
}

export default Detail;