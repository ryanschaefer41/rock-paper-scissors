const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log("Please enter either 'rock', 'paper', or 'scissors'.");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3); // calls a random number. w/o making this a variable,it returns undefined
  switch (randomNumber) { 
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

// console.log(getComputerChoice()); // prints rock, paper, or scissors

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie! Try again.";
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'You lost! Sad.';
    } else {
      return 'You won! Great.';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'You lost! Sad.';
    } else {
      return 'You won! Great.';
    }
  }
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'You lost! Sad.';
    } else {
      return 'You won! Great.';
    }
  }

  if (userChoice === 'bomb') {
    return 'Cheat code! Congratulations';
  }
};

/*
console.log(determineWinner('paper', 'rock'));
console.log(determineWinner('rock', 'paper'));
console.log(determineWinner('scissors', 'rock'));
console.log(determineWinner('scissors', 'scissors'));
*/

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You selected: ' + userChoice);
  console.log('The computer selected: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
