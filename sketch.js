var dev,database;

function setup() {

  createCanvas(windowWidth,windowHeight);
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    
    dev = "mobile";
  }else{

    dev = "pc";
  }
}

function draw() {

  background(0);
  database = firebase.database();

  if (dev==="mobile") {
    
    var u,l,d,r,xref,yref;

    xref = database.ref('x');
    xref.on("value",(data) => {x = data.val();});

    yref = database.ref('y');
    yref.on("value",(data) => {y = data.val();});

    u = createButton("Up"); 
    u.size(width/4,height/4);
    u.position((width/2)-(u.width/2),(height/4)-(u.height/2));
    u.style('font-size',30px);

    d = createButton("Down"); 
    d.size(width/4,height/4);
    d.position((width/2)-(d.width/2),(height/4*3)-(d.height/2));
    d.style('font-size',30px);

    l = createButton("Left"); 
    l.size(width/4,height/4);
    l.position((width/4)-(l.width/2),(height/2)-(l.height/2));
    l.style('font-size',30px);

    r = createButton("Right"); 
    r.size(width/4,height/4);
    r.position((width/4*3)-(r.width/2),(height/2)-(r.height/2));
    r.style('font-size',30px);

      u.mousePressed(() => {

        y -= 10;

        database.ref('/').update({

          y: y
        });
      });
      d.mousePressed(() => {

        y += 10;
        
        database.ref('/').update({

          y: y
        });
      });
      r.mousePressed(() => {

        x += 10;

        database.ref('/').update({
  
          x: x
        });
      });

      l.mousePressed(() => {

        x -= 10;

        database.ref('/').update({
  
          x: x
        });
      });

  }else {
   
    var x = -500,y = 0,xref,yref;

    xref = database.ref('x');
    xref.on("value",(data) => {x = data.val();});

    yref = database.ref('y');
    yref.on("value",(data) => {y = data.val();});

    fill("red");
    rectMode(CENTER);
    rect(x,y,100,100);
  }
}
