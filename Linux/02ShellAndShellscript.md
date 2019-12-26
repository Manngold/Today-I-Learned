# Shell and Shell script

## Shell vs Kernel

Kernel은 하드웨어 즉, 물리적인 기계를 직접적으로 감싸고 있다.

Shell은 Kernel을 감싸고 있다.

> Shell : 사용자의 입력을 받아 Kernel이 이해할 수 있도록 바꿔주고 전달해준다
>
> Kernel : 하드웨어를 제어해서 어떠한 명령을 수행할 수 있도록 한다. 이때 하드웨어는 커널을 통해 결과를 전달해준다.

shell과 kernel을 분리하는 이유?

-   다수의 shell을 생성할 수 있다.
-   사용자는 자신의 기호에 맞게 shell을 선택해서 사용한다.

ex) bash와 zsh

## Shell script

script : 영화나 방송의 대본(臺本)·각본(脚本).

shell에게 대본을 준다고 생각하면 이해에 도움을 줄 수 있다

자주 사용하는 명령으로 script를 짜서 사용자의 편의를 높인다

log들을 해당 디렉토리에 복사하는 루틴이 있다고 가정하자

쉘 스크립트를 사용하지 않으면

1. `touch a.log b.log c.log`로 로그 파일 생성

2. `mkdir logs` 로그를 저장하는 디렉토리 생성

3. `cp *.log logs` 로 로그파일들을 복사해서 이동

(\*.log는 파일명에 .log가 존재하는 모든 파일을 의미한다)

이 과정을 계속 반복해야한다.

쉘 스크립트를 사용한다면 한 번 코드를 작성하고 편리하게 해결할 수 있다

1. `nano backup` 을 사용해서 nano 에디터를 연다

2. 아래 코드를 입력한다

```

#!/bin/zsh

if ! [ -d bak ]; then
    mkdir bak
fi
cp *.log bak

```

> #!/bin/zsh

/bin/zsh에서 해당 코드가 실행된다는 것을 명시한다 (bash를 쓴다면 zsh를 bash로 바꿔주면 된다)

> if ! [ -d bak ]; then

조건문 시작, 만약 bak이란 디렉토리가 없다면

> mkdir bak

mkdir bak 명령어를 실행한다

> fi

조건문 종료

> cp \*.log bak

.log 형식의 파일들을 bak 디렉토리에 복사한다

3. `./backup` 명령어 실행

    - zsh: permission denied: ./backup 가 발생한다

4. 실행가능 모드로 변경하기 위해서 `chmod +x backup`

    - `chmod +x` 로 executable 모드로 변경해준다

5. ./backup을 입력하면 정상적으로 작동한다
