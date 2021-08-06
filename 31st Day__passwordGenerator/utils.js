const randomChars = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function getEl(selection) {
  const element = document.getElementById(selection);
  if (element) return element;
  else {
    throw new Error(
      `Check the selection. There's no such elemant ${selection}`
    );
  }
}

//Fisher-Yates Shuffle for to shuffle the string
String.prototype.shuffle = function () {
  let str = this.split(''),
    strChars = str.length;

  for (let i = strChars - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = str[i];
    str[i] = str[j];
    str[j] = tmp;
  }
  return str.join('');
};

//another solution to shuffle the string
// function shuffelWord(word) {
//   let shuffledWord = '';
//   word = word.split('');
//   while (word.length > 0) {
//     shuffledWord += word.splice((word.length * Math.random()) << 0, 1);
//   }
//   return shuffledWord;
// }

function generatePassword(upper, lower, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = upper + lower + number + symbol;
  const typesArray = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArray.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomChars[funcName]();
    });
  }

  //   const finalPassword = shuffelWord(generatedPassword.slice(0, length));

  const finalPassword = generatedPassword.slice(0, length).shuffle();

  return finalPassword;
}

export { getEl, generatePassword };
