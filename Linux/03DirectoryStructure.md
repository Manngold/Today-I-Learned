# Directory Structure

데이터의 정리정돈 수단

1. / : root directories

2. /bin : user binaries

3. /sbin : system binaries

4. /etc : configuration files

5. /var : variable files

6. /home : home directories

7. /lib : system libraries

8. /opt : optional add-on-applications

> locate : 파일을 찾아주는데 디렉토리를 통해서 찾는 것이 아닌 데이터베이스(mlocate)를 통해서 검색을 한다
>
> sudo updatedb : 컴퓨터에 있는 정보들이 DB에 업데이트 된다.
>
> find : 디렉토리에서 가져온다

## whereis and \$PATH

> whereis : 해당 프로그램이나 파일의 위치를 찾아준다

예를 들어 `whereis ls` 로 ls 명령어의 위치를 찾아보면 /bin/ls 를 반환한다

그리고 `/bin/ls` 를 입력했을 때 `ls` 명령어와 같은 출력 값을 얻을 수 있는 것을 확인할 수 있다.

여기서 생기는 의문은 지난번에 backup 폴더 복사 명령어를 실행할 때, 명령어가 존재한 위치를 명확하게 입력해야 사용할 수 있었는데 어떻게 ls 만 입력해서 명령어가 실행이 되는 것일까?

답은 \$PATH라는 환경변수 때문이다.

`echo $PATH`를 입력하면 환경변수로 지정한 목록들이 콜론으로 구분되어 나열된다

> /Library/Frameworks/Python.framework/Versions/3.7/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin

이렇게 나오는데 우리는 ls라는 명령어를 입력했을 때, 컴퓨터는 환경변수를 살펴보면서 그 안에 ls가 존재하는지를 찾는다 그리고 존재하면 해당 명령을 실행한다.

환경변수는 사용자가 수정을 할 수 있으며 그로 인해 편리하게 명령어들을 추가할 수 있다.
