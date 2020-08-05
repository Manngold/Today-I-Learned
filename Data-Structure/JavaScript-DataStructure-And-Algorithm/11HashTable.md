# Hash Table

## Hash Table란?

해시 테이블을 사용하면 자료를 쉽고 빠르게 저장할 수 있다. key-value 쌍을 기반으로 자료를 얻을 수 있으며 JS의 객체가 해시 테이블과 같은 방식으로 키와 해당 키의 연관된 값을 정의하는 방식으로 동작한다.

해시 테이블에는 put()과 get()이라는 두 가지 주요 함수가 있다. put()은 해시 테이블에 자료를 저장할때 사용된다. 반대로 get()은 자료를 가져올때 사용된다.

두 함수 모두 시간 복잡도는 O(1)이다.

인덱스가 해싱 함수에 의해 계산되는 배열과 유사하고, 여기서 인덱스는 메모리에서 유일한 공간을 식별하기 위한 것이다.

## 해싱 기법

해시 테이블에서는 물론 해시 함수가 중요하다.

해시 함수는 특정 키를 자료를 저장하는 배열의 인덱스로 변환한다. 그리고 이 해시 함수는 세 가지 주요 요구 사항이 있다

1. 결정성 : 동일한 키는 동일한 해시 값 형성
2. 효율성 : 시간 복잡도가 O(1)이어야 한다.
3. 균일한 분배 : 배열 전체를 최대한 활용해야 한다.

## 소수 해싱

해싱에서 소수는 중요하다. 소수를 사용한 모듈러 나눗셈이 균일한 방식으로 배열 인덱스를 생성하기 때문이다.

소수가 아닌 작은 수를 사용하면 모듈러 연산에서 중복되는 해시 값을 생성할 수 있기 때문에 소수를 사용한 모듈러 연산이 중요하다.

하지만 소수를 사용한다고 해서 무조건 충돌이 일어나지 않는 것은 아니다

예를 들면, 7 % 11 = 7 로 해시 값을 생성했지만 18 % 11 = 7로 충돌되는 해시 값이 나왔으므로 충돌 방지 전략을 세워야 한다.

### 충돌 방지 전략 1 - 선형 탐사

선형 탐사는 인덱스 값을 하나씩 증가시키면서 사용 가능한 인덱스를 찾는 것이다.

7 % 11 = 7로 7번 인덱스를 사용하고 18 % 7 = 7 로 해당 인덱스가 사용중인걸 확인했다면 인덱스 값을 1 증가시켜 8번 인덱스에 값을 저장하는 것이다.

하지만 이런 방법은 cluster를 만들게 되고 최악의 경우 get()을 통해 값을 조회할 때, 모든 리스트를 순회해야 한다.

### 충돌 방지 전략 2 - 이차 탐사

선형 탐사의 cluster 문제를 해결하기 위한 좋은 기법이다. 이차 탐사는 매번 1씩 증가시키는 대신 완전 제곱을 사용한다. 따라서 균등한 분배를 할 수 있게된다.

## 해시 테이블 구현(선형 탐사)

```
function HashTable(size) {
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
}

HashTable.prototype.put = function (key, value) {
    if (this.limit >= this.size) throw "hash table is full";

    let hashedIndex = this.hash(key);

    while (this.keys[hashedIndex] != null) {
        hashedIndex++;
        hashedIndex = hashedIndex % this.size;
    }

    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;
};

HashTable.prototype.get = function (key) {
    let hashedIndex = this.hash(key);

    while (this.keys[hashedIndex] != key) {
        hashedIndex++;

        hashedIndex = hashedIndex % this.size;
    }

    return this.values[hashedIndex];
};

HashTable.prototype.hash = function (key) {
    if (!Number.isInteger(key)) throw "must be int";
    return key % this.size;
};

HashTable.prototype.initArray = function (size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(null);
    }
    return array;
};
```

## 해시 테이블 구현(이차 탐사)

put과 get 메소드만 변경하면 된다.

```
HashTable.prototype.put = function (key, value) {
    if (this.limit >= this.size) throw "hash table is full";

    let hashedIndex = this.hash(key);
    let squareIndex = 1;
    while (this.keys[hashedIndex] != null) {
        hashedIndex += Math.pow(squareIndex, 2);

        hashedIndex = hashedIndex % this.size;
        squareIndex++;
    }

    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;
};

HashTable.prototype.get = function (key) {
    let hashedIndex = this.hash(key);
    let squareIndex = 1;

    while (this.keys[hashedIndex] != key) {
        hashedIndex += Math.pow(squareIndex, 2);

        hashedIndex = hashedIndex % this.size;
        squareIndex++;
    }

    return this.values[hashedIndex];
};
```
