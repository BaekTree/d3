const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const render = data => {
    
    svg.selectAll('rect')//non for now
        .data(data).enter().append('rect')
        .attr('width',300)//each data element linked to a rect
        .attr('height',300);//each rect height and width
        // .attr('fill','blue')
};

d3.csv('https://baektree.github.io/d3/pop3.csv').then(data => {
    data.forEach(d =>{
        d.population = +d.population;//array에 새로 저장한다. forEach method
    });
    // console.log(data);
    render(data);
});

