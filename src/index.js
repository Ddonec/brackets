module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openingBrackets = [];
  const closingBrackets = [];
  const bracketMap = new Map();

  for (const [open, close] of bracketsConfig) {
    openingBrackets.push(open);
    closingBrackets.push(close);
    bracketMap.set(close, open);
  }

  for (const char of str) {
    if (openingBrackets.includes(char)) {
      // Если символ - открывающая скобка, добавляем его в стек.
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      // Если символ - закрывающая скобка
      const lastOpenBracket = stack.pop();
      if (lastOpenBracket !== bracketMap.get(char)) {
        // Если последняя открывающая скобка не соответствует текущей закрывающей, возвращаем false.
        return false;
      }
    }
  }

  // Если стек пуст, то все скобки сбалансированы.
  return stack.length === 0;
};

// не сделал на 100%, позде вернусь к задаче