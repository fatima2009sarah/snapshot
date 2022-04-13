noseX = 0;
noseY = 0;

moustacheX = 0;
moustacheY = 0;

lipsX = 0;
lipsY = 0;

function preload(){
    moustache = loadImage("https://i.postimg.cc/1X4yZd6s/moustache.png");
    lips = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup(){
   canvas = createCanvas(300 , 300);
   canvas.center();

   video = createCapture(VIDEO);
   video.size(300 , 300);
   video.hide();

   poseNet = ml5.poseNet(video , modelLoded);
   poseNet.on('pose', gotPoses); 
}

function modelLoded(){
   console.log("poseNet is initialize");
}

function draw(){
   image(video , 0 , 0 , 300 , 300);
   image(moustache , moustacheX , moustacheY , 130 , 40);
   image(lips , lipsX , lipsY , 90 , 40);
}

function gotPoses(results){
    if (results.length > 0){
       console.log(results);

       noseX = results[0].pose.nose.x - 20;
       noseY = results[0].pose.nose.y - 20;

       moustacheX = results[0].pose.nose.x  - 60;
       moustacheY = results[0].pose.nose.y + 5;

       lipsX = results[0].pose.nose.x - 40 ;
       lipsY = results[0].pose.nose.y + 30;

       console.log("nose X = " + noseX);
       console.log("nose Y = " + noseY);
    }
}

