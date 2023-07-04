let { todos } = require("./todos");
const { ERROR, MESSAGE } = require("./constant");
let idCount = 1;

function showInfo() {
  console.log(`----- TODO 리스트 설명서 -----
  add : add$제목$[태그] 를 입력해주세요.
  delete : 
  update :
  show : `);
}

/**
 * Todo 리스트 추가
 */
function addTodo(first, second) {
  let [inputName, inputTag] = [first, second];

  // 1. 이름이나, 태그가 없을 때
  if (!inputName || !inputTag) {
    console.log(ERROR.ADD_EMPTY);
    return;
  }

  // 2. 같은 이름이 있을 때
  for (const todo of todos) {
    if (todo.name === inputName) {
      console.log(ERROR.ADD_SAME_NAME);
      return;
    }
  }

  let newItem = {
    name: inputName,
    tags: inputTag,
    status: "todo",
    id: idCount++,
  };
  todos = [...todos, newItem];
  console.log(MESSAGE.ADD(newItem));
  nowState();
}

/**
 * Todo 리스트 삭제
 */
function deleteTodo(first) {
  let inputId = Number(first);
  let deleteName = "";
  todos = todos.filter((todo) => {
    if (todo.id === inputId) deleteName = todo.name;
    return todo.id !== inputId;
  });

  // 해당하는 id가 없을 때
  if (!deleteName) {
    console.log(ERROR.EMPTY_ID);
    return;
  }

  console.log(MESSAGE.DELETE(deleteName));
  nowState();
}

/**
 * Todo 리스트 업데이트
 */
function updateTodo(first, second) {
  let [inputId, inputState] = [Number(first), second];
  let updateIndex = todos.findIndex((todo) => todo.id === inputId);

  // 1. 해당하는 id가 없을 때
  if (updateIndex === -1) {
    console.log(ERROR.EMPTY_ID);
    return;
  }

  let updateName = todos[updateIndex].name;

  // 2. status가 todo, doing, done이 아닐 때
  if (!["todo", "doing", "done"].includes(inputState)) {
    console.log(ERROR.UPDATE_WRONG_STATUS);
    return;
  }

  // 3. 동일한 상태를 입력했을 때
  if (todos[updateIndex].status === inputState) {
    console.log(ERROR.UPDATE_SAME_STATUS);
    return;
  }

  todos[updateIndex].status = inputState;

  console.log(MESSAGE.UPDATE(updateName, inputState));
  nowState();
}

/**
 * Todo 리스트 출력
 */
function showTodo(input) {
  if (input[1] === "all") {
    nowState();
  }

  // 묶어서 처리하기
  if (input[1] === "todo" || input[1] === "doing" || input[1] === "done") {
    let filterItems = todos.filter((todo) => todo.status === input[1]);
    let listItems = "";

    filterItems.forEach((item, idx) => {
      if (idx !== 0) listItems += ", ";
      listItems += `'${item.name}, ${item.id}번'`;
    });
    console.log(MESSAGE.SHOW(input[1], filterItems, listItems));
  }
}

/**
 * 현재 Todo 리스트 출력
 */
function nowState() {
  let todoCount = 0,
    doingCount = 0,
    doneCount = 0;
  todos.forEach((todo) => {
    if (todo.status === "todo") todoCount++;
    if (todo.status === "doing") doingCount++;
    if (todo.status === "done") doneCount++;
  });

  console.log(MESSAGE.NOW_STATE(todoCount, doingCount, doneCount));
}

module.exports = { showInfo, addTodo, deleteTodo, updateTodo, showTodo };
