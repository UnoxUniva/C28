class  Slingshot{
constructor(body1,point2){
    var options= {
        bodyA : body1,
        pointB : point2,
        stiffness:0.2,
        length: 10

        
    }
    this.sling=Constraint.create(options)
    

    World.add(world,this.sling)
}
display(){
  
    if(this.sling.bodyA){
        var firstpos = this.sling.bodyA.position;
        var secpos = this.sling.pointB;
     
         line(firstpos.x,firstpos.y,secpos.x,secpos.y)
     
    }
}
fly(){
    this.sling.bodyA=null
}
}