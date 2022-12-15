import { useEffect, useState } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import tmdbAPI from "../../tmdbAPI";
import profile from "../../pages/images/profile.png"
import style from "../../pages/css/DetailContent.module.css";

function TVDetailPerson(props) {
  const [actor, setActor] = useState([]);
  useEffect(() => {
    getActor();
  }, []);

  const getActor = async () => {
    const res = await tmdbAPI.get(`tv/${props.tvId}/credits`, { params: { language: "en-US" } });
    if (res.data) {
      setActor(res.data.cast);
    }
  };

  return (
    <>
      <div className={style.actorContainer}>
        <h4 style={{ color: "white" }}>등장인물</h4>
        <Swiper slidesPerView={7} spaceBetween={10} slidesPerGroup={7} loop={true} initialSlide={5} centeredSlides={true}
          pagination={{ clickable: true }} navigation={true}
          modules={[Pagination, Navigation]} className="mySwiper">

          <div className={style.container}>
            {actor.map((actor, i) => {
              return (
                <SwiperSlide key={i}>
                  {
                    actor.profile_path == null
                    ?
                      <>
                      <img src={profile} className={style.profile} />
                      <div className={style.actorName}>{actor.name}</div>
                      </>
                      :
                      <div className={style.movieCard}>
                        <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${actor.profile_path}`} className={style.actor} />
                        <div className={style.actorName}>{actor.name}</div>
                        <div className={style.character}>{actor.character}역</div>
                      </div>
                  }
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </>
  )
}

export default TVDetailPerson;