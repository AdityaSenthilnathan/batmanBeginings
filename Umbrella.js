class Umbrella{
    
        constructor(x,y){
          var options = {
           
            'friction':1,
            'density':10,
            'isStatic': true
        }
            this.x = 250;
            this.y = 490;
            this.body = Matter.Bodies.circle(this.x, this.y,90, options);
            World.add(world, this.body);
    
        }
    
        draw(){
           var sprite = createSprite(this.x,this.y - 50, 100, 100);

           sprite.addImage(img);
           sprite.scale = 0.05;
            //ellipse(this.x,this.y, 100, 100);

        }


}