/*
https://flynn.boolean.careers/exercises/api/random/int (ritorna un numero da 1 a 9)
https://flynn.boolean.careers/exercises/api/random/word (ritorna una parola)
https://flynn.boolean.careers/exercises/api/random/name (ritorna un nome)
https://flynn.boolean.careers/exercises/api/random/mail (ritorna una email)
https://flynn.boolean.careers/exercises/api/random/phone (ritorna un numero di telefono)
https://flynn.boolean.careers/exercises/api/random/sentence (ritorna una frase)
https://flynn.boolean.careers/exercises/api/random/boolean (ritorna o vero o falso)
https://flynn.boolean.careers/exercises/api/array/integers?min=n&max=n&items=n (ritorna un array di items numeri, contenuti nel range min-max)



*/

const extraction = document.getElementById("result");
const button = document.querySelector(".btn");

button.addEventListener("click", getData);

function getData() {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/int")
    .then((res) => {
      console.log(res.data.response);
      extraction.innerHTML = res.data.response;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("In tutti i casi eseguita");
    });
}

/*Gioco dei dadi */

const playBtn = document.getElementById("btnPlay");

const user = document.getElementById("resultUser");
const computer = document.getElementById("resultComputer");

const message = document.getElementById("message");
playBtn.addEventListener("click", play);

const min = 1;
const max = 6;
const dice = 2;

function play() {
  axios
    .get(
      `https://flynn.boolean.careers/exercises/api/array/integers?min=${min}&max=${max}&items=${dice}`
    )
    .then((result) => {
      console.log(result.data.response);
      const dice = result.data.response;
      user.src = `./img/${dice[0]}.svg`;
      computer.src = `./img/${dice[1]}.svg`;

      if (dice[0] > dice[1]) {
        message.innerHTML = "Hai vinto!";
      } else if (dice[0] < dice[1]) {
        message.innerHTML = "Hai perso!";
      } else {
        message.innerHTML = "pari";
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

const arrayNames = [];
for (let i = 0; i < 10; i++) {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/name")
    .then((dati) => {
      console.log(dati.data);
      arrayNames.push(dati.data.response);
      if (arrayNames.length === 10) {
        printCards(arrayNames);
      }
    });
}
/**
 * Takes an array of names and logs each name to the console.
 * @param {string[]} array - An array of names.
 */
function printCards(array) {
  console.log(array);
  let template = "";
  array.forEach((name) => {
    template += `<li>${name}</li>`;
  });
}
