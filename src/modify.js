const wildlyBiasedReview = (location) => {
  if (location === 'NYC') {
    console.log('THE GREATEST CITY IN THE WORLD');
    console.log('THE CITY THAT NEVER SLEEPS');
    console.log('WOW WHAT A CITY');
    return;
  }
  console.log('Yea that place is cool I guess');
}

const getWeatherReport = (temperature) => {
  if (temperature > 90) {
    console.log("It's hot and gross out.");
  } else if (temperature > 70) {
    console.log("It's really nice!");
  } else if (temperature < 32) {
    console.log("Wow, it's cold out.");
  }
  return "And that's your report!";
};

module.exports = {
  wildlyBiasedReview,
  getWeatherReport,
};
