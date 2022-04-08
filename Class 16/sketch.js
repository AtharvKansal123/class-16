var box1,box2;


function setup() {
  createCanvas(600, 400);
  box1 = new Box();
  box2 = new Box();
  
}

function draw() {
  background(220);
  box1.set_width(5);
  box1.show();
  box1.set_speed(5);
  box1.color_box("blue");
  console.log(box1.x);


  box2.show();
  box2.set_speed(1);
  box2.color_box("red");
}

