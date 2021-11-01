export default abstract class GameObject{
    abstract draw(canvas:HTMLCanvasElement,deltaTime:number ):void;
    abstract update(deltaTime:number):void;
}