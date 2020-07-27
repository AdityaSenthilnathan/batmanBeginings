class Drops {
    constructor( y){
        var options = {
            //'restitution':0.8,
            'friction':.1,
            'density':.05,
            'isStatic': false
        }
        var rand = random(1,500);
        this.x = rand;
        this.y = - random(1,500);

        this.body = Matter.Bodies.circle(this.x, this.y,5,options);
        World.add(world, this.body);
    }

    update(){

        if (this.body.position.y  >= 500){
            var rand = random(1,500);

            Matter.Body.setPosition(this.body,{x:random(1,500), y: 0});
            /*this.body.position.x = rand;
            this.body.position.y = -random(1,500);*/

        }
    }

    draw(){
        this.x = this.body.position.x;
        this.y = this.body.position.y; 
        ellipse(this.body.position.x,this.body.position.y, 5, 5);

    }









}