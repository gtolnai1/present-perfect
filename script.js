// Present Perfect Practice App for A2 learners

const sentences = [
  // Affirmative (20)
  { type: "affirmative", correct: ["I", "have", "eaten", "breakfast", "."], distractors: ["cat", "run", "?"] },
  { type: "affirmative", correct: ["She", "has", "visited", "London", "."], distractors: ["dog", "jump", "?"] },
  { type: "affirmative", correct: ["They", "have", "finished", "their", "homework", "."], distractors: ["banana", "sing", "?"] },
  { type: "affirmative", correct: ["We", "have", "seen", "that", "movie", "."], distractors: ["swim", "car", "?"] },
  { type: "affirmative", correct: ["He", "has", "lost", "his", "keys", "."], distractors: ["bike", "dance", "?"] },
  { type: "affirmative", correct: ["You", "have", "called", "me", "."], distractors: ["tree", "walk", "?"] },
  { type: "affirmative", correct: ["My", "mom", "has", "baked", "a", "cake", "."], distractors: ["fly", "?"] },
  { type: "affirmative", correct: ["The", "teacher", "has", "explained", "the", "lesson", "."], distractors: ["dog", "?"] },
  { type: "affirmative", correct: ["Students", "have", "arrived", "early", "."], distractors: ["banana", "laugh", "?"] },
  { type: "affirmative", correct: ["I", "have", "met", "your", "friend", "."], distractors: ["run", "cat", "?"] },
  { type: "affirmative", correct: ["He", "has", "opened", "the", "window", "."], distractors: ["dog", "jump", "?"] },
  { type: "affirmative", correct: ["We", "have", "bought", "new", "shoes", "."], distractors: ["sing", "banana", "?"] },
  { type: "affirmative", correct: ["She", "has", "written", "a", "letter", "."], distractors: ["swim", "car", "?"] },
  { type: "affirmative", correct: ["They", "have", "gone", "home", "."], distractors: ["bike", "dance", "?"] },
  { type: "affirmative", correct: ["You", "have", "cleaned", "the", "room", "."], distractors: ["tree", "walk", "?"] },
  { type: "affirmative", correct: ["My", "dad", "has", "washed", "the", "car", "."], distractors: ["book", "blue", "?"] },
  { type: "affirmative", correct: ["The", "children", "have", "played", "in", "the", "park", "."], distractors: ["run", "?"] },
  { type: "affirmative", correct: ["I", "have", "found", "my", "wallet", "."], distractors: ["book", "blue", "?"] },
  { type: "affirmative", correct: ["She", "has", "drawn", "a", "picture", "."], distractors: ["run", "?"] },
  { type: "affirmative", correct: ["We", "have", "visited", "the", "museum", "."], distractors: ["dog", "?"] },

  // Negative (20)
  { type: "negative", correct: ["I", "have", "not", "seen", "that", "film", "."], distractors: ["run", "cat", "?"] },
  { type: "negative", correct: ["She", "has", "not", "eaten", "lunch", "."], distractors: ["dog", "jump", "?"] },
  { type: "negative", correct: ["They", "have", "not", "finished", "their", "homework", "."], distractors: ["banana", "sing", "?"] },
  { type: "negative", correct: ["We", "have", "not", "visited", "Paris", "."], distractors: ["swim", "car", "?"] },
  { type: "negative", correct: ["He", "has", "not", "lost", "his", "phone", "."], distractors: ["bike", "dance", "?"] },
  { type: "negative", correct: ["You", "have", "not", "called", "me", "."], distractors: ["tree", "walk", "?"] },
  { type: "negative", correct: ["My", "mom", "has", "not", "baked", "a", "cake", "."], distractors: ["fly", "?"] },
  { type: "negative", correct: ["The", "teacher", "has", "not", "explained", "the", "lesson", "."], distractors: ["dog", "?"] },
  { type: "negative", correct: ["Students", "have", "not", "arrived", "yet", "."], distractors: ["banana", "laugh", "?"] },
  { type: "negative", correct: ["I", "have", "not", "met", "your", "friend", "."], distractors: ["run", "cat", "?"] },
  { type: "negative", correct: ["He", "has", "not", "opened", "the", "window", "."], distractors: ["dog", "jump", "?"] },
  { type: "negative", correct: ["We", "have", "not", "bought", "new", "shoes", "."], distractors: ["sing", "banana", "?"] },
  { type: "negative", correct: ["She", "has", "not", "written", "a", "letter", "."], distractors: ["swim", "car", "?"] },
  { type: "negative", correct: ["They", "have", "not", "gone", "home", "."], distractors: ["bike", "dance", "?"] },
  { type: "negative", correct: ["You", "have", "not", "cleaned", "the", "room", "."], distractors: ["tree", "walk", "?"] },
  { type: "negative", correct: ["My", "dad", "has", "not", "washed", "the", "car", "."], distractors: ["book", "blue", "?"] },
  { type: "negative", correct: ["The", "children", "have", "not", "played", "in", "the", "park", "."], distractors: ["run", "?"] },
  { type: "negative", correct: ["I", "have", "not", "found", "my", "wallet", "."], distractors: ["book", "blue", "?"] },
  { type: "negative", correct: ["She", "has", "not", "drawn", "a", "picture", "."], distractors: ["run", "?"] },
  { type: "negative", correct: ["We", "have", "not", "visited", "the", "museum", "."], distractors: ["dog", "?"] },

  // Question (20)
  { type: "question", correct: ["Have", "I", "eaten", "breakfast", "?"], distractors: ["cat", "run", "."] },
  { type: "question", correct: ["Has", "she", "visited", "London", "?"], distractors: ["dog", "jump", "."] },
  { type: "question", correct: ["Have", "they", "finished", "their", "homework", "?"], distractors: ["banana", "sing", "."] },
  { type: "question", correct: ["Have", "we", "seen", "that", "movie", "?"], distractors: ["swim", "car", "."] },
  { type: "question", correct: ["Has", "he", "lost", "his", "keys", "?"], distractors: ["bike", "dance", "."] },
  { type: "question", correct: ["Have", "you", "called", "me", "?"], distractors: ["tree", "walk", "."] },
  { type: "question", correct: ["Has", "my", "mom", "baked", "a", "cake", "?"], distractors: ["fly", "."] },
  { type: "question", correct: ["Has", "the", "teacher", "explained", "the", "lesson", "?"], distractors: ["dog", "."] },
  { type: "question", correct: ["Have", "students", "arrived", "early", "?"], distractors: ["banana", "laugh", "."] },
  { type: "question", correct: ["Have", "I", "met", "your", "friend", "?"], distractors: ["run", "cat", "."] },
  { type: "question", correct: ["Has", "he", "opened", "the", "window", "?"], distractors: ["dog", "jump", "."] },
  { type: "question", correct: ["Have", "we", "bought", "new", "shoes", "?"], distractors: ["sing", "banana", "."] },
  { type: "question", correct: ["Has", "she", "written", "a", "letter", "?"], distractors: ["swim", "car", "."] },
  { type: "question", correct: ["Have", "they", "gone", "home", "?"], distractors: ["bike", "dance", "."] },
  { type: "question", correct: ["Have", "you", "cleaned", "the", "room", "?"], distractors: ["tree", "walk", "."] },
  { type: "question", correct: ["Has", "my", "dad", "washed", "the", "car", "?"], distractors: ["book", "blue", "."] },
  { type: "question", correct: ["Have", "the", "children", "played", "in", "the", "park", "?"], distractors: ["run", "."] },
  { type: "question", correct: ["Have", "I", "found", "my", "wallet", "?"], distractors: ["book", "blue", "."] },
  { type: "question", correct: ["Has", "she", "drawn", "a", "picture", "?"], distractors: ["run", "."] },
  { type: "question", correct: ["Have", "we", "visited", "the", "museum", "?"], distractors: ["dog", "."] }
];

let sessionSentences = [];
let currentSentenceIndex = 0;
let selectedWords = [];
let wordButtons = [];
const sentenceArea = document.getElementById("sentence-area");
const userSentence = document.getElementById("user-sentence");
const checkBtn = document.getElementById("check-btn");
const nextBtn = document.getElementById("next-btn");
const feedback = document.getElementById("feedback");
const instructionBox = document.getElementById("instruction-box");
const progressBar = document.getElementById("progress-bar");
const restartBtn = document.getElementById("restart-btn");

function shuffle(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickSessionSentences() {
  sessionSentences = shuffle(sentences).slice(0, 15);
}

function renderProgressBar() {
  const percent = ((currentSentenceIndex) / sessionSentences.length) * 100;
  progressBar.style.width = percent + "%";
}

function renderSentence() {
  sentenceArea.innerHTML = "";
  userSentence.innerHTML = "";
  feedback.innerHTML = "";
  selectedWords = [];
  wordButtons = [];
  checkBtn.disabled = false;

  // Hide/show navigation buttons
  if (currentSentenceIndex < sessionSentences.length - 1) {
    nextBtn.style.display = "inline-block";
    restartBtn.style.display = "none";
  } else {
    nextBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
  }

  const sentence = sessionSentences[currentSentenceIndex];
  let words = sentence.correct.concat(sentence.distractors);
  words = shuffle(words);

  words.forEach((word, idx) => {
    const btn = document.createElement("button");
    btn.className = "word-btn";
    btn.textContent = word;
    btn.addEventListener("click", () => selectWord(word, idx));
    wordButtons.push(btn);
    sentenceArea.appendChild(btn);
  });

  // Show dynamic instruction
  let instruction = "";
  if (sentence.type === "affirmative") {
    instruction = "Make an <b>affirmative</b> sentence in the Present Perfect.";
  } else if (sentence.type === "negative") {
    instruction = "Make a <b>negative</b> sentence in the Present Perfect.";
  } else if (sentence.type === "question") {
    instruction = "Make a <b>question</b> in the Present Perfect.";
  }
  instructionBox.innerHTML = instruction;

  renderProgressBar();
}

function selectWord(word, idx) {
  const selectedIdx = selectedWords.indexOf(word + "|" + idx);
  if (selectedIdx > -1) {
    selectedWords.splice(selectedIdx, 1);
    wordButtons[idx].classList.remove("selected");
  } else {
    selectedWords.push(word + "|" + idx);
    wordButtons[idx].classList.add("selected");
  }
  updateUserSentence();
}

function updateUserSentence() {
  const words = selectedWords.map(wi => wi.split("|")[0]);
  userSentence.textContent = words.join(" ");
}

function checkAnswer() {
  const sentence = sessionSentences[currentSentenceIndex];
  const userWords = selectedWords.map(wi => wi.split("|")[0]);
  if (userWords.length === 0) {
    feedback.innerHTML = "Please select words to form a sentence.";
    return;
  }
  if (arraysEqual(userWords, sentence.correct)) {
    feedback.innerHTML = "<span style='color:green'>Correct!</span>";
  } else {
    feedback.innerHTML = "<span style='color:red'>Try again!</span>";
  }
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function nextSentence() {
  if (currentSentenceIndex < sessionSentences.length - 1) {
    currentSentenceIndex++;
    renderSentence();
  }
}

function restartSession() {
  pickSessionSentences();
  currentSentenceIndex = 0;
  renderSentence();
}

checkBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", nextSentence);
restartBtn.addEventListener("click", restartSession);

// Initialize session
pickSessionSentences();
renderSentence();
