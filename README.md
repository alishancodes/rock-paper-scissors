# Rock Paper Scissors

My first JavaScript project from The Odin Project.

This project was built completely in the browser console. No HTML buttons or UI yet. The focus was on JavaScript logic and problem solving.

---

## Goal

Create a Rock Paper Scissors game that:

- Plays 5 rounds.
- Takes valid user input.
- Randomly generates the computer's choice.
- Keeps score.
- Announces the winner of every round.
- Announces the final winner.

---

## Before Coding

I first wrote pseudocode instead of immediately writing JavaScript.

Questions I had before starting:

- How do I randomly generate Rock, Paper or Scissors?
- How should I compare the two choices?
- How do I keep score?
- How should I split the project into functions?
- Should everything be one function or multiple functions?

---

## Problems I Ran Into

### 1. Didn't understand `return`

Initially I thought `return` worked like C and stopped the whole program.

Learnt:

- `return` only exits the current function.
- Functions can have multiple `return` statements.
- Only one `return` executes during a function call.

---

### 2. Variable Scope

At first I kept everything as global variables.

Then I learnt:

- Local variables.
- Global variables.
- Function parameters.
- Returning values instead of depending on globals.

This made the code much cleaner.

---

### 3. Functions

Originally my functions were doing too many things.

Example:

- Deciding the winner.
- Printing the result.
- Updating the score.

Later I changed it so functions had clearer responsibilities.

---

### 4. Random Numbers

Initially my computer choice wasn't equally random.

I used:

```js
Math.floor(Math.random() * 10)
```

which made one option appear more often than the others.

Learnt:

- `Math.random()` returns values from 0 (inclusive) to 1 (exclusive).
- `Math.floor(Math.random() * 3)` gives exactly three equally likely values.

---

### 5. Invalid Input

Initially I asked the user to refresh the page.

Later I changed it to keep asking until valid input was entered using a `do...while` loop.

---

### 6. Template Literals

Started with string concatenation:

```js
"User : " + humanScore
```

Later switched to template literals:

```js
`User : ${humanScore}`
```

Much cleaner.

---

### 7. Refactoring

The final code is very different from the first version.

Changes I made:

- Added `getHumanChoice()`
- Added `getComputerChoice()`
- Added `playRound()`
- Added `startGame()`
- Changed numbering from 1,2,3 to 0,1,2
- Added score tracking
- Added round result after every round
- Added final result
- Improved random number generation
- Added input validation
- Reduced unnecessary global variables

---

## Things I Learnt

While building this project I learnt about:

- Functions
- Function parameters
- Return values
- Scope
- Local vs Global variables
- `if / else if / else`
- `do...while`
- `for` loops
- Template literals
- `Math.random()`
- `Math.floor()`
- Refactoring
- Separating logic from output

---

## Biggest Takeaway

The hardest part wasn't writing JavaScript.

The hardest part was deciding **how to structure the program**.

I rewrote and refactored this project multiple times while learning why my earlier versions weren't ideal.

Looking back at the first version and the final version, the improvement came more from understanding programming concepts than from learning new JavaScript syntax.