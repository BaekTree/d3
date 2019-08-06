// import { select } from 'https://unpkg.com/d3@5.9.7/dist/d3.min.js';
//above does not work

const svg = d3.select('svg');
// svg.style('background-color','red');

const circle = svg.append('circle');
// const width = svg.attr('width');
// const height = svg.attr('height');
// const size = Math.min(height, width);

// // type check
// console.log(height);
// console.log(typeof height);
// console.log(typeof ( height / 2 ) );//automatically change the type though...

// const width = parseFloat(svg.attr('width'));
const width = +(svg.attr('width'));
const height = +(svg.attr('height'));
const size = Math.min(height, width);

//d3 method chaining
circle
    .attr('r', size / 2)
    .attr('cy', height / 2)
    .attr('cx', width / 2)
    .attr('fill', 'yellow')
    .attr('stroke', 'black');

const eyeSpacing = 40;
const eyeYOffset = 20;

const leftEye = svg.append('circle')
    .attr('r', 10)
    .attr('cy', height / 2 - eyeYOffset)
    .attr('cx', width / 2 - eyeSpacing)
    .attr('fill', 'black');

const rightEye = svg.append('circle')
    .attr('r', 10)
    .attr('cy', height / 2 - eyeYOffset)
    .attr('cx', width / 2 + eyeSpacing)
    .attr('fill', 'black');

//mouth
// const mouth = svg.append('path')
//     .attr('d', )

// svg.append('path');

var arcG = d3.arc();
var pathData = arcG({
    startAngle: Math.PI * 1/ 2,
    endAngle: Math.PI * 3/ 2,
    innerRadius: width / 20,
    outerRadius: (width / 20) + 10
  });

// var lineGenerator = d3.line();
// var points = [
// 	[0, 80],
// 	[100, 100],
// 	[200, 30],
// 	[300, 50],
// 	[400, 40],
// 	[500, 80]
// ];
// var pathData = lineGenerator(points);

// Select the path element and set its d attribute
// d3.select('path')
    // .attr('d', pathData);

    // var foo = 100;
// console.log(`Let's meet at the ${foo}`);
// console.log( 'width ${foo}' );
// console.log(typeof width)
// Let's meet at the bar
const g = svg.append('g');
g.attr('transform', `translate( ${ width / 2}, ${height / 2})`);
// g.attr('transform', `translate( 10,10)`);
g.append('path').attr('d',pathData);

