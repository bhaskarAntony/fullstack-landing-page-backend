const brain = require('brain.js');
const readline = require('readline');

const net = new brain.recurrent.LSTM();
let trainingData = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function trainAI() {
  net.train(trainingData, { iterations: 500 });
}

function chatWithAI() {
  rl.question("You: ", (input) => {
    const response = net.run(input);
    console.log(`AI: ${response || "I don't know yet"}`);

    rl.question("Was this response helpful? (yes/no) ", (feedback) => {
      if (feedback.toLowerCase() === 'no') {
        rl.question("Please provide the correct response: ", (correctResponse) => {
          trainingData.push({ input, output: correctResponse });
          trainAI();
          console.log("Thank you! I'll remember that.");
          chatWithAI();
        });
      } else {
        console.log("Great! Let's continue.");
        chatWithAI();
      }
    });
  });
}

console.log("Say hi to your new AI friend!");
trainAI();
chatWithAI();
