
//stores the list of 20 quotes from famous software engineers
let quotesArray = [
    ["Martin Fowler", "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", "Author of 'Refactoring' and a prominent advocate for readable code in software engineering."],
    ["Ward Cunningham", "You don't need to be a great coder to be a great software engineer; you need to be a great problem-solver.", "Inventor of the wiki concept, promoting collaborative work, and a contributor to agile software methodologies."],
    ["Robert C. Martin", "The only way to go fast is to go well.", "Known as 'Uncle Bob,' he emphasizes good practices in his book 'Clean Code.'"],
    ["Kent Beck", "First make it work, then make it right, then make it fast.", "Creator of Extreme Programming (XP), a methodology that balances speed with proper engineering."],
    ["Steve McConnell", "Carefully engineered code is not just about the code itself, but the process used to create it.", "Author of 'Code Complete,' focusing on structured software development processes."],
    ["Joel Spolsky", "A software engineer is not just a coder, but someone who can understand and solve complex problems.", "Co-founder of Stack Overflow, emphasizing the broader role of software engineers."],
    ["Steve Jobs", "The best way to predict the future is to invent it.", "Co-founder of Apple Inc., he revolutionized technology with his innovative approach to product development."],
    ["Fred Brooks", "Adding manpower to a late software project makes it later.", "Author of 'The Mythical Man-Month,' a classic book on software engineering and project management."],
    ["Grady Booch", "The function of good software is to make the complex appear to be simple.", "Co-creator of UML, stressing the importance of design in software engineering."],
    ["Tim Berners-Lee", "The Web does not just connect machines, it connects people.", "Inventor of the World Wide Web, emphasizing the impact of software on society."],
    ["Bjarne Stroustrup", "The most important single aspect of software development is to be clear about what you are trying to build.", "Creator of C++, he highlights the importance of a clear understanding of project goals."],
    ["Steve Wozniak", "Wherever smart people work, doors are unlocked.", "Co-founder of Apple Inc., reinforcing the value of a collaborative work environment."],
    ["Donald Knuth", "Premature optimization is the root of all evil.", "Known for 'The Art of Computer Programming,' he underscores the importance of focus and planning in software engineering."],
    ["Ken Thompson", "When in doubt, use brute force.", "Co-creator of Unix, highlighting the simplicity of direct approaches in complex engineering problems."],
    ["Linus Torvalds", "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.", "Creator of the Linux kernel, underscoring the intrinsic motivation behind successful software engineering careers."],
    ["Jeff Atwood", "If you do something long enough, you develop an expertise. It doesn’t matter if it’s writing, software engineering, or bowling.", "Co-founder of Stack Overflow, emphasizing the role of persistence in developing a career in software engineering."],
    ["Ada Lovelace", "The Analytical Engine has no pretensions whatever to originate anything. It can do whatever we know how to order it to perform.", "Considered the world's first computer programmer, highlighting the role of creativity and planning in software engineering."],
    ["Brian Kernighan", "Controlling complexity is the essence of computer programming.", "Co-author of 'The C Programming Language,' he focuses on managing complexity in software projects."],
    ["Bill Gates", "If you can't make it good, at least make it look good.", "Co-founder of Microsoft, emphasizing the importance of presentation and user experience in software engineering."],
    ["Dennis Ritchie", "The only way to learn a new programming language is by writing programs in it.", "Co-creator of the C programming language, stressing the importance of hands-on experience in building a software engineering career."]
];


//creates the mechanism that returns a random author-quote-credentials from the list
const returnQuote = () => {
    let randomNumber = Math.floor(Math.random() * quotesArray.length);
    let randomAuthor = quotesArray[randomNumber][0];
    let randomQuote = quotesArray[randomNumber][1];
    let randomCredentials = quotesArray[randomNumber][2];

    let displayText = `<p>${randomQuote}</p><p>— ${randomAuthor}, ${randomCredentials}</p>`;

    document.getElementById('quoteDisplay').innerHTML = displayText; // Updates the quote display container
};

//connects the click of an element at the DOM with running the select-quote function
document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('quoteButton');
    element.addEventListener("click", returnQuote);
});
