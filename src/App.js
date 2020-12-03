import { useRef, useState } from 'react';
import cn from 'classnames';

import boomSource from './sounds/boom.wav';
import clapSource from './sounds/clap.wav';
import hihatSource from './sounds/hihat.wav';
import kickSource from './sounds/kick.wav';
import openhatSource from './sounds/openhat.wav';
import rideSource from './sounds/ride.wav';
import snareSource from './sounds/snare.wav';
import tinkSource from './sounds/tink.wav';
import tomSource from './sounds/tom.wav';

import useEventListener from './useEventListener';

import './App.css';

function App() {

  const [selected, setSelected] = useState(undefined);

  const boomButton = useRef(null);
  const clapButton = useRef(null);
  const hihatButton = useRef(null);
  const kickButton = useRef(null);
  const openhatButton = useRef(null);
  const rideButton = useRef(null);
  const snareButton = useRef(null);
  const tinkButton = useRef(null);
  const tomButton = useRef(null);

  const boom = new Audio(boomSource);
  const clap = new Audio(clapSource);
  const hihat = new Audio(hihatSource);
  const kick = new Audio(kickSource);
  const openhat = new Audio(openhatSource);
  const ride = new Audio(rideSource);
  const snare = new Audio(snareSource);
  const tink = new Audio(tinkSource);
  const tom = new Audio(tomSource);

  const playSound = (sound, soundName) => {
    if (soundName) {
      setSelected(soundName);

      setTimeout(() => {
        setSelected(undefined);
      }, 550);
    }

    sound.play();
  };

  useEventListener('keydown', (event) => event.keyCode === 66 && playSound(boom, 'boom'));
  useEventListener('keydown', (event) => event.keyCode === 67 && playSound(clap, 'clap'));
  useEventListener('keydown', (event) => event.keyCode === 72 && playSound(hihat, 'hihat'));
  useEventListener('keydown', (event) => event.keyCode === 75 && playSound(kick, 'kick'));
  useEventListener('keydown', (event) => event.keyCode === 79 && playSound(openhat, 'openhat'));
  useEventListener('keydown', (event) => event.keyCode === 82 && playSound(ride, 'ride'));
  useEventListener('keydown', (event) => event.keyCode === 83 && playSound(snare, 'snare'));
  useEventListener('keydown', (event) => event.keyCode === 84 && playSound(tink, 'tink'));
  useEventListener('keydown', (event) => event.keyCode === 77 && playSound(tom, 'tom'));

  const sounds = [
    [boom, 'boom'],
    [clap, 'clap'],
    [hihat, 'hihat'],
    [kick, 'kick'],
    [openhat, 'openhat'],
    [ride, 'ride'],
    [snare, 'snare'],
    [tink, 'tink'],
    [tom, 'tom'],
  ];

  const buildSoundTiles = () => (
    sounds.map((sound) => (
      <div key={sound[1]} >
        <button
          onClick={() => playSound(sound[0], sound[1])}
          className={cn({ 'selected-button': selected === sound[1] })}>
          <div className='😴'>
            {sound[1] === 'tom' ? 'M' : sound[1][0].toUpperCase()}
          </div>
          {sound[1]}
        </button>
      </div>
    ))
  );

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={() => playSound(boom)}>H</button>
        <button onClick={() => playSound(clap)}>E</button>
        <button onClick={() => playSound(hihat)}>A</button>
        <button onClick={() => playSound(kick)}>D</button>
        <button onClick={() => playSound(openhat)}>B</button>
        <button onClick={() => playSound(ride)}>A</button>
        <button onClick={() => playSound(snare)}>N</button>
        <button onClick={() => playSound(tink)}>G</button>
        <button onClick={() => playSound(tom)}>E</button>
        <button onClick={() => playSound(boom)}>R</button>
        <button onClick={() => playSound(clap)}>Z</button>
      </header>

      <main className='drumkit'>
        <section className='soundTiles'>
          {buildSoundTiles()}
          <div>
            <img src="https://placedog.net/540/205" alt="" className='secret' />

          </div>
        </section>
      </main>

    </div>
  );
}

export default App;
