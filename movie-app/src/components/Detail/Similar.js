import { useEffect, useState } from "react";
import tmdbAPI from "../../tmdbAPI";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "../../pages/css/Silmilar.module.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function Similar(props){

    const navigate = useNavigate();
    const API_IMAGEURL = "https://image.tmdb.org/t/p/w400";

    const [similar,setSimilar] = useState([]);
    useEffect(() => {
        getSimilar();
      }, []);
    
      const getSimilar = async () => {
        const res = await tmdbAPI.get(`movie/${props.movieId}/similar`);
        if (res.data) {
            setSimilar(res.data.results);
        } else {
        }
      };

      return(
        <>
        <div style={{paddingTop:'1%'}}>
        <h4 style={{ color: "white" }}>비슷한 영화</h4>
        </div>
            <Swiper slidesPerView={7} spaceBetween={10} slidesPerGroup={1} loop={true}
                        loopFillGroupWithBlank={true} pagination={{clickable: true}} navigation={true}
                        modules={[Pagination, Navigation]} className="mySwiper">
            
        <div className={style.container}>
            {similar.map((similar, i) => {
              return (
                  <SwiperSlide key={i}>
                    <img className={style.img} src={`${API_IMAGEURL}${similar.poster_path}`} onClick={() => { navigate(`/detail/${similar.id}`); window.location.reload()}} />
                    <div style={{ fontSize: '15px', color: "white", textAlign: "center" }}>{similar.title}</div>
                </SwiperSlide>
              );
            })}
            </div></Swiper>
        </>
      )
}

export default Similar;