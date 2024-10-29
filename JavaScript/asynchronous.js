const responsePromise = fetch("http://api.zippopotam.us/us/90210");
console.log(responsePromise);

const response = fetch("http://api.zippopotam.us/us/90210")
  .then(response => response.json())
  .then(data => console.log(data));

