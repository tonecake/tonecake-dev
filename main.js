// JavaScript Document

function setup()
{
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw()
{
    var g = new Object();
    g.width = window.innerWidth;
    g.height = window.innerHeight;

    colorMode(HSB, 100);

    background(50, 0, 10);

    fill(mouseX / 30 - 6, 68, 50);
    rect(0, 0, g.width, g.height / 4 );

    fill(mouseX / 30 - 2, 68, 50);
    rect(0, g.height / 4, g.width, g.height / 4 );

    fill(mouseX / 30 + 2, 68, 50);
    rect(0, g.height / 4 * 2, g.width, g.height / 4 );

    fill(mouseX / 30 + 6, 68, 50);
    rect(0, g.height / 4 * 3, g.width, g.height / 4 );

    c = color(mouseY/4, 55, 100);
    fill(c);
    ellipse(mouseX, mouseY, 11, 11);
}
