/**
 * stage 2:
 *  하드 코딩 바꾸기: population and country element -> x Value & y value
 *  데이터 자체가 바뀔 수도 있기 때문이다. 
 *  데이터의 형식만 일정하면 어떤 데이터를 가져다가 써도 그대로 적용이 되어야 한다.
 * 
 */

const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const render = data => {
    const xValue = function(d){
        d.population;
    }

    const yValue = function(d){
        d.country;
    }
    /*
    질문: 왜 함수로 만들지? 그냥 여기서 바로...
    xValue = data.population; 이런 식으로
    data에서 접근하면...data접근이 불가능한가? 
    불가능하다!

    data는 object 들의 array이다.
    data = [{country: ..., pop:...}, {...}, ..., {...}]
    population에 접근할 수 있는 경로: attr에서 적용할 때 자동으로 
    각각의 element으로 접근한다.
    혹은 foreach문을 내가 써서 한다... 는 힘들다. 
    여기서 말하는 xValue는 각각의 data.element에서의 xValue을 
    각각 지정해줘야 한다. 
    그렇게 되면 xValue array를 만들어야 할지도 모르는 일이다.
    */

    var func = function (d, i, v) {
        return d.population;
    }
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d=>xValue(d))])//.domain([0, d3.max(data, d=>d.population)])
                                                //max는 data을 받는다. data의 array element(object)가 d으로 가서
                                                //xValue에서 object.population을 비교!
        .range([0, width]);

    //yscale function declaration
    const yScale = d3.scaleBand()
        .domain(data.map(d => yValue(d)))//.domain(data.map(d => d.country))
        .range([0, height]);

    svg.selectAll('rect')//non for now
        .data(data).enter().append('rect')

        //ajdusted size of rects
        .attr('y', d => yScale(d.country))//.attr('y', d => yScale(yValue(d)))
        .attr('width', d => xScale(d.population))//.attr('width', d => xScale(xValue(d)))
        .attr('height', yScale.bandwidth());

};

d3.csv('https://baektree.github.io/d3/src.csv').then(data => {
    data.forEach(d => {
        d.population = +d.population;
    });
    render(data);
});

