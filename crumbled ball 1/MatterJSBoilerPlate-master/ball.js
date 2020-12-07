class Ball{
constructor(x,y){
var Options={
restitution:0.5,
friction:0.8,
density:0.2
}
this.ball=Bodies.circle(x,y,20,Options)
World.add(world,this.ball)
}
 display(){
var pos=this.ball.position
ellipseMode(RADIUS)
ellipse(pos.x,pos.y,20)

 }
}