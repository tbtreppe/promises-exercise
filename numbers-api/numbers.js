let url = "http://numbersapi.com";
let favNumber = 13;

//1
$.getJSON(`${url}/${favNumber}?json`).then((res) => {
  console.log(res);
});

//2
let favNumbers = [7, 13, 15];
$.getJSON(`${url}/${favNumbers}?json`).then((res) => {
  console.log(res);
});

//3
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${url}/${favNumber}?json`);
  })
).then((facts) => {
  facts.forEach((res) => $("body").append(`<p>${res.text}</p>`));
});
