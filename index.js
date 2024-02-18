const url = "https://api.punkapi.com/v2/beers/random";
let btnRandom = document.querySelector(".btn-random");
let randomBeerWrapper = document.querySelector(".random-beer-wrapper");

async function fetchBeer() {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  let randomBeer = new Beer(data[0]);
  let html = randomBeer.beerHtmlCard();
  randomBeerWrapper.innerHTML = "";
  randomBeerWrapper.insertAdjacentHTML("afterbegin", html);
}
fetchBeer();
btnRandom.addEventListener("click", function () {
  console.log("click");
  fetchBeer();
});
