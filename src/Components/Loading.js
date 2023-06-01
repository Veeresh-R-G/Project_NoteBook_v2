import React from "react";
import Lottie from "react-lottie";
import loading from '../utils/Loading.json'
const load_option = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

const Loading = () => {
    console.log("loaded here")
    return (
        <div className="loading flex items-center justify-center h-20 w-20" style={{ opacity: 0.8 }}>
            {/* <h1 className="text-3xl text-red-800">Loading..</h1> */}
            <Lottie options={load_option} height={150} width={150} />
        </div>
    );
}

export default Loading;