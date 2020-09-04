function Bar(x, y, width, height, ball) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ball = ball;

    this.rightPressed = false
    this.leftPressed = false;

    this.listenKeyPressed = function () {
        let _this = this
        window.addEventListener('keydown', function (event) {
            if (event.keyCode === 37) {
                _this.leftPressed = true;
            }

            if (event.keyCode === 39) {
                _this.rightPressed = true;
            }
        });
        window.addEventListener('keyup', function (event) {
            if (event.keyCode === 37) {
                _this.leftPressed = false;
            }

            if (event.keyCode === 39) {
                _this.rightPressed = false;
            }
        });
    }

    this.drawBar = function () {
        ctx.beginPath();
        ctx.fillStyle = "#5fbf00";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }

    this.moveBar = function () {
        if (this.leftPressed && this.x > 0) {
            this.x -= 5;
        }
        if (this.rightPressed && this.x + this.width < 500) {
            this.x += 5;
        }

    }

    this.collision = function () {
        let ballX = [this.ball.x - this.ball.radius, this.ball.x + this.ball.radius]; // [10, 20]
        let barX = [this.x, this.x + this.width]; // [50, 100]
        let isTouched = (ballX[1] > barX[0] && ballX[0] < barX[1]) && (this.ball.y + this.ball.radius === this.y);
        if (isTouched) {
            this.ball.dy = -(this.ball.dy);
            // score++;
            // document.getElementById('score').innerText = score;
        }
    }
}
