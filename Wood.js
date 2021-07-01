class Wood extends  BaseClass{
  constructor(x, y, width, height,angle) {
    super(x,y,width,height);
    this.image = loadImage("sprites/boss-removebg-preview.png");
    Matter.Body.setAngle(this.body,angle);
  }
}

