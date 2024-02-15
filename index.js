const url = "https://api.punkapi.com/v2/beers/random";
async function fetchBeer() {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  const randomBeer = new Beer(data[0]);
  console.log(randomBeer);
}
let btnRandom = document.querySelector(".btn-random");
let randomBeer = document.querySelector(".random-beer-wrapper");
btnRandom.addEventListener("click", function () {
  console.log("click");
  randomBeer.innerHTML = "hej";
});
fetchBeer();
