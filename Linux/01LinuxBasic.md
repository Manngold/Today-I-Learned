# Linux Basic

이 게시글은 생활코딩 리눅스 강좌를 토대로 작성되었습니다

## Directory and File

사용하는 명령어

> mkdir 폴더명 : 폴더 생성 명령어
>
> pwd : 현재 위치
>
> ls : 현재 디렉토리의 파일 목록 (파라미터를 받을 수 있다)
>
> touch 파일명 : 파일 생성
>
> cd 폴더명 : 폴더 이동

1. mkdir로 폴더 생성 `mkdir hello_linux`

2. cd hello_linux로 폴더 이동 `cd hello_linux`

3. pwd로 현재 디렉토리 위치 확인 `pwd`

    - /Users/manngold/Documents/hello_linux

4. mkdir, touch로 빈 폴더와 파일 생성 `mkdir empty_folder, touch empty_text.txt`

5. ls로 현재 디렉토리 목록 확인 `ls`

    - empty_folder empty_text.txt

6. ls에 '-l' 이나 '-al' 파라미터를 입력해서 상세 정보 출력 `ls -l or ls -al`

    - total 0

        drwxr-xr-x 2 manngold staff 64 12 25 17:03 empty_folder

        -rw-r--r-- 1 manngold staff 0 12 25 17:04 empty_text.txt

> d가 붙은 것은 폴더라는 뜻이고 없으면 파일

## Directory and File2

사용하는 명령어

> rm 파일명 : 파일 삭제 (파라미터 전달 가능)

1. ls로 현재 디렉토리 목록 확인

    - empty_folder empty_text.txt

2. rm 명령어로 파일 삭제 `rm empty_text.txt`

    - 아무런 리턴 값이 없음 (리눅스는 명령어가 성공적으로 수행되면 리턴값이 없다)

3. rm 명령어로 폴더 삭제 `rm empty_folder`

    - rm: empty_folder: is a directory (rm명령로는 폴더 삭제 불가)

4. rm -r 명령어로 폴더 삭제 `rm -r empty_folder`
    - 삭제 완료 (-r 옵션은 recursive의 약자로 폴더 안의 파일들을 삭제해준다)

> man 명령어 입력시 해당 명령어의 메뉴얼이 출력된다.

## Copy, Move and Rename

사용하는 명령어

> mv 파일명 이동할 위치 : 파일 이동
>
> mv 파일명 변경할 파일명 : 파일명 변경
>
> cp 파일명 복사할 위치 : 파일 복사

1. cp 명령어로 hello.txt를 folder 디렉토리에 복사 `cp hello.txt folder/hello.txt`

2. folder 디렉토리 상태 확인 `ls -l folder`
    - hello.txt 확인, hello_linux 디렉토리와 folder 디렉토리에 둘 다 존재
    - 확인한 다음 삭제
3. mv 명령어로 파일 이동 `mv hello.txt folder/hello.txt`

4. hello_linux와 folder 디렉토리 상태 확인

    - hello_linux : folder 디렉토리만 존재
    - folder : hello.txt 파일 확인

5. mv 명령어로 파일 이름 변경 `mv hello.txt hello_manngold.txt`
    - hello.txt가 hello_manngold.txt로 변경됨

## IO Redirection (입출력)

Unix Program에서 ls, mkdir, cd 이런 것들은 하나의 프로세스이다.

기본적인 프로세스의 입력은 command line arguments

ex) ls -al 에서 -al가 aruguments에 해당된다

프로세스가 실행된 후 결과가 화면에 출력되는데 이것을 standard output이라 한다(화면에 출력) 이때 출력 방향을 바꾸는 것(파일로 저장)을 redirection이라 한다

> Unix program에서 output은 2개가 존재하는데 standard output과 standard error이 존재한다

그렇다면 예제로 프로세스가 실행된 후 결과 값을 텍스트 파일로 저장해보자

현재 디렉토리의 정보를 담은 텍스트 파일을 만든다고하면 `ls -l > directory_info.txt`로 저장이 가능하다

이는 ls -l로 화면으로 나가는 standard output 값을 redirect해서 txt 파일로 저장한 것이다

추가적으로 error 메세지를 기록해서 파일에 저장한다고 생각해보자

`rm result.txt` 이처럼 존재하지 않는 파일을 삭제하는 명령을 입력하게 된다면

> rm: result.txt: No such file or directory

라는 에러 메세지가 뜨고 이것을 텍스트 파일로 저장하고싶다 그래서 나는 `rm result.txt > error.log` 를 입력했지만 결과는 방금 나왔던 결과로 파일이 존재하지 않는다고 뜬다

왜냐하면 우리가 redirection을 할 때 사용하는 > 는 앞에 1이 생략 되어 있기 때문이다

여기서 1> 은 standard output의 결과를 갖고 오는 것이고

2> 는 standard error의 결과 값을 갖고 온다

따라서 `rm result.txt 2> error.log`를 입력하고 `cat error.log`를 입력하면 정상적으로 에러 결과를 저장한 것을 확인할 수 있다

## IO Redirection2

> 프로그램 : 하드디스크 SSD에 저장된 코드
>
> 프로세스 : 프로그램이 실행되어서 살아난 상태 (여러 프로세스를 생성할 수 있다)

### about cat (concatenate)

사용자의 입력값을 받아서 화면에 출력해주는 프로그램이다

1. hello.txt에 hello world라는 텍스트를 입력해서 저장

2. cat 명령어를 활용하여 화면 출력 `cat hello.txt`
    - hello world

cat 명령으로 출력을 하는데 두 가지 방식이 있다. 앞서 설명한 방식은 command line arguments로 입력을 받는 것이고

다음은 `cat < hello.txt`로 standard input으로 입력을 받는 방식은 똑같이 hello world를 출력하지만 command line arguments인지 standard input 인지 차이가 있는 것이다.

### command line arguments와 standard input의 다른 예시와 응용

> head : 상위 10줄을 출력해주는 프로그램

1. hello.txt에 긴 문장을 넣고 `head hello.txt`를 하면 문장의 일부만 출력

2. hello.txt를 `head -n1 hello.txt` 명령으로 출력시 앞의 일부만 출력

이때 -n1 hello.txt는 command line arguments로 들어간다

3. (다른 예시) `head -n1 < hello.txt`로 명령을 수행해도 같은 결과가 출력된다

하지만 -n1만 command line arguments이고 < hello.txt는 standard input으로 들어간다

4. (응용) `head -n1 < hello.txt > introduction.txt` 를 활용해서 결과값을 저장하는 명령을 수행할 수 있다.

> 출력 값을 저장할 때, > 를 사용하면 항상 덮어쓰게 되는데 추가하는 법은?
>
> '>>'를 넣어서 추가 가능
