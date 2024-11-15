const massChris = 66;
const massImagine = 82;

const heightChris = 1.76;
const heightImagine = 1.45;

const BMIChris = massChris / (heightChris*2);
const BMIImagine = massImagine / (heightImagine*2);

console.log(BMIChris, BMIImagine);

const calculateBMI = (mass, height) => {
  return mass / (height * 2);
};

console.log(calculateBMI(66, 1.76));