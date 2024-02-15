const url = "https://api.punkapi.com/v2/beers/random";
async function fetchBeer() {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
}

fetchBeer();
