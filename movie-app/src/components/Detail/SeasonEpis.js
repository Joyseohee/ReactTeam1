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

    const [isOpen, setIsOpen] = useState([]);
  
    const onClickButton = (i) => {
        const openinit = Array(season.length).fill(false);
        openinit[i] = !openinit[i];
        setIsOpen(openinit);
        setSn(i);
    };
    const [sn, setSn] = useState(0);
      return (
        <div>
            <h2 style={{ color: "white" }}>시즌</h2>
        <div className={style.container}>
            {season.map((Season, i) => {
              return (
                <div className={style.box}>
                {
                    Season.poster_path == null?
                    <img className={style.img} src={png} /> :
                    <img className={style.img_poster} src={`${API_IMAGEURL}${Season.poster_path}`} />
                }
                    <section className={style.info}>
                        <div className={style.name}>{Season.name}</div>
                        <span className={style.episode_count}>{Season.episode_count}개의 에피소드&nbsp;&nbsp;&nbsp;</span>
                        <button className={style.epibutton} onClick={()=>onClickButton(i)}>에피소드 보기</button><br /><br />
                            <div className={style.episode}>
                                {
                                    season[0].season_number == 0?<>
                                    {isOpen[i] && (
                                    <Episodes open={isOpen} season={Season} i={i} tvId={props.tvId}
                                        onClose={() => {
                                        setIsOpen(false);}}/>
                                    )}</> :
                                    <>{isOpen[i] && (
                                        <Episodes open={isOpen} season={Season} i={i+1} tvId={props.tvId}
                                            onClose={() => {
                                            setIsOpen(false);}}/>
                                        )}</>
                                }
                            </div>
                        <div className={style.air_date}>공개일 : {Season.air_date}</div><br />
                        <div className={style.overview}>{Season.overview}</div>
                    </section>
                </div>
              );
            })}
            </div>
        </div>
      );
          
}

export default SeasonEpis;