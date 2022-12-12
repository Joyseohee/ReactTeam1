import { useEffect, useState } from "react";
import tmdbAPI from "../tmdbAPI";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "./DetailContent.module.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function DetailContent(props){
    const [actor,setActor] = useState([]);
    useEffect(() => {
        getActor();
      }, []);
    
      const getActor = async () => {
        //setLoad(true); // 로딩 시작
        const res = await tmdbAPI.get(`movie/${props.movieId}/credits`, { params: { language: "en-US" } });
        if (res.data) {
          setActor(res.data.cast);
        } else {
        }
        //setLoad(false); // 로딩 종료
      };

      console.log(actor);
      console.log(actor[0]);
      //console.log(actor[0].name);

      return(
        <>
            <h1 style={{color: "white"}}>등장인물</h1>
            <Swiper slidesPerView={5} spaceBetween={30} slidesPerGroup={5} loop={true}
                        loopFillGroupWithBlank={true} pagination={{clickable: true}} navigation={true}
                        modules={[Pagination, Navigation]} className="mySwiper">
      <SwiperSlide><div className={style.container}>
            {actor.map((actor, i) => {
              return (
                  <div key={i}>
                  
                    {
                        actor.profile_path == null ?
                        <><div>이미지 없음</div><h5 style={{ color: "white" }}>{actor.name}</h5></>:
                        <div className={style.movieCard}>
                            <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${actor.profile_path}`} className={style.actor}/> 
                            <h5 style={{color: "white"}}>{actor.name}</h5>
                        </div>
                    }
                  
                </div>
              );
            })}
            </div></SwiperSlide></Swiper>
        </>
      )
}

export default DetailContent;