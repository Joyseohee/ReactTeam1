import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Mousewheel } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import tmdbAPI from "../../tmdbAPI";
import style from './Upcoming.module.css'

function Upcoming() {
    const navigate = useNavigate();
    const [coming, setComing] = useState([]);

    useEffect(() => {
        getUpcoming();
    }, [])

    const getUpcoming = async () => {
        const comovie = await tmdbAPI.get('movie/upcoming', { params: { page: 1 } });
        setComing(comovie.data.results)
    }

    return (
        <>
            <div className={style.upcoming}>
                <h4>Upcoming</h4>
            </div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={4}
                coverflowEffect={{
                    rotate: 10, // 회전각도
                    stretch: 0,
                    depth: 100, // 깊이감도
                    modifier: 2, // 
                    slideShadows: true,//선택한 부분 밝게 나머지는 그늘지게
                }}
                navigation={true} // 내비게이션 버튼
                mousewheel={true} // 마우스 휠
                modules={[EffectCoverflow, Mousewheel, Navigation]}
                className="mySwiper"
            >

                <div className="container">
                    {
                        coming &&
                        coming.map((coming, i) =>
                            <SwiperSlide key={i}>
                                <div className={style.swipercard}>
                                    <img src={`https://image.tmdb.org/t/p/w500${coming.poster_path}`} onClick={() => { navigate(`detail/${coming.id}`) }} />
                                    <div className={style.swiperTitle}>{coming.title}</div>
                                </div>
                            </SwiperSlide>
                        )
                    }

                </div>
            </Swiper>
        </>
    );
}

export default Upcoming