const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const render = data => {
    //linear scale
    //xScale function declaration
    var func = function(d,i,v){
        return d.population;
    }
    const xScale = d3.scaleLinear()
        .domain([0,d3.max(data, func)])
        .range([0,width]);

        // console.log(xScale.domain());
        // console.log(xScale.range());

    //yscale function declaration
    const yScale = d3.scaleBand()
        .domain(data.map(d => d.country))
        .range([0,height]);


    //link rect to data
    /*
    //widgh: 지금 하려는게 x 축이 population의 길이로 나타내기.
    'width' = function func(each element of width){
        return xScale(each element of width.population)
    };

    d=>{
        sScale(d.population)
    }

    //height: 
    높이가 모두 동일하게 적용!
    
    
    //각각의 위치!
    bandwidth만큼 + ??
    'y' = function func(each element){
        return yScale(each element.country)
    }
    */
    svg.selectAll('rect')//non for now
        .data(data).enter().append('rect')
        //default size 300,300 of rects
        // .attr('width',300)//each data element linked to a rect
        // .attr('height',300);//each rect height and width

        //ajdusted size of rects
        .attr('y',)
        .attr('width',d=>xScale(d.population))//each data element linked to a rect
        .attr('height',yScale.bandwidth());//each rect height and width

        // .attr('fill','blue')
};

d3.csv('https://baektree.github.io/d3/pop3.csv').then(data => {
    data.forEach(d =>{
        d.population = +d.population;//array에 새로 저장한다. forEach method
    });
    // console.log(data);
    render(data);
});

