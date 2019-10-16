// to have 4 renders
s0.initCam()
osc(20, 0.2, 0.5).kaleid().out()
//
src(s0).out(o1)
//
src(o1)
  .modulate(o0, 0.1)
  .out(o2)
//
osc(20)
  .diff(s0)
  .mult(osc(10, 0.5, 0.5))
  .modulate(osc(10)
  .rotate(0,0.2))
  .out(o3)


// voronoi shapes
// fireflies
voronoi(25,2,10).color(1,1,0).brightness(0.15).out(o0)

osc(20, 0.2, 0.5)
.kaleid()
.rotate( -1.0, 1) // this rotates the shape
.pixelate( 20.0, 100 )
// // .kaleid(100)
// .rotate(1.0, 0.2)
// .scale(2)
// .repeatX(6, 4)
// // .modulate(o0, () => mouse.x * 30.34444)
// // .modulate(o0)
// .repeatY(6, 5)
// // .kaleid(60.0)
// .rotate(-1,  0.5)
.out()
