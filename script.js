// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Steps the user will need to follow:
// Choose their password length between 8 to 128 characters
// Choose if they'd like lowercase to be included
// Choose if they'd like uppercase included
// Choose if they'd like numbers included
// Choose if they'd like special characters included
// At least one character type should be selected.

// Function to prompt user for password options
// Prompt for password length
// At least 8 characters, no more than 128 characters
// Conditional to check that the number that was entered is in range
// Prompts store data as strings, so need to parse into a number
// If the user's input is out of range, either return out of the function or call the function again
// Confirm which character sets to use
// If the user answers false for all, either return out of the function or call the function again
// Once they select a character set:
// Generate a random character for each selected character set
// Either push selected character sets to a mega-array of all selected characters
// OR you can keep the arrays separate and generate a random number to select the array and another to select the index
// Once character sets are selected, move on to generating random characters
function getPasswordOptions() {

  let passwordLength = parseInt(prompt('Please enter password length(between 8 and 128 characters):'));
  if (isNaN(passwordLength)) {
    alert('Please enter a valid number.');
    return getPasswordOptions();
  }

  if (passwordLength < 8) {
    alert('Password length must be at least 8 characters.');
    return getPasswordOptions();
  }

  if (passwordLength > 128) {
    alert('Password length cannot exceed 128 characters.');
    return getPasswordOptions;
  }
  let includeLowercase = confirm("Would you like to include lowercase letters?");
  let includeUppercase = confirm("Would you like to include uppercase letter?");
  let includeNumbers = confirm("Would you like to include any numbers?");
  let includeSpecialCharacters = confirm("Would you like to include any special characters?");


  if (includeLowercase === false &&
    includeUppercase === false &&
    includeNumbers === false &&
    includeSpecialCharacters === false
  ) {
    alert("At least 1 character type should be selected, please try again!");
    return getPasswordOptions();

  }
  return {
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSpecialCharacters
  };
}

// Function for getting a random element from an array
// Need a variable to hold the password as it's being generated
// Need a variable to hold the index that's being generated
// For loop that loops the number of times that matches the length the user chose
// Generate a random number
// That number is the index for a character in the mega-array
// So then, mega-array[generated-index] is the actual character
// Add that character to the password
// Once we finish the for loop, return the generated password


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



