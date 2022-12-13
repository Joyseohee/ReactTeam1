import { useNavigate } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Typography, IconButton, InputBase, Button } from '@mui/material'
import { Search as SearchIcon, AccountCircle} from '@mui/icons-material'

import TemporaryDrawer from "./drawer";
import SearchHeader from "./searchHeader";
import InputHeader from "../searchTest/InputHeader";

const Header = () => {
    const navigate = useNavigate()

    return (
        <Box sx={{ flexGrow: 1 }} style={{position:'sticky', top:'0' ,zIndex:'9'}}>
        <AppBar position="static" style={{backgroundColor:'black', boxShadow:'1px -20px 70px red'}}>
          <Toolbar>
            <TemporaryDrawer/>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <a style={{cursor:'pointer', color:'red', fontFamily:'NanumSquareRound', fontWeight:'bold'}} onClick={()=>{navigate('/')}}>MUI</a>
            </Typography>
            
            {/* search */}
            {/* <SearchHeader /> */}
            <InputHeader/>

            {/* 이 부분 추후에 로그인 시 비교 값 가져와서 선택 출력 필요(마이페이지) */}
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={()=>{navigate("/mypage")}}
              >
                <AccountCircle/>
              </IconButton>
            <Button color="inherit" style={{fontFamily:'NanumSquareRound'}} onClick={()=>{navigate("/login")}}>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

    );
}

export default Header;