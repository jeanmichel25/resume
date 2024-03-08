import Lottie from 'react-lottie';
import animationData from './assets/lottie_files/scroll_down.json';
import React from 'react';

export function LottieScrollDown() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <Lottie options={defaultOptions} height={100} width={100} isClickToPauseDisabled={true}/>
        </div>   
    );
}