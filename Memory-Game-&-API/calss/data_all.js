   // Fetch the data from the API
   fetch("https://hp-api.onrender.com/api/characters")  // 25 cards
   .then(res => res.json())
   .then(data => {
     // Save the data in localStorage
     localStorage.setItem("data1", JSON.stringify(data));
   })
   .catch(err => console.error(err));
 Api._data1 = JSON.parse(localStorage.getItem("data1"));
 
 fetch("https://dog.ceo/api/breeds/image/random/50") // 50 cards
   .then(res => res.json())
   .then(data => {
     // Save the data in localStorage
     localStorage.setItem("data2", JSON.stringify(data));
   })
   .catch(err => console.error(err));
 Api._data2 = JSON.parse(localStorage.getItem("data2"));

 fetch("https://digimon-api.vercel.app/api/digimon") // 208 cards
   .then(res => res.json())
   .then(data => {
     // Save the data in localStorage
     localStorage.setItem("data3", JSON.stringify(data));
   })
   .catch(err => console.error(err));
 Api._data3 = JSON.parse(localStorage.getItem("data3"))

 function puse_PokeAPI_data4() {   // 648 cards
   let deta4 = []
   for (let i = 1; i < 648; i++) {
     let a = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg`

     deta4.push(a)
   }
   return deta4

 }