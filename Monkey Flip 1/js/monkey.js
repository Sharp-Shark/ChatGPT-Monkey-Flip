class Monkey {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.rotation = 0;
    this.jumpStart = null;
    this.flipStart = null;
    this.angularVelocity = 0;
    this.jumping = false;
  }

  jump() {
    if (!this.jumping) {
      this.jumping = true;
      this.jumpStart = Date.now();
      this.vy = -Math.sqrt(2 * GRAVITY * (JUMP_HEIGHT + Math.random()*JUMP_HEIGHT_DEVIATION));
      this.jumpDuration = 2 * this.vy / GRAVITY;
      this.angularVelocity = ((FLIPS_PER_JUMP + Math.round(Math.random()*FLIPS_PER_JUMP_DEVIATION)) * PI2 / this.jumpDuration) * (1-2*Math.round(Math.random()));
    }
  }

  update() {
    const now = Date.now();


    if (this.jumping) {
		this.vy += GRAVITY;
		this.y += this.vy;
      const elapsed = (now - this.jumpStart) / 1000;
	  
        if (this.y + MONKEY_HEIGHT >= GROUND_HEIGHT) {
          this.y = GROUND_HEIGHT - MONKEY_HEIGHT;
          this.vy = 0;
          this.jumping = false;
          this.jumpStart = null;
          this.angularVelocity = 0;
          this.rotation = 0;
        } else {
          this.rotation += this.angularVelocity;
        }
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x + MONKEY_WIDTH / 2, this.y + MONKEY_HEIGHT / 2);
    ctx.rotate(this.rotation);
    ctx.drawImage(monkeyImage, -MONKEY_WIDTH / 2, -MONKEY_HEIGHT / 2, MONKEY_WIDTH, MONKEY_HEIGHT);
    ctx.restore();
  }
}
