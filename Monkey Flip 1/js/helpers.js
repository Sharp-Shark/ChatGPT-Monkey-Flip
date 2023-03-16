// Calculate distance between two points
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// Apply easing to a value
function ease(value, target, easingFactor) {
  return value + (target - value) / easingFactor;
}

// Clamp a value between two bounds
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function checkCollisions(monkey) {
  if (monkey.y + MONKEY_HEIGHT > CANVAS_HEIGHT - GROUND_HEIGHT) {
    monkey.y = CANVAS_HEIGHT - GROUND_HEIGHT - MONKEY_HEIGHT;
    monkey.jumpStart = null;
    monkey.vy = 0;
  }
}
