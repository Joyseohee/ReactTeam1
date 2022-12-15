import React,{ useEffect, useState } from "react";
import tmdbAPI from "../../tmdbAPI";

import png from "../../pages/images/png.png";
import close from "../../pages/images/close.png"

import style from "../../pages/css/Episodes.module.css";

function Episodes(props){

    const API_IMAGEURL = "https://image.tmdb.org/t/p/w400";

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
        } else {
        }
      };

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