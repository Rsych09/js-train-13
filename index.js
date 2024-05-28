// Завдання 1
/**
 * Функція `complexConvert` отримує об'єкт з числовими значеннями і збільшує їх на 1.
 *
 *  data - json дані для обробки.
 * Повертає - json дані в яких всі числові значення збільшено на 1.
 */
function complexConvert(data) {
  const newData = {}; // Створюємо новий порожній об'єкт

  for (let key in data) {
    // Перевіряємо, чи значення - число, та збільшуємо його на 1
    if (typeof data[key] === 'number') {
      newData[key] = data[key] + 1;
    } else {
      // Якщо значення не є числом, просто копіюємо його у новий об'єкт без змін
      newData[key] = data[key];
    }
  }

  return newData; // Повертаємо оброблений об'єкт
}

const data = {
  name: "John",
  age: 30,
  city: "New York",
  grades: {
    math: 90,
    science: 80,
    history: 70,
  },
};
console.log("Завдання: 1 ==============================");
console.log(complexConvert(data));

// Виведе
// {"name":"John","age":31,"city":"New York","grades":{"math":90,"science":80,"history":70}}

// Завдання 2

/**
 * Функція `manipulateUrl` приймає URL у вигляді рядка і виконує над ним різні операції.
 *
 * url - URL у вигляді рядка.
 *
 * Повертає об'єкт, що містить різні властивості URL.
 *  href: // Повний URL.
    protocol: // Протокол URL.
    host:  // Хост URL.
    pathname // Шлях URL.
    search // Рядок запиту URL.
    params: Параметри URL у вигляді масиву пар [ключ, значення].
 */
    function manipulateUrl(url) {
      const urlObj = new URL(url); // Створюємо об'єкт URL з вхідного рядка
    
      // Змінюємо протокол та хост URL
      urlObj.protocol = 'https:';
      urlObj.host = 'newhost.com';
    
      // Додаємо параметр 'newParam' зі значенням 'newValue'
      urlObj.searchParams.set('newParam', 'newValue');
    
      // Видаляємо параметр 'oldParam', якщо він існує
      urlObj.searchParams.delete('oldParam');
    
      return {
        href: urlObj.href,
        protocol: urlObj.protocol,
        host: urlObj.host,
        pathname: urlObj.pathname,
        search: urlObj.search,
        params: Array.from(urlObj.searchParams.entries()),
      };
    }
    
    let url = "http://example.com/path?param1=value1&param2=value2";
    console.log("Завдання: 2 ==============================");
    console.log(manipulateUrl(url));
    
// Виведе
// {
//   href: 'https://newhost.com/path?param1=value1&param2=value2&newParam=newValue',
//   protocol: 'https:',
//   host: 'newhost.com',
//   pathname: '/path',
//   search: '?param1=value1&param2=value2&newParam=newValue',
//   params: [
//     [ 'param1', 'value1' ],
//     [ 'param2', 'value2' ],
//     [ 'newParam', 'newValue' ]
//   ]
// }

// Завдання 3

/**
 * Функція `searchParamsURL` створює новий об'єкт URL з вхідної URL-адреси та повертає об'єкт з параметрами пошуку URL.
 *  url - Вхідна URL-адреса для аналізу.
 *  Повертає об'єкт з параметрами пошуку URL.
 */
function searchParamsURL(url) {
  const urlObj = new URL(url); // Створюємо об'єкт URL з вхідного рядка
  const params = {};

  for (let [key, value] of urlObj.searchParams.entries()) {
    // Додаємо кожен параметр пошуку до словника params
    params[key] = value;
  }

  return params; // Повертаємо словник з параметрами пошуку URL
}

console.log("Завдання: 3 ==============================");
console.log(
  searchParamsURL(
    "https://example.com/pathname?param1=value1&param2=value2&param3=value3"
  )
);

// Виведе
// Map(3) {
//   'param1' => 'value1',
//   'param2' => 'value2',
//   'param3' => 'value3'
// }

// Завдання 4

/**
 * Функція `manipulateSearchParams` повинна приймати об'єкт з параметрами та нову URL-адресу.
 * paramsObj (об'єкт) - об'єкт, який містить параметри пошуку.
 * newUrl (рядок) - нова URL-адреса.
 *
 * Функція повертає нову URL-адресу з властивістю searchParams, оновленою за допомогою параметрів з paramsObj.
 */
function manipulateSearchParams(paramsObj, newUrl) {
  const urlObj = new URL(newUrl); // Створюємо об'єкт URL з нової URL-адреси

  for (let key in paramsObj) {
    urlObj.searchParams.set(key, paramsObj[key]);
  }

  return urlObj.href; // Повертаємо нову URL-адресу
}

console.log("Завдання: 4 ==============================");
console.log(
  manipulateSearchParams(
    { param1: "value1", param2: "value2" },
    "https://example.com/pathname"
  )
);

// Виведе: https://example.com/pathname?param1=value1&param2=value2

// Завдання 5

/**
 * Функція `deleteSearchParams` повинна приймати масив ключів параметрів і URL-адресу.
 * keys (масив) - масив, який містить ключі параметрів пошуку для видалення.
 * url (рядок) - URL-адреса.
 *
 * Функція повертає нову URL-адресу, з якої були видалені вказані параметри пошуку.
 */
function deleteSearchParams(keys, url) {
  const urlObj = new URL(url); // Створюємо об'єкт URL з URL-адреси

  for (let key of keys) {
    urlObj.searchParams.delete(key);
  }

  return urlObj.href; // Повертаємо нову URL-адресу
}

console.log("Завдання: 5 ==============================");

console.log(
  deleteSearchParams(
    ["param1", "param2"],
    "https://example.com/pathname?param1=value1&param2=value2"
  )
);

// Виведе: https://example.com/pathname

// Завдання 6

/**
 * Функція `createURLWithParams` приймає об'єкт параметрів пошуку та базову URL-адресу.
 * params (об'єкт) - об'єкт, ключі та значення якого стануть параметрами пошуку нової URL-адреси.
 * url (рядок) - базова URL-адреса.
 *
 * Функція повертає нову URL-адресу, до якої додані параметри пошуку з об'єкта params.
 */
function createURLWithParams(params, url) {
  const urlObj = new URL(url); // Створюємо об'єкт URL з базової URL-адреси

  for (let key in params) {
    urlObj.searchParams.set(key, params[key]);
  }

  return urlObj.href; // Повертаємо нову URL-адресу
}

console.log("Завдання: 6 ==============================");
console.log(
  createURLWithParams(
    { param1: "value1", param2: "value2" },
    "https://example.com"
  )
);

// Виведе: https://example.com/?param1=value1&param2=value2

// Завдання 7

/**
 * Функція `updateURLHash` приймає URL-адресу та рядок, і оновлює значення хеша в URL-адресі.
 * url (рядок) - URL-адреса, яку треба оновити.
 * hash (рядок) - нове значення хеша.
 *
 * Функція повертає нову URL-адресу з оновленим хешем.
 */
function updateURLHash(url, hash) {
  const urlObj = new URL(url); // Створюємо об'єкт URL з вхідної URL-адреси
  urlObj.hash = hash; // Оновлюємо значення хеша в URL-адресі
  return urlObj.href; // Повертаємо нову URL-адресу
}

console.log("Завдання: 7 ==============================");
console.log(updateURLHash("https://example.com", "newHash"));

// Виведе: https://example.com/#newHash

// Завдання 8

/**
 * Функція `appendSearchParam` приймає URL-адресу, ключ і значення та додає новий параметр пошуку до URL-адреси.
 * url (рядок) - URL-адреса, до якої треба додати новий параметр пошуку.
 * key (рядок) - ключ нового параметра пошуку.
 * value (рядок) - значення нового параметра пошуку.
 *
 * Функція повертає нову URL-адресу з доданим параметром пошуку.
 */
function appendSearchParam(url, key, value) {
  const urlObj = new URL(url); // Створюємо об'єкт URL з вхідної URL-адреси
  urlObj.searchParams.append(key, value); // Додаємо новий параметр пошуку до URL-адреси
  return urlObj.href; // Повертаємо нову URL-адресу
}

console.log("Завдання: 8 ==============================");

console.log(appendSearchParam("https://example.com", "newParam", "newValue"));

// Виведе: https://example.com/?newParam=newValue

// Завдання 9
/**
 * Функція `modifyURLParameters` приймає URL та словник з параметрами пошуку.
 * Функція додає ці параметри до URL, а якщо такий параметр вже існує, замінює його.
 *
 * url - URL, який треба змінити.
 *  params - Словник з параметрами пошуку.
 * Повертається - Нова URL-адреса з оновленими параметрами пошуку.
 */
function modifyURLParameters(url, params) {
  const urlObj = new URL(url); // Створюємо об'єкт URL з вхідної URL-адреси

  for (let key in params) {
    urlObj.searchParams.set(key, params[key]);
  }

  return urlObj.href; // Повертаємо нову URL-адресу
}

let modifiedURL = modifyURLParameters("https://example.com/?param1=oldValue1", {
  param1: "newValue1",
  param2: "newValue2",
});

console.log("Завдання: 9 ==============================");
console.log(modifiedURL);

// Виведе: https://example.com/?param1=newValue1&param2=newValue2

// Завдання 10
/**
 * Функція `checkURLParameters` приймає URL та множину параметрів пошуку.
 * Функція перевіряє, чи є ці параметри в URL.
 *
 * url - URL, який потрібно перевірити.
 *  params - Множина параметрів, які потрібно перевірити.
 * Повертається - Об'єкт, ключі якого відповідають ключам вхідного об'єкта,
 *                    а значеннями є булеві значення, що вказують на наявність відповідного параметра в URL.
 */
function checkURLParameters(url, params) {
  const urlObj = new URL(url);
  const searchParams = urlObj.searchParams;
  const result = {};

  for (const param of params) {
    result[param] = searchParams.has(param);
  }

  return result;
}

console.log("Завдання: 10 ==============================");

let params = new Set(["param1", "param2", "param3", "param4"]);

console.log(
  checkURLParameters(
    "https://example.com/?param1=value1&param2=value2&param3=value3",
    params
  )
);
// Очікуваний вивід: { param1: true, param2: true, param3: true, param4: false }


// Завдання 11

/**
 * Функція `processURL` приймає URL та об'єкт з параметрами та налаштуваннями для обробки URL.
 * url (рядок) - URL, який потрібно обробити.
 * options (об'єкт) - об'єкт, який містить параметри та налаштування для обробки URL.
 *
 * Функція повертає новий URL, який було сформовано на основі вхідного URL і параметрів обробки.
 */
function processUrl(url, options) {
  const urlObj = new URL(url);

  if (options.searchParams) {
    for (const key in options.searchParams) {
      urlObj.searchParams.append(key, options.searchParams[key]);
    }
  }

  if (options.protocol) {
    urlObj.protocol = options.protocol;
  }

  if (options.host) {
    urlObj.host = options.host;
  }

  return urlObj.toString();
}

console.log("Завдання: 11 ==============================");

console.log(
  processUrl("https://example.com/path", {
    searchParams: { param1: "value1", param2: "value2" },
    protocol: "http:",
    host: "newexample.com",
  })
);
// Очікуваний результат: 'http://newexample.com/path?param1=value1&param2=value2'


// Завдання 12
/**
 * Функція `manipulateQuery` отримує URL та словник з додатковими налаштуваннями та працює над пошуковими параметрами URL.
 *
 * url - URL для обробки.
 * options - Словник з налаштуваннями. Включає ключі `append` та `delete`.
 *
 * Повертається - Новий URL з модифікованими пошуковими параметрами.
 */
function manipulateQuery(url, options) {
  const urlObj = new URL(url);

  if (options.get("append")) {
    for (const [key, value] of options.get("append")) {
      urlObj.searchParams.append(key, value);
    }
  }

  if (options.get("delete")) {
    for (const key of options.get("delete")) {
      urlObj.searchParams.delete(key);
    }
  }

  return urlObj.toString();
}

console.log("Завдання: 12 ==============================");

let options = new Map([
  [
    "append",
    new Map([
      ["param3", "value3"],
      ["param4", "value4"],
    ]),
  ],
  ["delete", ["param1", "param2"]],
]);

console.log(
  manipulateQuery(
    "https://example.com/path?param1=value1&param2=value2",
    options
  )
);
// Очікуваний результат: 'https://example.com/path?param3=value3&param4=value4'


// Завдання 13

/**
 * Функція `getUrlData` приймає URL у вигляді рядка і повертає інформацію про URL.
 * @url (рядок) - URL-адреса для аналізу.
 *
 * Функція повертає об'єкт, що містить наступні ключі:
 * - 'origin': походження URL.
 * - 'hostname': ім'я хоста URL.
 * - 'port': порт URL.
 * - 'username': ім'я користувача в URL.
 * - 'password': пароль в URL.
 */
function getUrlData(url) {
  const urlObj = new URL(url);
  const { origin, hostname, port, username, password } = urlObj;

  return {
    origin,
    hostname,
    port,
    username: urlObj.username,
    password: urlObj.password,
  };
}

console.log("Завдання: 13 ==============================");
console.log(getUrlData("https://username:password@example.com:8080/path"));
// Виведе:
// {
//   origin: 'https://example.com:8080',
//   hostname: 'example.com',
//   port: '8080',
//   username: 'username',
//   password: 'password'
// }


// Завдання 14

/**
 * Функція `sortUrlParams` приймає URL і повертає новий URL з відсортованими пошуковими параметрами.
 * @url (рядок) - URL-адреса для аналізу.
 *
 * Функція повертає новий URL з відсортованими пошуковими параметрами за ключами у порядку зростання.
 */
function sortUrlParams(url) {
  const urlObj = new URL(url);
  const searchParams = urlObj.searchParams;

  const sortedSearchParams = [...searchParams.entries()].sort(
    (a, b) => a[0].localeCompare(b[0])
  );

  urlObj.search = new URLSearchParams(sortedSearchParams).toString();

  return urlObj.toString();
}

console.log("Завдання: 14 ==============================");
console.log(
  sortUrlParams("https://example.com/path?param2=value2&param1=value1")
);
// Виведе: 'https://example.com/path?param1=value1&param2=value2'


// Завдання 15

/**
 * Функція `getURLValues` приймає URL і повертає масив значень пошукових параметрів.
 * url - URL-адреса для аналізу.
 * Повертаємо - Масив значень пошукових параметрів.
 */
function getURLValues(url) {
  const urlObj = new URL(url);
  const searchParams = urlObj.searchParams;
  const keys = [...searchParams.keys()];
  const values = [];

  for (const key of keys) {
    const keyValues = searchParams.getAll(key);
    values.push(...keyValues);
  }

  return values;
}

console.log("Завдання: 15 ==============================");
console.log(
  getURLValues(
    "https://example.com/path?param1=value1&param2=value2&param3=value3"
  )
);
// Очікуваний результат: [ 'value1', 'value2', 'value3' ]


// Завдання 16

/**
 * Функція `getUrlKeys` приймає URL і повертає масив з ключами пошукових параметрів.
 * @url (рядок) - URL-адреса для аналізу.
 *
 * Функція повертає масив, що містить усі ключі пошукових параметрів.
 */
function getUrlKeys(url) {
  const urlObj = new URL(url);
  const searchParams = urlObj.searchParams;
  const keys = [...searchParams.keys()];

  return keys;
}

console.log("Завдання: 16 ==============================");
console.log(getUrlKeys("https://example.com/path?param1=value1&param2=value2"));
// Очікуваний результат: [ 'param1', 'param2' ]

