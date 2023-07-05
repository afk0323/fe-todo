const { ERROR, MESSAGE } = require("./constant");
let { todos, idCount } = require("./todos");

/**
 * Todo 설명서
 */
function showInfo() {
  console.log(MESSAGE.INFO);
}

function checkArguments(input) {
  if (input.includes("") || input.includes(undefined)) {
    console.log(ERROR.WRONG_ARGUMENTS);
    showInfo();
    return false;
  }
  return true;
}

/**
 * Todo 리스트 추가
 */
function addTodo(inputName, inputTag) {
  // 1. 이름이나, 태그가 없을 때
  if (!checkArguments([inputName.trim(), inputTag])) {
    return;
  }

  // 2. 같은 이름이 있을 때
  for (const todo of todos) {
    if (todo.name === inputName) {
      console.log(ERROR.ADD_SAME_NAME);
      return;
    }
  }

  // 3. 태그 형식이 아닐 때
  inputTag = inputTag.replace(/'/g, '"');

  const isArray = (input) => {
    const regex = /^\s*\[(\s*"[^"]*"\s*(?:,\s*"[^"]*"\s*)*)?\]\s*$/;
    return regex.test(input);
  };

  if (!isArray(inputTag)) {
    console.log(ERROR.ADD_WRONG_TAG);
    showInfo();
    return;
  }

  const newItem = {
    name: inputName,
    tags: JSON.parse(inputTag),
    status: "todo",
    id: idCount++,
  };

  todos = [...todos, newItem];
  console.log(MESSAGE.ADD(newItem));
  nowStatus();
}

/**
 * Todo 리스트 삭제
 */
function deleteTodo(inputId) {
  // 1. id 인자를 입력하지 않았을 떄
  if (!checkArguments([inputId])) {
    return;
  }

  let deleteName = "";
  todos = todos.filter((todo) => {
    if (todo.id === Number(inputId)) deleteName = todo.name;
    return todo.id !== Number(inputId);
  });

  // 2. 해당하는 id가 없을 때
  if (!deleteName) {
    console.log(ERROR.EMPTY_ID);
    return;
  }

  console.log(MESSAGE.DELETE(deleteName));
  nowStatus();
}

/**
 * Todo 리스트 업데이트
 */
function updateTodo(inputId, inputState) {
  // 1. id나 상태를 입력하지 않았을 때
  if (!checkArguments([inputId, inputState])) {
    return;
  }

  const updateIndex = todos.findIndex((todo) => todo.id === Number(inputId));

  // 2. 해당하는 id가 없을 때
  if (updateIndex === -1) {
    console.log(ERROR.EMPTY_ID);
    return;
  }

  const updateName = todos[updateIndex].name;

  // 3. status가 todo, doing, done이 아닐 때
  if (!["todo", "doing", "done"].includes(inputState)) {
    console.log(ERROR.UPDATE_WRONG_STATUS);
    return;
  }

  // 4. 동일한 status를 입력했을 때
  if (todos[updateIndex].status === inputState) {
    console.log(ERROR.UPDATE_SAME_STATUS);
    return;
  }

  todos[updateIndex].status = inputState;

  console.log(MESSAGE.UPDATE(updateName, inputState));
  nowStatus();
}

/**
 * Todo 리스트 출력
 */
function showTodo(inputStatus) {
  // 1. 상태를 입력하지 않았을 때
  if (!checkArguments([inputStatus])) {
    return;
  }

  const [todoFilterItems, todoItems] = showStatusList("todo");
  const [doingFilterItems, doingItems] = showStatusList("doing");
  const [doneFilterItems, doneItems] = showStatusList("done");

  switch (inputStatus) {
    case "all":
      nowStatus();
      console.log(MESSAGE.SHOW_STATUS("todo"));
      console.log(MESSAGE.SHOW("todo", todoFilterItems, todoItems));
      console.log(MESSAGE.SHOW_STATUS("doing"));
      console.log(MESSAGE.SHOW("doing", doingFilterItems, doingItems));
      console.log(MESSAGE.SHOW_STATUS("done"));
      console.log(MESSAGE.SHOW("done", doneFilterItems, doneItems));
      break;
    case "todo":
      console.log(MESSAGE.SHOW(inputStatus, todoFilterItems, todoItems));
      break;
    case "doing":
      console.log(MESSAGE.SHOW(inputStatus, doingFilterItems, doingItems));
      break;
    case "done":
      console.log(MESSAGE.SHOW(inputStatus, doneFilterItems, doneItems));
      break;
    default:
      console.log(ERROR.WRONG_COMMAND);
      break;
  }
}

function showStatusList(status) {
  const filterItems = todos.filter((todo) => todo.status === status);
  let listItems = "";

  filterItems.forEach((item, idx) => {
    listItems += MESSAGE.SHOW_LIST(item, idx);
  });

  return [filterItems, listItems];
}

/**
 * 현재 Todo 리스트 출력
 */
function nowStatus() {
  let count = {
    todo: 0,
    doing: 0,
    done: 0,
  };

  todos.forEach((todo) => count[todo.status]++);
  console.log(MESSAGE.NOW_STATE(count));
}

module.exports = { showInfo, addTodo, deleteTodo, updateTodo, showTodo };
