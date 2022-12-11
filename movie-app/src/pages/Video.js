import ReactPlayer from "react-player";

function Video(props){
    const handleClose = () => {
        props.onClose?.();
    };
    console.log("모달????"+props.movieKey)
    return (
        
                <div className={props.style.player_wrapper}>
                <ReactPlayer
                    className={props.style.react_player}
                    url={`https://www.youtu.be/${props.movieKey}`} // 플레이어 url
                    width="1200px" // 플레이어 크기 (가로)
                    height="900px" // 플레이어 크기 (세로)
                    playing={true} // 자동 재생 on
                    muted={true} // 자동 재생 on
                    controls={true} // 플레이어 컨트롤 노출 여부
                    light={false} // 플레이어 모드
                    pip={true} // pip 모드 설정 여부
                />
                <button className="ModalPageButton" onClick={handleClose}>
                    닫기
                </button>
            </div>
            

    );
}

export default Video;