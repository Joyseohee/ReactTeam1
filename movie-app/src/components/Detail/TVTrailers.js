import { useEffect, useState } from "react";
import tmdbAPI from "../../tmdbAPI";
import ReactPlayer from "react-player";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "../../pages/css/Trailers.module.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function TVTrailers(props){
    const [video,setVideo] = useState([]);
    useEffect(() => {
        getVideo();
      }, []);
    
      const getVideo = async () => {
        const res = await tmdbAPI.get(`tv/${props.tvId}/videos`, { params: { language: "en-US" } });
        if (res.data) {
          setVideo(res.data.results);
        } else {
        }
      };

      return(
        <>
        <h2 style={{ color: "white" }}>관련 동영상 ({video.length})</h2>
            <Swiper slidesPerView={3} spaceBetween={10} slidesPerGroup={1}
                        loopFillGroupWithBlank={true} pagination={{clickable: true}} navigation={true}
                        modules={[Pagination, Navigation]} className="mySwiper">
            
        <div className={style.container}>
            {video.map((video, i) => {
              return (
                  <SwiperSlide key={i}>
                    <h5 style={{ color: "white" }}>({video.name})</h5>
                    <ReactPlayer
                    className={style.react_player}
                    url={`https://www.youtu.be/${video.key}`} // 플레이어 url
                    width="600px" // 플레이어 크기 (가로)
                    height="300px" // 플레이어 크기 (세로)
                    //playing={true} // 자동 재생 on
                    //muted={true} // 자동 재생 on
                    controls={true} // 플레이어 컨트롤 노출 여부
                    light={false} // 플레이어 모드
                    pip={true} // pip 모드 설정 여부
                    />
                </SwiperSlide>
              );
            })}
            </div></Swiper>
        </>
      )
}

export default TVTrailers;