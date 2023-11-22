# MoSCoW

### Must have:
* Display words for user to see
* Definitions of the words

### Should have:
* Random word picker so you can guess the word for a small quiz
* Quiz will show definition and when clicked on can swap between the word and definition
* If the word is a React or Javascript word

### Could have: 
* Dark mode
* Words in alphabetical order

### Won't have:
* Reading mode, where AI voice reads to the user

# Atomic Design

### Atoms:
* Words
* Words definitions

### Molecules:
* Quiz card
* Navbar
* Dark mode

### Organism:
* Word bank
* Quiz

# INIT:
1. landingPage:
    * Where the user ends up once the page has been loaded
    * Starts them inside of the word bank
    * DISPLAY all words and definitions
    * DISPLAY navbar

2. quizPage:
    * DISPLAY random definition
    * User can click definition and see the word it goes to
    * DISPLAY navbar

# Procedural:

## BEGIN

* User travels to the page
    * User loads in and see the word bank


* User can look through the word bank, or swap to quiz mode
    * IF user goes to the quiz mode STATE changes and a definition is displayed for them

* When user is in quiz mode they can click on the definition to have it turn into the word that corresponds with it

## END

# Functional:
```
var words = {
    word1: "definition1",
    word2: "definition2",
    word3: "definition3"
};

for (var key in words) {
    if (words.hasOwnProperty(key)) {
        var definition = words[key];
        console.log(key + ": " + definition);
    }
}


var wordArray = object.keys(words);
var randomIndex = math.floor(math.random() * wordArray.length);
var randomWord = wordArray[randomIndex];

modeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("mode", "dark");
    } 
    else {
        localStorage.setItem("mode", "light");
    }
});

const savedMode = localStorage.getItem("mode");

if (savedMode === "dark") {
    document.body.classList.add("dark-mode");
}
```