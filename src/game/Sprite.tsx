
import { Renderer } from "./interfaces/renderer";
import Vector2 from "./math/Vector2";
import imgtest from "./assets/defaultSprite.png";
import { Transform } from "./interfaces/transforms";

export class Sprite implements Renderer {
	private image: HTMLImageElement;
	private imagePath: string;
	private originalImgSize: Vector2;
	private defaultImgPath: string = imgtest;
	private spritePosition: Vector2;
	private spriteSize: Vector2;
    private transform:Transform;
	constructor(
		imagePath: string,
		spritePosition: Vector2,
		spriteSize: Vector2,
		 transform: Transform
	) {
		this.image = new Image();
		this.imagePath = imagePath;
		this.spritePosition = spritePosition || new Vector2(0, 0);
		this.spriteSize = spriteSize || new Vector2(100, 100);
        this.transform = transform;
		if (!this.imagePath) {
			this.image.src = this.defaultImgPath;
		} else {
			this.image.src = this.imagePath;
		}
        
	}
  

	draw(canvas: HTMLCanvasElement, deltaTime: number): void {
		const ctx = canvas.getContext("2d");
        ctx.save();

        ctx.translate(
            (this.transform.position.x+this.transform.scale.x)/2,
            (this.transform.position.y+this.transform.scale.y)/2,
            )
        ctx.rotate(this.transform.rotation.x);
        deg += 1;
		ctx.drawImage(
			this.image,
			this.spritePosition.x,
			this.spritePosition.y,
			this.image.width,
			this.image.height,
            -this.transform.scale.x/2,
            -this.transform.scale.y/2,
			this.transform.scale.x,
			this.transform.scale.y
		);
      
        ctx.restore();
	}

	update(deltaTime: number): void {
        console.log(`sprite: ${this.transform.position.x}`)
    }
}

let deg = 0;