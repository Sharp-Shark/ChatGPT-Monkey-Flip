class Canvas {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width = CANVAS_WIDTH;
    this.height = this.canvas.height = CANVAS_HEIGHT;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  drawGround() {
    this.ctx.beginPath();
    this.ctx.moveTo(0, GROUND_HEIGHT);
    this.ctx.lineTo(CANVAS_WIDTH, GROUND_HEIGHT);
    this.ctx.strokeStyle = 'green';
    this.ctx.stroke();
  }
}
