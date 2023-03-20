//--------------------------
// 1. ZMIENNE I TYPY
//--------------------------
console.log("ZAD.1 a)");
console.log();
//a) zdefiniuj zmienne const z wartościami w następujących typach: boolean, number, string. Wyloguj w konsoli te zmienne oraz użyj typeof aby wyświetlić również typy danych
const boolean = true;
console.log(`${boolean} to jest:  ${typeof boolean}`);
const string = "ZADANIE DOMOWE JS";
console.log(`${string} to jest:  ${typeof string}`);
const number = 20;
console.log(`${number} to jest:  ${typeof number}`);

console.log();
console.log("ZAD.1 b)");
console.log();
//b) użyj console log i wyświetl wyniki poniższych działań, dodatkowo wyjaśnij: jaki jest typ wyniku i z czego wynika.
// 2 + "2"
console.log(2 + "2");
console.log(
  "Wynikiem jest typ String, ponieważ kiedy dodajemy number do string to number zamienia się na string"
);
// 2 + 2
console.log(2 + 2);
console.log(
  "Wynikiem jest typ Number. Dodając dwa Numbery nie ma możliwości, żeby powstał inny typ"
);
// 2 * "2"
console.log(2 * "2");
console.log(
  "Wynikiem jest typ Number. Gdy pomnożymy Stringa przez Number, String zamieni się na Number"
);
// 2 * 2
console.log(2 * 2);
console.log(
  "Wynikiem jest typ Number. Mnożąc dwa Numbery nie ma możliwości, żeby powstał inny typ"
);
// 1 == true
console.log(1 == true);
console.log("Wynikiem jest typ boolean. W boolean false przyjmuje 0, a true 1");
// 0 == false
console.log(0 == false);
console.log("Wynikiem jest typ boolean. W boolean false przyjmuje 0, a true 1");
// 0 == null
console.log(0 == null);
console.log("Wynikiem jest typ boolean. 0 to nie to samo co null");
// null == undefined
console.log(null == undefined);
console.log(
  "Wynikiem jest typ boolean. Ani null, ani undefined nie zwraca żadnej wartości"
);
console.log();

//napisz dodatkowo czym różnią się następujące zapisy: "=", "==", "==="
console.log(
  "= to operator przypisania; == Nie biorąc pod uwagę typu, sprawdza czy wartość po lewej jest równa tej po prawej; === Biorąc pod uwagę typ, sprawdza czy wartość po lewej jest równa tej po prawej"
);

console.log();
console.log("ZAD.1 c)");
console.log();

//c) napisz krótko czym różni się typ referencyjny od typu prostego, oraz podaj przykłady tych typów. Odpowiedź wyświetl w konsoli
console.log(
  "Typu prostego używamy do zapisywania łatwiejszych danych. Przykładami są: boolean, string, number, null."
);
console.log(
  "Typy referencyjne służą do zapisywania bardziej rozbudowanych danych. Przykładami są: tablice, obiekty, funkcje."
);

console.log();
console.log("ZAD.1 d)");
console.log();

//d) spróbuj przekonwertować i wyświetlić w konsoli poniższe wartości:
// let val = 0 (przekonwertuj na typ Boolean)
let val = 0;
val = val > 20;
console.log(`${val}, ${typeof val}`);
// let num = "2137" (przekonwertuj na typ Number)
let num = "2137";
num = Number("2137");
console.log(`${num}, ${typeof num}`);
// let str = 007 (przekonwertuj na String)
let str = 007;
str = String(007);
console.log(`${str}, ${typeof str}`);
// let und = undefined (przekonwertuj na Boolean)
let und = undefined;
und = Boolean(undefined);
console.log(`${und}, ${typeof und}`);

console.log();
console.log("ZAD.1 e)");
console.log();

//e) stwórz pustą tablicę za pomocą new Array() i dodaj do niej 3 elementy za pomocą .push(), wyświetl wynik w konsoli
let array = new Array();
array.push("element1", "element2", "element3");
console.log(array);

console.log();
console.log("ZAD.1 f)");
console.log();

//f) swtórz pusty obiekt za pomocą new Object() i dodaj do niego 3 klucze z wartościami, wyświetl wynik w konsoli
let object = new Object();
object.name = "Robert";
object.age = 21;
object.job = "elektryk";
console.log(object);

console.log();
console.log("ZAD.1 g)");
console.log();

//g)* opisz krótko czym dokładnie jest typ NaN
console.log(
  "Czyli Not a Number. Wartość numerycznego typu danych oznaczająca niezdefiniowaną lub niereprezentowalną wielkość, zwłaszcza w obliczeniach wykorzystujących liczby zmiennoprzecinkowe. Przykładem może być 20 * 'test', otrzymamy wtedy NaN"
);

console.log();
console.log("ZAD.1 h)");
console.log();
//h)** znajdź w sieci informacje o typie Symbol i opisz go krótko
console.log(
  "Symbol jest wbudowanym obiektem, którego konstruktor zwraca prymityw symbol — zwany także wartością symbolu lub po prostu symbolem — który gwarantuje, że jest unikalny. Symbole są często używane do dodawania unikalnych kluczy właściwości do obiektu, które nie będą kolidować z kluczami, które jakikolwiek inny kod mógłby dodać do obiektu, i które są ukryte przed mechanizmami, których zwykle używa inny kod, aby uzyskać dostęp do obiektu."
);

//--------------------------
//2. FUNKCJE & WARUNKI
//--------------------------
console.log();
console.log("ZAD.2 a)");
console.log();
//a) napisz funkcję która przyjmie trzy parametry i zwróci ich sumę. Wyświetl w konsoli wynik dodawania dowolnych trzech liczb
function sum(a, b, c) {
  const suma = a + b + c;
  return suma;
}
const suma2 = sum(2, 2, 2);
console.log(suma2);

console.log();
console.log("ZAD.2 b)");
console.log();
//b) napisz funkcję która przymie dwa parametry, wysokość i podstawę trójkąta a następnie obliczy i zwróci pole trójkąta. Przekaż do funkcji dowolne wartości i wyświetl w konsoli wynik
function triangle(a, h) {
  const area = (1 / 2) * a * h;
  return area;
}
const area = triangle(15, 10);
console.log(area);

console.log();
console.log("ZAD.2 c)");
console.log();
//c) napisz funkcję która przyjmie aktualny wiek i obliczy oraz zwróci informację ile lat minęło od 18 urodzin. Jeśli podany wiek będzie mniejszy niż 18, użyj if aby zwrócić taką informację
function currentAge(age) {
  return age >= 18
    ? `Od osiemnastki minęło ${age - 18} lat`
    : `Jesteś niepełnoletni`;
}

console.log(currentAge(21));

console.log();
console.log("ZAD.2 d)");
console.log();

//d) napisz funkcję która przyjmie tablicę z co najmniej 3 elementami i zwróci następujący komunikat: "Przekazana tablica ma X elementów a elementem numer 3 jest X" w miejscach oznaczonych jako X powinny wyświetlać się odpowienie wartości
const newArray = ["element1", "element2", "element3", "element4"];
function arrayElements(arr) {
  let array = arr;
  console.log(
    `Tablica ma ${array.length} elementy, a elementem numer 3 jest ${array[2]}`
  );
}
arrayElements(newArray);

console.log();
console.log("ZAD.2 e)");
console.log();
//e) napisz funkcję która przyjmie obiekt testPerson i zwróci komunikat "Pan/i (imię) (nazwisko) ma (wiek) lat oraz (wzrost) cm wzrostu". Możesz zdefiniować inną osobę i użyc funkcji ponownie.

let testPerson = {
  name: "Jan",
  surname: "Kowalski",
  age: 20,
  height: 180,
};
const infoPerson = (person) => {
  console.log(
    `Pan/i ${person.name} ${person.surname} ma ${person.age} lat oraz ${person.height} cm wzrostu`
  );
};
infoPerson(testPerson);

console.log();
console.log("ZAD.2 f)");
console.log();
//f) napisz funkcję która przyjmie obiekt testPerson oraz drugi parametr. Funkcja powinna zmienić wartośc jednego z klucza w obiekcie. Spróbuj zmodyfikować na przykład wiek.
function ageOfPerson(person, age) {
  person.age = age;
}
ageOfPerson(testPerson, 54);
console.log(testPerson);

console.log();
console.log("ZAD.2 g)");
console.log();
//g) napisz funkcję która przyjmie jeden parametr. Jeśli parametr nie jest typu Number, funkcja powinna zwrócić informację w konsoli, że przyjmowany jest tylko typ number. Jeśli przekazana wartość jest typu Number:
// - gdy cyfra jest podzielna przez 3 i 5, niech zwróci string "FizzBuzz"
// - gdy cyfra jest podzielna przez 3, niech zwróci string "Fizz"
// - gdy cyfra jest podzielna przez 5, niech zwróci string "Buzz"
const fizz = (number) => {
  if (typeof number !== "number") {
    return "Przyjmowany jest tylko typ number";
  } else if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  }
};
console.log(fizz(15));

console.log();
console.log("ZAD.2 h)");
console.log();
//h) napisz funkcję która przyjmie numer a następnie sprawdzi czy cyfra jest parzysta i zwróci informację. Użyj operatora trójargumentowego
function checkNumber(number) {
  if (number % 2 === 0) {
    return "Liczba parzysta";
  }
  return "Liczba nieparzysta";
}
console.log(checkNumber(22));

console.log();
console.log("ZAD.2 i)");
console.log();

//i)* napisz funkcję która wylosuje i zwróci liczbę od 1 do 10
function numberDraw() {
  let draw = Math.floor(Math.random() * 10 + 1);
  console.log(draw);
}
numberDraw();

console.log();
console.log("ZAD.2 j)");
console.log();

//j)** napisz funkcję która przyjmie dwie liczby, a następnie wylosuje i zwróci liczbę z podanego zakresu
function numberRange(a, b) {
  let draw = Math.floor(Math.random() * (b - a) + a);
  console.log(draw);
}
numberRange(100, 200);

console.log();
console.log("ZAD.3 a)");
console.log();
//k)*** wyszukaj w internecie metody Javascriptowe Math. i użyj trzech z nich aby napisać funkcje wykonujące działania według Twojego własnego pomysłu.

//--------------------------
// FUNKCJE & PĘTLE
//--------------------------

//uwaga! Możesz spróbować każdą z pętli napisać w funkcji

//a) napisz pętlę która odliczy od 1 do 9
for (let i = 1; i < 10; i++) {
  console.log(i);
}

console.log();
console.log("ZAD.3 b)");
console.log();

//b) napisz pętlę która odliczy od 9 do 1
for (let i = 9; i > 0; i--) {
  console.log(i);
}

console.log();
console.log("ZAD.3 c)");
console.log();

//c) napisz pętlę która odliczy od 5 do 15
for (let i = 5; i < 16; i++) {
  console.log(i);
}

console.log();
console.log("ZAD.3 d)");
console.log();

//d) napisz pętlę która odliczy od 0 do -10
for (let i = 0; i > -11; i--) {
  console.log(i);
}

console.log();
console.log("ZAD.3 e)");
console.log();

//e) napisz pętlę która odliczy od 1 do 20, iteracja co 2
for (let i = 1; i < 21; i += 2) {
  console.log(i);
}

console.log();
console.log("ZAD.3 f)");
console.log();

//f) napisz pętlę która odliczy od 10 do -10, iteracja co 4
for (let i = 10; i > -11; i -= 4) {
  console.log(i);
}

console.log();
console.log("ZAD.3 g)");
console.log();

//g)* napisz pętlę, ktora będzie odliczać od 1 do 100, ale iteracja z każdym wykonaniem będzie rosła dwukrotnie, czyli 1, 2, 4, 8...
for (let i = 1; i < 101; i *= 2) {
  console.log(i);
}

console.log();
console.log("ZAD.3 h)");
console.log();

//h)* napisz pętlę która będzie odliczać od 1 do 10, ale wyświetli tylko nieparzyste wartości
for (let i = 1; i < 11; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log();
console.log("ZAD.3 i)");
console.log();

//i)* napisz pętlę która odliczy od 1 do 10, i wyświetli w konsoli informację o tym czy wyświetlona cyfram jest parzysta czy nie, możesz użyć operatora trójargumentowego
for (let i = 1; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(`Liczba ${i} jest parzysta`);
  } else {
    console.log(`Liczba ${i} jest nieparzysta`);
  }
}

console.log();
console.log("ZAD.3 j)");
console.log();

//Uwaga! kolejne pętle trzeba napisać w funkcji

//j) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do podanej wartości
function loopNumber(number) {
  for (let i = 1; i < number; i++) {
    console.log(i);
  }
}
loopNumber(33);

console.log();
console.log("ZAD.3 k)");
console.log();

//k) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do 50, ale iteracja będzie się odbywać co podaną wartość. (Jeśli argumentem przekazanym do funkcji jest 3, to pętla ma odliczać 3,6,9 itp.)
function oneFifty(number) {
  for (let i = 1; i < 51; i += number) {
    console.log(i);
  }
}

oneFifty(5);

console.log();
console.log("ZAD.3 l)");
console.log();

//l) napisz funkcję która przyjmie tablicę arrNames i wyświetli w konsoli przywitanie dla każdej z osób
const arrNames = [
  "Ksawery",
  "Zenobiusz",
  "Klementyna",
  "Apolonia",
  "Jeremiasz",
  "Bernadetta",
];

function hello(array) {
  for (person of array) {
    console.log(`Cześć ${person}`);
  }
}

hello(arrNames);

console.log();
console.log("ZAD.3 ł)");
console.log();

//ł) napisz funkcję która przymie tablicę arrObjects i wyświetli dla każdego obiektu informację "przed Tobą stoi (kolor) (marka)", np niebieski Mustang.
const arrObjects = [
  {
    brand: "Mustang",
    color: "niebieski",
  },
  {
    brand: "Tesla",
    color: "czarna",
  },
  {
    brand: "Polonez",
    color: "żółty",
  },
  {
    brand: "Toyota",
    color: "fioletowa",
  },
];

function carInfo(array) {
  for (car in array) {
    console.log(`Przed tobą stoi ${array[car].color} ${array[car].brand}`);
  }
}
carInfo(arrObjects);

console.log();
console.log("ZAD.3 m)");
console.log();

// ​
//m) napisz funkcję która przyjmie tablic arrNumbers i wyświetli w konsoli tylko przyste elementy tablicy
const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function numbers(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}
numbers(arrNumbers);

console.log();
console.log("ZAD.3 n)");
console.log();

//n)* napisz funkcję, która przeiteruje po tablicy arrTypes i:
// - za pomocą push umieści elementy o typie innym niż number w tablicy arrOther
// - za pomocą push umieści elementy o typie number w tablicy arrNumbers
// - za pomocą push umieści numery parzyste w tablicy arrEven
// - na końcu zwróci obiekt z tymi trzema tablicami

const arrTypes = [
  2,
  4,
  5,
  undefined,
  null,
  "val",
  NaN,
  7,
  10,
  333,
  "874",
  22,
  21,
  400,
  "400",
  "undefined",
];

const arrOther = [];
const arrNumberss = [];
const arrEven = [];

const typesPlacement = (arr) => {
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      arrOther.push(arr[i]);
    } else {
      arrNumberss.push(arr[i]);
    }
    if (typeof arr[i] === "number" && arr[i] % 2 === 0) {
      arrEven.push(arr[i]);
    }
  }
  return [arrOther, arrNumberss, arrEven];
};
console.log(typesPlacement(arrTypes));

console.log();
console.log("ZAD.4 a)");
console.log();

//--------------------------
// METODY
//--------------------------

//a) za pomocą metody map wyloguj przywitanie dla każdej osoby z tablicy names

const names = ["Seba", "Kari", "Mati", "Andżi"];
const namesMap = names.map((name) => {
  console.log(`Cześć ${name}`);
});

console.log();
console.log("ZAD.4 b)");
console.log();

//b) za pomocą metody filter stwórz nową tablicę z tablicy array10 z parzystymi liczbami

const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = array10.filter((num) => num % 2 === 0);
console.log(evenNumber);

console.log();
console.log("ZAD.4 c)");
console.log();

//c) użyj filter na tablicy people aby zwrócić tablicę tylko z kobietami

const people = [
  {
    name: "Tomasz",
    lastname: "Kowalski",
    gender: "male",
  },
  {
    name: "Karol",
    lastname: "Nowak",
    gender: "male",
  },
  {
    name: "Joanna",
    lastname: "Kowalska",
    gender: "female",
  },
  {
    name: "Anna",
    lastname: "Nowak",
    gender: "female",
  },
];
const onlyFemale = people.filter((person) => person.gender === "female");
console.log(onlyFemale);

console.log();
console.log("ZAD.4 d)");
console.log();

//d) użyj metod takich jak split i sort aby zmienną shopping przekonwertować na tablicę z listą zakupów. Każde słowo powinno być osobną pozycją w tablicy. Ponad to posortuj wartości alfabetycznie. Spróbuj też ujednolicić wielkość liter aby lista była bardziej czytelna.

const shopping =
  "kawa MaSŁo chleb WODA ogórki jabłka Ziemniaki chipsy salcesoN wędLIna pieczarki Włoszczyzna heRBata truskawKi maliny";
const list = (shopList) => {
  const split = shopList.split(" ");
  const upperCase = split.map((articles) => articles.toUpperCase());
  upperCase.sort();
  return upperCase;
};
console.log(list(shopping));

console.log();
console.log("ZAD.4 e)");
console.log();

//e) połącz litery alfabetu w tablicy alphabet w jeden string a następnie odwróć kolejność aby wynik wyglądał tak: "ZYXWV..."

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const connect = alphabet.join("");

const reverseAlphabet = connect.split("").reverse().join("");
console.log(reverseAlphabet);
