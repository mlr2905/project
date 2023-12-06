const Api = new Api_data(" ", " ", " ", " ")

all_data()
async function all_data() {
  const urls = {
    1: "https://hp-api.onrender.com/api/characters", //HarryPotter
    2: `https://dog.ceo/api/breeds/image/random/100`,//dog
    3: `https://digimon-api.vercel.app/api/digimon`, //digimon
    4: `https://pokemon-8luu.onrender.com/Pokemon` //pokemon
  }
  for (let i = 1; i < 5; i++) {
    // Fetch the data from the API
    let response = await fetch(urls[i])
    response.ok || console.error('network problem');
    let data = await response.json()
    localStorage.setItem(`data${i}`, JSON.stringify(data));
    if (data) {
      Api["data" + i] = JSON.parse(localStorage.getItem("data" + i));
    }
  }
}