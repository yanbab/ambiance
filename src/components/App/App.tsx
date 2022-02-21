import React, { useState } from 'react';

import { AudioPlayer } from '../AudioPlayer/AudioPlayer';
import { Icon } from '../Icon/Icon';
import { List } from '../List/List';

import AudioProvider from '../../providers/AudioProvider';
import Storage from '../../providers/Storage';
import messages from '../../locales/fr.json';
import './App.scss';

const tracks = [
  { category: "Nature", name: "Rain", icon: "rain.svg", src: "rain.mp3" },
  { category: "Nature", name: "Storm", icon: "storm.svg", src: "storm.mp3" },
  { category: "Nature", name: "Wind", icon: "wind.svg", src: "wind.mp3" },
  { category: "Nature", name: "Waves", icon: "waves.svg", src: "waves.mp3" },
  { category: "Nature", name: "Stream", icon: "stream.svg", src: "stream.mp3" },
  { category: "Nature", name: "Birds", icon: "birds.svg", src: "birds.mp3" },
  { category: "Nature", name: "Summer night", icon: "summer-night.svg", src: "summer-night.mp3" },
  { category: "Travel", name: "Train", icon: "train.svg", src: "train.mp3" },
  { category: "Travel", name: "Boat", icon: "boat.svg", src: "boat.mp3" },
  { category: "Travel", name: "City", icon: "city.svg", src: "city.mp3" },
  { category: "Indoors", name: "Coffee shop", icon: "coffee-shop.svg", src: "coffee-shop.mp3" },
  { category: "Indoors", name: "Fireplace", icon: "fireplace.svg", src: "fireplace.mp3" },
  { category: "Noise", name: "Pink noise", icon: "pink-noise.svg", src: "pink-noise.mp3" },
  { category: "Noise", name: "White noise", icon: "white-noise.svg", src: "white-noise.mp3" },
];

console.log(messages)
const lang: any = {
  "Listen to relaxing sounds": "Écoutez différents sons d’ambiance",
  "Play": "Lecture",
  "Pause": "Pause",
  "About": "À propos",
  "Nature": "Nature",
  "Travel": "Voyage",
  "Indoors": "Intérieur",
  "Noise": "Bruit",
  "Custom sounds": "Personalisé", 
  "Add custom sound...": "Ajouter un son...", 
  "Rain": "Pluie",
  "Storm": "Tempête",
  "Wind": "Vent",
  "Waves": "Vagues",
  "Stream": "Ruisseau",
  "Birds": "Oiseaux",
  "Summer night": "Nuit d'été",
  "Train": "Train",
  "Boat": "Bateau",
  "City": "Ville",
  "Coffee shop": "Café",
  "Fireplace": "Cheminée",
  "Pink noise": "Bruit rose",
  "White noise": "Bruit blanc"
}

const _ = (msg: string)=> {
  if(lang[msg]) return lang[msg];
  return msg;
}

export const App = (props: any) => {

  const [ playing, setPlaying ] = useState(true);
  const [ volume, setVolume ] = useState("50");
  const [ menuOpen, setMenuOpen ] = useState(false);

  const categories = [ "Nature", "Travel", "Indoors", "Noise" ];
  const iconSize = 30;

  const handleVolumeChange = (track: string, volume: number | string) => {
    console.log('changed', track, volume);
    Storage.set(track, volume);
  }

  const getVolumeIcon = (volume: string) => {
    let vol = Number(volume);
    if(!playing) return 'volume_off';
    if(vol < 10) return 'volume_mute';
    if(vol < 50) return 'volume_down';
    return 'volume_up'
  }

  return (
    <div className="App"> 
      <header>
        <nav className="clamp">
          <div onClick={_ => setPlaying(!playing)}>
            {playing && <Icon size={iconSize} name="pause" />}
            {!playing && <Icon size={iconSize} name="play_arrow" style={{}} />}
          </div>
          <h1>
            Ambiance
            <small>{_("Listen to relaxing sounds")}</small>
          </h1>
          <div className={"menu " }>
            <Icon name="menu" />
            <div className="menu-popover">
              <div>
                <Icon size={iconSize} name={getVolumeIcon(volume)} />
                <input type="range" value={volume} onChange={event => setVolume(event.target.value)} />
              </div>
              <a href="#">{_("About")}</a>
            </div>
          </div>
        </nav>
      </header>
      <main className="clamp">
        {categories.map(category => 
          <List title={_(category)}>
            {tracks.map(track => (track.category == category)
              ? <AudioPlayer name={_(track.name)} icon={track.icon} src={track.src} volume="0" onVolumeChange={handleVolumeChange} /> 
              : <></>
            )}
          </List>
        )}
          
          
          <h2>{_("Custom sounds")}</h2>
          <button className="FileUpload">{_("Add custom sound...")}</button>
          <input type="file" />
          <br/><br/>
      </main>
    </div>
  );
}

export default App;
