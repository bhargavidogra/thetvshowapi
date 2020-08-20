var fetch = require("node-fetch");
var config = require("../helper/config");

const getTvshows = async (req, res) => {
  console.log(req.params.showID);
  var array = [];
  let no_of_seasons = 0;

  const tv_id = req.params.showID;
  try {
    const api_for_show_details = `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${config.apikey}&language=en-US`;

    const response = await fetch(api_for_show_details);
    const showdetails = await response.json();
    no_of_seasons = showdetails.number_of_seasons;
    const no_of_episodes = showdetails.number_of_episodes;

    console.log(`${no_of_seasons} ${no_of_episodes}`);
  } catch (err) {
    console.log(err);
  }

  try {
    for (var i = 0; i < no_of_seasons; i++) {
      const value = i + 1;
      const api_for_shows_seasons_details = `
    https://api.themoviedb.org/3/tv/${tv_id}/season/${value}?api_key=${config.apikey}&language=en-US`;
      const responseseasons = await fetch(api_for_shows_seasons_details);
      const jsonresult = await responseseasons.json();
      const episodes = jsonresult.episodes;

      array = [...array, ...episodes];
      console.log(array);
    }
  } catch (err) {
    console.log(err);
  }

  array.sort((a, b) => b.vote_average - a.vote_average);

  res.json(array.slice(0, 20));
};

module.exports = {
  getTvshows,
};
