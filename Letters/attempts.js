function animateDrawOn(target, duration, px_height, stroke, color, offsetColorTime, bgColor){
  // target.className.style.width = height
  //get the target's innerHTML
  //go to a lookup table with switch cases and return the correct svg, with variables
  var letterArray = target.innerHTML.toUpperCase().split("")
  console.log(letterArray)
  var typetodraw = target.innerHTML.toUpperCase();
  var num = px_height.replace(/[^0-9]+/g, '')
  target.innerHTML = ''
  // var svgBody = "<svg version='1.1' x='0px' y='0px' viewbox='0 0 "+num+ " " +num+"'></svg>"
  // target.innerHTML += svgBody
  // target.querySelector('svg').appendChild(document.createElement('g'))
  // var fillG = target.querySelector('svg').querySelector('g')

  letterArray.forEach(function(element,i) {
    console.log('make an svg')
    var svgBody = "<svg version='1.1' x='0px' y='0px' viewbox='0 0 "+num+ " " +num+"' style='background-color: " + bgColor +"'></svg>"
    target.innerHTML += svgBody


  switch (element)
              {
                 case 'H':
                  console.log('add H')
                  target.querySelectorAll('svg')[i].innerHTML += "<g class='"+element+"'><path fill='none' stroke="+color+" stroke-width='"+stroke+"' d='M66 35v68.6h61.3V35h16.5v126.7h-16.5v-43.8H66v43.8H30.1V35H66z'/></g>";
                  Object.assign(target.querySelectorAll('svg')[i].style,{display: "inline-block", fontsize:"12px", width: px_height, height:px_height, left:"200px",top:"100px"});

                 break;

                 case 'B':
                   console.log('add B')
                 target.querySelectorAll('svg')[i].innerHTML +=  "<g class='"+element+"'><path fill='none' stroke="+color+" stroke-width='"+stroke+"' d='M48.8 160.8V34.1h29c8.5 0 15.2 0.7 20.3 2 5.1 1.3 9.4 3.5 12.9 6.6 3.6 3.2 6.4 7.2 8.4 12.1 2.1 4.9 3.2 9.8 3.2 14.8 0 9.1-3.5 16.8-10.4 23.1 6.7 2.3 12 6.3 15.9 12.1 3.9 5.7 5.9 12.3 5.9 19.9 0 9.9-3.5 18.3-10.5 25.1 -4.2 4.2-8.9 7.1-14.2 8.8 -5.7 1.6-12.9 2.4-21.6 2.4H48.8zM78 88.5h6c7.1 0 12.3-1.6 15.6-4.7 3.3-3.1 5-7.8 5-13.9 0-6-1.7-10.5-5.1-13.6 -3.4-3.1-8.3-4.6-14.8-4.6H78V88.5zM78 142.8h11.8c8.6 0 15-1.7 19-5.1 4.3-3.7 6.4-8.3 6.4-13.9 0-5.5-2.1-10.1-6.2-13.8 -4-3.7-11.1-5.5-21.4-5.5H78V142.8z'/></g>";
                 Object.assign(target.querySelectorAll('svg')[i].style,{display: "inline-block", fontsize:"12px", width: px_height, height:px_height, left:"200px",top:"100px"});

                 break;

                 case 'E':

                 console.log('add E')
                 target.querySelectorAll('svg')[i].innerHTML +=  "<g class='"+element+"'><path fill='none' stroke="+color+" stroke-width='"+stroke+"' d='  M144.6,32.4H67.3v46.4h75.1v27.4H67.3v64.5h77.4V198H38.1V5h106.5V32.4z'/></g>";
                 Object.assign(target.querySelectorAll('svg')[i].style,{display: "inline-block", fontsize:"12px", width: px_height, height:px_height, left:"200px",top:"100px"});

                 break;

                 default:  target.querySelector('svg').innerHTML +=  ''
              }

              // console.log(element);


              //add aniamtion
              document.write("<style>\n@keyframes offsetStrokes {\nto{stroke-dasharray: 505;stroke-dashoffset: 405;\n}\n}\n"+
              "."+element+"{stroke-dasharray: 50;stroke-dashoffset: 50; animation: offsetStrokes "+duration+"s ease-in-out forwards infinite;}"+
              "</style>")


});




// transform: "scale("+num/200+")"
//add css
  Object.assign(target.style,{float: "left", });
  // fontsize:"12px", width: px_height, height:px_height, left:"200px",top:"100px"});
}




function DrawLetterTwo(target, duration, height, stroke, color, offsetColorTime){

}
