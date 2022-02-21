import { createContext, useState } from 'react';

const tracks = [
    { category: "Nature", name: "Rain", icon: "air", src: "assets/sounds/rain.ogg" },
    { category: "Nature", name: "Storm", icon: "thunderstorm", src: "assets/sounds/storm.ogg" },
    { category: "Nature", name: "Wind", icon: "air", src: "assets/sounds/wind.ogg" },
    { category: "Nature", name: "Waves", icon: "waves", src: "assets/sounds/waves.ogg" },
    { category: "Nature", name: "Stream", icon: "kayaking", src: "assets/sounds/stream.ogg" },
    { category: "Nature", name: "Birds", icon: "music_note", src: "assets/sounds/birds.ogg" },
    { category: "Nature", name: "Summer night", icon: "nights_stay", src: "assets/sounds/summer-night.ogg" },
];

// create a context, with createContext api
export const audioContext = createContext();

const AudioProvider = (props) => {
    
    // this state will be shared with all components 
    const [audio, setAudio ] = useState(tracks);

    return (
        // this is the provider providing state
        <audioContext.Provider value={[audio, setAudio]}>
            {props.children}
        </audioContext.Provider>
    );
};

export default AudioProvider;