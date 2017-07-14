import {Component, OnInit, ViewChild, ElementRef, HostListener} from '@angular/core';

@Component({
  selector: 'dvm-background-canva',
  template: `<canvas #canvas width="1000" height="400" style="border:1px solid #000000;">
        Your browser does not support the HTML5 canvas tag.
   </canvas>`,
  styleUrls: ['./background-canva.component.scss']
})
export class BackgroundCanvaComponent implements OnInit {

  private bcCtx: CanvasRenderingContext2D;

  @ViewChild('canvas') bc: ElementRef;

  constructor() {

  }

  drawLine(event, start) {
    console.log(start, event);
    if (start) {
      this.bcCtx.beginPath();
      this.bcCtx.lineWidth=5;
      this.bcCtx.shadowColor = 'black';
      this.bcCtx.shadowBlur = 10;
      this.bcCtx.strokeStyle="green"; // Green path
      this.bcCtx.fillRect(10,10,1,1);
      this.bcCtx.moveTo(event.layerX, event.layerY);
    }
    this.bcCtx.lineTo(event.layerX, event.layerY);
    this.bcCtx.fillStyle = "rgba(60,30,50,0.2)";
    // this.bcCtx.moveTo(event.clientX, event.clientY);
    this.bcCtx.stroke();
  }

  fadeOut() {
  // this.bcCtx.fillStyle = "rgba(255,255,255,0.1)";
  //
  // setTimeout(this.fadeOut,200);
}


  ngOnInit() {
    this.fadeOut();

  }

  ngAfterViewInit() {
    this.bcCtx = this.bc.nativeElement.getContext("2d");
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    this.drawLine(event, false);
  }

  @HostListener('mouseenter', ['$event'])
  onMouseenter(event: MouseEvent) {
    this.drawLine(event, true);
  }


}
