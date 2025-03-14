let canvas = document.querySelector("#background-animation");
let ctx = canvas.getContext('2d');
let sinceLastMoveGlobal= Date.now();
let transparencyIndex = 1.0;
const colorArrGlobal = ["green", "yellow", "orange"];

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  
function radian(deg)
{
    return (deg * Math.PI / 180);
}

function makeCanvasFullscreen()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

makeCanvasFullscreen();

window.addEventListener('resize', () => {
    makeCanvasFullscreen();
});

function clearCanvas()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

let maxPnChange = 15;

class Circle {
    constructor(r, thickness) {
        this.r = r;
        this.thickness = thickness;
        this.points = [];
        this.makePoints();
    }

    makePoints()
    {
        this.points = [];

        for(let i = 0;i < 360;i += 0.5)
        {
            let deg = radian(i);
            let xChange = Math.sin(deg) * this.r;
            let yChange = Math.cos(deg) * this.r;

            this.points.push({
                deg: deg,
                r: this.r,
                xChange: xChange,
                yChange: yChange,
                xPn: 0,
                yPn: 0,
                mouse: {
                    x: 0,
                    y: 0
                },
            });
        }

        return this.points;
    }

    updatePoints(rotate = 0.06)
    {
        this.points.forEach((point, index) => {
            point.deg += rotate;

            point.xChange = Math.sin(point.deg) * point.r;
            point.yChange = Math.cos(point.deg) * point.r;

            point.xPn += Math.random() * 2 - 1;
            point.yPn += Math.random() * 2 - 1;

            point.xPn = Math.max(Math.min(point.xPn, maxPnChange), -maxPnChange);
            point.yPn = Math.max(Math.min(point.yPn, maxPnChange), -maxPnChange);

            this.points[index] = point;
        });
    }

    draw(colorArr = ['white'], transparency)
    {
        clearCanvas();

        this.points.forEach((point) => {
            ctx.beginPath();
            ctx.fillStyle = colorArr[randomIntFromInterval(0,colorArr.length-1)];
            ctx.globalAlpha = transparency;
            let x = point.mouse.x + point.xChange + point.xPn;
            let y = point.mouse.y + point.yChange + point.yPn;
            ctx.arc(x, y, this.thickness, 2 * Math.PI, false);
            ctx.fill();
            ctx.closePath();
        });
    }
}

shape = new Circle(20, 1.0);

document.body.onmousemove = (e) => {
    let mouse = {
        x: e.clientX,
        y: e.clientY
    };
    console.log("hello")

    shape.points.forEach((point, index) => {
        setTimeout(() => {
            shape.points[index].mouse = mouse;
        }, (point.yPn + point.xPn + maxPnChange * 2) * 10);
    });
    sinceLastMoveGlobal = Date.now();
};

setInterval(() => {
    if (Date.now() - sinceLastMoveGlobal <= 100) {
        transparencyIndex = 1.0;
    } else if (transparencyIndex > 0) {
        transparencyIndex -= 0.01
    }
    shape.draw(colorArrGlobal, transparencyIndex);
        shape.updatePoints();
}, 20);