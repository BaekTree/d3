/**
 * 데이터를 가져온다.
 *  data의 성격이나 형식이 사용하려는 상태와 동일한가? 
 *  가공을 해주어야 하는가?
 *      data join function
 *      population 항목이 string의 상태이다. 
 *      integer으로 바꿔야 한다.
 * 데이터를 바인딩 : svg에 바인딩. rect에 바인딩했다.
 *  data을 rect으로 표현해야 한다.
 *  각각의 element에 width와 height가 주어진다.
 * 
 * width 구하기
 *  population의 값과 연동된다.
 *  scale을 사용. 값과 값이므로 linescaling을 사용.
 *  var xScale = d3.scalelinear()
 *  domain: 각각의 population 값
 *  range: svg width
 * 
 * height 구하기
 * 
 */

//
const svg = d3.select('svg');
const width = +(svg.attr('width'));
const height = +(svg.attr('height'));

//render
const render = function (data) {

   //xScale
   var xScale = d3.scaleLinear();
   xScale = xScale.domain([0,d3.max(data,d=>d.population)])
                  .range([0,width]);

   //yscale
   /**
    * 각각의 data 는 ... 동일한 y축의 값을 가진다. 주어진 화면 크기에서 동일한 크기로 나눈다면...
    * scaleband
    * 문법: 불러온다. domain과 range.
    * domain: 보통 배열. 여기서는 data.countries. 따로 분류해야 한다. 
    * map을 사용? 아니면 그냥 data.countries?
    * range: 
    */
   var yScale = d3.scaleBand();
   /*
   yScale = yScale.domain(data.countries);
      목표: y값의 scaleband domain을 data에서 countries으로 하려고 시도
      결과: error
         이유: console.log(data.countries);의 결과: undefined
         설명: data array 안에는 countries element가 없다. 
            왜? 
               console.log(data);의 결과: 
               [{{country: "WORLD", population: "7794799"}},{...},...,{...}]이다.
               즉 data object는 object들의 array이다. 
               따라서 data array 안에는 countries element가 없다. 
               countris elememt는 data array의 각element 안에 하나씩 있다. 
            따라서 data array의 각 element들에서 countries만을 뽑아내야 한다.
               array.map(callback)을 사용한다. 
                  각각의 element을 그 element.countries으로 mapping
   */
   yScale = yScale.domain(data.map(d=>d.country))
                  .range([0,height]);

                  

   //동일한 bandwidth 구하기: yscale.bandwidth()
   //test
   // console.log(data.map(d=>d.countries).length);
   // console.log(height);
   // console.log(yScale.bandwidth());


   
   svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      /**
       * 모두 동일한 위치에서 rect가 그려진다. 
       * y 값을 구분해야 한다.
       * 각자 band의 위치...? band의 위치는 한 줄에서 ... y
       * band의 return 값은 축에서의 각 band의 시작 위치를 나타낸다.
       * element 마다 다른 값을 적용행 하므로 함수를 적용.
       * y값이 있는 전체 data가 callback으로 전달된다.
       */
      .attr("y",d=>yScale(d.country))
      /**
       * yscale의 domain값은 contries들이다. 
       * yscale() 으로 전달되는 값은 domain 안에 있어야 한다.
       * 사실상 모든 domain 값이 들어가야 한다. 
       * 모든 element에 대해서 논의 중 이므로.
       */
      //yscale에 들어가는 값은 d.country들이다.
      //

      //사실 엄밀히 말해서 callback function들에서 data 전체가
      //들어오기 보다는 for each 문으로 element가 하나씩
      //callback function 안으로 들어온다고 추측하는 것이
      //더 옳은 것 같다.
      // callback function 들의 return 값을 보면 받은
      //받은 parameter.element을 하고 있다.
      //data array . element는 object 들이고,
      // data 에는 country나 population 과 같은 element가 없다.
      //data의 element는 모두 object 들이다.

      .attr("width", d=>xScale(d.population))
      .attr("height", yScale.bandwidth())
      .attr("fill", "black")

      ;
};

data = d3.csv("https://baektree.github.io/d3/pop3.csv").then(d => {
   d.population = +d.population;
   // console.log(d);
   render(d);
});

//  var svg = d3.select('svg')
//  .data;