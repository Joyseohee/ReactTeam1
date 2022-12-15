import { useNavigate, useParams } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material'
import { CollectionsBookmarkOutlined, Search as SearchIcon, SettingsCellOutlined } from '@mui/icons-material'
import axios from "axios";
import { useCallback, useEffect, useState } from 'react';
import { style } from '@mui/system';
import mycss from './searchHeader.module.css';

const SearchHeader = () => {
  const API_IMAGEURL = "https://image.tmdb.org/t/p/w300";
  const navigate = useNavigate()
  let [data, setData] = useState("");
  

  let [movies, setMovies] = useState([]);
  let url = `${window.location.href}`;
  
  useEffect(() => {
    url === "http://localhost:3000/" || "" ? setData("data.json") : setData("tvdata.json");
    
  }, [url])
  
  let [search, setSearch] = useState("");

  const [movdata, setMovdata] = useState([]);

  const handlechange = useCallback(() => {
    setSearch(document.getElementById('search').value);
  }, [search])

  useEffect(() => {
    SearchName();
    console.log(search);
  }, [search]);

  function SearchName() {
    let movies1 = [];
    //검색값
    //첫 글자 대문자 (original_title도 검색하기 위해)
    
    if (search.length !== 0) {
      search = search.charAt(0).toUpperCase() + search.slice(1);
    }
    if (data === "data.json") {
      for (let i = 0; i < movdata.length; i++) {
        if (
          movdata[i].title.includes(search) ||
          movdata[i].original_title.includes(search)
        ) {

          movies1[i] = movdata[i];
        }
      }
    } else {
      for (let i = 0; i < movdata.length; i++) {
        if (
          movdata[i].name.includes(search) ||
          movdata[i].original_name.includes(search)
        ) {
          movies1[i] = movdata[i];
        }
      }
    }
    if(search.length == 0) {
     movies1 = []; 
    }
    setMovies(movies1);
    console.log(movies);
  }

  return (
    <>
      <Search className={mycss.Search}>
        <SearchIconWrapper>
          <SearchIcon onClick={() => { navigate('/search/:keyword') }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          id="search"

          onChange={() => {
            handlechange();
            axios
              .get(`https://raw.githubusercontent.com/xoxorbrb/xoxorbrb/main/${data}`)
              .then(res => {
                setMovdata(res.data.result);
              })

          }}
          onKeyUp={() => {
            if (window.event.keyCode === 13) {
              const keyword = document.getElementById('search').value;
              if (keyword == "") {
                return <></>
              } else {
                navigate(`/search/${search}`)
              }
            }
          }}
          onBlur = {() => {setSearch("")}}
          onFocus = {() => {setSearch(document.getElementById('search').value)}}
        />

        <div className={mycss.resultBox}>
          {
            movies && movies.map((item, i) => {
              return (
                <>
                  <div className={mycss.box}>
                    <img
                      className={mycss.moviePoster}
                      src={`${API_IMAGEURL}${item.poster_path}`}
                      onClick={() => {
                        navigate(`/detail/${item.id}`);
                      }}
                    /><div className={mycss.result} >{item.title}{item.name}</div>

                  </div>
                  <hr className = {mycss.hr}></hr>
                </>
              )
            })
          }
        </div>

      </Search>


    </>
  );
}

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(2em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
})
)
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

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

export default SearchHeader