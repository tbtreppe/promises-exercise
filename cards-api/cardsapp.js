let baseURL = "http://deckofcardsapi.com/api/deck";

//1
$.getJSON(`${baseURL}/new/draw/`).then((data) => {
  let { suit, value } = data.cards[0];
  console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
});

//2
$.getJSON(`${baseURL}/new/draw/`)
  .then((data) => {
    firstCard = data.cards[0];
    let deckId = data.deck_id;
    return $.getJSON(`${baseURL}/${deckId}/draw/`);
  })
  .then((data) => {
    let secondCard = data.cards[0];
    [firstCard, secondCard].forEach(function (card) {
      console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`);
    });
  });

//3
let deckId = null;
let $button = $("button");
let $cardArea = $("#card-area");

$.getJSON(`${baseURL}/new/shuffle/`).then((data) => {
  deckId = data.deck_id;
  $button.show();
});

$button.on("click", function () {
  $.getJSON(`${baseURL}/${deckId}/draw/`).then((data) => {
    let cardSrc = data.cards[0].image;
    $cardArea.append(
      $("<img>", {
        src: cardSrc,
      })
    );
    if (data.remaining === 0) $button.remove();
  });
});
