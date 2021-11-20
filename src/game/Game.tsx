import { FrameManager } from "./FrameManager";
import { GameTime } from "./GameTime";
import Vector2 from "./math/Vector2";
import { GameTest } from "./test";

let fps_limit = 60;
let fps = 0;
let frameRate = 0;
let currentFrameRate = 0;
let maxFps = 60;
let timeStep = 1000/60;

export class Game {
	private frameManager: FrameManager;
	private canvas: HTMLCanvasElement;
    private test:GameTest;

	constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.frameManager = FrameManager.getInstance();
		this.GameLoop = this.GameLoop.bind(this);
        this.test = new GameTest();
	}

	public GameLoop(currentTime: number = 0): void {
        //game test
        if(currentTime <this.frameManager.previousFrame + (1000/maxFps)){
            window.requestAnimationFrame(this.GameLoop);
            return
        }
        GameTime.deltaTime += (currentTime - this.frameManager.previousFrame);
        this.frameManager.previousFrame = currentTime;

        while(GameTime.deltaTime >= timeStep){
            this.test.update(timeStep);
            GameTime.deltaTime -= timeStep
        }
        this.test.draw(this.canvas, GameTime.deltaTime);
        //console test
        console.log(`current time: ${Date.now()}`);
        // console.log(`current framerate: ${frameRate}`);
        // console.log(`previousFrame time: ${this.frameManager.previousFrame}`);
        // console.log(`delta: ${GameTime.deltaTime}`);
        window.requestAnimationFrame(this.GameLoop);
	}
}

