import { FrameManager } from "./FrameManager";
import { GameTime } from "./GameTime";
import Vector2 from "./math/Vector2";
import { GameTest } from "./test";

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
		GameTime.deltaTime = (currentTime - this.frameManager.previousFrame);
        this.test.update(GameTime.deltaTime);
        this.test.draw(this.canvas, GameTime.deltaTime);
		console.log(`current time: ${currentTime}`);
		console.log(`previousFrame time: ${this.frameManager.previousFrame}`);
		console.log(`delta: ${GameTime.deltaTime}`);
        this.frameManager.previousFrame = currentTime;
		window.requestAnimationFrame(this.GameLoop);
	}
}

let maxFps = 120;
