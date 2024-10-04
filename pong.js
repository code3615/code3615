const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

// Ball object
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    velocityX: 5,
    velocityY: 5,
    speed: 7,
    color: 'WHITE'
};

// Draw Ball
function drawBall(x, y) {
    context.fillStyle = ball.color;
    context.beginPath();
    context.arc(x, y, ball.radius, 0, Math.PI*2, false);
    context.closePath();
    context.fill();
}

// Update function, the main function
function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall(ball.x, ball.y);
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    if(ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0){
        ball.velocityY = -ball.velocityY;
    }

    if(ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0){
        ball.velocityX = -ball.velocityX;
    }
}

// Game loop
function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
}

gameLoop();
