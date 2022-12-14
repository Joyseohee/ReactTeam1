import { useEffect, useState } from "react";
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
    // const navigate = useNavigate();
    // const API_IMAGEURL = "https://image.tmdb.org/t/p/w400";

    // const [season,setSeason] = useState([]);
    // useEffect(() => {
    //     getSeason();
    //   }, []);
    
    //   const getSeason = async () => {
    //     const res = await tmdbAPI.get(`tv/${props.tvId}/season/시즌넘버`);
    //     if (res.data) {
    //         setSeason(res.data.seasons);
    //     console.log(res.data.results);
    //     } else {
    //     }
    //   };

    const handleClose = () => {
        props.onClose?.();
    };

    return(
        <div className={style.back}>
            <div className={style.player_wrapper}>
                <div>
                    <button className="ModalPageButton" onClick={handleClose}><img src={close} className={style.close} /></button>
                    <h2 className={style.epi} style={{ color: "white" }}>에피소드 페이지</h2>
                </div>
            </div>
        </div>
      );
}

export default Episodes;