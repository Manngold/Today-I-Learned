# JS Memory Management

C와 같은 저수준 프로그래밍 언어에서는 프로그래머가 메모리를 수동으로 할당하고 해제

JS에는 사용하지 않는 변수를 삭제하는 `Garbage Collector`가 존재한다.

## 메모리 누수

메모리 누수란 프로그램에서 버려진 메모리를 해제하지 못한 경우를 말한다.

이로 인해서 성능이 떨어지거나 프로그램이 중단된다.

이런 메모리 누수는 `JS엔진의 가비지 컬렉터가 메모리를 올바른 방식으로 해제하지 않은 경우 발생`

## 객체에 대한 참조

객체에서 어떠한 속성을 참조를 할 때, 메모리에 로드한 뒤, 해당 값을 참조한다.

그렇다면 다음과 같은 예제는 얼마만큼의 메모리를 사용할까?

```

var foo = {
    bar1 = "A",
    bar2 = "B"
} // 각각의 속성을 읽는데 5KB의 메모리가 사용된다고 가정

function loadMemory(){
    alert(foo.bar1)
}

```

bar1 속성에 대한 값을 읽기 때문에 5KB만 사용하는 것이 아닌 10KB가 사용된다

왜냐하면 loadMemory라는 함수가 bar1 속성을 읽기 위해서 foo라는 객체 전체를 메모리에 로드하기 때문이다

## DOM 메모리 누수

DOM 항목을 가리키는 변수가 이벤트 콜백 외부에 선언된 경우 해당 DOM 항목을 제거해도 해당 항목은 여전히 메모리에 남게 된다.

```
    <div id="one">One</div>
    <div id="two">Two</div>
    <script>
        var one = document.querySelector("#one");
        var two = document.querySelector("#two");
        one.addEventListener("click", function () {
            two.remove();
            console.log(two);
        });
    </script>
```

이 코드는 One을 클릭해서 Two를 없애도 메모리에 여전히 남아있으므로 DOM 메모리 누수가 발생하게 된다

이는 다음과 같은 방법으로 쉽게 해결 할 수 있다.

```
    <div id="one">One</div>
    <div id="two">Two</div>
    <script>
        var one = document.querySelector("#one");
        one.addEventListener("click", function () {
            var two = document.querySelector("#two");
            two.remove();
            console.log(two);
        });
    </script>
```

## Window 전역 객체

객체가 window 전역 객체에 포함되는 경우 해당 객체는 메모리에 존재하는 것이다.

> window는 브라우저에서 전역 객체이며 alert(), setTimeout()과 같은 다양한 내장 메소드를 갖고있다.

window 속성으로 선언된 추가적인 객체는 모두 제거할 수 없다

따라서 메모리 절약을 위해서 가능하면 전역변수를 사용하지 않는 것이 좋다.
