import { useNavigate } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

import TemporaryDrawer from "./drawer";
import SearchHeader from "./searchHeader";
import LoginButton from "./LoginButton";
import MyPageButton from "./MyPageButton";

const Header = () => {
  const navigate = useNavigate();

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
          {/* drawer 삽입 */}
          <TemporaryDrawer />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <a
              style={{
                cursor: "pointer",
                color: "red",
                fontFamily: "NanumSquareRound",
                fontWeight: "bold",
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              MUI
            </a>
          </Typography>

          {/* 검색창 삽입 */}
          <SearchHeader />

          {/* 이 부분 추후에 로그인 시 비교 값 가져와서 선택 출력 필요(마이페이지) */}
          <MyPageButton />
          <LoginButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
