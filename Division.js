class Divisions{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,15,h,options);
        this.w = w;
        this.h = h;
        this.image = loadImage("division.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w,this.h);
    }
}