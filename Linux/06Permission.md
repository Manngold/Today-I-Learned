# Permission

User가 File & Directory에 대해서 접근할 수 있도록 혹은 없도록 하는 것
(Read, Write, Execute)

어떤 File or Directory에 대한 정보를 `ls -l hello.txt`로 가져온다면

-rw-r--r-- 1 manngold staff 26 12 31 13:16 hello.txt

이러한 형식으로 나오는데 manngold에 해당하는 부분이 누구의 소유인지 나타내준다

그렇다면 텍스트 파일을 만들어서 실험을 해보자

1. `nano`를 활용해서 작성을 할 수도 있지만 `echo 'hello' > hello.txt` 명령어로 표준 출력을 redirection 시켜서 txt 파일로 저장한다

2. 현재 권한은 manngold이고 `echo 'hi nice to meet you too' >> hello.txt` 명령어로 추가를 해준다

3. `cat hello.txt`로 정상적으로 추가된 것을 확인할 수 있다

4. 다른 계정을 통해서 `echo 'what is your name' >> hello.txt` 명령을 수행할 경우 permission denied 오류가 출력된다

왜냐하면 hello.txt의 permission은 manngold만 갖고 있기 때문이다

세세하게 쪼개서 확인을 해보자

-rw-r--r-- 1 manngold staff 26 12 31 13:16 hello.txt를 쪼개면

-|rw-|r--|r-- | 1 | manngold staff | 26 | 12 31 13:16 | hello.txt | 이렇게 쪼개진다

| 를 기준으로 번호를 매겨서 살펴보자면

1. type : 파일인지 폴더인지(파일이면 - 폴더면 d)

> 2, 3, 4 를 통틀어 User, Group, Others의 access mode라고 하는데 r, w,x는 read write execute를 나타낸다

2. owner permission : 오너의 권한

3. group permission : 그룹의 권한

4. other permission : 오너도 그룹도 아닌 불특정 다수의 권한

5. number of hard links :

6. owner : 파일 오너

7. group : 파일의 그룹

8. size : 파일의 용량

9. last modification date and time

10. name of file or directory

결론적으로 `-rw-r--r-- 1 manngold staff 26 12 31 13:16 hello.txt`를 해석해보면

일반 파일 hello.txt는 12월 31일 13시 16분에 만들어졌고 오너는 manngold이고 읽기와 쓰기 권한이 있고 그룹은 staff이고 other와 함께 읽기 권한만 갖고 있다.

## chmod

이러한 권한은 유저가 `chmod` 명령어로 변경이 가능하다

현재 hello.txt를 ls -l hello.txt를 해보면

-rw-r--r-- 1 manngold staff 26 12 31 13:16 hello.txt

라는 결과가 나오고 group, other은 읽기만 가능하다

그렇다면 hello.txt가 중요한 파일이라서 그룹이 아닌 다른 other에서 읽기를 불가능하게 하려면 read에 관한 permission을 빼줘야한다

`chmod o-r hello.txt` 명령어를 통해서 read permission을 삭제할 수 있다

다시 `ls -l hello.txt`를 입력하면

-rw-r----- 1 manngold staff 26 12 31 13:16 hello.txt

other에 대해서 permission이 삭제된 것을 확인할 수 있다

만약 read permission을 다시 부여한다면 `chmod o+r hello.txt`명령으로 다시 권한을 부여할 수 있다.

추가적으로 /dir1/dir2/dir3/dir4 이런식으로 여러 depth가 있고 한 번에 권한 설정을 하고싶다면 `chmod` 명렁어에 -R이라는 플래그를 입력해서 권한을 부여해준다

-R 플래그는 재귀적으로 명령이 작동하게 한다.

## class and operation

<https://en.wikipedia.org/wiki/Chmod> 이 페이지를 참조하는 것이 편리하다

octal modes는 chmod의 플래그를 8진수를 활용해서 user, group, others에 권한을 부여하는 것이다

1은 execute 2는 write 4는 read로 숫자를 조합해서 rwx 권한을 넣어보자

ex) `chmod 774 hello.txt`

설명 - 1 + 2 + 4 = 7 (rwx) - 4 = 4 (r--)

추가적으로 a라는 것을 활용해서도 모든 권한을 정할 수 있다

`chmod a=rwx hello.txt`

`chmod a-rew hello.txt` 등 여러 가지를 실험하면서 익히면 된다.
