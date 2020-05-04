

function cube(){
  this.x= 688;
  this.y= 20;
  this.w=69;
  this.h=69;
  this.fr = 3
  this.update  = function(){
    
    if(this.y < 640){
      this.y += 34.5;
    }
    else if((this.y ==  640) ||(this.y > 640  )){{
      
      
      
      this.x =688;
      this.y=20;
      
    }
    }
  }
  this.show = function(){
    frameRate(fr)
    fill(255,0,0);
    rect(this.x,this.y,this.w,this.h)
    
    
  }
  
    
  
}

function shooter(){
  this.x=722;
  this.y=675;
  this.x2=770;
  this.y2 =710;
  this.x3= 673;
  this.y3=710
  this.fr2= 60
  
  
  this.update2 = function(){
    
  }
  this.show2 = function(){
    frameRate(this.fr2)
    fill(255,0,0)
    triangle(this.x,this.y,this.x2,this.y2,this.x3,this.y3)
  }
  
  
  
}

