# javascript
## export default function
* named: multiple export ok per module. Muse use same name and syntax when import
* default: only one ok per module. May change the var name when import
```
function myFunc(){...};
ley myVar = ...;
export { myFunc, myVar }

export let myVar2 = ...;
export function func2(){...};

export{ myFunc as func1}//이름을 바꿔서 보내도 가능하다

```
```
import {myFunc, myVar} from 'src.js'
```

```
function myFunc(){...};
let myVar=...;
export { myFunc as default };// default으로 한번 보냈으면 그 파일에서는 다른 것을 default으로 보낼 수 없다...

export default myFunc(){}
export default class{}
export default myVar=...;

```
```
import {func} from 'src.js//defaut으로 보냈으면 이름이 동일하지 않다면 그냥 default으로 보낸 것으로 받는다.
```

## typeof
* syntax
```
typeof operand
typeof(operand)
```

* What about from 'points.js'?
* 어떻게 불러오지... ㅜㅜ ./point가 뭐지... 어디에 속해있는 directory인지 모르겠다.

## 객체 of javascript
```
var person = {}
person.name = 'baek';
person.introduce = function(){
    return "my name is " + this.name;
}
person.introduce();
```

```
var person = {
    name = 'baek';
    introduce = function(){
        return "my name is " + this.name; 
    }
}
person.introduce();
```

```
//js에서는 class가 없다. 그냥 object를 새로 만든다. 그래서 생성자로부터 생성된 object들이 각기 다른 properties을 가질 수도 있다.

function Person(){};//constructer 만들기.

var p = new Person();//생성자의 사용. new으로 한다.
p.name = 'baek';
p.introduce = function(){
    return "my name is " + this.name; 
}

p.introduce();

var p2 = new Person();//생성자의 사용. new으로 한다.
p2.name = 'kim';
p2.introduce = function(){
    return "my name is " + this.name; 
}

p2.introduce();
```

```
//class처럼 attributes을 정해두기
function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'my name is ' + this.name;
    }
}

var p1 = new Person('baek');
p1.introduce();

var p2 = new Person('kim');
p2.introduce();

 
p2.newAttr = 'new Attr'
p2.introduce = function(){
    return 'override : ' + this.newAttr + " , and original attributes still alive: " + this.name;
}
document.write(p2.introduce());
```
result: 
```
my name is baek

override : new Attr , and original attributes still alive: kim
```

## 상속

### prototype

### OODP : observer pattern
observer < - > publisher
정보가 전달되어야 한다.
그런데 한 객체의 정보가 여러 객체들에게 바로 바로 전달되어야 할 때 사용한다.
interface을 사용해서 연결을 낮춘다. 따라서 observer과 publisher라는 interface을 사용.

```
import java.util.ArrayList;
import java.util.List;

interface Observer{
    void update(String str);
}

interface Publisher{
    void notify(String str);
    void add(Observer obs);
}

class newsMachine implements Publisher{
    List<Observer> observers = new ArrayList<>();
    
    public void notify(String str){
        for(Observer obs : observers){
            obs.update(str);
        }
    }
   public  void add(Observer obs){
        observers.add(obs);
    }
}

class subscriber implements Observer{
    Publisher pub;
    public subscriber(Publisher pub){
        this.pub = pub;
        pub.add(this);
    }
    // String title;
    public void update(String str){
        System.out.println(str);
    }
}

public class driver{
    public static void main(String[] args){
        newsMachine magazine = new newsMachine();
        subscriber subs = new subscriber(magazine);
        subscriber subs2 = new subscriber(magazine);

        magazine.notify("news!");
    }
}
```

## asynchronous programming: promise and generator

Anonymous function

Asynchronous  -> promise

New Promise( (resolve, reject ) =>{
	setTimeout(()=>resolve(),2000);
} );
myPromise.then(()=>{
	console.log(
});
## JavaScript arrow functions
Let sq = function(x){
	Return x*x;
}
Sq = (x) => x* x;
Sq = x => x* x;
Sq(5);

Sq (x, y) => { function body; };


## Let 과 var 정리
Let: block scope을 가진다.
Var: block scope을 가지지 않는다. Block 외부에서도 접근 가능하다. 


# D3


## JavaScript Callback Functions
>>In computer programming, a callback is a piece of executable code that is passed as an argument to other code, which is expected to call back (execute) the argument at some convenient time.

The invocation may be immediate as in a synchronous callback or it might happen at later time, as in an asynchronous callback.

다른 함수로 parameter으로 들어가서 그 안에서 불려지는 함수를 callback function 이라고 하는 것 같다. 
```
function functionOne(x) { alert(x); }

function functionTwo(var1, callback) {
    callback(var1);		
}

functionTwo(2, functionOne);
//functionOne이 parameter으로 들ㅇ가서 functionTwo block 안에서 call 된다. functionOne이callback function이다.
```

callback function은 anonymous functions상황에서도 적용된다.
```
function functionTwo(var1, callback){
    callback(var1);
}

functionTwo(1,function(x){alert(x);});
functionTwo(1,(x)=>alert(x));
```

* callback function 개념을 위의 csv.then(daa=>...) 상황에 적용하면...

# d3.csv
>d3.csv(url[[, accessor], callback])

아마 csv 내부의 모양은 이런 모양일 것이다.
```
d3.csv("url",callback){
    var data = manipulation of "url" data
    callback(data);
}
```
* 다음의 두 코드는 동일하다.
```
//using anonymous function
var mycircles = d3.csv("circles.csv", function(data) {
    console.log(data);
});

//using concrete function
func1 = functoin(var){//callback function
    console.log(var);
}

var mycircles = d3.csv("circles.csv", func1);
```
* 실제 자주 사용하는 코드: anonymous function을 자주 사용
```
var mycircles = d3.csv("circles.csv", function(data) {
    console.log(data);
});

```
* circles.csv을 불러들인다. callback function으로 data을 parameter으로 하는 함수... 을 csv 함수 안에서 다시 부른다... 그 함수의 역할은 data 변수를 log한다. 그러니까 circles.csv에서 데이터를 뽑아서 그 데이터를 callback 함수에 paramenter 으로 집어넣는다. callback 함수는 받은 데이터를 가지고 log 한다. callback function의 의미로써는 csv에서 받은 자료를 받아서 어떻게 가공할지는 새로 정의해주는 것이다. 따라서 paramenter의 이름이 자유롭게 변경되어도 된다. 
* callback function의 body와 parameter가 prototype에서 아무렇게나 정의되어도 실제 들어가는 parameter는 csv에서 정의된 변수의 이름으로 들어간다...

## then : d3 promise syntax
이전에 csv함수의 parameter을 이용해서 callback function을 사용했다. d3 v4 혹은 v5 이후로 promise가 등장해서 다음과 같이도 사용할 수 있다.
```
d3.csv('data.csv').then(data=>{
    console.log(data);
})
```
csv의 함수는 data array object 을 반환한다. then 함수를 사용하면 해당 object을 parameter으로 넣어 callback 함수를 부른다.

# Javascript Array forEach() Method
>array.forEach(function(currentValue, index, arr), thisValue)
```
var sum = 0;
var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);//array element을 하나 하나 callback function에 parameter으로 넣는다.

function myFunction(item) {
  sum += item;//parameter으로 받은 item을 sum에 더한다.
  document.getElementById("demo").innerHTML = sum;//출력
}
```

# data join
* data   <->   element
* enter update exit
# D3.js Scale Linear
https://www.dashingd3js.com/d3js-scales

## d3 linearScale
<img src="https://s3.amazonaws.com/dashingd3js/images/d3.js_scales_scale_domain_down_to_range_300x300.png">
domain과 range의 default 범위:
[0,1]의 범위를 [0,1]로 반환한다. 
??? 이 말은 그래도 받은 그대로 반환한다고 한다...;;;
scaleLinear 함수는 정해진 domain과 range의 범위에서 domain의 값을 input으로 받아서 range의 범위로 scale한 값을 반환한다.
```
var scale = d3.scaleLiniear();
scale(1); //1이 반환
scale(2);   //2가 반환
```

>scale.domain([start, end])
domain 범위를 설정
domain 범위가 defult range[0,1]사이로 scale되어 반환된다
```
var scale = d3.scaleLiniear();
scale.domain([0,10000]);
scale(1);//0.0001
scale(2);//0.0002
```

>scale.domain([0,10000]).range([0,100]) //단위가 변하는 것이다.
domain에서 100 = range 의 1이다.
10000 / 100 = 100
```
var scale = d3.scaleLiniear();
scale.domain([0,10000]).range([0,100]);

scale(1);//0.01
scale(2);//0.02
scale(100);//1
```

## d3.max(array, callback)
* array에서 
># d3.max(iterable[, accessor]).
Returns the maximum value in the given iterable using natural order. If the iterable contains no comparable values, returns undefined. **An optional accessor function may be specified, which is equivalent to calling Array.from before computing the maximum value.**
from d3 github

```
const xScale = d3.scaleLinear()
        .domain([0,d3.max(data, d=>d.population)])
        .range([0,width]);
```
data array가 다차원 배열이고, 그 중에서 일부를(가령 하나의 column을) 선택해서 max 하려고 할 때, 전체 data array에서 가공할 부분을 선택할 함수가 accessor 이다.
```
//d3.max function
export default function max(values, valueof) {
  let max;
  if (valueof === undefined) {  //accessor valueof가 없을 때
    for (const value of values) {
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  } else {  //valueof function이 있다
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  }
  return max;
}
```
max에서 정의된 함수는 parameter가 3개이다. 예제에서 정의한 새로욶 ㅏㅁ수는 parameter가 1개. 정상적으로 작동할까? 에러가 없다! 없는 parameter은 무시하고 그냥 정의된 함수를 실행한다. if문의 세부 논리의 논점인 for(let value ...) 는 바로 밑에서 정리. 
*** 그러나 이것은 사실 valueof 함수에서 2,3번째 parameter들이 optional한 함수이기 때문이다...?

### for of
for of 에서 for 문 안의 변수는 iteration할 때 마다 새로 저장된다. 반복이 끝나면 새로운 let으로 저장!
```
for (let value of iterable){
    value ...;
}
```

# javascript domain()

#javascript map(function)
> array.map(function)
* 배열이 있을 때, 배열의 element를 다른 값으로 mapping 할 때 사용. 
* [1,7,3,7] ---( x 10)---> [10,70,30,70]
* mapping 하는 규칙이 function으로 정의되어 parameter으로 들어간다.
* mapping 한 결과를 반환한다.
* 배열에서 한 부분을 추출하거나 분리하는데 사용할 수도 있다.
```
    const girls = [
       {name: 'Sarah', age: 19},
       {name: 'Laura', age: 10},
       {name: 'Jessy', age: 29},
       {name: 'Amy', age: 23}];

    let girlsAges = girls.map((girl) => girl.age);

    console.log(girlsAges);  //[19, 10, 29, 23]
```

# d3.select()....attr('name','value')
>If a value is specified, sets the attribute with the specified name to the specified value on the selected elements and returns this selection. If the value is a constant, all elements are given the same attribute value; otherwise, if the value is a function, it is evaluated for each selected element, in order, being passed the current datum (d), the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]). The function’s return value is then used to set each element’s attribute. A null value will remove the specified attribute.
* value parameter가 constant이면 모든 element에 동일한 값을 적용한다.
* 만약 value가 function이면 모든 element을 각각의 element에 해당되는 작동을 수행한다. 아마 모든 element을 돌면서 name을 input값으로 넣고 각각의 if --- 등의 조건에 따라 다른 일을 수행할 것이다.
* value가 function도 되고 constant 한 값도 된다면 문법적으로 value가 함수로 들어갈 때에는 callback function인 것으로 추정된다. 그리고 그 callback function에 들어가는 parameter은 width가 포함되어 있는 data 전체이다. 
* ***input으로 들어가는 값은 element 전체가 bind된 데이터이다.*** data()에 parameter으로 들어가는 data! 일단 전체를 함수 안으로 넣고, 함수 안에서 가공할 규칙을 만든다. 
* callback으로 들어간다... 왜?어떻게?
* 사실 어떻게 가공할지 아직 아무것도 모르니까 그냥 다 던져 넣는 것이 자유도가 높을 것이다. 

# d3.bandscale
domain: [1,2,3,4]
range: [0,100]
1,2,3,4을 100에서 균등하게 나눠서 각각 element의 band로 적용한다.
>band(value)
: defulat domain, range = [0,1], value에 해당하는 band object 을 반환한다. [정확히는 band의 시작점을 반환한다고 하는데, 지금은 뭔소린지 모르겠다...]
band object라기 보다는 전체 range에서의 값을 반환한다. 
전체 x축이 쭉 있으면 각각의 band(value)는 각 value의 band가 시작하는 값을 반환한다.
그래서 0,25,50,75을 반환한다.


여기서 말하는 band는 추상적인 개념 같다. 
막대 그래프에서... 각 element의 가로변을 band라고 부른다. 
band를 컴퓨터에서 어떻게 binary code으로 정의하고 있는지도 모르겠다... 그냥 없을 수도? 추상적인 개념이니까. 그냥 빈 class에 attribute만 있을 수도 있겠다...

>band.bandwidth()
해당 band object의 길이를 반환한다.