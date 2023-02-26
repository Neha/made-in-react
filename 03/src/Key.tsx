import React, {useState } from 'react';
import Audio from './Audio.tsx';

const keys = {
    '65': '../audios/shaker.wav',
    '83': '../audios/snare.wav'
}

const Key = () => {
    const [audioSrc , setAudioSrc ] = useState();
    const createList = (keys) => {
        return Object.entries(keys).map(([key,value]) => {
            return <button 
                    data-key={key} 
                    onClick={(e) => setHandler(e)} 
                    data-src={value} 
                    key={key}>{key}
                    </button>
        })
    }
    
    const setHandler = (e) =>{
        e.preventDefault();
        const element = e.target;
        const audiosrc = element.getAttribute('data-src');
        setAudioSrc(audiosrc)
    }
    return( 
       <>
       {createList(keys)}
       {audioSrc && <Audio srcfile={audioSrc} />}
       </>
    )
}

export default Key;