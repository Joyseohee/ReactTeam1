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
    let [timesort, setTimeSort] = useState(true);
    let [count, setCount] = useState(0);
    let [MyrecommendMovie, setMyRecommendMovie] = useState([]);
    let [recommendFirstMovie, setRecommendFirstMovie] = useState([]);
    
    useEffect(() => {
        movdata = movie;
    }, [timesort])
    
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://raw.githubusercontent.com/xoxorbrb/xoxorbrb/main/data.json',
        }).then(res => {
            movdata = res.data.result;
        })
    }, [count])
    

    // 검색 버튼 클릭 시 input 팝업
    const [showinput, setShowinput] = useState(false);
    useEffect(()=>{

    },[showinput])

    return (
        <div>
            <div className={style.header}>
                <input type="text" id="search" className={style.inputform}></input>
                <button onClick={(() => {
                    SearchName();
                    RecommendMovie();
                })}>검색</button>
                <button onClick = {() => timesort ? Newest(): Oldest()}>날짜순</button>
                {
                    showinput ? <input type="text" id="search" className={style.inputform} /> : <input type="hidden" id="search" className={style.inputform} />
                }
                {/* <GoSearch color="#fff" size="20" onClick={()=>{SearchName(); RecommendMovie(); setShowinput(true);
                }}/> */}
            </div>
            <div className={style.container}>

                {movie.length > 0 ?
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
                    : MyrecommendMovie &&
                    recommendFirstMovie.map((firstMovie, i) => {
                        return (
                            <>
                                <div className={style.recommendMovieList}> <h2>{firstMovie.original_title}과 비슷한 장르</h2>
                                    <div className={style.firstMovieCard} data-aos="fade-up">
                                        <div>
                                        <img className={style.firstmoviePoster}
                                            src={`${API_IMAGEURL}${firstMovie.poster_path}`}
                                            onClick={() => { navigate(`/detail/${firstMovie.id}`) }} />
                                            <h5>{firstMovie.title}</h5>
                                        </div>
                                        <div className={style.recommendcontainer}>
                                        {MyrecommendMovie[i].map((recommendmovie, i) => { //2차원 배열을 맵으로 돌리기 위해
                                            return (
                                                <div className={style.recommendmovieCard} data-aos="slide-right">
                                                    <img className={style.moviePoster}
                                                        src={`${API_IMAGEURL}${recommendmovie[firstMovie.title].poster_path}`} />
                                                        <h5>{recommendmovie[firstMovie.title].title}</h5>
                                                </div>
                                            )
                                        })}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )


    //검색
    function SearchName() {
        let movies = []; // 검색한 영화 담는 배열
        const API_IMAGEURL = 'https://image.tmdb.org/t/p/w300';
        setCount(count + 1);
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
        
        // console.log("movie: " + movie);
    }

    function RecommendMovie() {
        let myMovieId = JSON.parse(localStorage.getItem('ID')); //로컬스토리지에서 영화이름 가져오기
        let myMovieinfo = []; //이름, 장르번호 기억
        let firstMovie = []; //첫영화
        let myGenreIds = []; //장르번호
        let recommendMovieInfo = []; //추천 영화 모음
        let recommendMovie = []; //다섯개씩 배열 배열
        let random2 = [];
        let movietitle = [];
        let randommovie = []; //다섯개씩 배열
        // let recommendmovie = []; 영화 배열 (추천영화 키에 값을 추가하기 위해서)
        //영화 제목으로 영화 정보 얻기
        for (let i = 0; i < myMovieId.length; i++) {
            for (let j = 0; j < movdata.length; j++) {
                if (myMovieId[i] === movdata[j].id) {
                    myMovieinfo[movdata[j].title] = movdata[j].genre_ids[(movdata[j].genre_ids.length) - 1]; // 장르아이디 이름 저장 (장르 하나만 저장함)
                    myGenreIds[i] = movdata[j].genre_ids[(movdata[j].genre_ids.length) - 1];
                    firstMovie[i] = movdata[j]; // 영화 저장 (영화 추천을 위해)
                    break;
                }
            }
        }

        // console.log("myMovieId: " + typeof(myMovieId[1]) );
        // console.log("movdata[0].id " + typeof(movdata[0].id) );
        // console.log("myMovie === movdata?" + myMovieId[1] === movdata[0].id);
        // console.log(myMovieinfo);
        // console.log(firstMovie);

        movietitle = Object.keys(myMovieinfo)
        // console.log(movietitle);

        //let key = Object.keys(recommendMovieInfo[0]);
        // console.log(recommendMovieinfo[Object.keys(recommendMovieinfo[0])[0]]);

        // for(let i = 0; i < movie.length; i ++) {
        //     recommendMovieInfo = {
        //         [movietitle[i]] : []
        //     }
        // }

        for (let i = 0; i < myGenreIds.length; i++) {
            for (let j = 0; j < movdata.length; j++) {
                if (movdata[j].genre_ids.includes(myGenreIds[i])) {
                    recommendMovieInfo.push({ [movietitle[i]]: movdata[j] });
                    //recommendMovieInfo.push({ title : movdata[j] });
                    // let key = Object.keys(recommendMovieinfo[i])[i];
                    // recommendMovieinfo.key.push(movdata[j]); // 키가 안쓰임
                }
            }
        }

        //console.log(Object.keys(recommendMovieInfo[130]))

        // console.log(recommendMovieInfo[0][movietitle[0]].id);
        // console.log(firstMovie[0].id);
        for (let i = 0; i < movietitle.length; i++) {
            randommovie = [];
            random2 = [];
            for (let j = 1; j <= 4; j++) { //첫영화 제외하고 4개 (한줄에 다섯개의 영화가 있기 때문에)
                let random = Math.floor(Math.random() * recommendMovieInfo.length);
                if (!random2.includes(random)) { // 같은 영화 추천을 하지 않기 위해서
                    random2.push(random);
                    if ((Object.keys(recommendMovieInfo[random])[0] !== movietitle[i]) || 
                    recommendMovieInfo[random][movietitle[i]].id === firstMovie[i].id) { // 같은 장르가 아니거나, 같은 아이디(같은 영화가 들어갔을 때)
                        j--;
                    }
                    else {
                        randommovie.push(recommendMovieInfo[random]);
                        //recommendMovie.push(recommendMovieInfo[random]);
                    }
                }
                else j--;
            }
            recommendMovie.push(randommovie);
        }
        setMyRecommendMovie(recommendMovie);
        setRecommendFirstMovie(firstMovie);
        
    }

    function Oldest() {
        setTimeSort(true);
        movdata.sort((a,b) => {
            return new Date(a.release_date) - new Date(b.release_date);
        })
        setMovie(movie);
    }
    function Newest() {
        setTimeSort(false);
        movie.sort((a,b) => {
            return new Date(b.release_date) - new Date(a.release_date);
        })
        setMovie(movie);
    }
}



export default Search;