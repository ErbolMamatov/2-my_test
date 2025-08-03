// 🧠 1. Удаление дубликатов из массива
// Задание:
// У тебя есть массив, содержащий повторяющиеся числа. Напиши функцию, которая вернёт новый массив без дубликатов.

// js
// Копировать
// Редактировать
// // Пример:
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// // Ожидаемый результат: [1, 2, 3, 4, 5]

const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6, 6, 7, 8, 9];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);

// ⏱ 2. Таймер обратного отсчёта
// Задание:
// Напиши функцию, которая будет считать от 10 до 0 с интервалом в 1 секунду и выводить число в консоль. В конце напиши: "Старт!".

let counter = 10;

const timer = setInterval(() => {
  if (counter > 0) {
    console.log(counter);
    counter--;
  } else {
    console.log("Старт!");
    clearInterval(timer);
  }
}, 1000); // &**1000 мс = 1 секунда**& //


// 🗂 3. Подсчёт гласных в строке
// Задание:
// Напиши функцию, которая принимает строку и возвращает количество гласных (a, e, i, o, u).

// js
// Копировать
// Редактировать
// // Пример:
// countVowels("Hello World"); // -> 3

function Vowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
  
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  console.log(Vowels("Hello Aziz"));
  

// 🎲 4. Генерация случайного кода
// Задание:
// Сделай функцию, которая создаёт случайный 6-значный код, состоящий из букв и цифр (например: "a7b2c3").

function Generate(length = 6) {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
    return code;
  }
  
  console.log(generate()); // Например: "a7c2d9"
  

// 5 задача:
// Сделай функцию, которая принимает год и возвращает true, если это високосный год, и false — если нет.

// js
// Копировать
// Редактировать
// isLeapYear(2024); // -> true
// isLeapYear(2023); // -> false

function IsYeare(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  console.log(IsYeare(2024)); // TRUE
  console.log(IsYeare(2023)); // FALSE
  



//  СААТ 2 - 7 жарым сегиздерге чейин отурдум! //