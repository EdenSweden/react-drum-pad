/*import React, { useState, useContext } from 'react';


export const BankContext = React.createContext();
export const BankUpdateContext = React.createContext();
export const DrumKitDataContext = React.createContext();



export function useBank() {
    return useContext(BankContext);
}

export function useBankUpdate(){
    return useContext(BankUpdateContext);
}
export function useDrumKitData(){
    return useContext(DrumKitDataContext);
}



export default function BankDataProvider({ children }) {
//BankContext:
const [kitOneIsActive, setOtherKitActive] = useState(true);


//BankUpdateContext:
function toggleKit () {

    setOtherKitActive(prevKit => !prevKit);
    //console.log(drumKitData.buttonList[0].url);
}
//DrumKitDataContext:

/*const drumKitData = { displayText: state.kitOneIsActive ? "Heater Kit" : "Smooth Piano Kit", buttonList: state.kitOneIsActive ? [{letter: "Q", keyCode: 81, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}, {letter: "W", keyCode: 87, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}, {letter: "E", keyCode: 69, url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}, {letter: "A", keyCode: 65, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"}, {letter: "S", keyCode: 83, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"}, {letter: "D", keyCode: 68, url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}, {letter: "Z", keyCode: 90, url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}, {letter: "X", keyCode: 88, url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}, {letter: "C", keyCode: 67, url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}] : [{letter: "Q", keyCode: 81, url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}, {letter: "W", keyCode: 87, url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"}, {letter: "E", keyCode: 69, url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"}, {letter: "A", keyCode: 65, url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"}, {letter: "S", keyCode: 83, url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"}, {letter: "D", keyCode: 68, url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"}, {letter: "Z", keyCode: 90, url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"}, {letter: "X", keyCode: 88, url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"}, {letter: "C", keyCode: 67, url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}] };    



return (
<BankContext.Provider value={kitOneIsActive}>
    <BankUpdateContext.Provider value={toggleKit}>
        <DrumKitDataContext.Provider value={drumKitData}>
            { children }
        </DrumKitDataContext.Provider>
    </BankUpdateContext.Provider>  
</BankContext.Provider>);*/

//};