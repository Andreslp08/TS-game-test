import { FrameManager } from "./FrameManager";
import { GameTime } from "./GameTime";
import Vector2 from "./math/Vector2";

export class Game {


    private frameManager: FrameManager;
    private canvas: HTMLCanvasElement;
    private mouseVector: Vector2;
    private position:Vector2;
    private velocity:Vector2;


    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.frameManager = FrameManager.getInstance();
        this.GameLoop = this.GameLoop.bind(this);
        this.position = new Vector2(0,50);
        this.velocity = new Vector2(10,10);
    }


    public GameLoop(currentTime: number = 0): void {
        GameTime.deltaTime = (currentTime - this.frameManager.previousFrame);
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
        this.position.addVector(this.velocity);
        const radius = 40;
        ctx.beginPath();
        ctx.ellipse(this.position.x, this.position.y,radius, radius, 0, 0 , Math.PI *2, false)
        ctx.fill();
        const offX = this.position.x + radius *2;
        const offY = this.position.y + radius *2;

        if( offX > this.canvas.width){
            this.velocity.substractVector(new Vector2(1,0))
        }
        else if( this.position.x < 0 +radius*2){
            this.velocity.addVector(new Vector2(1,0))
        }
        if( offY > this.canvas.height){
            this.velocity.substractVector(new Vector2(0,1))
        }
        else if( this.position.y < 0 +radius*2 ){
            this.velocity.addVector(new Vector2(0,1))
        }
        // console.log("1 second")
        // console.log(`current time: ${currentTime}`);
        // console.log(`previousFrame time: ${this.frameManager.previousFrame}`);
        // console.log(`delta: ${GameTime.deltaTime}`);

        window.requestAnimationFrame(this.GameLoop);


    }
}

let maxFps = 120;
