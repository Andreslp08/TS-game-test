import GameObject from "./game-object";
import { Renderer } from "./interfaces/renderer";

export class DrawUtilities implements Renderer{

    private gameObject:GameObject;
    constructor(gameObject:GameObject){
        this.gameObject = gameObject;
    }

    

    draw(canvas: HTMLCanvasElement, deltaTime: number): void {
        throw new Error("Method not implemented.");
    }
    update(deltaTime: number): void {
        throw new Error("Method not implemented.");
    }

}