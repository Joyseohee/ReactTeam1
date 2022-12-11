import "./css/MyInfo.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Movie from "../Common/Movie";
import Image from "react-bootstrap/Image";

export default function MyInfo() {
  return (
    <>
      <div className="MyInfo profile">
        <div className="photoWrap">
          <Image roundedCircle></Image>
        </div>
        <div className="Info">
          <div className="accountName">이름</div>
          <div className="accountDetail">상세설명</div>
        </div>
      </div>
    </>
  );
}
