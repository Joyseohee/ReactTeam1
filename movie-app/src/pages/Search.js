import { useEffect, useState } from "react";
import axios from "axios";
import style from "./Search.module.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"

function Search() {

    useEffect(() => {
        AOS.init();
    }, [])
    const API_IMAGEURL = 'https://image.tmdb.org/t/p/w300'; // 영화 이미지 baseURL
    const navigate = useNavigate();
    let movdata = [];
    let [movie, setMovie] = useState([]);
    let [count, setCount] = useState(0);

    useEffect(() => {

        axios({
            method: 'get',
            url: 'https://raw.githubusercontent.com/xoxorbrb/xoxorbrb/main/data.json',
        }).then(res => {
            movdata = res.data.result;
        })
    }, [count])

    return (
        <div>
            <div className={style.header}>
                <input type="text" id="search" className={style.inputform}></input>
                <button onClick={(() => {
                    SearchName();
                    RecommendMovie();
                })}>검색</button>
            </div>
            <div className={style.container}>

                { movie.length > 0 ?
                    movie.map((movie, i) => {
                        return (
                            <div className={style.movieCard} data-aos="fade-up">
                                <figure><img className={style.moviePoster} src={`${API_IMAGEURL}${movie.poster_path}`} onClick={() => { navigate(`detail/${movie.id}`) }} />
                                    <figcaption>
                                        <h5>{movie.title}</h5>
                                        <h6>{movie.release_date}</h6>
                                    </figcaption>
                                </figure>
                            </div>
                        );
                    })
                    : <h1>없음</h1>
                }
            </div>
        </div>
    )


    //검색
    function SearchName() {
        let movies = []; // 검색한 영화 담는 배열
        const API_IMAGEURL = 'https://image.tmdb.org/t/p/w300';

        //검색값
        let search = document.getElementById('search').value;

        //첫 글자 대문자 (original_title도 검색하기 위해)
        if (search.length !== 0) {
            search = search.charAt(0).toUpperCase() + search.slice(1);
        }

        for (let i = 0; i < movdata.length; i++) {
            if (movdata[i].title.includes(search) || movdata[i].original_title.includes(search)) {
                movies[i] = movdata[i];
            }
        }
        setMovie(movies);
        setCount(count + 1);
        // console.log("movie: " + movie);
    }

    function RecommendMovie() {
        let myMovieName = JSON.parse(localStorage.getItem('moviename')); //로컬스토리지에서 영화이름 가져오기
        let myMovieinfo = []; //이름, 장르번호 기억
        let firstMovie = []; //첫영화
        let myGenreIds = [];
        let random2 = -1;
        //영화 제목으로 영화 정보 얻기
        for(let i = 0; i < myMovieName.length; i ++) {
            for(let j = 0; j < movdata.length; j ++) {
                if(myMovieName[i] === movdata[j].title) {
                    myMovieinfo[movdata[j].title] = movdata[j].genre_ids; // 장르아이디 이름 저장
                    firstMovie[i] = movdata[j]; // 영화 저장 (영화 추천을 위해)
                    break;
                }
            }
        }
        
        


        for(let i = 1; i < 4; i ++) { //첫영화 제외하고 4개 (한줄에 다섯개의 영화가 있기 때문에)
            let random = Math.floor(Math.random() * 4);
            if(random !== random2) {

            }
        }
    }
}



export default Search;