export default class Vector2{

    public x = 0;
    public y = 0;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }
    
    public static add(vectorOne:Vector2, vectorTwo:Vector2):Vector2{
        return new Vector2(
            vectorOne.x + vectorTwo.x,
            vectorOne.y + vectorTwo.y
        )
    }

    public static substract(vectorOne:Vector2, vectorTwo:Vector2):Vector2{
        return new Vector2(
            vectorOne.x - vectorTwo.x,
            vectorOne.y - vectorTwo.y
        )
    }

    public equalTo(vector:Vector2):boolean{
        if(vector.x === this.x && vector.y === this.y){
            return true;
        }
        return false;
    }

    public addVector(vector:Vector2):void{
            this.x = this.x + vector.x;
            this.y = this.y + vector.y;
    }



    public substractVector(vector:Vector2):void{
            this.x = this.x - vector.x;
            this.y = this.y - vector.y;
    }

    public multiplyVector(vector:Vector2):void{
        this.x = this.x * vector.x;
        this.y = this.y * vector.y;
    }

    public divideVector(vector:Vector2):void{
        this.x = this.x / vector.x;
        this.y = this.y / vector.y;
    }


    public multiplyByEscalar(escalar:number):void{
        this.x = this.x * escalar;
        this.y = this.y * escalar;
    }

    public divideByEscalar(escalar:number):void{
        this.x = this.x / escalar;
        this.y = this.y / escalar;
    }

    public getMagnitude():number{
        const x = this.x;
        const y = this.y;
        return Math.sqrt(x*x + y*y);
    }

    public normalize():void{
        if(this.getMagnitude() > 0){
            const m = this.getMagnitude();
            this.x = this.x/m;
            this.y = this.y/m;
        }
    }



}