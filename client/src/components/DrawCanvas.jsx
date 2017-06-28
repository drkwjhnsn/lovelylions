import React from 'react';


class DrawCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.width = 900;
    this.height = 450;
    this.drawingPoints = [];
    this.isDrawing = false;
    this.scrollLeft = 0;
    this.scrollTop = 0;
  }

  onEraserClick() {
    this.context.globalCompositeOperation = 'destination-out';
  }

  onDrawClick() {
    this.context.globalCompositeOperation = 'source-over';
  }

  startDraw(event) {
    this.isDrawing = true;
    this.addToDrawingEvents(event.clientX - this.offsetLeft + this.scrollLeft, event.clientY - this.offsetTop + this.scrollTop, true);
    this.redraw();
  }

  endDraw(event) {
    this.isDrawing = false;
    this.drawingPoints = [];
    if (this.context.globalCompositeOperation === 'source-over') {
      this.context.drawImage(this.canvas, 0, 0);
    }
  }

  drawing(event) {
    if (this.isDrawing) {
      this.addToDrawingEvents(event.clientX - this.offsetLeft + this.scrollLeft, event.clientY - this.offsetTop + this.scrollTop, true);
      this.redraw();
    }
  }

  addToDrawingEvents(x, y, drag) {
    this.drawingPoints.push({x: x, y: y, drag: drag})
  }

  redraw() {
    for (var i = 0; i < this.drawingPoints.length; i++) {
      this.context.beginPath();
      this.context.strokeStyle = "#000000";
      this.context.lineJoin = 'round';
      this.context.lineWidth = 7;

      if (this.drawingPoints[i].drag && i) {
        this.context.moveTo(this.drawingPoints[i - 1].x, this.drawingPoints[i - 1].y);
      } else {
        this.context.moveTo(this.drawingPoints[i].x, this.drawingPoints[i].y);
      }
      this.context.lineTo(this.drawingPoints[i].x, this.drawingPoints[i].y);
      this.context.closePath();
    }
    this.context.stroke();
  }

  clearCanvas(event) {
    this.context.clearRect(0, 0, this.width, this.height);
    this.drawingPoints = [];
    this.context.save();
  }

  componentDidMount() {
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');
    this.offsetLeft = this.canvas.offsetLeft;
    this.offsetTop = this.canvas.offsetTop;
    window.onresize = (event => {
      this.offsetLeft = this.canvas.offsetLeft;
      this.offsetTop = this.canvas.offsetTop;
    }).bind(this);
    document.addEventListener('scroll', (event) => {
      this.scrollLeft = document.body.scrollLeft;
      this.scrollTop = document.body.scrollTop;
    });
  }

  render () {
    return (
      <div className ="draw-canvas">
        <canvas onMouseLeave={this.endDraw.bind(this)}
          onMouseMove={this.drawing.bind(this)} onMouseDown={this.startDraw.bind(this)}
          onMouseUp={this.endDraw.bind(this)} id='canvas' width={this.width} height={this.height}>
        </canvas>
        <div className="button-cluster">
          <input onClick={this.onEraserClick.bind(this)} type="button" value="Eraser"></input>
          <input onClick={this.onDrawClick.bind(this)} type="button" value="Draw"></input>
          <input onClick={this.clearCanvas.bind(this)} type='button' value="Clear Canvas"></input>
        </div>
      </div>
      )
  }
}

export default DrawCanvas;
