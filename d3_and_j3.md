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
## then : d3 promise syntax
```
d3.csv('data.csv').then(data=>{
    console.log(data);
})
```

data parameter이름을 바꿔도 정상작동.
data=> 부분을 바꾸면... 
```
function(data){

}
```
의 모양이 된다. csv을 하면 어떤 object을 반환할 것이다. data.cv의 값들을 가지고 있는 object일 것이다. 그리고 then 이라는 함수를 사용하고, 그 parameter으로 function이 들어간다. then 함수 자체가 parameter으로 함수가 들어가도록 설계되었나보다. 그런데 들어가는 함수의 parameter가 data으로 되어 있다. 이건 어떤 구조인지 모르겠다... 

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
* 