import { useEffect, useState } from "react";

function Top() {
    // const [scrollY, setScrollY] = useState(0);
    const [btnshow, setBtnshow] = useState(false);

    const scrollTop = () => {
        window.scrollTo({
            top : 0,
            behavior: 'auto'
        })
    }

    useEffect(()=>{
        const Showbtn = () => {
            // Y좌표 500보다 크면 보이고, 아니면 안보임
            if(window.scrollY > 500) {
                setBtnshow(true)
            } else {
                setBtnshow(false)
            }
        }
        window.addEventListener('scroll', Showbtn)
        return() => {
            window.addEventListener('scroll', Showbtn)
        }
    },[])

    // const watchY = () => {
    //     // 스크롤 Y 위치 픽셀로 반환
    //     setScrollY(window.pageYOffset)
    //     console.log();
    //     // Y 위치 100 이상이면 버튼 보이고 아니면 안보임
    //     if(scrollY>800){
    //         setBtnshow(true)
    //     } else {
    //         setBtnshow(false)
    //     }
    // }

    // const scollTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'auto'
    //     })
    //     setScrollY(0); // 위로 올라가면 Y값 초기화
    //     setBtnshow(false); // 버튼 안보이게
    // }

    // useEffect(()=>{
    //     const watch = () => {
    //         window.addEventListener('scroll', watchY)
    //     }
    //     watch();
    //     return() => {
    //         window.addEventListener('scroll', watchY)
    //     }
    // })

    return btnshow && (
        <div className="topWrap" style={{position:'sticky', bottom:'30px', display:'flex', flexDirection:'row-reverse', paddingRight:'1%'}}>
            <img src="/images/up.png" onClick={scrollTop}/>
        </div>
    );

}

export default Top