// const getHarryPotterCharacters = async () => {
//   const response = await fetch("https://hp-api.herokuapp.com/api/characters");
//   const data = await response.json();
//   console.log(data);
// };

// getHarryPotterCharacters();


// try {
//   const x = 2;
//   x = 4;
// } catch (error) {
//   console.error(error.message)
// };


const getHarryPotterCharacters = async () => {
  try {
    const response = await fetch("https://hp-api.herokuapp.com/api/characters");
    if (!response.ok) throw new Error("Problem getting data!")
    const data = await response.json();
    // console.log(data[0].name);
    return data[0].name;
  } catch (error) {
    console.error(error);
    throw error;
  };
};


// console.log("1: Will get character")
// // const character = getHarryPotterCharacters();
// // console.log(character)

// getHarryPotterCharacters()
//   .then(name => console.log(`2: ${name}`))
//   .catch(error => console.error(`2: ${error.message}`))
//   .finally(() => console.log("3: Finished getting character"));

(async function () {
  console.log("1: Will get character")
  try {
    const name = await getHarryPotterCharacters();
    console.log(`2: ${name}`);
  } catch (error) {
    console.error(`2: ${error.message}`)
  };
  console.log("3: Finished getting character");
})();