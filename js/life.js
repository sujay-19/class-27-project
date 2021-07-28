class Life{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
          };
      
          this.body = Bodies.rectangle(x, y, width, height, options);
      
          this.width = width;
          this.height = height;
          this.life1="green"
          this.life2="green"
          this.life3="green"
      
      
          World.add(world, this.body)
    }

    life22() {
      push();
      textSize(20);
      fill("white");
      text("player",width-1000,40)
      fill(this.life1);
      rect(180,50,70,30);
      fill(this.life2);
      rect(250,50,70,30)
      fill(this.life3);
      rect(320,50,70,30)
      pop()
    }
    life() { push(); textSize(20); fill("white"); text("Computer", width - 310, 40); fill(this.life1); rect(width - 420, 50, 70, 30); fill(this.life2); rect(width - 350, 50, 70, 30); fill(this.life3); rect(width - 280, 50, 70, 30); pop(); }

}