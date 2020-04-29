

function cube(){
  this.x= 688;
  this.y= 20;
  this.w=69;
  this.h=69;
  this.history=[];
  this.update  = function(){
    
    if(this.y < 640){
      this.y += 34.5;
    }
    else if((this.y ==  640) ||(this.y > 640  )){{
      
      
      var v = createVector(this.x,this.y);
      this.history.push(v)
      this.x =688;
      this.y=20;
      
    }
    }
  }
  this.show = function(){
    fill(255,0,0);
    rect(this.x,this.y,this.w,this.h)
    
    
  }
  
    
  
}


function lShape(){
  this.x = 688;
  this.y2= 20;
  this.gravity = 0.1;
    
  
  
  this.show2 = function(){
    fill(0,255,0);
    beginShape()
    vertex(10,10);
    vertex(34.5,34.5)
    closeShape()
  }
  
  
}