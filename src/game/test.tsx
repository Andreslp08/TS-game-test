
import GameObject from "./GameObject";
import Vector2 from "./math/Vector2";

const radius = 40;
let escalar = 0.1;

export class GameTest extends GameObject {

	private canvas: HTMLCanvasElement;
	private mouseVector: Vector2;
	private position: Vector2;
	private velocity: Vector2;
	private VELOCITY = 1;
	private screenLimits: Vector2;
	private size: number = 1000;
	private poistions: Vector2[] = [];
	private velocities: Vector2[] = [];

	constructor() {
		super();
		this.position = new Vector2(radius, radius);
		this.velocity = new Vector2(0, 0);
		this.screenLimits = new Vector2(0, 0);
		for (let i = 0; i < this.size; i++) {
			const x = Math.random() * 600;
			const y = Math.random() * 600;
			const vX = Math.random() * 100;
			const vY = Math.random() * 100;
			console.log(x);
			this.poistions.push(new Vector2(x, y));
			this.velocities.push(new Vector2(vX, vY));
		}
	}

	draw(canvas: HTMLCanvasElement, deltaTime: number): void {
		const ctx = canvas.getContext("2d");
		this.screenLimits.x = canvas.width;
		this.screenLimits.y = canvas.height;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		// for (let i = 0; i < this.poistions.length; i++) {
		//     ctx.beginPath();
		// 	const pos = this.poistions[i];
		// 	ctx.ellipse(pos.x, pos.y, radius, radius, 0, 0, Math.PI * 2, false);
		// ctx.fill();
		// }
		ctx.ellipse(this.position.x, this.position.y, radius, radius, 0, 0, Math.PI * 2, false);
		ctx.fill();
	}

	update(deltaTime: number): void {
		const offX = this.position.x + radius;
		const offY = this.position.y + radius;
		this.position.addVector(this.velocity);
		if (offX >= this.screenLimits.x) {
			this.velocity.x = -this.VELOCITY * deltaTime;
			// this.velocity.substractVector(new Vector2(this.VELOCITY*deltaTime,0));
		} else if (this.position.x <= 0 + radius) {
			this.velocity.x = this.VELOCITY * deltaTime;
			// this.velocity.addVector(new Vector2(this.VELOCITY*deltaTime, 0));
		}

		if (offY >= this.screenLimits.y) {
			this.velocity.y = -this.VELOCITY * deltaTime;
			// this.velocity.substractVector(new Vector2(0,this.VELOCITY*deltaTime));
		} else if (this.position.y <= 0 + radius) {
			this.velocity.y = this.VELOCITY * deltaTime;
			// this.velocity.addVector(new Vector2(0,this.VELOCITY*deltaTime));
		}

		console.log(`vX:${this.velocity.x} vY:${this.velocity.y}`);

		// 	for (let i = 0; i < this.poistions.length; i++) {
		// 		const pos = this.poistions[i];
		//         pos.addVector(this.velocities[i])
		// 		const offX = pos.x + radius;
		// 		const offY = pos.y + radius;
		//         const vX = Math.random() * 1.5;
		// 		const vY = Math.random() * 1.5;

		// 		if (offX >= this.screenLimits.x) {
		// 			this.velocities[i].x = -vX * deltaTime;
		// 		} else if (pos.x <= 0 + radius) {
		// 			this.velocities[i].x = vX * deltaTime;
		// 		}

		// 		if (offY >= this.screenLimits.y) {
		// 			this.velocities[i].y = -vY * deltaTime;
		// 		} else if (pos.y <= 0 + radius) {
		// 			this.velocities[i].y = vY * deltaTime;
		// 		}
		// 	}
	}
}
