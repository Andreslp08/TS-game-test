import React from 'react';
import './styles/style.css';
import './styles/canvas-style.css';
import GameCanvas from './components/canvas/canvas';
import { Engine } from './game/Engine';

function App() {

  window.onload = ()=>{
    const canvas:HTMLCanvasElement = document.getElementById('game-canvas') as unknown as HTMLCanvasElement;
    const game = new Engine(canvas);
    window.requestAnimationFrame(game.GameLoop);
  }

  const w = `${1920}px`;
  const h = `${1080}px`;
  return (
    <div>
  <canvas className="canvas" width={ w} height={ h} id="game-canvas">
    </canvas>
    </div>
  
  );
}


export default App;
