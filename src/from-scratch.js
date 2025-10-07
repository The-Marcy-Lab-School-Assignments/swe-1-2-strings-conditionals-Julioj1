const measureRain = () => {
  if (inches <= 0) {
    return "drought";
  } else if (inches < 2) {
    return "dry";
  } else if (inches < 4) {
    return "average";
  } else if (inches < 6) {
    return "rainy";
  } else {
    return "flood";
  }
};

const happyBirthdayPet = () => {
};

const funTypes = () => {
};

const rounder = () => {
};

const formatName = () => {
};

const extractDomain = () => {
};

const startsWithVowel = () => {
};

const rotate = () => {
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  formatName,
  extractDomain,
  startsWithVowel,
  rotate,
};
