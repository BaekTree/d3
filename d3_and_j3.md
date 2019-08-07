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
