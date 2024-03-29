// Sources
osc( frequency: 60.0, sync: 0.1, offset: 0.0 ) // offset = saturation
noise( scale: 10.0, offset: 0.1 )
gradient( speed: x )
shape( sides: 3.0, radius: 0.3, smoothing: 0.01)
voronoi( scale: 5, speed: 0.3, blending: 0.3 )


// Geometry
.kaleid( nSides: 4.0 )
.pixelate( x: 20.0, y: 20.0)
.repeat( repeatX: 3.0, repeatY: 3.0, offsetX: 0.0,  offsetY: 0.0)
.rotate( angle: 10.0, speed: 0.0 )
.scale( size: 1.5, xMult: 1.0, yMult: 1.0 )


// Modulators
.modulate( amount: 0.1 )
.modulateHue( amount: 1.0 )
.modulateKaleid( nSides: 4.0 )
.modulatePixelate( multiple: 10.0, offset: 3.0 )
.modulateRepeat( repeatX: 3.0, repeatY: 3.0, offsetX: 0.5, offsetY: 0.5 )
.modulateRotate( multiple: 1.0, offset: 0.0 )
.modulateScale( multiple: 1.0, offset: 1.0 )
.modulateScrollX( scrollX: 0.5, speed: 0.0 )
.modulateScrollY( scrollY: 0.5, speed: 0.0 )


// Operators
.add( texture, amount: 0.5 )
.blend( texture, amount: 0.5 )
.diff( texture )
.layer ( texture ) // overlay texture based on alpha value
.mask( texture, reps: 3.0, offset: 0.5 )
.mult( texture, amount: 1.0 ) // multiply images & blend w/ texture

// Colors
.brightness( amount: 0.4 )
.contrast( amount: 1.6 )
