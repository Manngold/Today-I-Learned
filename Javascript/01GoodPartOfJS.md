# Good Part Of JS

## White Space

```

// 를 통한 한 줄 주석

/*
를 통한 여러 줄을 주석으로 처리 할 수 있다
주석은 항상 의미 있어야 한다.
의미 없는 주석은 없으니만 못하다
항상 주석으로 코드에 대한 설명을 명확하게
*/

```

```

/*
    var rm_a = /a*/.match(5)
*/

// 블록 주석은 정규표현식 사용시 안전하지 않다

```

## Number

### 상수와 리터럴

-   상수 : 어떤 데이터가 메모리에 초기화된 뒤, 변하지 않는 것을 말한다

-   리터럴 : 변수 및 상수에 저장되는 값 자체를 말한다

```

const a = "this is constant and i'm (string) literal"

```

숫자형은 하나만 있음 64비트 부동 소수점 형식이며 정수와 실수의 구분이 없다

```

var one = 1

var floatOne = 1.0

console.log(one == floatOne) //true

```

### 지수 부분 표현방식

e 앞에 값에다 e 뒤에 값만큼 10을 제곱한 값의 곱

```

var a = 100

var b = 1e2

console.log(a == b) // true

```

### NaN = Not a number

수치 연산을 해서 정상적인 값을 얻지 못할 때의 값

NaN은 자신을 포함해서 어떤 값하고도 같지 않다 따라서 NaN을 확인 할 때 isNaN() 함수를 쓰도록 하자

```

function millisecToSec(ms){

    if isNaN(ms){
        return "Not a number"
    }

    return ms * 1000
}

var a = '100F'
var b = 0.0032e2

millisecToSec(a) // "Not a number"
millisecToSec(b) //  32


```

## Strings

문자열은 작은 따옴표(' ') 와 큰 따옴표(" ")를 묶어서 나타낸다

따옴표 안에는 0개 이상의 문자를 포함

\는 이스케이프 문자

JS 내의 모든 문자는 16비트 유니코드

> <https://whatisthenext.tistory.com/103> 아스키코드와 유니코드 참조글

#### 문자열은 변하지 않는다 (immutable)

> mutable(값이 변한다), immutable(값이 안변한다)

```

var a = "Hello"

var b = a

b += " i'm manngold"

console.log(a) // "Hello"
console.log(b) // "Hello i'm manngold"

```

## Statement

하나의 컴파일 단위에는 실행을 위한 문장들이 포함돼 있다.
링커가 없기 때문에 자바스크립트는 모든 문장을 공통적인 전역 이름 공간에 한 데 몰아 넣는다

### var를 활용한 private 변수

var를 통해서 지역변수화 시켜서 정보를 숨길 수 있다.(클로저 활용)

```

function airpods() {
    var serialNum = 123321
    this.units = 2
    this.getSerialNum = function(){
        return serialNum
    }
}

var mangoldAirpods = new airpods()

console.log(mangoldAirpods.serialNum) //undefined

console.log(mangoldAirpods.getSerialNum()) // 123321


```

### if statement

```
var a = true
var b = false

function trueOrFalse(a){
    if(a){
    console.log("this is true")
    } else{
    console.log("this is false")
    }
}

console.log(trueOrFalse(a)) // true
console.log(trueOrFalse(b)) // false

```

블록 내에서 새로운 유효범위를 생성하지 않는다.

따라서 변수는 블록이 아닌 함수의 첫 부분에서 정의해야한다.

false에 해당하는 값들

> false, null, undefined, " "(empty string), 0, NaN

### switch statement

```
var fruit = "apple"

switch(fruit){
    case "apple" :
        console.log("apple is $3")
        break;
    case "melon" :
        console.log("melon is $2")
        break;
    default :
        console.log("Sorry we don't have " + fruit )
}

```

switch문을 활용한 다중 분기 수행

case문의 표현식과 같은지 비교 후 일치하는 case 문을 실행

break 문을 통한 다음 case절 실행 방지

일치하는 case가 없을시 default문 실행

### while statement

```

var i = 0

while(i < 10){

    console.log(i)
    i++

}


```

표현식이 참인 동안 블록을 반복해서 실행

표현식이 거짓이라면 반복 수행 종료

### for statement

#### basic for

```

for(var i = 0; i < 10; i++){
    console.log(i)
}

```

for(초기화; 조건; 증가)

#### for in

```

var obj = {
    "hello": 0,
    "my": 1,
    "name": 2,
    "is": 3,
    "manngold": 3
}

for(word in obj){
    console.log(word)
}

```

해당 객체의 속성 혹은 key를 열거한다

```

var obj = {
    "hello": 0,
    "my": 1,
    "name": 2,
    "is": 3,
    "manngold": 3
}

for(word in obj){
    if(obj.hasOwnProperty(word)){
        console.log(word + " is obj's own property")
    } else{
        console.log(word + " is exist prototype chain")
    }
}

```

for in 구문과 hasOwnProperty method를 활용한 속성확인

### do while statement

```
var i = 0
do{
    console.log(i)
    i++
} while(i < 10)

```

기존 while문과 다른 점은 실행 후 검사를 진행한다

## Expressions

### 삼항연산자

```

var a = true

a == true ? console.log("a is true") : console.log("a is false")

```

조건 ? 참 : 거짓의 형태로 간단한 조건문을 만들 수 있지만

가독성이 좋지 않다는 단점이 있다

### typeof

```

var a = 1
var b = "hi"
var c = true
var d = [1, 2, 3, 4]
var e = function(){
    return 0
}

typeof(a) // number
typeof(b) // string
typeof(c) // boolean
typeof(d) // object
typeof(e) // function


```
