# Advance

이전까지 MySQL의 기본 동작을 살펴보았고 이제는 이것을 바탕으로 관계형 데이터베이스의 효율을 끌어 올리려한다

## JOIN

관계형 데이터베이스의 꽃이고 각각 분리된 테이블을 하나의 테이블을 하나로 볼 수 있다

table author, comment 이렇게 두 개가 존재한다고 가정하고

author에는 id, comment에는 author_id가 존재한다 하면 두 테이블을 해당 유저가 생성한 comment와 이어주고 싶을 때

`SELECT * FROM author LEFT JOIN comment ON author.id = comment.author_id;`
를 입력하게 된다면 정상 출력이된다

이때 comment의 id와 author의 id가 있어서 여러개가 출력되는데

`SELECT author.id, comment, author FROM author LEFT JOIN comment ON author.id = comment.author_id;`
명령어로 원하는 정보에 접근을 할 수 있다
