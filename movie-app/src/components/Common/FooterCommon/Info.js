import { useState, useEffect, useRef } from "react";
import "../css/InfoStyles.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import Map from "./Map";
import Header from "../header";
import Top from "../top";
import Footer from "../Footer";
import { Table } from "react-bootstrap";
import Dots from "./Dots";

function Info() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  // 마우스 힐
  const DIVIDER_HEIGHT = 3;
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <>
      <Header></Header>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="bodyInfo">
        <div ref={outerDivRef} className="outer">
          <Dots scrollIndex={scrollIndex} />
          <div className="InfoContainer">
            <img
              src="https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png"
              width="100%"
              height="500px"
              background-size="auto"
              className="InfoHeader"
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
                    시리즈 및 영화를 저장하여 인터넷 연결 없이 시청할 수도
                    있습니다.
                  </p>
                </div>
              </h1>
            </div>
            {/* <div className="divider"></div> */}
            <div className="Info2">
              <img
                src="https://help.nflxext.com/396a2a39-8d34-4260-b07a-6391fe04ded5_what_is_netflix_2_en.png"
                width="500px"
                height="350px"
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
                  시청 시간이 늘어날수록 시리즈 및 영화 추천 정확도도
                  올라갑니다.
                </p>
              </h1>
            </div>
            {/* <div className="divider"></div> */}
            <div className="InfoMap">
              <div className="Map">
                <h1>찾아오시는 길</h1>
                <Map></Map>
                {/* 마커 생각하기  */}
              </div>
              <div className="InfoMapCome">
                <Table striped="columns" className="InfoTable">
                  <thead>
                    <tr>
                      <th>주소</th>
                      {/* <th>서울 종로구 창경궁로 254</th> */}
                      <th rowspan="2">서울 종로구 창경궁로 254</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>대표전화</td>
                      {/* <td>02-2188-6980</td> */}
                      <td rowspan="2">02-2188-6980</td>
                      <th></th>
                    </tr>
                    <tr>
                      <td
                        rowspan="4"
                        className="plzMove"
                        text-align="center"
                        padding="100px 0"
                      >
                        찾아오시는 길
                      </td>
                      <td rowspan="2">
                        <p>주변 지하철역</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p></p>
                        <p>혜화역 4번 출구</p>
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2">
                        <p>가까운 버스 정류장</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          명륜동2가, 성균관대입구 01227(서울) : 간선 151, 간선
                          171, 간선 172. 간선 272, 지선 601
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <Top></Top>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default Info;
