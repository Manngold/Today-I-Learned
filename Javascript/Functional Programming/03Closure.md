## 내부함수, 외부함수

1. 내부함수

JS는 함수 내에서 또 다른 함수를 선언할 수 있다

```
function outter(){
    function inner(){
        var title = 'coding everybody';
        console.log(title);
    }
    inner()
}
```

결과로는 coding everybody가 출력된다

위 코드에서 outter 안에 inner가 정의되어 있고 inner를 내부 함수라고 한다

내부함수는 외부함수와 지역변수에 접근할 수 있다

```
function outter(){
    var title = 'coding everybody';
    function inner(){
        console.log(title);
    }
    inner();
}
```

결과는 똑같이 coding everybody가 출력된다

## 클로저란?

클로저는 내부함수와 밀접한 관계를 갖고 있는 주제이다

외부함수가 소멸된 이후에도 내부함수가 외부함수의 변수에 접근 할 수 있다

이러한 메커니즘을 클로저라고 한다

아래 코드는 클로저의 독특함을 보여주는 코드이다

```
function outter(){
    var title = 'coding everybody';
    return function(){
        console.log(title);
    }
}
var inner = outter();
inner();
```

outter라는 함수는 return을 통해서 title을 console.log로 찍는 함수를 반환한다

그리고 inner라는 변수에 outter()의 리턴값을 부여해서 inner라는 함수가 콘솔을 찍는 함수로 생성된다

그리고 inner 함수를 실행하면 coding everybody가 찍힌다

여기서 의문점은 outter()로 inner에 함수를 부여했는데 return으로 반환된 값고

## private variable

소프트웨어가 커지면서 어떠한 정보가 있을 때, 아무나 수정 하는것을 막기 위해서 사용한다

```
function factory_movie(title){
    return {
        get_title : function(){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix);
```

factory_movie는 객체를 리턴하는데 내부함수로 get_title와 set_title 메소드가 존재한다 그리고 이 내부함수는 외부함수의 지역변수에 접근할 수 있다

위 코드에서 title은 매개변수이고 지역변수로 사용된다

따라서 get_title와 set_title에서 title에 대한 접근이 가능하다

get_title은 매개변수인 title를 반환하게 된다

set_title은 \_title라는 매개변수를 받아서 외부함수의 지역변수의 값(title)에 접근하여 \_title의 값으로 수정을 한다

```
ghost.get_title() // Ghost in the shell
matrix.set_title('매트릭스')
matrix.get_title() // 매트릭스
```

이렇게 get_title와 set_title는 누구나 접근할 수 있는 public이다

하지만 title은 함수가 종료되도 내부함수를 활용해서 지역변수에 접근할 수 있다는 클로저의 특성을 활용해서 get_title와 set_title 메소드를 활용해서만 접근을 할 수 있다 왜냐하면 factory_movie는 get_title과 set_title를 리턴하고 함수를 마감하기 때문이다.

## 클로저의 응용

```
var arr = []
for(var i = 0l i < 5; i++){
    arr[i] = function(){
        console.log(i);
    }
}
for(var index in arr){
    console.log(arr[index]());
}
```

위 코드의 실행 결과는 어떻게 될까

for문을 통해서 `arr[i]`에 i값을 반환하는 함수를 넣었다

그리고 다음 for문에서 arr을 돌면서 해당 함수를 실행시킨다

0~4까지 출력이 될까?

정답은 5만 5번 출력된다

왜냐하면 i는 전역변수이기 때문이고 i는 5로 되었기 때문이다

그렇다면 원래 의도대로 0부터 4의 값까지 출력하려면 어떻게 해야할까

바로 클로저의 특성을 활용해서 내부함수와 외부함수를 이용해야한다

```
var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(id) {
        return function(){
            return id;
        }
    }(i);
}
for(var index in arr) {
    console.log(arr[index]());
}
```

위 코드는 `arr[i]`에서 외부함수를 생성해서 id 매개변수를 받고 내부함수를 리턴하는데 외부함수를 즉시 실행시켜서 i의 값을 지역변수로 활용하도록 한다

클로저의 특징을 잘 활용하면 의도대로 코드를 활용할 수 있다
