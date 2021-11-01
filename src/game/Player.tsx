import { runInThisContext } from "vm";
import GameObject from "./GameObject";
import Vector2 from "./math/Vector2";

export default class Player extends GameObject {

    ctx: CanvasRenderingContext2D;
    position: Vector2;
    velocity: Vector2;
    aceleration:Vector2;
    size: Vector2;
    gravity: number = 9.8;
    mass: number = 10;
    mousePosition: Vector2;
    canvas: HTMLCanvasElement;
    horizontalDirection:number = 0;
    verticalDirection:number = 0;



    pressed:boolean = false;
    constructor(position: Vector2) {
        super();
        this.position = position;
        this.velocity = new Vector2(1, 1);
        this.aceleration = new Vector2(0,0);
        this.size = new Vector2(80, 80);
        this.mousePosition = new Vector2(0, 0);
        window.onmousemove = (e: MouseEvent) => {
            this.mousePosition.x = e.clientX;
            this.mousePosition.y = e.clientY;
        }
        let keys = {};
        this.keyManager = this.keyManager.bind(this)
    
        document.addEventListener('keydown',this.keyManager);
        document.addEventListener('keyup', this.keyManager);
    }

    keys:any = {}
    
    keyManager(event:KeyboardEvent) {
        let {key, type} = event;
        let keyPressed = type == "keydown";
        if(keyPressed){
            this.keys[key] = true;
            if ( this.keys['d']  ) {
                this.horizontalDirection = 1;
             }
             if ( this.keys['a']  ) {
                this.horizontalDirection = -1;
             }
             if ( this.keys['a'] && this.keys['d']  ) {
                this.horizontalDirection = 0;
             }
             if ( this.keys['s']  ) {
                this.verticalDirection = 1;
             }
             if ( this.keys['w']  ) {
                this.verticalDirection = -1;
             }
             if ( this.keys['w'] && this.keys['s']  ) {
                this.verticalDirection = 0;
             }
        }
        else {
            this.keys[key] = false;
            if ( this.keys['d'] == false ) {
                this.horizontalDirection = 0;
             }
             if ( this.keys['a'] == false ) {
                this.horizontalDirection = 0;
             }
             if ( this.keys['a'] == false  && this.keys['d'] ) {
                this.horizontalDirection = 1;
             }
             if ( this.keys['d'] == false  && this.keys['a'] ) {
                this.horizontalDirection = -1;
             }
             if ( this.keys['s'] == false ) {
                this.verticalDirection = 0;
             }
             if ( this.keys['w'] == false ) {
                this.verticalDirection = 0;
             }
             if ( this.keys['w'] == false  && this.keys['s'] ) {
                this.verticalDirection = 1;
             }
             if ( this.keys['s'] == false  && this.keys['w'] ) {
                this.verticalDirection = -1;
             }
        }

     

    }

    grades: number = 0;
    rotationVelocity: number = 0.0001;

    draw(canvas: HTMLCanvasElement, deltaTime: number): void {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.ctx.fillStyle = "black";
        // this.ctx.fillRect(0, 0, 100, 100);
        this.ctx.fillStyle = 'red';
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle = "red";
        this.ctx.translate((this.position.x + this.size.x), (this.position.y + this.size.y));
        this.ctx.rotate(this.rotationVelocity);
        this.ctx.beginPath();
        this.ctx.arc(0 ,0,this.size.x, 0, Math.PI * 2, true)
        this.ctx.fill();
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(-80 , -80 , this.size.x, this.size.y);
        this.ctx.restore();
    }



    usePower:boolean = true;

    update(deltaTime: number): void {

        if(this.horizontalDirection == 1 ){
            this.position.addVector(new Vector2(this.velocity.x * deltaTime, 0));
        }
        if(this.horizontalDirection == -1){
      
            this.position.addVector(new Vector2(-this.velocity.x * deltaTime, 0))
        }
        if(this.verticalDirection == 1 ){
            this.position.addVector(new Vector2(0, this.velocity.y * deltaTime));
        }
        if(this.verticalDirection == -1){
            this.position.addVector(new Vector2(0,-this.velocity.y * deltaTime));
        }
        // if(this.verticalDirection == 1){
        //     this.velocity.addVector(new Vector2(0,0.05));
        // }
        // if(this.verticalDirection == -1){
        //     this.velocity.substractVector(new Vector2(0,0.05));
        // }
        // this.rotationVelocity += 0.1;
        // if(this.canvas){
        //     if(this.position.y >= this.canvas.clientTop +this.canvas.height - this.size.y*4){
        //         console.log("hola")
        //         this.velocity.substractVector(new Vector2(0,0.5));
        //     }else{
        //         this.velocity.addVector(new Vector2(0,0.5));
        //     }
        // }
        
    }



}