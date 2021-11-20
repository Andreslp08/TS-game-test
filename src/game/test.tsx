import { FrameManager } from "./FrameManager";
import GameObject from "./GameObject";
import Vector2 from "./math/Vector2";

const radius = 40;
let escalar = 0.1;

export class GameTest extends GameObject{
    private frameManager: FrameManager;
	private canvas: HTMLCanvasElement;
	private mouseVector: Vector2;
	private position: Vector2;
	private velocity: Vector2;
    private  VELOCITY = 1;
    private screenLimits:Vector2;

    constructor(){
        super()
        this.position = new Vector2(radius, radius);
		this.velocity = new Vector2(0, 0);
        this.screenLimits = new Vector2(0,0);
    }


    draw(canvas: HTMLCanvasElement, deltaTime: number): void {
        const ctx = canvas.getContext("2d");
        this.screenLimits.x = canvas.width;
        this.screenLimits.y = canvas.height;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		ctx.ellipse(this.position.x, this.position.y, radius, radius, 0, 0, Math.PI * 2, false);
		ctx.fill();
    }

    update(deltaTime: number): void {
        const offX = this.position.x + radius ;
		const offY = this.position.y + radius  ;
        this.position.addVector(this.velocity); 
        if (offX >= this.screenLimits.x ) {
            this.velocity.x = -this.VELOCITY*deltaTime;
            // this.velocity.substractVector(new Vector2(this.VELOCITY*deltaTime,0));
            
        } else if (this.position.x <= 0 + radius ) {
            this.velocity.x = this.VELOCITY*deltaTime;
            // this.velocity.addVector(new Vector2(this.VELOCITY*deltaTime, 0));
        }
        
        if (offY >= this.screenLimits.y) {
            this.velocity.y = -this.VELOCITY*deltaTime;
            // this.velocity.substractVector(new Vector2(0,this.VELOCITY*deltaTime));
            
        } else if (this.position.y <= 0+ radius ) {
            this.velocity.y = this.VELOCITY*deltaTime;
            // this.velocity.addVector(new Vector2(0,this.VELOCITY*deltaTime));
        }
        
        console.log(`vX:${this.velocity.x} vY:${this.velocity.y}`)

    }
}