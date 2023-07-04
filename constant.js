const ERROR = {
  WRONG_COMMAND: "제대로 된 명령어를 입력해주세요.",
  WRONG_ARGUMENTS: "명령어에 필요한 인자를 모두 입력해주세요.",
  EMPTY_ID: "해당 id를 가진 TODO가 존재하지 않습니다.",
  ADD_SAME_NAME: "같은 이름을 가진 TODO가 존재합니다.",
  ADD_WRONG_TAG: "태그 형식을 지켜서 입력해주세요.",
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
  SHOW_LIST: (item) => `'${item.name}, ${item.id}번'`,
  NOW_STATE: (count) =>
    `현재상태 : todo: ${count.todo}개, doing: ${count.doing}개, done: ${count.done}개`,
};

module.exports = { ERROR, MESSAGE };
