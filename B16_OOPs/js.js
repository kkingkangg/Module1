function Ball(x, y, radius, canvas, diameter) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.canvas = canvas;


    this.drawBall = function (){
        ctx = this.canvas.getContext('2d');
        ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        ctx.beginPath();
        ctx.fillStyle = "#ff0000";
        ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        ctx.fill();
    }

    this.dx = 4;
    this.dy = 4;
    this.moveBall = function () {
        this.x += this.dx;
        this.y += this.dy;
    }

    this.random = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) +min);
    }

    this.collision = function () {
        if (this.x + this.dx > this.canvas.width - this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }

        if (this.y + this.dy < this.radius) {
            this.dy = -this.dy;
        }
        if (this.y + this.dy > this.canvas.height - this.radius) {
            this.dy = -this.dy;
        }
    }
}

