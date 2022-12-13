import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Button,
} from "@mui/material";
import { Search as SearchIcon, AccountCircle } from "@mui/icons-material";

import TemporaryDrawer from "./drawer";
import Search from "../../pages/Search";
import LoginButton from "./LoginButton";

const Header = () => {
  const navigate = useNavigate();

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ position: "sticky", top: "0", zIndex: "9" }}
    >
      <AppBar
        position="static"
        style={{ backgroundColor: "black", boxShadow: "1px -20px 70px red" }}
      >
        <Toolbar>
          <TemporaryDrawer />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <a
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            >
              MUI
            </a>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {/* 이 부분 추후에 로그인 시 비교 값 가져와서 선택 출력 필요(마이페이지) */}
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={() => {
              navigate("/mypage");
            }}
          >
            <AccountCircle />
          </IconButton>

          {}
          <LoginButton />
          {/* <Button
            color="inherit"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>

    // <Navbar className="Navbar" bg="black" variant="dark">
    //     <Container>
    //         <Navbar.Brand href="/">
    //             <IoLogoNpm size="50" color="red" />
    //         </Navbar.Brand>
    //         <div>
    //             {Search()}
    //         </div>
    //         <div>
    //             <VscAccount size="20" color="#fff" fontWeight="5px" />
    //         </div>
    //         <div>
    //             <CiLogin size="20" color="#fff" onClick={()=>{navigate("/login")}}/>
    //         </div>
    //     </Container>
    // </Navbar>
  );
};

export default Header;
