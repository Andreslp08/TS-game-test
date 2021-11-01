export class FrameManager{
     maxFps:number=10;
     fps:number=0;
     previousFrame:number = 0;
    private static instance:FrameManager;

    public static getInstance():FrameManager{
        if(!FrameManager.instance){
            return new FrameManager();
        }
        else{
            return FrameManager.instance;
        }
    }
}