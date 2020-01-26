# Function

## Arrow Function

기존 function이라는 예약어를 생략하고 Arrow ( => )로 대체하는 방법이다

다음 예는 기존에 Array.map을 사용할 때 코드이다

```
let newArr = [1, 2, 3, 4, 5].map(function(v) {
    return v * 2;
});

console.log(newArr)
```

이걸 ES6의 Arrow Function을 활용하여 작성한다면

```
let newArr = [1, 2, 3, 4, 5].map(v => v * 2);

console.log(newArr);
```

이렇게 훨씬 간단해진다

Arrow Function을 사용할 때, 함수 내부에서 별 다른 코드 추가 없이 리터을 한다면 위 처럼 return을 명시하지 않아도 된다

## Arrow Function and this context

`this` 키워드는 현재 맥락에서 객체를 의미한다 따라서

```
const myObj = {
    test() {
        console.log(this)
    }
};

myObj.test();
```

현재 맥락에서 this가 바라보는 객체는 myObj가 된다

하지만 여기서 setTimeout을 사용하게 되면 this는 어떻게 될까

```
const myObj = {
    test() {
        setTimeout(function() {
            this.printData()
        }, 100);
    },
    printData(){
        console.log("hello world");
    }
};

myObj.test();
```

setTimeout을 호출하면 큐에 들어가서 0.1초 후에 실행이 되므로 this는 window가 되기 때문에 printData는 실행이 되지 않는다

이런 경우 자기가 예상했던 this의 맥락이 바뀐다 기존 ES5에서는 bind를 사용해서 이런 문제를 해결했지만 Arrow Function을 사용하면 맥락을 유지 시켜주기 때문에 이러한 수고를 덜어준다

ES5에서 해결

```
const myObj = {
    test() {
        setTimeout(
            function() {
                this.printData();
            }.bind(this),
            100
        );
    },
    printData() {
        console.log("hello world");
    }
};

myObj.test(); // hello world
```

ES6에서 해결

```
const myObj = {
    test() {
        setTimeout(() => {
            this.printData;
        }, 200);
    },
    printData() {
        console.log("hello world");
    }
};

myObj.test();
```

이렇게 이전 ES5와 같이 실행큐 진입으로 인한 맥락을 잃지 않기 때문에 코드 작성이 편리하다

## Function default parameters

함수를 생성할 때 파라미터에 기본 값을 지정할 수 있다

```
function sum(a, b = 1) {
    return a + b;
}

console.log(sum(3));
```

이렇게 기본값을 설정하면 인자값을 하나만 전달해도 b의 기본 값을 1로 설정했기에 오류가 발생하지 않는다

다음은 object의 형태로 기본값을 전달하는 방법이다

```
function sum(a, b = { value: 1 }) {
    return a + b.value;
}

console.log(sum(3)); // 4
```

object형태의 기본값 수정

```
function sum(a, b = { value: 1 }) {
    return a + b.value;
}

console.log(sum(3, {value: -3})); // 0
```

## rest parameters

함수의 인자들이 얼마나 들어올지 모르는 상황에서 우리는 `arguments`를 사용한다

하지만 `aruguments`는 배열이 아닌 `유사배열`이기 때문에 배열로 만들어주는 과정을 거쳐야 한다

```
function doubleArr() {
    let arr = Array.from(arguments);
    let newArr = arr.map(v => v * 2);
    return newArr;
}

console.log(doubleArr(1, 2, 3, 4, 5, 6, 7, 8));
```

하지만 ES6에서는 rest parameters로 유사배열이 아닌 `배열`로 활용을 할 수 있다

```
function doubleArr(...arg) {
    let newArr = arg.map(v => v * 2);
    return newArr;
}

console.log(doubleArr(1, 2, 3, 4, 5, 6, 7, 8));
```

기존 spread operator와 헷갈릴 수 있지만 함수에서 `...`은 매개변수들을 배열에 담아준다고 생각하면 된다 그래서 `Array.from`이나 `call`같은 과정을 거치지 않아도 배열 메소드를 활용할 수 있다
