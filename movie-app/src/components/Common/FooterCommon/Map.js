/* global kakao */
import React, { useEffect, useState } from "react";

const { kakao } = window;

const InfoMap = () => {
  const [map, setMap] = useState(null);

  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById("map"),
      options = { center: new kakao.maps.LatLng(37.5838, 127), level: 3 };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        marginLeft: "5px",
        marginRight: "5px",
        marginBottom: "50px",
      }}
    >
      <div
        id="map"
        style={{ width: "100%", height: "500px", display: "inline-table" }}
      ></div>
    </div>
  );
};

export default InfoMap;
