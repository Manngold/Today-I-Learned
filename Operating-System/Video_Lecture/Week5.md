# Week5

## Motivation

하나의 어플리케이션은 여러 일을 수행 할 수 있어야 한다.

word processor : display + reading keyboard + spell-check
web browser : display + retirve data from server

### example) server가 하나일 때,

서버가 하나일 때, 여러 개의 request가 들어오면 request 하나를 처리하는 동안 다른 request는 wait상태가 되고 완료 후 수행된다

### solution 1) Multiple Processes

프로세스를 여러 개를 생성해서 각각의 request를 수행한다

하지만 여기서 해당 서버의 포트 번호를 알아야 되므로 추가적인 해결책이 필요하다

### solution 2) Receptionist

서버로 request가 전송되기 전에 Receptionist를 통해서 비어있는 서버로 fowarding을 해주는 것

하지만 여기서 프로세스를 생성하는 것에 따른 비용이 발생하기 때문에 문제점이 발생한다

### solution 3) Multithreaded Processes

따라서 request에 따른 프로세스를 생성을 하는 것이 아닌 하나의 프로세스에서 request에 따라 스레드로 나누어서 작업을 생성하는 것이다.

스레드는 프로세스 대비 저비용이므로 request가 발생할 경우 스레드를 생성해도 효율적이다.

## Concept

### Thread

CPU 사용의 기본 단위

동일 프로세스의 자원을 다른 스레드와 code, data를 공유한다

stack은 공유하지 않는다 (독자적인 실행을 위해서)

### Single and multithreaded processes

싱글스레드는 하나의 스레드가 실행

멀티스레드는 여러 스레드로 실행

### Thread control block(TCB)

-   thread id, thread execution state
-   PC, register set -> thread context
-   stack

## Multithreading Models

### Kernel threads vs User threads

-   Kernel threads : OS kernel에 의해 직접적으로 지원되는 것

-   User threads : 커널의 도움 없이 유저 레벨의 스레드 라이브러리에 의해 지원되는 것

### Three Multithreading Models

커널이 스레드를 알면 CPU 스케쥴링을 통해서 프로세서에서 실행되게 한다

1. Many-to-One model (user level threads)

    - 여러 개의 유저 스레드가 하나의 커널에 연결

    - 멀티 프로세서에서 효과 없음

2. One-to-One model(kernel level threads)

    - 커널마다 하나의 유저 스레드를 연결시킨다

    - 따라서 병렬적으로 실행 가능

3. Many-to-Many model(hybrid threads)

    - 스케쥴링을 통해서 여러 스레드를 여러 커널에 연결

스레드를 생성 할 때에는 유저 레벨의 스레드 생성이 코스트가 적다(유저레벨 함수만 콜 하면 된다)

커널 레벨 스레드를 생성 할 때에는 시스템 콜 - 인터럽트 - 인터럽트 핸들러 등 여러 과정을 거쳐야 하기 때문이다

따라서 코스트가 발생해도 병렬적인 실행을 원하면 커널 레벨 스레드, 비용을 줄이기 위해서는 유저 레벨 스레드를 생성한다

## Thread Pool

요청에 따른 스레드를 생성하지 않고 스레드 풀에 스레드를 여러 개를 미리 만들어 놓고 요청이 들어오면 서비스를 할 경우 더 빨라진다

## Scheduler Activations

유저 레벨에서는 유저 레벨 라이브러리에서 스케쥴링

커널 레벨에서는 커널이 스케쥴링
