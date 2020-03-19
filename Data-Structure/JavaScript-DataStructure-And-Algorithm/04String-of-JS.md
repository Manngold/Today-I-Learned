# String Of JS

## 문자열 접근

`.charAt()`이나 `substring()`으로 접근이 가능하다

```
var dog = "buddy"

dog.charAt(2); // d
dog.substring(0,1); // b

```

## 문자열 비교

문자열을 비교할 때 시작 문자열을 기준으로 문자를 비교한다

```
var a = "a";

var b = "b";

console.log(a < b); // true
```

변수 a에 문자가 추가 돼도 짧은 문자까지 비교를 진행한다

```
var a = "ab";

var b = "b";

console.log(a < b); // true
```

```
var a = "add";

var b = "ab";

console.log(a < b); // false
```

a를 비교하고 d와 b를 비교 할 때, d의 값이 더 크므로 false가 반환된다

## 문자열 검색

`.indexOf(searchValue[,fromIndex])`를 사용하여 특정 문자열의 인덱스를 얻을 수 있다

```
'Red Dragon'.indexOf("Red"); // 0
'Red Dragon'.indexOf("RedDevil"); // -1
```

해당 문자열이 있을 경우 인덱스 값을 반환하고 없으면 -1을 반환한다

이를 활용하여 간단한 단어가 있는지 확인하는 함수를 만들 수 있다

```
function searchString(stringValue, search){
    return stringValue.indexOf(search) !== -1;
}

searchString("manngold", "m");
```

## 문자열 분해

`.split(separator)`를 활용하여 문자열을 분리하고 배열로 생성할 수 있다

```
var target = "this is example sentence";

target.split(" ");
```

이처럼 띄어쓰기를 기준으로 분리할 수도 있고 사용자의 기준에 따라 분해를 할 수 있다
