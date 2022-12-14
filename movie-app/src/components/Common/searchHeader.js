import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material'
import { Search as SearchIcon, AccountCircle } from '@mui/icons-material'
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css"


import style from "./Search.module.css";
import { GoSearch } from "react-icons/go";


// search 박스 꾸미기
const SearchHeader = () => {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


  useEffect(() => {
    AOS.init();
  }, [])

  const API_IMAGEURL = 'https://image.tmdb.org/t/p/w300'; // 영화 이미지 baseURL
  const navigate = useNavigate();
  let movdata = [];
  let [movie, setMovie] = useState([]);
  let [count, setCount] = useState(0);
  let [MyrecommendMovie, setMyRecommendMovie] = useState([]);
  let [recommendFirstMovie, setRecommendFirstMovie] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://raw.githubusercontent.com/xoxorbrb/xoxorbrb/main/data.json',
    }).then(res => {
      movdata = res.data.result;
    })
  }, [count])

  //검색
  function SearchName() {
    let movies = []; // 검색한 영화 담는 배열

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

  return (
    <>
     <Search>
      <SearchIconWrapper>
        {/* 여기에 온클릭시 함수 호출 필요*/}
        <SearchIcon/>
      </SearchIconWrapper>
        <StyledInputBase
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        id="search"
        onBlur={()=>{
          const keyword = document.getElementById('search').value
          if(keyword == ""){
            return <></>
          } else {
            SearchName(); RecommendMovie();
            console.log(movie);
          }
        console.log(keyword);
        }}
      />
    </Search> 
      {/* <div>
         <div className={style.header}>
        <GoSearch color="#fff" size="20" onClick={()=>{SearchName(); RecommendMovie(); setShowinput(true);}}/>
            {
                showinput ? <input type="text" id="search" className={style.inputform} /> : <input type="hidden" id="search" className={style.inputform} />
            }

        </div>  */}
        
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
                            <div className={style.recommendMovieList}> <h2>{firstMovie.title}과 비슷한 장르</h2>
                                <div className={style.firstMovieCard} data-aos="fade-up">
                                    <img className={style.moviePoster}
                                        src={`${API_IMAGEURL}${firstMovie.poster_path}`}
                                        onClick={() => { navigate(`/detail/${firstMovie.id}`) }} />
                                    <div className={style.recommendcontainer}>
                                    {MyrecommendMovie[i].map((recommendmovie, i) => { //2차원 배열을 맵으로 돌리기 위해
                                        return (
                                            <div className={style.recommendmovieCard} data-aos="fade-right">
                                                <img className={style.moviePoster}
                                                    src={`${API_IMAGEURL}${recommendmovie[firstMovie.title].poster_path}`} />
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
    </>
  );
}

export default SearchHeader