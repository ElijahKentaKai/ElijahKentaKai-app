

function cube(){
  this.x= random(343,1000);
  this.y= 20;
  this.w=69;
  this.h=69;
  this.update  = function(){
    
    if(this.y < 640){
      this.y += 2;
    }
    else if((this.y ==  640) ||(this.y > 640  )){
      
      
      
      
    }
  }
  this.show = function(){
    
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
  this.bullet =this.y
  this.xc = this.x
  this.gravity = 0.001
  this.lift=-20
  this.velo=0
  
  this.update2 = function(){
    
  }
  this.show2 = function(){
    fill(255,0,0)
    triangle(this.x,this.y,this.x2,this.y2,this.x3,this.y3)
  }
  
  
  this.shoot = function(){
    
    fill(0,0,0)
    circle(this.xc,this.bullet,10)
  }

  this.up = function(){
    this.velo += this.lift
    
  }
  this.update3 = function(){
    this.velo += this.gravity;
    this.bullet += this.velo;
    if(this.bullet>675){
      this.bullet = 675
    }
    if(this.bullet <20){
      this.bullet = 675;
      this.velo = 0
      this.xc =this.x
    }
    
  }
  
}


  
  
  
  
  
  
  

