import React, { useRef, useEffect, useState } from 'react';
import './Buttons.css';
import { useDrumKitData } from './BankContext.js';
import { usePower } from './PowerButtonContext.js';
import { useVolume } from './VolumeContext.js';


//try to pass audioRef.current[i] as a prop to VolumeContext parent component


function Buttons(){


const currentVolume = useVolume();
//const changeVolume = useUpdateVolume();

const drumKitData = useDrumKitData();

const isPowerOn = usePower();

function buttonHover(e){
    
    return e.target.style.backgroundColor = "rgb(0, 230, 0)";
}
function buttonExit(e){
    return e.target.style.backgroundColor = "gray";
}

useEffect(() => {

    window.addEventListener('keydown', isPowerOn ? handleAudioKeyDown : null);

    return () => {window.removeEventListener('keydown', handleAudioKeyDown);
};
});

const audioRef = useRef([]);
const buttonRef = useRef([]);


const handleAudioClick = (e) => {
    
    const clickedSound = e.target.children[0].attributes[0].nodeValue;
    for(let i = 0; i < drumKitData.buttonList.length; i++){
        if(clickedSound === audioRef.current[i].src){
            //audioRef.current[i].volume = currentVolume;
            audioRef.current[i].play();
            //on another click
            if (!audioRef.current[i].paused) {
              audioRef.current[i].currentTime = 0;
                audioRef.current[i].play();
            }
            if(!isPowerOn){
                audioRef.current[i].pause();
                audioRef.current[i].currentTime = 0;
            }
            
            //console.log(audioRef.current[i].duration);
        }
    }

};



const handleAudioKeyDown = (e) => {
    for(let i = 0; i < drumKitData.buttonList.length; i++){
        if(e.keyCode === drumKitData.buttonList[i].keyCode){
            //console.log(audioRef.current[i]);
            buttonRef.current[i].focus();
            const currentSound = audioRef.current[i];
            currentSound.volume = currentVolume;
            currentSound.play();
            //on another tap
            if (!audioRef.current[i].paused && isPowerOn) {
                //audioRef.current[i].pause();
                audioRef.current[i].currentTime = 0;
                audioRef.current[i].play();
            }
            else if(!audioRef.current[i].paused && isPowerOn){
                audioRef.current[i].pause();
                audioRef.current[i].currentTime = 0;
            }

            //audioRef.current[i].play();
            //i = drumKitData.buttonList.length;
        }
    }
}

return(

<div id="button-container">
    {drumKitData.buttonList.map((btn, index) => <button key={btn.letter} ref={(dpad)=> buttonRef.current.push(dpad)} onClick={isPowerOn ? handleAudioClick : null} onKeyUp={()=>buttonRef.current[index].blur()} onMouseUp={()=>buttonRef.current[index].blur()} onMouseOver={isPowerOn ? buttonHover : null} onMouseOut={buttonExit} className="drum-pad" id={btn.letter}>{btn.letter}
        <audio ref={(ele) => audioRef.current.push(ele)} src={btn.url} preload />
    </button>)}
</div>
)

}

export default Buttons;