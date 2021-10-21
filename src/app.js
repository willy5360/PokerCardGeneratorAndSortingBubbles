/* eslint-disable */
import "bootstrap";
import "./style.css";

const NUMBER_CENTER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const ICON = ["♦", "♥", "♠", "♣"];
const BODY = document.querySelector("body");
const BOX = document.querySelector(".boxCard");
const SORTBOX = document.querySelector(".sortBoxCard");
const INPUT = document.querySelector("#numberGenerator");
const SORT = document.querySelector("#sort");
const FORM = document.querySelector("form");

var DECK = 0; //event submit
console.log(INPUT.value);

window.onload = function() {};

let cards = [];
FORM.addEventListener("submit", event => {
  event.preventDefault();
  BOX.innerHTML = "";
  cards = [];
  DECK = INPUT.value;
  console.log(DECK);
  for (let i = 0; i < DECK; i++) {
    cards.push(getCard());
  }
  createCard(cards, BOX);
});

SORT.addEventListener("click", event => {
  event.preventDefault();
  SORTBOX.innerHTML = "";

  let len = cards.length;
  for (let i = 0; i < len; i++) {
    for (let j = 1; j < len; j++) {
      if (cards[j - 1].cardNumber > cards[j].cardNumber) {
        let tmp = cards[j - 1].cardNumber;
        cards[j - 1].cardNumber = cards[j].cardNumber;
        cards[j].cardNumber = tmp;
      }
    }
  }
  createCard(cards, SORTBOX);
});

function getCard() {
  return {
    cardNumber: NUMBER_CENTER[randomValue(NUMBER_CENTER)],
    cardIcon: ICON[randomValue(ICON)]
  };
}

function randomValue(list) {
  return Math.floor(Math.random() * list.length);
}

function createCard(cards, cardContainer) {
  for (const i of cards) {
    let card = document.createElement("div");
    card.classList.add("card");
    cardContainer.appendChild(card);

    let top = document.createElement("div");
    top.classList.add("card-topsuit");
    top.innerHTML = i.cardIcon;
    card.appendChild(top);

    let center = document.createElement("div");
    center.classList.add("card-centersuit");
    center.innerHTML = i.cardNumber;
    card.appendChild(center);

    let bottom = document.createElement("div");
    bottom.classList.add("card-bottomsuit");
    bottom.innerHTML = i.cardIcon;
    card.appendChild(bottom);

    if (i.cardIcon == "♥" || i.cardIcon == "♦") {
      bottom.classList.add("color-red");
      top.classList.add("color-red");
    } else {
      top.classList.add("color-black");
      bottom.classList.add("color-black");
    }
  }
}
