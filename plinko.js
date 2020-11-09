class Plinko {
    constructor(x,y,radius) {
        
        isStatic:true;

        this.radius=10;
        this.body=Bodies.circle(x,x,radius,options);
       
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0, this.radius, this.radius);
        pop();
    }
};