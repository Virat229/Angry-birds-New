class Wood2 extends BaseClass{
    constructor(x,y,width,height,angle)
{
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    Matter.Body.setAngle(this.body,angle);
  
}
}