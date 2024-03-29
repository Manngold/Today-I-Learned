# CRUD

CREATE READ UPDATE DELETE로 데이터베이스의 기본을 학습하게 된다

## INSERT

```

INSERT INTO table_name(column1, column2 ...)
VALUES (value1, value2 ...)

```

으로 해당 테이블에 row를 생성할 수 있다

DESC table_name으로 해당 테이블의 속성을 볼 수 있다

## SELECT

생성후 `SELECT * FROM table_name`으로 테이블 전체를 조회할 수 있다

`*` 에 내가 조회하고 싶은 column을 넣어주면 해당 column만을 조회 할 수 있다.

### WHERE

WHERE로 해당 조건에 따른 읽기를 진행할 수 있다

`SELECT * FROM table_name WHERE condition...`으로 불러올 수 있다.

### ORDER BY

ORDER BY를 활용하여 조건에 따른 정렬이 가능하다

`SELECT * FROM table_name WHERE condition... ORDER BY condition...`

### LIMIT

현업에서 사용해야되는 데이터는 수도 없이 많기 때문에 모든 데이터를 불러온다면 다운되는 현상이 발생할 수 도 있다

따라서 `LIMIT`로 출력에 제한을 둬서 필요한만큼만 데이터를 불러올 수 있다

`SELECT * FROM table_name WHERE condition... ORDER BY condition... LIMIT num`

num에 숫자가 들어가서 해당 숫자만큼 데이터가 출력된다

## UPDATE

`UPDATE`문을 활용하여 수정이 가능하다

### SET

`UPDATE table_name SET assignment WHERE condition`으로

수정이 가능한데 SET을 하고 해당 column=변경 내용을 입력하고 바로 입력하면 모든 column이 해당 값으로 변경되기 때문에 WHERE로 조건을 넣어준다

## DELETE

데이터 삭제를 위한 구문으로 UPDATE와 마찬가지로 모든 데이터에 영향을 줄 수 있기 때문에 조건을 통해서 제약을 걸어주는 것이 중요하다

`DELETE FROM table_name WHERE condition`
