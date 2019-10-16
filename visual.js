
 // Type some code on a new line (such as "osc().out()"), and press CTRL+shift+enter
// a.show()
// //SOUND
// // //
// a.setScale (100)
// a.setBins (7)
// //
// a.settings[0].cutoff = 1
// a.settings[1].cutoff = 2
// a.settings[2].cutoff = 4
// a.settings[1].cutoff = 6
// a.settings[4].cutoff = 8
// a.settings[5].cutoff = 9

// s0.initCam()
// osc(20, 0.2, 0.5).kaleid().out()
// src(s0).out(o1)
// src(o1).modulate(o0, 0.1).out(o2)
// osc(20).diff(s0).mult(osc(10, 0.5, 0.5)).modulate(osc(10).rotate(0,0.2)).out(o3)



// osc(20, 0.3, 0.5)
// .
// .out()

noise().out()

gradient( 3 )
// .color( 1,0,1  ) // 1,1,0 1,0,0 1,0,1 => no blinking, illuminating red to purple/blue
// .color( [1,0,0], [1,1,1], [0,0,1] ) // 1,1,0 1,0,0 1,0,1 => blinking red -> blue
contrast( ({time}) => Math.sin(time * 0.5) * 5 )
// .brightness( 1.2 )
// .modulatePixelate(osc(50), 10.0, 3.0)
// .mult( o0, 0.1 )
.kaleid( 6 )
// .repeat( 3.0, 3.0, 1.1, 0.0 )
// .rotate( 2, 0.09 )
.out()

render(o1)



// noise()
//   .mult(osc(10,0.25,1))
//   .scrollY(1,0.25)
//   .pixelate([100,40,20,70].fast(0.25))
//   .modulateRotate(src(o0).scale(0.5),0.125)
//   .diff(src(o0).rotate([-0.05,0.05].fast(0.125)))
//   .out(o0)
