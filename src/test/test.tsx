import GameObject from "../game/GameObject";
import Vector2 from "../game/math/Vector2";
import { Sprite } from "../game/Sprite";
import { Transform } from "../game/interfaces/transforms";
import { Renderer } from "../game/interfaces/renderer";
import { MathUtil } from "../game/math/MathUtil";

const radius = 40;
let escalar = 0.1;
let velocity:Vector2 = new Vector2(10,0);

export class GameTest implements Renderer {
	private canvas: HTMLCanvasElement;
	private sprite: Sprite;
	private gameObject:GameObject;

	constructor() {
		const transformTest: Transform = {
			position: new Vector2(0, 0),
			scale: new Vector2(255, 255),
			rotation: new Vector2(MathUtil.degToRad(90), 0),
		};
		this.gameObject = new GameObject(transformTest);
	}

	draw(canvas: HTMLCanvasElement, deltaTime: number): void {
		this.gameObject.draw(canvas, deltaTime);
	}

	
	update(deltaTime: number): void {
		this.gameObject.update(deltaTime)

		this.gameObject.position.addVector(velocity);
		this.gameObject.rotation.setDirection(MathUtil.degToRad(degrees) )
		degrees += 10
	}
}

let degrees = 0;
