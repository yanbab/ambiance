import { useState, useRef } from 'react';
import './AudioPlayer.scss';

export const AudioPlayer = (props: any) => {
  
  const [ volume, setVolume ] = useState(props.volume || 0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const iconSize = 64;
  const className = (volume <= 0) ? "AudioPlayer--muted" : "";
  const audioFile = require('../../assets/sounds/' + props.src);

  const handleVolume = (event: any) => {
    let vol = event.target.value / 100;
    console.log(vol)
    setVolume(vol);
    if(audioRef && audioRef.current) {
      audioRef.current.volume = vol;
      if(vol === 0) audioRef.current.pause();
      else audioRef.current.play();
    }
    props.onVolumeChange && props.onVolumeChange(props.src, event.target.value);
  } 
  
  return (
    <div className={"AudioPlayer " + className }>
      <img alt="" draggable="false" width={iconSize} height={iconSize} src={require('../../assets/icons/' + props.icon)}/>
      <div className="AudioPlayer-details">        
        {props.name} 
        <input type="range" min="0" max="100" value={volume} onChange={handleVolume} />
        <audio ref={audioRef}  loop  src={audioFile}/>
      </div>
    </div>
  );

}
