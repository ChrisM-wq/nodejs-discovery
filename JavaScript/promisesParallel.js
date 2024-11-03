const getHarryPotterCharacters = async (index) => {
  try {
    const response = await fetch("https://hp-api.herokuapp.com/api/characters");
    if (!response.ok) throw new Error("Problem getting data!")
    const data = await response.json();
    // console.log(data[0].name);
    return data[index].name;
  } catch (error) {
    console.error(error);
    throw error;
  };
};

const getThreeCharacters = async () => {
  try {
    console.time('function-getThreeCharacters')
    const characterOne = await getHarryPotterCharacters(0);
    const characterTwo = await getHarryPotterCharacters(1);
    const characterThree = await getHarryPotterCharacters(2);
    console.log([characterOne, characterTwo, characterThree])
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    console.timeEnd('function-getThreeCharacters');
  };
};

// Promise.all -- short circuits on reject
const getThreeCharactersParallel = async () => {
  try {
    console.time('function-getThreeCharactersParallel')
    const data = await Promise.all([getHarryPotterCharacters(0), getHarryPotterCharacters(1), getHarryPotterCharacters(2)]);
    console.log(data)
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    console.timeEnd('function-getThreeCharactersParallel');
  };
};

getThreeCharacters();

getThreeCharactersParallel();

// Promise.race -- short circuits on reject
(async function () {
  const res = await Promise.race([
    getHarryPotterCharacters(0),
    getHarryPotterCharacters(1),
    getHarryPotterCharacters(2)
  ]);
  console.log(res)
})();

const timeout = function (seconds) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("request timed out!"));
    }, seconds * 1000);
  });
};

Promise.race([
  getHarryPotterCharacters(0),
  timeout(2)
])
  .then(res => console.log(res))
  .catch(error => console.error(error.message));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success")
]).then(res => console.log(res));

// Promise.any - return first fulfilled promise
Promise.any([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success")
]).then(res => console.log(res));