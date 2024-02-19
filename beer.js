class Beer {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.tagline = data.tagline;
    this.first_brewed = data.first_brewed;
    this.description = data.description;
    this.image_url = data.image_url;
    this.abv = data.abv;
    this.ibu = data.ibu;
    this.target_fg = data.target_fg;
    this.target_og = data.target_og;
    this.ebc = data.ebc;
    this.srm = data.srm;
    this.ph = data.ph;
    this.attenuation_level = data.attenuation_level;
    this.volume = data.volume;
    this.boil_volume = data.boil_volume;
    this.method = data.method;
    this.ingredients = data.ingredients;
    this.food_pairing = data.food_pairing;
    this.brewers_tips = data.brewers_tips;
    this.contributed_by = data.contributed_by;
  }
  beerHtmlCard() {
    // TODO: If no image, insert placeholder
    console.log(this.image_url);
    let url = "https://picsum.photos/200/200";
    if (this.image_url) {
      url = this.image_url;
    }
    return `<div class="card">
            <img src="${url}" />
            <h2>${this.name}</h2>
            <p>See more</p>
          </div>`;
  }
}
