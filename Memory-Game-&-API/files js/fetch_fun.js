const Api = new Api_data(" ", " ", " ", " ")

   // Fetch the data from the API
   fetch("https://hp-api.onrender.com/api/characters")  // 25 cards
   .then(res => res.json())
   .then(data => {
     // Save the data in localStorage
     localStorage.setItem("data1", JSON.stringify(data));
   })
   Api.data1 = JSON.parse(localStorage.getItem("data1"));
 
 fetch("https://dog.ceo/api/breeds/image/random/50") // 50 cards
   .then(res => res.json())
   .then(data => {
     // Save the data in localStorage
     localStorage.setItem("data2", JSON.stringify(data));
   })
   Api.data2 = JSON.parse(localStorage.getItem("data2"));

 fetch("https://digimon-api.vercel.app/api/digimon") // 208 cards
   .then(res => res.json())
   .then(data => {
     // Save the data in localStorage
     localStorage.setItem("data3", JSON.stringify(data));
   })
   Api.data3 = JSON.parse(localStorage.getItem("data3"))

   fetch("https://pokemon-8luu.onrender.com/Pokemon") // 649 cards
   .then(res => res.json())
   .then(data => {
     // Save the data in localStorage
     localStorage.setItem("data4", JSON.stringify(data));
   })
   Api.data4 = JSON.parse(localStorage.getItem("data4"))


