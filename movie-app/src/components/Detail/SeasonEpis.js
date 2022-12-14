import { useEffect, useState } from "react";
import tmdbAPI from "../../tmdbAPI";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import png from "../../pages/images/png.png";

import style from "../../pages/css/SeasonEpis.module.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import Episodes from "./Episodes";

function SeasonEpis (props){
    const navigate = useNavigate();
    const API_IMAGEURL = "https://image.tmdb.org/t/p/w400";

    const [season,setSeason] = useState([]);
    useEffect(() => {
        getSeason();
      }, []);
    
    
      const getSeason = async () => {
        const res = await tmdbAPI.get(`tv/${props.tvId}`);
        if (res.data) {
            setSeason(res.data.seasons);
        } else {
        }
      };

    const [isOpen, setIsOpen] = useState(false);
    const onClickButton = () => {
        setIsOpen(!isOpen);
    };

      return (
        <div>
            <h2 style={{ color: "white" }}>시즌</h2>
        <div className={style.container}>
            {season.map((season, i) => {
              return (
                <div className={style.box}>
                {
                    season.poster_path == null?
                    <img className={style.img} src={png} /> :
                    <img className={style.img} src={`${API_IMAGEURL}${season.poster_path}`} />
                }
                    <section className={style.info}>
                        <div style={{ color: "white" }}>{season.name}</div>
                        <div style={{ color: "white" }}>{season.episode_count}개의 에피소드</div>
                        <button style={{ color: "white" }} onClick={onClickButton}>에피소드 보기</button>
                        <div className={style.episode}>
                            {isOpen && (
                            <Episodes open={isOpen} style={style} season={season}
                                onClose={() => {
                                setIsOpen(false);}}/>
                            )}
                        </div>
                        <div style={{ color: "white" }}>공개일 : {season.air_date}</div>
                        <div className={style.overview}>{season.overview}</div>
                    </section>
                </div>
              );
            })}
            </div>
        </div>
      );

}

export default SeasonEpis;