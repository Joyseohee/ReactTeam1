import React from "react";
import { BeatLoader, Loader} from "react-spinners";

const Loading = () => {
    return (
        <BeatLoader
        color="white"
        height={100}
        width={100}
        timeout={1000000}
        />
    );
}

export default Loading;