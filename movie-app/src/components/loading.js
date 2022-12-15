import React from "react";
import { BeatLoader, Loader} from "react-spinners";

const Loading = () => {
    return (
        <div style={{display:'flex', justifyContent:'center' }}>
        <BeatLoader
        color="white"
        size="25px"
        margin={0}
        height={15}
        width={5}
        />
        </div>
    );
}

export default Loading;