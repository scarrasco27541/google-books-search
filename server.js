const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

/*
Put this in a config / env file, but saving here for now
*/
const GoogleApiKey = "AIzaSyCsJFGi3_Ouj4HLOTzcIAR45OJeM0kAths";
/*
Example URL:
https://www.googleapis.com/books/v1/volumes?q=algernon&key=AIzaSyCsJFGi3_Ouj4HLOTzcIAR45OJeM0kAths
*/

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here



/*
app.get("/googlebooks/search/:query", (req, res) => {
	res.send("Holla");		
	let searchUrl = "https://www.googleapis.com/books/v1/volumes?q="+req.params.query+"&key=" + GoogleApiKey;
	axios.get(searchUrl).then(response => {
		console.log(response.data);
		res.send("Holla");		
		const $ = cheerio.load(response.data);
		$(".digg-story__content").each((i, element) => {
			let result = {};
			result.summary = $(element).find(".js--digg-story__ellipsis-truncate").text();
			result.link = $(element).find(".digg-story__title-link").attr("href");
			result.title = $(element).find(".digg-story__title-link").text();
//			console.log(result);
			db.Article.create(result).then(dbArticle => {
				console.log(dbArticle);
			})
			.catch(err => {
				console.log(err);
			});
		});
		res.send("Scrape Complete");
	});
});
*/


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});









