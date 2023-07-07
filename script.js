let password = 7777;

let attempts = 3;

let line;

do {
  line = +prompt(`
        Введите Пароль
        попыток Осталось ${attempts}
    `);

  if (line !== password) {
    attempts--;
  } else {
    alert("пароль Парвильный");
    break;
  }
  if (attempts === 0) {
    alert("Пароль можно будет ввесть через 15 секунд");
    attempts = 2;
    setTimeout(() => {
        line = +prompt(`
            Введите Пароль
            попыток Осталось ${attempts}
        `);
    }, 15 * 1000);
  }
} while (true);