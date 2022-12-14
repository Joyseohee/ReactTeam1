import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import axios from "axios";


const SearchHeader = () => {
  const navigate = useNavigate()
  //let [data, setData] = useState("");
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
          }
        }}
        // onInput = { (e) => {
        //   console.log(e.target.value)
          
        //   axios
        //   .get(`https://raw.githubusercontent.com/xoxorbrb/xoxorbrb/main/${data}`)
        //   .then((res) => {
        //     setMovdata(res.data.result);
        //   });
        // }}
      />
    </Search> 
    </>
  );
}

export default SearchHeader