import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material'
import { Search as SearchIcon, AccountCircle } from '@mui/icons-material'
import "aos/dist/aos.css"


const InputHeader = () =>{
    const navigate = useNavigate();
// search 박스 꾸미기
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


  return (
    <>
     <Search>
      <SearchIconWrapper>
        {/* 여기에 온클릭시 함수 호출 필요*/}
        <SearchIcon onClick={()=>{navigate('/search/:keyword')}}/>
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
            navigate(`/search/${keyword}`)
            // SearchName(); RecommendMovie();
          }
        console.log(keyword);
        }}
      />
    </Search> 
    </>
  );
}

export default InputHeader