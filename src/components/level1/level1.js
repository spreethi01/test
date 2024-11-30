import './level1.css';
import animationdata from '../../asserts/Aniki Hamster.json';
import Lottie from 'lottie-react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import ad1 from '../../asserts/71V2kcwFEGL.jpg';
import ad2 from '../../asserts/THUMB-1-360x180.jpeg';
import ad3 from '../../asserts/choco-pie-ads-splashing-chocolate-600nw-1660903636.webp';
import ad4 from '../../asserts/chocolate-popcorn-ad-pouring-liquid-260nw-1812086089.webp';




function Level1() {

    const navigate = useNavigate();
    const adsImages = [ad1, ad2, ad3, ad4];
    const [ads, setAds] = useState([]);
    const [hiddenButtonIndex, setHiddenButtonIndex] = useState(null);

    function handleClick() {
        navigate("/level1completed/level1");
    }

    window.handleClick = handleClick;

    useEffect(() => {

        console.log("🔍 Hint #1: Inspect the items around you. You might uncover hidden paths or clues. Look closely... 👀");

        const generatedAds = adsImages.map((image, index) => ({
            id: index,
            image: image,
            top: Math.random() * 80 + 10,
            left: Math.random() * 80 + 10,
        }));
        setAds(generatedAds);

        const randomIndex = Math.floor(Math.random() * adsImages.length);
        setHiddenButtonIndex(randomIndex);
    }, []);

    return (
        <div className="level1container">
            <Lottie className="animation" animationData={animationdata} />
            <div className="containercontent">
                <p>There seems to be a hidden path leading to the next level...</p>
                <p>But the entrance is cleverly disguised. If you keep an eye out, you might just find it...</p>
                <p>Hint: A little exploration could help you find the next step. If you hit a dead end, the console might hold some answers.</p>
            </div>


            {ads.map((ad, index) => (
                <div
                    key={ad.id}
                    className="ad-container"
                    style={{
                        top: `${ad.top}%`,
                        left: `${ad.left}%`,
                    }}
                >
                    <img
                        className="ad-image"
                        src={ad.image}
                        alt={`Ad ${index + 1}`}
                    />
                    {index === hiddenButtonIndex && (
                        <button
                            className="hiddenButton"
                            onMouseLeave={() => alert('the function "handleClick" is declared but not attached to the function...')}
                        >
                            Next Level
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Level1;
