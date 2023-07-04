let { todos } = require("./todos");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let idCount = 1;

function getInput() {
  rl.setPrompt("명령하세요 : ");
  rl.prompt();

  rl.on("line", (answer) => {
    if (answer === "exit") rl.close();
    else {
      let input = answer.split("$");

      if (input[0] === "show") showTodo(input);
      else if (input[0] === "add") addTodo(input);
      else if (input[0] === "delete") deleteTodo(input);
      else if (input[0] === "update") updateTodo(input);
      else console.log("제대로 된 명령어를 입력해주세요.");

      rl.prompt();
    }
  });
}
