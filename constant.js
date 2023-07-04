const ERROR = {
  WRONG_COMMAND: "제대로 된 명령어를 입력해주세요.",
  EMPTY_ID: "해당 id를 가진 TODO가 존재하지 않습니다.",
  ADD_EMPTY: "제목과 태그를 모두 입력해주세요.",
  ADD_SAME_NAME: "같은 이름을 가진 TODO가 존재합니다.",
  UPDATE_WRONG_STATUS: "status는 todo, doing, done 중 하나만 가능합니다.",
  UPDATE_SAME_STATUS: "이미 해당 status 입니다.",
};

const MESSAGE = {
  COMMAND: "명령하세요 : ",
  ADD: (newItem) => `${newItem.name} 1개가 추가됐습니다. (id : ${newItem.id})`,
  DELETE: (deleteName) => `${deleteName} todo가 목록에서 삭제됐습니다.`,
  UPDATE: (updateName, inputState) =>
    `${updateName} ${inputState}으로 상태가 변경됐습니다.`,
  SHOW: (status, filterItems, listItems) =>
    `${status}리스트 : 총${filterItems.length}건 : ${listItems}`,
  NOW_STATE: (todoCount, doingCount, doneCount) =>
    `현재상태 : todo: ${todoCount}개, doing: ${doingCount}개, done: ${doneCount}개`,
};

module.exports = { ERROR, MESSAGE };
