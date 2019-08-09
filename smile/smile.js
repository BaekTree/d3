
const svg = d3.select('svg');


const width = +(svg.attr('width'));
const height = +(svg.attr('height'));
const size = Math.min(height, width);

const g = svg.append('g').attr('transform', `translate( ${width / 2}, ${height / 2})`);//back tag!

const circle = g.append('circle');

//d3 method chaining
circle
    .attr('r', size / 2)
    .attr('fill', '#fdd0a2')
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
const browYOffset = browWidth * 2;

const brows = g.append('g')
    .attr('transform', `translate(0, -${browYOffset})`);

brows.transition().duration(2000).attr('transform', `translate(0, ${-browYOffset - 20} )`)
    .transition().duration(2000).attr('transform', `translate(0, ${-browYOffset} )`);

const leftEyeBrow = brows.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', -browWidth * 2);

const rightEyeBrow = brows.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', browWidth * 2 - browWidth);

// beard

const unit = 12;
lineData = [
    [0, 0], [-unit * 2, 0], [-unit * 3, unit * 1], [-unit * 3, unit * 2],
    [-unit * 2, unit * 1], [-unit * 2, unit * 3], [-unit * 1, unit * 2]
    , [-unit * 1, unit * 3], [0, unit * 4]
];
p = d3.line()(lineData);
const beard = g
    .append("path")
    .attr("d", p)
    .attr("stroke", "black")
    .attr("fill", "brown");

beard.attr('transform', 'translate(0,30)');

var points = d3.line()
    .x(function(d) { return x(d[0]); })
    .y(function(d) { return y(d[1]); });

// points = d3.line()([[0, 0], [-unit * 2, 0], [-unit * 3, unit * 1], [0, unit]]);
const upBeard = g
    .append("path")
    .attr("d", points([[0, 0], [-unit * 2, 0], [-unit * 3, unit * 1], [0, unit]]))
    .attr("stroke", "black")
    .attr("fill", "brown");

