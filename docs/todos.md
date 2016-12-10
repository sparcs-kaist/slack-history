# TODO

## 일단
 - css 작업
 - redux를 통한 fetch
 - 유저 이름띄우기
   - bot의 경우는 username을 사람과 다른방식으로 검색해야한다.
   - 왜 bot에서 에러가 났을까?
 - ldap 연결
 - 배포.

## nodemon -> pm2
nodemon의 성능에 대해 항상 아쉬움이 컸다. pm2도 watch를 지원하는 것 같으니 production에도 사용 할 수 있는 pm2를 적용하고, vagrant와의 연동도 생각해보자. nodemon은 vagrant와 호환되지 않았다.

## redux 연결
redux를 붙여보자. 현재 작업중이다.

## json -> mongodb
현재 json으로 들어있는 history들을 mongodb로 import하여 search등에 더 효율적으로 만들어보자. [slack-patron](https://github.com/tyage/slack-patron)을 보면 slack에 bot을 통해 지속적으로 채널을 저장하는 것 같다.

## 기타 기능들
 - 가장 먼저 username을 뜨게 하기.
 - 채널 검색
 - ldap 연결
 - 메세지 더 이쁘게 띄우기
   - 같은 시간(분) 내의 메세지는 유저 프로필이 뜨지않게.
 - star, imoji등 표현
 - 유저 사진 hover시 profile 띄우기

## 문서작업
 readme에 적자.

### 기타

개발을 하면서 어떻게 구조화를 같이 할 수 있을까? 구조화만 생각하다가는 막상 코드는 많이 짜지 못한다. 간단간단히 개발하면서도 후에 쉬운 리펙토링으로 구조화를 할 수 있는 방법이 필요하다.
