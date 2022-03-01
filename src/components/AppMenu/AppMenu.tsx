import React, { useState } from 'react';
import { Details } from '../Details/Details';
import Store from '../../services/Store';
import lang from '../../locales/fr.json';
import './AppMenu.scss';

const _ = (msg: string)=> {
  const l:any = lang;
  if(l[msg]) return l[msg];
  return msg;
}

const store = new Store("")

export const AppMenu = (props: any) => {  
  
  const [ volume, setVolume ] = useState("50");
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);

  const getVolumeIcon = (volume: string) => {
    let vol = Number(volume);
    //if(!playing) return 'volume_off';
    if(vol < 33) return '🔈';
    if(vol < 66) return '🔉';
    return '🔊';
  }

  return (
    <span className="popover">
      <button onClick={()=> setMenuIsOpen(!menuIsOpen)}>{props.label}</button>
      <div className={"menu" + (menuIsOpen ? " menu--open": "")}  >
        <div className="slider">
          <span className="grayscale">{getVolumeIcon(volume)}</span>
          <input type="range" value={volume} onChange={event => setVolume(event.target.value)} />
        </div>
        <Details summary={_("Save ambiance")} >
          <label>
            <input type="text" autoFocus placeholder={_("My custom ambiance")} />
          </label>
          </Details>
         
        <Details summary={_("Save ambiance")} >
          
          <a href="#h">Ambiance #1</a>
          <a href="#h">Ambiance #2</a>
        </Details>
        
        <a href="https://github.com/yanbab/ambiance#readme" target="_blank" rel="noreferrer">
          <span className="badge">i</span>
          {_("About")}
        </a>
      </div>
    </span>
  );

}
