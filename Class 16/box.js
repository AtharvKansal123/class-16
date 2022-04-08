class Box
  {
    constructor()
    {
      this.x =100;
      this.y = 200
      this.w = 50;
      this.h = 50;
      this.color = "white";
    }
    
    show()
    {
      rect(this.x,this.y,this.w,this.h)
    }
    
    //write function to set the width of the box
    set_width(width){
      this.w = width;

    }
    set_speed(v){
      this.x += v;
        
    }      
    color_box(color){
      this.color= color;
      fill(this.color);
     
    }

  }  
