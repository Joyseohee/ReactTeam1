import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { FormGroup, Switch, FormControlLabel } from '@mui/material'
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css"

import style from './ResultSearch.module.css'
import Header from "../Common/header"
import Top from "../Common/top"


const ResultSearch = () => {
    const keyword = useParams(); // URL 검색 키워드 받기
    const API_IMAGEURL = 'https://image.tmdb.org/t/p/w300'; // 영화 이미지 baseURL
    const navigate = useNavigate();
    let [movdata, setMovdata] = useState([]);
    let [movie, setMovie] = useState([]);
    let [timesort, setTimeSort] = useState(true);
    let [count, setCount] = useState(0);
    let [MyrecommendMovie, setMyRecommendMovie] = useState([]);
    let [recommendFirstMovie, setRecommendFirstMovie] = useState([]);
    let [tvmovie, setTvMovie] = useState(false);
    const MOVIEJSONFILE = "data.json";
    const TVJSONFILE = "tvdata.json";
    let [data, setData] = useState(MOVIEJSONFILE);
    const [check, setCheck] = useState(true);

    const [change, setChange] = useState(false);

    // 처음 렌더링 됐을 때 영화 data로 고정
    useEffect(() => {
        axios.get(`https://raw.githubusercontent.com/xoxorbrb/xoxorbrb/main/${data}`)
            .then(res => { setMovdata(res.data.result) })
    }, [count])

    // 버튼 이벤트로 data 변경되면 재렌더링
    useEffect(() => {
        axios.get(`https://raw.githubusercontent.com/xoxorbrb/xoxorbrb/main/${data}`)
            .then(res => { setMovdata(res.data.result) })
    }, [data])

    // 처음 렌더링 & 검색 키워드 변화되면 재렌더링
    useEffect(() => {
        AOS.init();
        SearchName();
        RecommendMovie();
    }, [keyword])

    // 두 번째 렌더링(결과값 출력위해서 필요)
    useEffect(() => {
        let timer = setTimeout(() => {
            setChange(true);
            SearchName();
            RecommendMovie();
        }, 1);
        return () => {
            clearTimeout(timer);
        };
    }, [change]);

    // 정렬 버튼 클릭 이벤트 시 재 렌더링
    useEffect(() => {
        movdata = movie;
    }, [timesort])

    // 검색
    function SearchName() {
        let movies = []; // 검색한 영화 담는 배열
        setCount(count + 1);

        //검색값
        let search = keyword.keyword;

        //첫 글자 대문자 (original_title도 검색하기 위해)
        if (search.length !== 0) {
            search = search.charAt(0).toUpperCase() + search.slice(1);
        }

        if (data === "data.json") {
            for (let i = 0; i < movdata.length; i++) {
                if (movdata[i].title.includes(search) || movdata[i].original_title.includes(search)) {
                    movies[i] = movdata[i];
                }
            }
        }
        else {
            for (let i = 0; i < movdata.length; i++) {
                if (movdata[i].name.includes(search) || movdata[i].original_name.includes(search)) {
                    movies[i] = movdata[i];
                }
            }
        }
        setMovie(movies);
    }

    // 영화 추천
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
        movietitle = Object.keys(myMovieinfo)

        for (let i = 0; i < myGenreIds.length; i++) {
            for (let j = 0; j < movdata.length; j++) {
                if (movdata[j].genre_ids.includes(myGenreIds[i])) {
                    recommendMovieInfo.push({ [movietitle[i]]: movdata[j] });
                }
            }
        }

        for (let i = 0; i < movietitle.length; i++) {
            randommovie = [];
            random2 = [];
            for (let j = 1; j <= 4; j++) { //첫영화 제외하고 4개 (한줄에 다섯개의 영화가 있기 때문에)
                let random = Math.floor(Math.random() * recommendMovieInfo.length);
                if (!random2.includes(random)) { // 같은 영화 추천을 하지 않기 위해서
                    random2.push(random);
                    if (Object.keys(recommendMovieInfo[random])[0] !== movietitle[i]) {
                        j--;
                    }
                    else {
                        randommovie.push(recommendMovieInfo[random]);
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
        if (data === "data.json") {
            movdata.sort((a, b) => {
                return new Date(a.release_date) - new Date(b.release_date);
            })
        }
        if (data === "tvdata.json") {
            movdata.sort((a, b) => {
                return new Date(a.first_air_date) - new Date(b.first_air_date);
            })
        }
        setMovie(movie);
    }

    function Newest() {
        if (data === "data.json") {
            setTimeSort(false);
            movie.sort((a, b) => {
                return new Date(b.release_date) - new Date(a.release_date);
            })
        }
        if (data === "tvdata.json") {
            setTimeSort(false);
            movie.sort((a, b) => {
                return new Date(b.first_air_date) - new Date(a.first_air_date);
            })
        }
        setMovie(movie);
    }

    // Switch 아이콘
    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
            margin: 1,
            padding: 0,
            transform: 'translateX(6px)',
            '&.Mui-checked': {
                color: '#fff',
                transform: 'translateX(22px)',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
            width: 32,
            height: 32,
            '&:before': {
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            },
        },
        '& .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            borderRadius: 20 / 2,
        },
    }));

    // 토글 스위치로 TV / Movie 전환
    const Switchchange = (e) => {
        setCheck(e.target.checked);
        if (check == true) {
            setData(TVJSONFILE);
        } else {
            setData(MOVIEJSONFILE);
        }
    }

    return (
        <>
            {/* 헤더 */}
            <Header />

            <div className={style.btnWrap}>
                <h4>검색 결과</h4>
                <FormGroup style={{width:'200px'}}>
                    <FormControlLabel
                        control={<MaterialUISwitch checked={check} onClick={Switchchange} sx={{ m: 1 }} defaultChecked />}
                        label={check ? 'Movie' : 'TV Series'}
                        Co
                    />

                </FormGroup>
                <button onClick={() => { Newest(); }}>개봉일↑</button>
                <button onClick={() => { Oldest(); }}>개봉일↓</button>
            </div>
            <div className={style.container}>

                {movie.length > 0 ?
                    movie.map((movie, i) => {
                        return (
                            <div className={style.movieCard} data-aos="fade-up" key={i}>
                                <figure><img className={style.moviePoster} src={`${API_IMAGEURL}${movie.poster_path}`} onClick={() => { navigate(`/detail/${movie.id}`) }} />
                                    <figcaption>
                                        {
                                            movie.title ? <h5>{movie.title}</h5> : <h5>{movie.name}</h5>
                                        }
                                        {
                                            movie.release_date ? <h6>{movie.release_date}</h6> : <h6>{movie.first_air_date}</h6>
                                        }
                                    </figcaption>
                                </figure>
                            </div>
                        );
                    })
                    : MyrecommendMovie &&
                    recommendFirstMovie.map((firstMovie, i) => {
                        return (
                            <>
                                <div className={style.recommendMovieList}><h4>{firstMovie.title}과(와) 비슷한 장르</h4>
                                    <div className={style.firstMovieCard} data-aos="fade-up">
                                        <img className={style.moviePoster} src={`${API_IMAGEURL}${firstMovie.poster_path}`} onClick={() => { navigate(`/detail/${firstMovie.id}`) }} />
                                        <div className={style.recommendcontainer}>
                                            {
                                            MyrecommendMovie[i].map((recommendmovie, i) => { //2차원 배열을 맵으로 돌리기 위해
                                                const recommnedmovie = recommendmovie[firstMovie.title].id;
                                                return (
                                                    <div className={style.recommendmovieCard} data-aos="fade-right">
                                                        <img className={style.moviePoster}
                                                            src={`${API_IMAGEURL}${recommendmovie[firstMovie.title].poster_path}`}
                                                            onClick={ ()=>{navigate(`/detail/${recommnedmovie}`)}}
                                                            />
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

            {/* 위로 버튼 */}
            <Top />
        </>
    );
}

export default ResultSearch