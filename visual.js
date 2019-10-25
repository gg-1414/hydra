//
//  // Type some code on a new line (such as "osc().out()"), and press CTRL+shift+enter
// // a.show()
// // //SOUND
// // // //
// // a.setScale (100)
// // a.setBins (7)
// // //
// // a.settings[0].cutoff = 1
// // a.settings[1].cutoff = 2
// // a.settings[2].cutoff = 4
// // a.settings[1].cutoff = 6
// // a.settings[4].cutoff = 8
// // a.settings[5].cutoff = 9
//
// // s0.initCam()
// // osc(20, 0.2, 0.5).kaleid().out()
// // src(s0).out(o1)
// // src(o1).modulate(o0, 0.1).out(o2)
// // osc(20).diff(s0).mult(osc(10, 0.5, 0.5)).modulate(osc(10).rotate(0,0.2)).out(o3)


noise(20, 0.00)
.kaleid(8)
.rotate(2.0, (({time}) => Math.sin(time * 0.005)* 0.1))
.color(() => mouse.x * 0.01,0.5,)() => mouse.x * 0.01)
.modulateRepeat(osc(90))
.out()

osc(50, 0.1, 10.5)
.pixelate(20, 20)
.modulateKaleid(o0, 8)
.scale( ( ({time}) => Math.sin(time * 0.6) ))
.color(0.8, 0.3, 0.8)
.out(o1)

voronoi(25, 0.3, 0.7)
.modulateScrollX(o0)
// .color( 0.5, 0.2, 0.6)
.pixelate(20, 20)
.contrast( ({time}) => Math.sin(time * 0.5) * 0.5)
.out(o0)

render(o1)

shape(3, 0.3, 0.3)
.modulateScale(osc(50), 2.0, 0.2)
.color( (({time}) => Math.sin(time * 0.5)), 0.5, 0.5 )
.modulatePixelate(o1, 10, 3.0)
.out(o1)
