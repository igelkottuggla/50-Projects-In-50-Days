import { getEl, generatePassword } from './utils.js';

const resultEl = getEl('result');
const lengthEl = getEl('length');
const uppercaseEl = getEl('uppercase');
const lowercaseEl = getEl('lowercase');
const numbersEl = getEl('numbers');
const symbolsEl = getEl('symbols');
const generateEl = getEl('generate');
const clipboardEl = getEl('clipboard');

clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.textContent;
  if (!password) return;
  textarea.value = password;

  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert(`Password "${password}" has been copied to the clipoard`);
});

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasUpper = uppercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.textContent = generatePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol,
    length
  );
});
