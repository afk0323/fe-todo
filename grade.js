const {
  showInfo,
  addTodo,
  deleteTodo,
  updateTodo,
  showTodo,
} = require("./module");
const { ERROR, MESSAGE } = require("./constant");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * 명령을 입력받는 함수
 */
function getInput() {
  rl.setPrompt(MESSAGE.COMMAND);
  rl.prompt();

  rl.on("line", (answer) => {
    // 대문자, 소문자 예외처리
    answer = answer.toLowerCase();
    const [command, first, second] = answer.split("$");

    switch (command) {
      case "exit":
        rl.close();
        break;
      case "info":
        showInfo();
        break;
      case "show":
        showTodo(first);
        break;
      case "add":
        addTodo(first, second);
        break;
      case "delete":
        deleteTodo(first);
        break;
      case "update":
        updateTodo(first, second);
        break;
      default:
        console.log(ERROR.WRONG_COMMAND);
        break;
    }

    if (command !== "exit") rl.prompt();
  });
}

getInput();
