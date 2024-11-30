import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LottieExample = (data) => {
    const { animationData } = data;
    return (
        <div>
            <Player
                autoplay
                loop
                src={animationData}
                style={{ height: '300px', width: '300px' }}
            />
        </div>
    );
};

export default LottieExample;
