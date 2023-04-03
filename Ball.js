class Ball{
    constructor(x,y,r) {
        
        var ball_options={
            restitution:0.01
          }
        
          this.body=Bodies.circle(50,50,20,ball_options)
          World.add(world,this.body)

          this.image = loadImage('/Images/ball.png')
        }

    show() {
        
        
       push()
       imageMode(CENTER)
       image (this.image,this.body.position.x, this.body.position.y, 50,50)
       pop()
    }


    
}