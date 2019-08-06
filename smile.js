
const svg = d3.select('svg');


const width = +(svg.attr('width'));
const height = +(svg.attr('height'));
const size = Math.min(height, width);

const g = svg.append('g').attr('transform', `translate( ${width / 2}, ${height / 2})`);//back tag!

const circle = g.append('circle');

//d3 method chaining
circle
    .attr('r', size / 2)
    .attr('fill', 'yellow')
    .attr('stroke', 'black');

const eyeSpacing = 40;
const eyeYOffset = 20;
const eyeSize = 10;

const eyesGroup = g.append('g');
eyesGroup.attr('fill', 'black');
eyesGroup.attr('transform', `translate(0, -${eyeYOffset})`);

const leftEye = eyesGroup.append('circle')
    .attr('r', eyeSize)
    .attr('cx', - eyeSpacing)

const rightEye = eyesGroup.append('circle')
    .attr('r', eyeSize)
    .attr('cx', + eyeSpacing)

//mouth
var arcG = d3.arc();
var pathData = arcG({
    startAngle: Math.PI * 1 / 2,
    endAngle: Math.PI * 3 / 2,
    innerRadius: width / 200,
    outerRadius: (width / 200) + 10
});
g.append('path').attr('d', pathData);

const browWidth = 30;
const browHeight = 10;

const brows = g.append('g')
    .attr('transform', `translate(0, -60)`);

const leftEyeBrow = brows.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', -browWidth * 2);

const rightEyeBrow = brows.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', browWidth * 2 - browWidth);




