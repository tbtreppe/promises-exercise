let baseURL = "http://deckofcardsapi.com/api/deck";

//1
async function drawCard() {
  let data = await $.getJSON(`${baseURL}/new/draw/`);
  let { suit, value } = data.cards[0];
  console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
}

//2
async function getCards() {
  let firstCardData = await $.getJSON(`${baseURL}/new/draw/`);
  let deckId = firstDCardData.deck_id;
  let secondCardData = await $.getJSON(`${baseURL}/${deckId}/draw/`);
  [firstCardData, secondCardData].forEach((card) => {
    let { suit, value } = card.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  });
}

//3
async function setup() {
  let $button = $("button");
  let $cardArea = $("#card-area");

  let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
  $button.show().on("click", async function () {
    let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
    let cardSrc = cardData.cards[0].image;
    $cardArea.append(
      $("<img>", {
        src: cardSrc,
      })
    );
    if (cardData.remaining === 0) $button.remove();
  });
}
setup();
