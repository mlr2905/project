const Api = new Api_data(" ", " ", " ", " ")

all_fetch()
async function all_fetch(){
const urls = {
  1: "https://hp-api.onrender.com/api/characters",
  2: `https://dog.ceo/api/breeds/image/random/100`,
  3: `https://digimon-api.vercel.app/api/digimon`,
  4: `https://pokemon-8luu.onrender.com/Pokemon`
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