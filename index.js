const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 3007;

// MongoDB Connection
mongoose.connect('mongodb+srv://bhaskarAntoty123:bhaskar3958@bhaskarantony.wagpkay.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors()); // Correctly invoking the cors middleware
app.use(express.json()); // No need for body-parser

// Routes
app.use('/api', require('./routes/leads'));
app.use('/api', require('./routes/internship'));
app.use('/api', require('./routes/eligibility'));

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

// const fs = require('fs');
// const inquirer = require('inquirer').default;
// const Fuse = require('fuse.js');

// // Load or create memory file
// function loadMemory() {
//     try {
//         const data = fs.readFileSync('ai_brain.json', 'utf8');
//         return JSON.parse(data);
//     } catch (error) {
//         return { knowledge: {} };
//     }
// }

// function saveMemory(memory) {
//     fs.writeFileSync('ai_brain.json', JSON.stringify(memory, null, 2));
// }

// // Function to teach the AI something new
// async function teachAI(memory) {
//     const { key, value } = await inquirer.prompt([
//         {
//             type: 'input',
//             name: 'key',
//             message: 'What do you want to teach your AI friend? (e.g., Who created you)'
//         },
//         {
//             type: 'input',
//             name: 'value',
//             message: 'What should be the answer to that question?'
//         }
//     ]);

//     // Save the new knowledge
//     memory.knowledge[key.toLowerCase()] = value;
//     console.log(`AI learned: "${key}" means "${value}"`);
// }

// // Function to ask the AI something using fuzzy matching
// async function askAI(memory) {
//     const { question } = await inquirer.prompt([
//         {
//             type: 'input',
//             name: 'question',
//             message: 'Ask your AI friend a question (e.g., Who created you)'
//         }
//     ]);

//     // Prepare Fuse.js for fuzzy searching
//     const keys = Object.keys(memory.knowledge);
//     const fuse = new Fuse(keys, {
//         threshold: 0.4, // Adjust threshold for fuzziness; lower means stricter match
//         distance: 100   // Max distance for fuzzy matching (higher means more lenient)
//     });

//     // Search for the most similar key
//     const result = fuse.search(question.toLowerCase());

//     if (result.length > 0) {
//         const bestMatch = result[0].item;
//         console.log(`AI answers: ${memory.knowledge[bestMatch]}`);
//     } else {
//         console.log("AI doesn't know the answer to that yet. Teach it something new!");
//     }
// }

// // Main function to interact with the AI
// async function interactWithAI() {
//     const aiMemory = loadMemory();

//     const { action } = await inquirer.prompt([
//         {
//             type: 'list',
//             name: 'action',
//             message: 'What would you like to do?',
//             choices: ['Teach AI something new', 'Ask AI a question']
//         }
//     ]);

//     if (action === 'Teach AI something new') {
//         await teachAI(aiMemory);
//     } else if (action === 'Ask AI a question') {
//         await askAI(aiMemory);
//     }

//     saveMemory(aiMemory);
// }

// // Run the interaction function
// interactWithAI();

