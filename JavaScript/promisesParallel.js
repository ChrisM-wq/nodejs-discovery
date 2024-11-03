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


// Promise.all short circuits on reject
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