Assignment - Consultant Dev


1) An API that accepts TV Series & returns 20 top voted episodes sorted in descending order.

endpoints : http://localhost:3000/topEpisodes/{Tv_series_id}  
  Response can be seen on the browser window itself. Top 20 voted episodes of series with given id shall be displayed.

2) An API that returns 5 most popular TV series accessed using service so far 

endpoints : http://localhost:3000/analytics/popularSeries
Response received shall give the top 5 series with best  vote_average out of all the recods.

Used Upstreams:
https://developers.themoviedb.org/3/tv/get-tv-details (GET TV Series Details)
https://developers.themoviedb.org/3/tv-seasons/get-tv-season-details (GET TV Series Details for a season)


To Run the app :

   1)Download the project by cloning git repository. Please create account on https://www.themoviedb.org/ 
     - generate an API key for fetching data results and add the api key in helper/config.js for getting you app up and running.
   2)Run npm install
   3)Starting the node app by using command- npm start
   4)Project runs on localhost:3000 
   5)To get top Tvshow Episodes by id run : localhost:3000/topEpisodes/{Tv_series_id}  - Shall Return the top 20 episodes of particular series
   6)To get top 5 series overall run : localhost:3000/analytics/popularSeries - Shall return the top 5 series according to vote_average
