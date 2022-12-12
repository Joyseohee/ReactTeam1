import "./css/Mypage.css";
import { useNavigate } from "react-router-dom";
import MypgHeader from "../components/Mypage/MypgHeader";
import MyInfo from "../components/Mypage/MyInfo";

export default function Mypage() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <MypgHeader />
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col col-lg-2 col-sm-1"></div>
            <div className="infoComp col col-lg-8 col-sm-10">
              <MyInfo />
            </div>
            <div className="col col-lg-2 col-sm-1"></div>
          </div>
          <div className="row">
            <div className="col col-lg-2 col-sm-1"></div>
            <div
              className="likes col col-lg-4 col-sm-5 "
              onClick={() => {
                navigate(`/likes`);
              }}
            >
              기대하는 영화
            </div>
            <div
              className="myreviews col col-lg-4 col-sm-5 "
              onClick={() => {
                navigate(`/myreview`);
              }}
            >
              내가 쓴 리뷰
            </div>
            <div className="col col-lg-2 col-sm-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}
