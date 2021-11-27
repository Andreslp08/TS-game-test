import { GameTest } from "../test/test";

let fps_limit = 60;
let fps = 0;
let frameRate = 0;
let currentFrameRate = 0;
let maxFps = 60;
let timeStep = 1000/60;
let previousFrame = 0;
let deltaTime = 0;

export class Engine {
	private canvas: HTMLCanvasElement;
    private test:GameTest;

	constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.GameLoop = this.GameLoop.bind(this);
        this.test = new GameTest();
	}

	public GameLoop(currentTime: number = 0): void {
        //game test
        if(currentTime <previousFrame + (1000/maxFps)){
            window.requestAnimationFrame(this.GameLoop);
            return
        }
        deltaTime += (currentTime - previousFrame);
        previousFrame = currentTime;

        while(deltaTime >= timeStep){
            this.test.update(timeStep);
            deltaTime -= timeStep
        }
        this.canvas.getContext('2d').clearRect(0,0,this.canvas.width, this.canvas.height);
        this.test.draw(this.canvas, deltaTime);
        //console test
        // console.log(`current time: ${Date.now()}`);
        // console.log(`current framerate: ${frameRate}`);
        // console.log(`previousFrame time: ${previousFrame}`);
        // console.log(`delta: ${deltaTime}`);
        window.requestAnimationFrame(this.GameLoop);
	}
}

