// Load monkey image
const monkeyImage = new Image();
monkeyImage.src = 'monkey.jpg';

const canvas = new Canvas();
const ctx = canvas.canvas.getContext("2d");
const monkey = new Monkey(MONKEY_START_X, MONKEY_START_Y);

function update() {
  requestAnimationFrame(update);
  canvas.clear();

  canvas.drawGround();

  // Update monkey
  monkey.update();
  monkey.draw(ctx, monkeyImage);
  monkey.jump();
  
  ctx.font = '50px Arial';
  ctx.fillText('By ChatGPT and Sharp-Shark.', 10, 50);

  // Check for collision with ground
  if (monkey.y + MONKEY_HEIGHT >= GROUND_HEIGHT) {
    monkey.y = GROUND_HEIGHT - MONKEY_HEIGHT;
    monkey.jumpStart = null;
  }
}

requestAnimationFrame(update);
