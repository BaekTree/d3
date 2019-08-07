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
