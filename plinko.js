class Plinko {
    constructor(x,y){ 
        var prop = {  
            isStatic:true,
            friction:6.5,
            density:1.2
        }             
        this.body = Bodies.circle(x,y,14,prop);
        this.width = 45;
        this.height = 45;
        this.image = loadImage("plinkos.png");
                      
        World.add(world,this.body);
    }                 
    display(){           
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
                      
    }                 
}                    
     