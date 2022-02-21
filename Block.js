class Block extends BaseClass{
    constructor(x,y,width, height){
      super(x,y,width,height);
      this.visibility = 255
    }

    display(){
      var pos =this.body.position;

      if(this.body.speed < 2){
        super.display();
    }
      else{
        World.remove(world, this.body);

        push();
        this.visibility = this.visibility - 5;
        tint(255, this.visibility);
       // rect(pos.x, pos.y, 30, 40);
        pop();

    }
    };
  };

