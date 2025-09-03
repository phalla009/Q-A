// 50 Questions array (តែខ្លះៗត្រូវបង្កប់សម្រាប់ឧទាហរណ៍, អ្នកអាចបន្ថែមបាន)
const questions = [
  {
    q: "HTML stands for?",
    choices: [
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlinks Text Mark Language",
      "Home Tool Markup Language",
    ],
    answer: 0,
  },
  {
    q: "CSS stands for?",
    choices: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets",
    ],
    answer: 0,
  },
  {
    q: "JavaScript is a ___ language?",
    choices: ["Programming", "Markup", "Styling", "Database"],
    answer: 0,
  },
  {
    q: "Which HTML attribute is used to define inline styles?",
    choices: ["style", "class", "font", "styles"],
    answer: 0,
  },
  {
    q: "Which property is used to change text color in CSS?",
    choices: ["text-color", "fgcolor", "color", "font-color"],
    answer: 2,
  },
  {
    q: "Which company developed JavaScript?",
    choices: ["Netscape", "Microsoft", "Sun Microsystems", "IBM"],
    answer: 0,
  },
  {
    q: "The <a> tag in HTML defines a ___?",
    choices: ["Link", "Button", "Paragraph", "Image"],
    answer: 0,
  },
  {
    q: "Which HTML element is used for the largest heading?",
    choices: ["<h1>", "<h6>", "<header>", "<head>"],
    answer: 0,
  },
  {
    q: "Which symbol is used for comments in JavaScript?",
    choices: ["//", "/* */", "#", "<!-- -->"],
    answer: 0,
  },
  {
    q: "What does API stand for?",
    choices: [
      "Application Programming Interface",
      "Applied Program Internet",
      "Advanced Programming Instruction",
      "Application Process Integration",
    ],
    answer: 0,
  },
  {
    q: "Which CSS property controls element width?",
    choices: ["width", "size", "length", "weight"],
    answer: 0,
  },
  {
    q: "Which HTML tag is used to define a table row?",
    choices: ["<tr>", "<td>", "<table>", "<row>"],
    answer: 0,
  },
  {
    q: "Which HTML tag is used for an unordered list?",
    choices: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: 0,
  },
  {
    q: "In JavaScript, what is NaN?",
    choices: [
      "Not a Number",
      "Null and None",
      "Number Array Node",
      "New a Number",
    ],
    answer: 0,
  },
  {
    q: "Which method is used to find an element by ID in JavaScript?",
    choices: [
      "getElementById()",
      "getElementsByName()",
      "querySelectorAll()",
      "findById()",
    ],
    answer: 0,
  },
  {
    q: "Which HTML tag is used to include an image?",
    choices: ["<img>", "<image>", "<src>", "<picture>"],
    answer: 0,
  },
  {
    q: "Which CSS property is used to change the background color?",
    choices: ["background-color", "bgcolor", "color", "back-color"],
    answer: 0,
  },
  {
    q: "What does SQL stand for?",
    choices: [
      "Structured Query Language",
      "Simple Query Language",
      "Sequential Query Language",
      "Standard Query Link",
    ],
    answer: 0,
  },
  {
    q: "Which HTML tag is used to define a paragraph?",
    choices: ["<p>", "<para>", "<text>", "<paragraph>"],
    answer: 0,
  },
  {
    q: "Which property is used to change the font size in CSS?",
    choices: ["font-size", "text-size", "size", "font-style"],
    answer: 0,
  },
  {
    q: "Which JavaScript method is used to convert a JSON string to an object?",
    choices: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.object()",
      "JSON.toObject()",
    ],
    answer: 0,
  },
  {
    q: "The <form> tag in HTML is used to ___?",
    choices: [
      "Collect user input",
      "Create a table",
      "Display images",
      "Link pages",
    ],
    answer: 0,
  },
  {
    q: "Which CSS property controls the space between letters?",
    choices: ["letter-spacing", "word-spacing", "line-height", "text-indent"],
    answer: 0,
  },
  {
    q: "Which HTML element defines the document title?",
    choices: ["<title>", "<head>", "<header>", "<meta>"],
    answer: 0,
  },
  {
    q: "Which JavaScript keyword declares a variable?",
    choices: ["var", "let", "const", "All of the above"],
    answer: 3,
  },
  {
    q: "Which HTML tag is used for a line break?",
    choices: ["<br>", "<break>", "<lb>", "<hr>"],
    answer: 0,
  },
  {
    q: "Which HTML element is used to embed a video?",
    choices: ["<video>", "<media>", "<movie>", "<source>"],
    answer: 0,
  },
  {
    q: "What is the correct syntax for CSS comments?",
    choices: ["/* comment */", "// comment", "<!-- comment -->", "# comment"],
    answer: 0,
  },
  {
    q: "Which property is used to make text bold in CSS?",
    choices: ["font-weight", "font-style", "text-bold", "text-weight"],
    answer: 0,
  },
  {
    q: "In JavaScript, which operator is used for strict equality?",
    choices: ["===", "==", "=", "!=="],
    answer: 0,
  },
  {
    q: "Which HTML tag defines a checkbox?",
    choices: [
      "<input type='checkbox'>",
      "<checkbox>",
      "<input type='option'>",
      "<option>",
    ],
    answer: 0,
  },
  {
    q: "What is the purpose of the <head> element in HTML?",
    choices: [
      "Contains metadata",
      "Contains visible content",
      "Links to other pages",
      "Defines layout",
    ],
    answer: 0,
  },
  {
    q: "Which CSS property controls element visibility?",
    choices: ["visibility", "display", "hidden", "opacity"],
    answer: 0,
  },
  {
    q: "Which HTML tag is used to define a table header cell?",
    choices: ["<th>", "<td>", "<tr>", "<table>"],
    answer: 0,
  },
  {
    q: "Which JavaScript function displays a message in a dialog box?",
    choices: ["alert()", "prompt()", "console.log()", "confirm()"],
    answer: 0,
  },
  {
    q: "Which HTML tag is used to define a dropdown list?",
    choices: ["<select>", "<option>", "<input>", "<dropdown>"],
    answer: 0,
  },
  {
    q: "Which CSS property controls the float of elements?",
    choices: ["float", "position", "display", "clear"],
    answer: 0,
  },
  {
    q: "Which HTML element is used to define a hyperlink?",
    choices: ["<a>", "<link>", "<href>", "<url>"],
    answer: 0,
  },
  {
    q: "Which HTML element is used for emphasized text?",
    choices: ["<em>", "<strong>", "<i>", "<b>"],
    answer: 0,
  },
  {
    q: "Which JavaScript method adds an item to the end of an array?",
    choices: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0,
  },
  {
    q: "Which HTML element is used to define a list item?",
    choices: ["<li>", "<ul>", "<ol>", "<list>"],
    answer: 0,
  },
  {
    q: "Which property is used to set the font family in CSS?",
    choices: ["font-family", "font-style", "text-font", "font-type"],
    answer: 0,
  },
  {
    q: "Which HTML tag is used to define the body content?",
    choices: ["<body>", "<head>", "<html>", "<section>"],
    answer: 0,
  },
  {
    q: "Which HTML tag defines a numbered list?",
    choices: ["<ol>", "<ul>", "<li>", "<list>"],
    answer: 0,
  },
  {
    q: "Which JavaScript object represents the browser window?",
    choices: ["window", "document", "navigator", "screen"],
    answer: 0,
  },
  {
    q: "Which HTML element is used to display a picture?",
    choices: ["<img>", "<picture>", "<image>", "<src>"],
    answer: 0,
  },
  {
    q: "Which CSS property controls the element's margin?",
    choices: ["margin", "padding", "border", "spacing"],
    answer: 0,
  },
  {
    q: "Which JavaScript keyword defines a constant variable?",
    choices: ["const", "let", "var", "constant"],
    answer: 0,
  },
  {
    q: "Which HTML tag is used to create a button?",
    choices: ["<button>", "<input>", "<a>", "<link>"],
    answer: 0,
  },
  {
    q: "Which CSS property is used to create rounded corners?",
    choices: ["border-radius", "border-round", "corner-radius", "radius"],
    answer: 0,
  },
  {
    q: "Which HTML element is used to play audio?",
    choices: ["<audio>", "<sound>", "<music>", "<media>"],
    answer: 0,
  },
  {
    q: "Which HTML element is used to define a section in a page?",
    choices: ["<section>", "<div>", "<article>", "<span>"],
    answer: 0,
  },
  {
    q: "Which HTML element is used to define a footer?",
    choices: ["<footer>", "<bottom>", "<section>", "<div>"],
    answer: 0,
  },
  {
    q: "What is the main purpose of responsive web design?",
    choices: [
      "Adapt layout to different screen sizes",
      "Faster loading",
      "Improve colors",
      "Add animations",
    ],
    answer: 0,
  },
  {
    q: "Which HTML attribute is used to open a link in a new tab?",
    choices: ["target='_blank'", "href='_new'", "link='_tab'", "rel='tab'"],
    answer: 0,
  },
];

// --- JS logic (shuffle + score) ---
let current = 0;
let selected = null;
let score = 0;

const totalEl = document.getElementById("total");
const currentEl = document.getElementById("current");
const scoreEl = document.getElementById("score");
const qtext = document.getElementById("qtext");
const choicesEl = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

totalEl.textContent = questions.length;

// Shuffle choices
function shuffleChoices(q) {
  const choicesCopy = q.choices.map((c, i) => ({ text: c, index: i }));
  for (let i = choicesCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choicesCopy[i], choicesCopy[j]] = [choicesCopy[j], choicesCopy[i]];
  }
  q.shuffledChoices = choicesCopy.map((c) => c.text);
  q.shuffledAnswer = choicesCopy.findIndex((c) => c.index === q.answer);
}

function renderQuestion() {
  selected = null;
  checkBtn.disabled = false;
  nextBtn.disabled = true;
  feedback.textContent = "Select an answer and press Check.";
  currentEl.textContent = current + 1;

  const item = questions[current];
  shuffleChoices(item);

  qtext.textContent = item.q;
  choicesEl.innerHTML = "";

  item.shuffledChoices.forEach((c, i) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.type = "button";
    // Display the HTML tags as plain text
    btn.textContent = `${String.fromCharCode(65 + i)}. ${c}`;
    btn.dataset.index = i;
    btn.addEventListener("click", () => {
      [...choicesEl.children].forEach((x) => x.classList.remove("selected"));
      btn.classList.add("selected");
      selected = i;
    });
    choicesEl.appendChild(btn);
  });
}

checkBtn.addEventListener("click", () => {
  if (selected === null) {
    feedback.textContent = "Please choose an answer first.";
    return;
  }
  const q = questions[current];
  const correct = q.shuffledAnswer;

  [...choicesEl.children].forEach((el, i) => {
    el.disabled = true;
    if (i == correct) el.classList.add("correct");
    if (i == selected && selected != correct) el.classList.add("wrong");
  });

  if (selected === correct) {
    score += 2;
    feedback.textContent = "Correct!";
  } else {
    feedback.textContent = `Wrong! Correct answer is ${String.fromCharCode(
      65 + correct
    )}.`;
  }
  scoreEl.textContent = score;
  checkBtn.disabled = true;
  nextBtn.disabled = false;
});

restartBtn.style.display = "none";

nextBtn.addEventListener("click", () => {
  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    qtext.textContent = "Quiz complete!";
    let feedbackMsg = `You scored <strong>${score}</strong> out of <strong>${
      questions.length * 2
    }</strong>.`;
    if (score < 40) {
      feedbackMsg += "<br><strong>You did poorly! 😢 Try again!</strong>";
    } else {
      feedbackMsg += "<br><strong>Well done! 🎉</strong>";
    }
    choicesEl.innerHTML = `<div class="small">${feedbackMsg}</div>`;
    feedback.textContent = "Press Restart to try again.";
    checkBtn.disabled = true;
    nextBtn.disabled = true;
    restartBtn.style.display = "inline-block";
    restartBtn.focus();
  }
});

restartBtn.addEventListener("click", () => {
  current = 0;
  score = 0;
  scoreEl.textContent = score;
  renderQuestion();
  checkBtn.disabled = false;
  nextBtn.disabled = true;
  restartBtn.style.display = "none";
});

// Initialize
renderQuestion();
