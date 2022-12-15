import ReactPlayer from "react-player";
import style from "../../pages/css/Video.module.css";
import React from "react";

import close from "../../pages/images/close.png";

function Video(props) {
  const handleClose = () => {
    props.onClose?.();
  };

  return (
    <div className={style.back}>
      <div className={style.player_wrapper}>
        <div>
          <button className="ModalPageButton" onClick={handleClose}>
            <img src={close} className={style.close} />
          </button>
          <ReactPlayer
            className={style.react_player}
            url={`https://www.youtu.be/${props.movieKey}`} // 플레이어 url
            width="1100px" // 플레이어 크기 (가로)
            height="800px" // 플레이어 크기 (세로)
            playing={true} // 자동 재생 on
            muted={true} // 자동 재생 on
            controls={true} // 플레이어 컨트롤 노출 여부
            light={false} // 플레이어 모드
            pip={true} // pip 모드 설정 여부
          />
        </div>
      </div>
    </div>
  );
}

export default Video;
