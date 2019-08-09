const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const render = data => {
    var func = function (d, i, v) {
        return d.population;
    }
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, func)])
        .range([0, width]);


    //yscale function declaration
    const yScale = d3.scaleBand()
        .domain(data.map(d => d.country))
        .range([0, height]);

    svg.selectAll('rect')//non for now
        .data(data).enter().append('rect')

        //ajdusted size of rects
        .attr('y', d => yScale(d.country))
        .attr('width', d => xScale(d.population))
        .attr('height', yScale.bandwidth());

};

d3.csv('https://baektree.github.io/d3/src.csv').then(data => {
    data.forEach(d => {
        d.population = +d.population;
    });
    render(data);
});

