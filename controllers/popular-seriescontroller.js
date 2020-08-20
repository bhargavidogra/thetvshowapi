var fetch = require("node-fetch");
var config = require("../helper/config");

const getPopularShows = async (req, res) => {
  let array = [];

  let count = 1;
  var showdetails = "";

  do {
    try {
      const api_for_show_details = `https://api.themoviedb.org/3/tv/${count}?api_key=${config.apikey}&language=en-US`;
      const response = await fetch(api_for_show_details);
      showdetails = await response.json();
      console.log(showdetails);
      array = [...array, showdetails];

      count = count + 1;
    } catch (err) {
      console.log(err);
      break;
    }
  } while (showdetails != undefined);

  console.log(array);

  array.sort((a, b) => b.vote_average - a.vote_average);

  res.json(array.slice(0, 5));
};

module.exports = {
  getPopularShows,
};
