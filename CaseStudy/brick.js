function Brick(x, y, width, height, ball, bar) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ball = ball;
    this.bar = bar;
    this.list = [];
    this.level = 1;

    this.touchedBricks = 0;
    this.row = 2;

    this.prepareBricks = function () {
        this.list = [];
        let row = this.row;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < 5; j++) {
                this.list.push({
                    x: this.x + j * (20 + this.width),
                    y: this.y + i * (10 + this.height),
                    isTouched: false
                })
            }
        }
    }

    this.prepareBricks();


    this.drawBrick = function () {
        for (let i = 0; i < this.list.length; i++) {
            let brick = this.list[i];
            if(!brick.isTouched) {
                // TODO: check isTouched = false thì vẽ, k thì bỏ qua
                ctx.beginPath();
                ctx.fillStyle = "azure";
                ctx.fillRect(brick.x, brick.y, this.width, this.height);
                ctx.fill();
            }
        }
    }

    this.isBrickBallTouched = function(brick) {
        if (!brick) return false
        let ballX = [this.ball.x - this.ball.radius, this.ball.x + this.ball.radius];
        let brickX = [brick.x, brick.x + this.width];
        let touched = (ballX[1] > brickX[0] && ballX[0] < brickX[1]) && (this.ball.y - this.ball.radius === brick.y + 10);

        return touched
    }

    this.collision = function () {
        // duyệt toàn bộ brick trong this.list và check va chạm của mỗi brick với ball
        for (let i =0; i< this.list.length; i++) {
            let brick = this.list[i];
            let prevBrick = this.list[i - 1]
            let nextBrick = this.list[i + 1]
            let isBrickTouched = this.isBrickBallTouched(brick)

            if (!brick.isTouched && isBrickTouched) {
                brick.color = '#ff0000'
                this.ball.dy = -this.ball.dy;
                brick.isTouched = true
                score++;
                document.getElementById('score').innerText = score;
                this.touchedBricks++;
            }
        }

        if (this.touchedBricks == this.list.length) {
            let row = this.row++;
            this.touchedBricks =0;
            this.bar.x = 200;
            // this.bar.x = 0;
            this.ball.x = 235;
            this.ball.y = 585;
            // this.ball.y = 200;
            this.ball.dy = this.ball.dy + 10;
            this.prepareBricks();
            this.drawBrick();
            this.level++;
            document.getElementById('level').innerText = + this.level;
        }

    }





}