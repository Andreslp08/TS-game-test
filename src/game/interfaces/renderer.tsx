export interface Renderer{
     draw(canvas:HTMLCanvasElement,deltaTime:number ):void;
     update(deltaTime:number):void;
}