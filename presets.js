// color sequence of Red, Green, Blue, White, Black
osc(20).color([1,0,0,1,0],[0,1,0,1,0],[0,0,1,1,0]).out(o0)
//

// colorful spiral
gradient(1)
.color()
.brightness( 0.5 )
.rotate( 1, 1, 1, 1 )
.pixelate( 20, 20 )
.out(o0)
//

// crush - yuna
osc(20, 0.05, 0.3)
// .color(1,0,1)
.contrast( ({time}) => Math.sin(time * 0.5) * 5 )
.out(o0)

noise().out()
//

// noisy bubbles
gradient( 0.05 )
// .modulateRepeat(osc(5), 3.0, 3.0, 0.1, 0.1)
.modulateRepeat(o0, 15.0, 0.0, 1, 0.1)
.mult( o0, 0.9 )
// .kaleid( 4 )
.out(o1)

render(o1)
//


// trippy weird spiral thing
noise()
  .mult(osc(10,0.25,1))
  .scrollY(1,0.25)
  .pixelate([100,40,20,70].fast(0.25))
  .modulateRotate(src(o0).scale(0.5),0.125)
  .diff(src(o0).rotate([-0.05,0.05].fast(0.125)))
  .out(o0)
  //


// color warp
osc(20, 0.05, 0.3)
.color(5.0,2.5,0.9)
.modulateKaleid(osc(20), 1)
.contrast( ({time}) => Math.sin(time * 0.5) * 2 )
// .kaleid(4)
.out()
//

// hippy kaleid
osc(20, 0.05, 0.9)
.color(0.1,0.5,0.9)
.modulate(o0, 5)
.contrast( ({time}) => Math.sin(time * 0.5) * 2 )
.kaleid(8)
.out(o1)
//

// scaling time star
noise(10, 0.03).out() // noise (1, 0.03) is cool too

osc(0.5, 0.1, 0.7)
.color(0.5,0.1,1.5)
.modulate(o0, 9)
.brightness(0.001)
.modulateKaleid(osc(2), 4)
.kaleid(8)
.scale( ({time}) => Math.sin(time * 0.2) * 0.01)
.out(o1)

render(o1)
//
noise(1, 0.03).out()

osc(0.5, 0.1, 0.7)
.color(0.6,0.6,1.0)
.modulate(o0, 9)
.brightness(0.01)
.modulateKaleid(osc(5), 4)
.kaleid(8)
.scale( ({time}) => Math.sin(time * 0.3) * 0.01)
.out(o1)

render(o1)
//

// marble effect
gradient( 30 ).out(o0)
//
voronoi(2,0.9,( ({time}) => Math.sin(time * 2) ))
  .modulateScrollX(o1, 1.5, 0)
  .modulateHue(o0, 0.0)
  .modulateKaleid(osc(10), 4)
  .out(o1)
//
  render(o1)
//

// glitchy pixels
voronoi(25, 0.3, 0.7)
.modulateScrollX(o0)\
.pixelate(20, 20)
.contrast( ({time}) => Math.sin(time * 0.5) * 0.5)
.out(o0)
//
render(o1)
//
shape(3, 0.3, 0.3)
.modulateScale(osc(50), 2.0, 0.2)
.color( (({time}) => Math.sin(time * 0.5)), 0.5, 0.5 )
.modulatePixelate(o1, 10, 3.0)
.out(o1)
// 
