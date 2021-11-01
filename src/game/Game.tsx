import { FrameManager } from "./FrameManager";
import { GameTime } from "./GameTime";
import Vector2 from "./math/Vector2";
import Player from "./Player";

export class Game {


    private frameManager: FrameManager;
    private player: Player;
    private canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.frameManager = FrameManager.getInstance();
        this.GameLoop = this.GameLoop.bind(this);
        this.player = new Player(new Vector2(0, 0));
    }


    public GameLoop(currentTime: number = 0): void {
        GameTime.deltaTime = (currentTime - this.frameManager.previousFrame);
        // console.log("1 second")
        // console.log(`current time: ${currentTime}`);
        // console.log(`previousFrame time: ${this.frameManager.previousFrame}`);
        // console.log(`delta: ${GameTime.deltaTime}`);
        this.player.update(GameTime.deltaTime);
        this.frameManager.previousFrame = currentTime;
        this.player.draw(this.canvas, GameTime.deltaTime);
        window.requestAnimationFrame(this.GameLoop);


    }
}

let maxFps = 120;
