import { Renderer } from "./interfaces/renderer";
import { Transform } from "./interfaces/transform";
import Vector2 from "./math/vector2";
import { Sprite } from "./sprite";
import img from "../game/assets/defaultSprite.png";

export default  class GameObject implements Renderer, Transform{

    position:Vector2;
    scale:Vector2;
    rotation: Vector2;
    private defaultSprite: Sprite;


    constructor(transform:Transform){
        this.position = transform.position || new Vector2(0,0);
        this.scale = transform.scale || new Vector2(50,50);
        this.rotation = transform.rotation || new Vector2(0,0);
        this.defaultSprite = new Sprite(img, new Vector2(0, 0), new Vector2(0, 0), this);
    }

    
    draw(canvas: HTMLCanvasElement, deltaTime: number): void {
        const ctx = canvas.getContext('2d');
        this.defaultSprite.draw(canvas, deltaTime)
    }

    update(deltaTime: number): void {
        this.defaultSprite.update(deltaTime)
    }

}