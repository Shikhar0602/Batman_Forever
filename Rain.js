class Rain {
    constructor(x) {
        var options = {
            'restitution':0,
            'friction':0,
            'density':10
        }
        this.body = Bodies.rectangle(x, random(0,20), 20, 40, options);
        this.width = 15;
        this.height = 30;
        this.image = loadImage("rain.png");
        World.add(world, this.body);
        Matter.Body.setVelocity(this.body, {x:0, y:random(10,30)});
      }
      display(){
        var angle = this.body.angle;
        push();
        if(this.body.position.y>850)
        {
          this.body.position.y = 800-this.body.position.y;
          Matter.Body.setVelocity(this.body, {x:0, y: random(10,30)})
        }
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}