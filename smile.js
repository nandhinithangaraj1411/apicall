class Smile extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("nandhini.png");
  }
  display(){
    push ();
    super.display();
    pop ();
  }
  
}
