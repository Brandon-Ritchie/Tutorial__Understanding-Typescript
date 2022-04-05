let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Brandon";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while(true) {}; // Also is a "never" return
}

generateError("An error occured!", 500);
