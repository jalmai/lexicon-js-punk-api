const url = "https://api.punkapi.com/v2/beers/random";
let btnRandom = document.querySelector(".btn-random");
let randomBeerWrapper = document.querySelector(".random-beer-wrapper");

async function fetchBeer() {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  let randomBeer = new Beer(data[0]);
  console.log(randomBeer);
  btnRandom.addEventListener("click", function () {
    // TODO: Click should set a new random beer and then send it to DOM
    console.log("click");
    // TODO: Move to separate class
    let html = `<div class="card">
            <img src="${randomBeer.image_url}" />
            <h2>${randomBeer.name}</h2>
            <p>See more</p>
          </div>`;
    randomBeerWrapper.innerHTML = "";
    randomBeerWrapper.insertAdjacentHTML("afterbegin", html);
  });
}

fetchBeer();
