import { useEffect, useState } from "react";

function Top() {
    const [btnshow, setBtnshow] = useState(false);

    // 버튼 클릭 시 작동하는 함수
    const scrollTop = () => {
        window.scrollTo({
            top : 0,
            behavior: 'auto'
        })
    }

    useEffect(()=>{
        const Showbtn = () => {
            // Y좌표 500픽셀 넘어가면 버튼 보이고, 아니면 안보임
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

    return btnshow && (
        <div className="topWrap" style={{position:'sticky', bottom:'30px', display:'flex', flexDirection:'row-reverse', paddingRight:'1%'}}>
            <img src="/images/up.png" onClick={scrollTop}/>
        </div>
    );

}

export default Top