import React, { useState } from 'react';

import { AppMenu } from '../AppMenu/AppMenu';
import notify, { Notification } from '../Notification/Notification'

import { AudioPlayer } from '../AudioPlayer/AudioPlayer';
import { List } from '../List/List';

import Store from '../../services/Store';
import _ from '../../services/i18n';

import './App.scss';

import tracks from '../../assets/sounds';


export const App = () => {

  const [ playing, setPlaying ] = useState(true);
  const categories = [ "Nature", "Travel", "Indoors", "Noise" ];
  const store = new Store("");

  const handleVolumeChange = (track: string, volume: number | string) => {
    console.log('changed', track, volume);
    store.set(track, volume);
  }
  return (
    <div className="App">
      <Notification position="bottom-right" />
      <header>
        <nav className="clamp">
          <button onClick={_ => { setPlaying(!playing); notify("Now playing", "ok", alert); }}>
            { playing ? "⏸" : "▶" }
          </button>
          <h1>
            Ambiances<span>.online</span>
            <small>{_("Listen to relaxing sounds")}</small>
          </h1>
          <AppMenu label="☰" />
        </nav>
      </header>
      <main className="clamp">
        {categories.map((category, i) => 
          <List key={i} title={_(category)}>
            {tracks.map((track, j) => (track.category === category)
              ? <AudioPlayer key={j} name={_(track.name)} icon={track.icon} src={track.src} onVolumeChange={handleVolumeChange} /> 
              : <></>
            )}
          </List>
        )}
          <h2>{_("Custom sounds")}</h2>
          <button className="FileUpload">{_("Add custom sound...")}</button>
          <br/><br/>
      </main>
    </div>
  );
}

export default App;
