
const svg = d3.select('svg');


const width = +(svg.attr('width'));
const height = +(svg.attr('height'));
const size = Math.min(height, width);

const g = svg.append('g').attr('transform', `translate( ${ width / 2}, ${height / 2})`);//back tag!

const circle = g.append('circle');

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
var arcG = d3.arc();
var pathData = arcG({
    startAngle: Math.PI * 1/ 2,
    endAngle: Math.PI * 3/ 2,
    innerRadius: width / 20,
    outerRadius: (width / 20) + 10
  });


g.append('path').attr('d',pathData);

