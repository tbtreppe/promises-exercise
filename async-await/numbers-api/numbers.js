let url = "http://numbersapi.com";
let favNumber = 13;

//1
async function getFavNumber() {
  let res = await $.getJSON(`${url}/${favNumber}?json`);
  console.log(res);
}
getFavNumber();

//2
let favNumbers = [7, 13, 15];
async function getManyNumbers() {
  let res = await $.getJSON(`${url}/${favNumbers}?json`);
  console.log(res);
}
getManyNumbers();

//3
async function getFourNumbers() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${URL}/${favNumber}?json`))
  );
  facts.forEach((data) => {
    $("body").append(`<p>${data.text}</p>`);
  });
}
getFourNumbers();
