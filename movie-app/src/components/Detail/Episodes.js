import React,{ useEffect, useState } from "react";
import tmdbAPI from "../../tmdbAPI";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import png from "../../pages/images/png.png";
import close from "../../pages/images/close.png"

import style from "../../pages/css/Episodes.module.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function Episodes(props){
    const navigate = useNavigate();
    const API_IMAGEURL = "https://image.tmdb.org/t/p/w400";

    // console.log(props.season.season_number);
    //console.log("시즌넘버" + props.i)

    const [seasonDe, setSeasonDe] = useState([]);
    const [epi,setEpi] = useState([]);
    useEffect(() => {
        getSeasonDe();
      }, []);
    
      const getSeasonDe = async () => {
        const res = await tmdbAPI.get(`tv/${props.tvId}/season/${props.i}`);
        if (res.data) {
            setSeasonDe(res.data);
            setEpi(res.data.episodes);
        //console.log(res.data.results);
        } else {
        }
      };

       console.log("시즌s : " + seasonDe);
       console.log("에피 : " + epi);
      

    const handleClose = () => {
        props.onClose?.();
    };

    return(
        <div className={style.back}>
            <div className={style.player_wrapper}>
                <div>
                    <button className="ModalPageButton" onClick={handleClose}><img src={close} className={style.close} /></button>
                    <h2 className={style.epi} style={{ color: "white" }}>{seasonDe.name}</h2>
                    <div>
                        {epi.map((epi, i)=>{
                            return(
                                <>
                                <div className={style.epi_info}>
                                    {
                                        epi.still_path == null?
                                        <img className={style.img} src={png} /> :
                                        <img className={style.img_still} src={`${API_IMAGEURL}${epi.still_path}`} />
                                    }
                                    <section className={style.info}>
                                        <div className={style.name}>{i+1}화  {epi.name}</div><br />
                                        <div className={style.air_date}>공개일 ( {epi.air_date} )</div><br />
                                        <div className={style.overview}>{epi.overview}</div>
                                    </section>
                                    
                                </div><hr className={style.line}/></>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Episodes;