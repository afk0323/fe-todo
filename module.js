let { todos } = require("./todos");
let idCount = 1;

/**
 * Todo 리스트 추가
 */
function addTodo(input) {
  let [inputName, inputTag] = [input[1], input[2]];
  let newItem = {
    name: inputName,
    tags: inputTag,
    status: "todo",
    id: idCount++,
  };
  todos = [...todos, newItem];
  console.log(`${newItem.name} 1개가 추가됐습니다. (id : ${newItem.id})`);
  nowState();
}

/**
 * Todo 리스트 삭제
 */
function deleteTodo(input) {
  let inputId = +input[1];
  let deleteName = "";
  todos = todos.filter((todo) => {
    if (todo.id === inputId) deleteName = todo.name;
    return todo.id !== inputId;
  });

  console.log(`${deleteName} todo가 목록에서 삭제됐습니다.`);
  nowState();
}

/**
 * Todo 리스트 업데이트
 */
function updateTodo(input) {
  let [inputId, inputState] = [+input[1], input[2]];
  let updateIndex = todos.findIndex((todo) => todo.id === inputId);
  let updateName = todos[updateIndex].name;

  todos[updateIndex].status = inputState;

  console.log(`${updateName} ${inputState}으로 상태가 변경됐습니다.`);
  nowState();
}

/**
 * Todo 리스트 출력
 */
function showTodo(input) {
  if (input[1] === "all") {
    nowState();
  }
  if (input[1] === "todo" || input[1] === "doing" || input[1] === "done") {
    let filterItems = todos.filter((todo) => todo.status === input[1]);
    let listItems = "";

    filterItems.forEach((item, idx) => {
      if (idx !== 0) listItems += ", ";
      listItems += `'${item.name}, ${item.id}번'`;
    });
    console.log(`${input[1]}리스트 : 총${filterItems.length}건 : ${listItems}`);
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

  console.log(
    `현재상태 : todo: ${todoCount}개, doing: ${doingCount}개, done: ${doneCount}개`
  );
}

module.exports = { addTodo, deleteTodo, updateTodo, showTodo };
