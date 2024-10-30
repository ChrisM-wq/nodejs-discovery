const responsePromise = fetch("http://api.zippopotam.us/us/90210");
console.log(responsePromise);

const url = "http://api.zippopotam.us/us/90210";
// const responseOne = fetch(url)
//   .then(
//     response => response.json(),
//     err => console.log(`Failed to fetch from URL: ${url}, error: ${err}`)
//   )
//   .then(data => console.log(data));

const getJSON = (url, errorMessage = "Oops, something went wrong!") => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${errorMessage} (${response.status})`);
      };
      return response.json();
    });
};

const getLocationData = () => {
  getJSON("http://api.zippopotam.us/us/90210", "Failed to retrieve data!")
    .then(data => console.log(data))
    .catch(err => console.log(`Error: ${err}`))
    .finally(() => {
      console.log("Fetch operation over!")
    })
};

getLocationData();


// const responseTwo = fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(`Error: ${err}`))
//   .finally(() => {
//     console.log("Fetch operation over!")
//   })


// const handleBodyFailure = async () => {
//   const request = new Request("https://example.org/post", {
//     method: "POST",
//     body: JSON.stringify({ username: "example" }),
//   });
  
//   const response1 = await fetch(request);
//   console.log(response1.status);
  
//   // Will throw: "Body has already been consumed."
//   const response2 = await fetch(request);
//   console.log(response2.status);
// };

// const trigger = async () => {
//   await handleBodyFailure();
// }


// trigger()




// testCoordinateOne = [52.508, 13.381];
// testCoordinateTwo = [19.037, 72.873];
// testCoordinateThree = [19.037, 72.873];

// const whereAmI = (latitude, longitude) => {
//   fetch(`https://geocode.xyz/${latitude},${longitude}?json`, {
//     method: 'POST'
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("Failed to retrieve data!")
//       }
//       return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => console.log("whereAmI operation complete."))
// };

// whereAmI(testCoordinateOne[0], testCoordinateOne[1]);
// whereAmI(testCoordinateTwo[0], testCoordinateTwo[1]);
// whereAmI(testCoordinateThree[0], testCoordinateThree[1]);