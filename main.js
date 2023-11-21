noseX = 0;
noseY = 0;

function cambiarFondo(temporal) {
    var miDiv = document.getElementById("header");

    // Cambia el fondo del div al hacer clic en el botón
    if (temporal) {
        miDiv.style.backgroundColor = "lightcoral";
    } else {
        // Al soltar el botón, vuelve al fondo original
        miDiv.style.backgroundColor = "lightblue";
    }
}

function cambiarFondo1(temporal1)
{
    var miButton = document.getElementById("btn_");

    if(temporal1)
    {
        miButton.style.backgroundColor = "salmon";
    } 
    else {
        // Al soltar el botón, vuelve al fondo original
        miButton.style.backgroundColor = "salmon";
    }
}

function preload()
{
    clown_nose = loadImage("https://i.postimg.cc/L66RdYt3/Nose-Clown.png");
}

function setup()
{
    Canvas = createCanvas(500, 400);
    Canvas.center();

    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;

        console.log("La coordenada en X es:" + noseX + "La coordenada en Y es:" + noseY);
    }
}

function modelLoaded()
{
    console.log("PoseNet is initialized");
}

function draw()
{
    image(video, 0, 0, 500, 400);
    image(clown_nose, noseX, noseY, 30, 30)
}

function take_snap()
{
    save("SelfOut-Nose.png");
}

