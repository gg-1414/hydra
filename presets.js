// color sequence of Red, Green, Blue, White, Black
osc(20).color([1,0,0,1,0],[0,1,0,1,0],[0,0,1,1,0]).out(o0)

// colorful spiral
gradient(1)
.color()
.brightness( 0.5 )
.rotate( 1, 1, 1, 1 )
.pixelate( 20, 20 )
.out(o0)

// crush - yuna
osc(20, 0.05, 0.3)
// .color(1,0,1)
.contrast( ({time}) => Math.sin(time * 0.5) * 5 )
.out(o0)

noise().out()

// noisy bubbles
gradient( 0.05 )
// .modulateRepeat(osc(5), 3.0, 3.0, 0.1, 0.1)
.modulateRepeat(o0, 15.0, 0.0, 1, 0.1)
.mult( o0, 0.9 )
// .kaleid( 4 )
.out(o1)

render(o1)
