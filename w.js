const fs = require('fs');
const compromise = require('compromise');
const readline = require('readline');

// Load content from JSON file
const content = JSON.parse(fs.readFileSync('content.json', 'utf8'));

// Function to find answers from content
function findAnswer(query, topic) {
    const topicContent = content[topic];

    if (!topicContent) {
        return "Sorry, I don't have information on that topic.";
    }

    // Simplify query and topic content for processing
    const doc = compromise(topicContent);
    
    
    const sentences = doc.sentences().out('array');
    console.log(sentences);
    
    

    // Find matching sentences
    const matchingSentences = sentences.filter(sentence =>
        sentence.toLowerCase().includes(query.toLowerCase())
    );

    if (matchingSentences.length > 0) {
        return matchingSentences.join(' ');
    } else {
        return "I couldn’t find an exact answer to that. Could you ask in a different way?";
    }
}

// Typing animation function
function typeAnimation(text, callback) {
    let index = 0;
    const interval = setInterval(() => {
        process.stdout.write(text[index]); // Print character without newline
        index++;
        if (index === text.length) {
            clearInterval(interval);
            console.log(); // Move to the next line after finishing
            callback(); // Call the callback function after finishing typing
        }
    }, 10); // Delay between each character (in milliseconds)
}

// Set up readline for interactive questioning
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask questions continuously
function askQuestion(topic) {
    rl.question("Please ask your question: ", (question) => {
        const answer = findAnswer(question, topic);
        typeAnimation(answer, () => {
            // Ask if the user wants to continue
            rl.question("Do you want to ask another question? (yes/no): ", (response) => {
                if (response.toLowerCase() === 'yes') {
                    askQuestion(topic); // Recursive call to ask another question
                } else {
                    console.log("Thank you for your questions!");
                    rl.close(); // Close the readline interface
                }
            });
        });
    });
}

// Start the interactive question session
const topic = "india"; 
askQuestion(topic);
