# Todo 기능 목록

## show

**필요조건** <br/>
status 가져오기

### all

**필요조건** <br/>

- 각 status 개수
- 각 상태 변수 (todoCnt, doingCnt, doneCnt) 를 선언 후 forEach로 카운트 업데이트

**예외처리** <br/>

- all에 할일이 없을 때 → 0개, 0개, 0개로 처리하기
- $all, todo, doing, done을 안 쳤을 때 → show$all || show$todo || show$doing || show$done 형식으로 입력해주세요.

### todo / doing / done

**필요조건** <br/>

- 해당 status 개수
- 해당 status 리스트에 속하는 요소들을 forEach로 순회해서 출력

**예외처리** <br/>

- todo가 없을 때 → 총0건으로 출력
- $all, todo, doing, done을 안 쳤을 때 → show$all || show$todo || show$doing || show$done 형식으로 입력해주세요.

## add

**필요조건** <br/>

- 디폴트 상태는 todo로 처리하기
- ID는 순차적으로 처리하기
- 상태는 todo, done, doing 세개로 고정

**예외처리** <br/>

1. 이름이 같은 todo가 있을 때 → 동일한 이름을 가진 todo가 있습니다.
2. 제목이나 태그를 안쳤을 때 → add$제목$[태그, 태그] 형식으로 입력해주세요.

## delete

**필요조건** <br/>

- forEach나 filter로 순회해서 해당 id의 요소 삭제

**예외처리** <br/>

- 없는 id를 쳤을때 → 해당하는 todo가 없습니다.
- id를 안쳤을 때 → delete$id 형식으로 입력해주세요.

## update

**필요조건** <br/>

- 해당하는 id의 요소를 찾아서 상태 업데이트하기

**예외처리** <br/>

- 같은 상태일 때 → 이미 상태가 doing입니다.
- 없는 id를 쳤을 때 → 해당하는 todo가 없습니다.
- id나 상태를 안쳤을 때 → update$id$상태 형식으로 입력해주세요.
