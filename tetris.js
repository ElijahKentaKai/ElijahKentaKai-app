

function cube(){
  this.x= 688;
  this.y= 20;
  this.w=69;
  this.h=69;
  this.gravity = 0.1;
  this.velocity = 0;
  
  this.show = function(){
    fill(255,0,0);
    rect(this.x,this.y,this.w,this.h)
    
  }
  this.update  = function(){
    if(this.y < 621){
      this.y += 34.5;
    }
    else{
      return;
    }
  }
    
  
}