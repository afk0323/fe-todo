const { addTodo, deleteTodo, updateTodo, showTodo } = require("./module");
const { ERROR } = require("./constant");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * 명령을 입력받는 함수
 */
function getInput() {
  rl.setPrompt("명령하세요 : ");
  rl.prompt();

  rl.on("line", (answer) => {
    if (answer === "exit") rl.close();
    else {
      let input = answer.toLowerCase().split("$");

      if (input[0] === "show") showTodo(input);
      else if (input[0] === "add") addTodo(input);
      else if (input[0] === "delete") deleteTodo(input);
      else if (input[0] === "update") updateTodo(input);
      else console.log(ERROR.WRONG_COMMAND);

      rl.prompt();
    }
  });
}

getInput();
