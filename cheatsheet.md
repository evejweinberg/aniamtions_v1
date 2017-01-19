###Ways of adding css using javascript (not jQuery!)




###Understanding svg inline viewport

ref: https://sarasoueidan.com/blog/svg-coordinate-systems/

viewport, viewBox, and preserveAspectRatio

when you declare the svg canvas `<svg></svg>` you define it's viewport
`<svg width="100%" height="600px"></svg>`


viewBox = <min-x> <min-y> <width> <height>
defines which pixels to draw, but then it fits those pixels inside the viewport
you almost always want it to draw all the pixels


##apply transformations to the path object itself:
<g id="parrot" transform="rotate(45 50 50)" x="0" y="0">

`<g id="parrot" transform="translate(150 170) rotate(45) translate(-150 -170)">  `
rotate(deg, rotationCenterX, rotationCenterY)
