import React from "react";
import { BeatLoader, Loader} from "react-spinners";

const Loading = () => {
    return (
        <div style={{display:'flex', justifyContent:'center' }}>
        <BeatLoader
        color="white"
        size="25"
        margin="auto"
        height={100}
        width={100}
        timeout={1000000}
        />
        </div>
    );
}

export default Loading;