import { useEffect, useState } from "react";
import tmdbAPI from "../../tmdbAPI";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import profile from "../../pages/images/profile.png";

import style from "../../pages/css/DetailContent.module.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function DetailContent(props) {
  const [actor, setActor] = useState([]);
  useEffect(() => {
    getActor();
  }, []);

  const getActor = async () => {
    const res = await tmdbAPI.get(`movie/${props.movieId}/credits`, {
      params: { language: "en-US" },
    });
    if (res.data) {
      setActor(res.data.cast);
    } else {
    }
  };

  return (
    <>
      <h1 style={{ color: "white" }}>등장인물</h1>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        slidesPerGroup={7}
        loop={true}
        initialSlide={1}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className={style.container}>
          {actor.map((actor, i) => {
            return (
              <SwiperSlide key={i}>
                {actor.profile_path == null ? (
                  <>
                    <img src={profile} className={style.profile} />
                    <h5 style={{ color: "white" }}>{actor.name}</h5>
                  </>
                ) : (
                  <div className={style.movieCard}>
                    <img
                      src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${actor.profile_path}`}
                      className={style.actor}
                    />
                    <h5 style={{ color: "white" }}>{actor.name}</h5>
                    <h5 style={{ color: "white" }}>{actor.character} 역</h5>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </>
  );
}

export default DetailContent;
