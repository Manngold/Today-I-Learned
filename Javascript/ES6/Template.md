# Template

일반적인 웹 개발은

JSON으로 응답을 받기 - javascript object로 변환한 후에 데이터 처리 조작 - DOM에 추가

## Tagged template literals

템플릿 리터럴을 함수로 파싱이 가능하다 첫번째 인자로 문자열 값의 배열이 들어가고 나머지 인자는 표현식 `${...}`에 들어간 값들이 표현된다

```
const data = [
    {
        name: "coffee-bean",
        order: true,
        items: ["americano", "milk", "green-tea"]
    },
    {
        name: "starbucks",
        order: false
    },
    {
        name: "coffee-king",
        order: true,
        items: ["americano", "latte"]
    }
];

function func(tags, name, items) {
    if(typeof items === "undefined"){
        items = "<span>주문가능한 상품이 없습니다.</span>"
    }
}

data.forEach(v) => {
    let template = func`<h2>welcome ${v.name} !!</h2>
    <h4>주문가능항목</h4> <div>${v.items}</div>`;
}
```

이렇게 손쉽게 처리가 가능하다
