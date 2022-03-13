function setup()
{

c1=createCanvas(450,300)
c1.center();
v1=createCapture(VIDEO);
v1.hide();

}

function draw()
{

image(v1,0,0,450,300)
tint(shade);

}

function takephoto()
{

    save ("filter.jpg")

}

shade=""

function colorfilter()
{

shade=document.getElementById("filtercolor").value;

}