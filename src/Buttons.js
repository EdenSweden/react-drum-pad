import React, { useEffect, useContext} from 'react';
import './Buttons.css';
import { ACTIONS, DispatchContext, GlobalStateContext, useAudioRef, useButtonRef } from './MasterContext';




function Buttons(){

const state = useContext(GlobalStateContext);
const dispatch = useContext(DispatchContext);
const buttonRef = useButtonRef();
const audioRef = useAudioRef();
const keyEventCodeRegex = /^(Key)[Q|W|E|A|S|D|Z|X|C]/;


    function buttonHover(e){
        if(state.isPowerOn){
            function showInstrument(index){
                dispatch({type: ACTIONS.CHANGE_DISPLAY, payload: state.drumKitData.buttonList[index].displayText});
            }
            switch(e.target.id){   
                case "Q":
                showInstrument(0);
                break;
                case "W":
                showInstrument(1);
                break;
                case "E":
                showInstrument(2);
                break;
                case "A":
                showInstrument(3);
                break;
                case "S":
                showInstrument(4);
                break;
                case "D":
                showInstrument(5);
                break;
                case "Z":
                showInstrument(6);
                break;
                case "X":
                showInstrument(7);
                break;
                case "C":
                showInstrument(8);
                break;
                default:
                break;
                
            }
        return e.target.style.backgroundColor = "rgb(0, 230, 0)";
        } else{
            return null;
        }
    
    }
    
    function buttonExit(e){

        dispatch({type: ACTIONS.CHANGE_DISPLAY, payload: state.drumKitData.displayText});
    return e.target.style.backgroundColor = "gray";
    }

     
    //Will make the sound stop if power is switched off during playback
    useEffect(()=>{
        var activeAudio = audioRef.current.filter((audio)=>audio.ended === false);

        if (state.isPowerOn === false){
            function stopSound(audio){
                audio.pause();
                audio.currentTime = 0;
            }
        activeAudio.forEach((audio)=>stopSound(audio));
        } else {
            return null;
        }

    }, [state.isPowerOn, audioRef]);

    //Will change volume dynamically as sound plays, & not just before playback
    useEffect(()=>{
        audioRef.current.forEach((audio)=>audio.volume = state.currentVolume);

    }, [state.currentVolume, audioRef])


    function handleAudioClick(e) {

        e.target.style.border="solid 1px black";
    
        function clickAudio(refIndex){
            dispatch({type: ACTIONS.CHANGE_DISPLAY, payload: state.drumKitData.buttonList[refIndex].displayText})
            audioRef.current[refIndex].play();
            
            //on another click
            if (!audioRef.current[refIndex].paused) { 
              audioRef.current[refIndex].currentTime = 0;
               audioRef.current[refIndex].play(); 
                }
            }

        if(state.isPowerOn){
            const clickedSound = e.target.children[0].attributes[0].nodeValue;
    
        switch(clickedSound){
            case audioRef.current[0].src:
            clickAudio(0);
            break;

            case audioRef.current[1].src:
            clickAudio(1);
            break;

            case audioRef.current[2].src:
            clickAudio(2);
            break;

            case audioRef.current[3].src:
            clickAudio(3);
            break;

            case audioRef.current[4].src:
            clickAudio(4);
            break;

            case audioRef.current[5].src:
            clickAudio(5);
            break;

            case audioRef.current[6].src:
            clickAudio(6);
            break;

            case audioRef.current[7].src:
            clickAudio(7);
            break;

            case audioRef.current[8].src:
            clickAudio(8);
            break;

            default:
            return null;
            }
        } else {
            console.log("power is off.");
        }    
    }

    const mouseUpReturnStyles = (index) => {
       
      let buttonStyle = buttonRef.current[index].style;
      buttonStyle.borderBottom = "solid 3px #505050";
      buttonStyle.borderRight = "solid 3px #404040";
      buttonStyle.borderTop = "solid 3px rgb(227, 227, 227)";
      buttonStyle.borderLeft = "solid 3px rgb(227, 227, 227)";
      }

      

function handleAudioKeyDown(e) {

        function audioTap(refIndex) {
            if(state.isPowerOn===true){
            dispatch({
              type: ACTIONS.CHANGE_DISPLAY,
              payload: state.drumKitData.buttonList[refIndex].displayText
            });
            buttonRef.current[refIndex].style.backgroundColor = "rgb(0, 230, 0)";
            buttonRef.current[refIndex].style.border = "solid 1px black";
            audioRef.current[refIndex].play();
            //on another tap of same key:
            if (!audioRef.current[refIndex].paused && audioRef.current[refIndex].currentTime > 0) {
           
            audioRef.current[refIndex].pause();       
            audioRef.current[refIndex].currentTime = 0;
            audioRef.current[refIndex].play();
            }
          } else if (state.isPowerOn===false){
            buttonRef.current[refIndex].style.border = "solid 1px black";
            } else {
                return null;
            } 
            

        }

        if(keyEventCodeRegex.test(e.code)){
            
            switch(e.code){
                case "KeyQ":
                audioTap(0);
                break;

                case "KeyW":
                audioTap(1);
                break;

                case "KeyE":
                audioTap(2);
                break;

                case "KeyA":
                audioTap(3);
                break;

                case "KeyS":
                audioTap(4);
                break;

                case "KeyD":
                audioTap(5);
                break;

                case "KeyZ":
                audioTap(6);
                break;
                case "KeyX":
                audioTap(7);
                break;

                case "KeyC":
                audioTap(8);
                break;

                default:
                return null;
                }

            } else {
                return null;
            }
}


useEffect(() => {
   
    window.addEventListener('keydown', handleAudioKeyDown);

    return ()=> {window.removeEventListener('keydown', handleAudioKeyDown)};
/*all dependencies of this effect are the same state values used in the handleAudioKeyDown function above*/
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [state.isPowerOn, state.kitOneIsActive, state.drumKitData]);

function makeButtonGray(e){

    const returnStyles = (btnIndex) => {
        let buttonStyle = buttonRef.current[btnIndex].style;
  
        buttonStyle.backgroundColor = "gray";
        buttonStyle.borderBottom = "solid 3px #505050";
        buttonStyle.borderRight = "solid 3px #404040";
        buttonStyle.borderTop = "solid 3px rgb(227, 227, 227)";
        buttonStyle.borderLeft = "solid 3px rgb(227, 227, 227)";
      };

        if(keyEventCodeRegex.test(e.code)){
        switch(e.code){
        case "KeyQ":
          returnStyles(0);
          break;
        case "KeyW":
          returnStyles(1);
          break;
        case "KeyE":
          returnStyles(
            2
          );
          break;
        case "KeyA":
          returnStyles(3);
          break;
        case "KeyS":
          returnStyles(4);
          break;
        case "KeyD":
          returnStyles(5);
          break;
        case "KeyZ":
          returnStyles(6);
          break;
        case "KeyX":
          returnStyles(7);
          break;
        case "KeyC":
          returnStyles(8);
          break;
        default:
          return null;
            }
        }
    else {
        return null;
    }
}

useEffect(() => {
    window.addEventListener("keyup", makeButtonGray);

   return ()=>{window.removeEventListener("keyup", makeButtonGray)}

});


return(

<div id="button-container" aria-label="Nine drum pad buttons. Press Q, W, E, A, S, D, Z, X, or C.">
    {state.drumKitData.buttonList.map((btn, index) => <button key={btn.letter} ref={dpad => buttonRef.current[index] = dpad} aria-label={state.isPowerOn ? state.drumKitData.buttonList[index].displayText + ", or press '" + btn.letter + ".'" : state.drumKitData.buttonList[index].displayText + ". Power is off"} onMouseDown={handleAudioClick} onMouseOver={state.isPowerOn ? buttonHover : null} onMouseUp={()=>mouseUpReturnStyles(index)} onMouseOut={buttonExit} onFocus={buttonHover} onBlur={buttonExit} className="drum-pad" tabIndex={0} id={btn.letter}>{btn.letter}
        <audio ref={ele => audioRef.current[index] = ele} src={btn.url} preload="true" />
    </button>)}
</div>
);

}

export default Buttons;