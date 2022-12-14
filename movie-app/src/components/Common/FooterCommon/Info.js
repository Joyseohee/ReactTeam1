import "../css/InfoStyles.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import Map from "./Map";
import Header from "../header";
import Top from "../top";
import Footer from "../Footer";
import { Table } from "react-bootstrap";

function Info() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Header></Header>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="InfoContainer">
        <img
          src="https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png"
          width="100%"
          height="300px"
          background-size="cover"
        ></img>
        <div className="Infohead">
          <img
            src="https://post-phinf.pstatic.net/MjAyMTEyMDFfMjI3/MDAxNjM4MzA1NDg1MzQ0.jp3Y1EqXTHInshvkWMaALyJzKJr9xFnuIiaTf-Dko14g.X-0OzNbGf21t1qXKeHGlsSzl2vHHQo7MyOWYB0aN95gg.PNG/SC_2021-12-01_%EC%98%A4%EC%A0%84_4.37.19.png?type=w1200"
            width="500px"
            height="300px"
            background-size="cover"
            display="inline-flex"
          ></img>
          <h1>
            <div className="Info1">
              <h2>NPM(NEW PREMIRE Movie)이란?</h2>
              <p>
                시리즈와 영화를 인터넷 연결 지원 디바이스에서 시청할 수 있는
                멤버십 기반 스트리밍 서비스입니다.
              </p>
              <p>
                또한 멤버십에 따라 iOS, Android 또는 Windows 10 디바이스에서
                시리즈 및 영화를 저장하여 인터넷 연결 없이 시청할 수도 있습니다.
              </p>
            </div>
          </h1>
        </div>

        <div className="Info2">
          <img
            src="https://help.nflxext.com/396a2a39-8d34-4260-b07a-6391fe04ded5_what_is_netflix_2_en.png"
            width="500px"
            height="300px"
          ></img>
          <h1>
            <h2>시리즈 및 영화</h2>
            <p>
              NPM의 콘텐츠는 지역에 따라 다르며 시간이 지나면 변경될 수
              있습니다.
            </p>
            <p>
              NPM에서는 수상 경력에 빛나는 수 많은 오리지널, 시리즈, 영화 및
              다큐멘터리 등 다양한 콘텐츠를 시청할 수 있습니다.
            </p>
            <p>
              시청 시간이 늘어날수록 시리즈 및 영화 추천 정확도도 올라갑니다.
            </p>
          </h1>
        </div>
        <div className="InfoMap">
          <h1>찾아오시는 길</h1>
          <Map></Map>
          {/* 마커 생각하기  */}
          <div className="InfoMapCome">
            <Table striped="columns" className="InfoTable">
              <thead>
                <tr>
                  <th>주소</th>
                  <th>서울 종로구 창경궁로 254</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>대표전화</td>
                  <td>02-2188-6980</td>
                </tr>
                <tr>
                  <td rowspan="4" text-align="center" className="plzMove">
                    찾아오시는 길
                  </td>
                  <td>
                    <p>주변 지하철역</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>혜화역 4번 출구</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>가까운 버스 정류장</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      명륜동2가, 성균관대입구 01227(서울) : 간선 151, 간선 171,
                      간선 172. 간선 272, 지선 601
                    </p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <Top></Top>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Info;
