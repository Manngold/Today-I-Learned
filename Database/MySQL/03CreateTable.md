# Create Table

## Table 생성

```
CREATE TABLE (tablename) (
    column(검색시 노출정도) isRequired? AUTO_INCREMENT?,
    PRIMARY KEY(column)
)
```

`CREATE TABLE` 명령어로 테이블을 생성하고 `(...)` 안에 각각의 column에 따른 설정을 해준다

예를 들어 id라는 column을 생성하면

`id INT NOT NULL AUTO AUTO_INCREMENT`를 입력하면

id column은 INT 데이터 타입이고 빈 값을 허용하지 않으며 값이 자동적으로 증가한다 라고 설정할 수 있다

다른 예로 title는

`title VARCHAR(30) NOT NULL`

title이라는 column은 VARCHAR이라는 데이터 타입(변할 수 있는 문자) 빈 값 허용x
