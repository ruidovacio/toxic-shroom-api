# toxic-shroom-api
API and database of toxic mushrooms.

The project is hosted as a Vercel App, available with its documentation at:
`https://toxicshrooms.vercel.app/`


### Project info

I'm studying programming on my own, and I thought this could be a nice project - I'm fascinated by both the world of fungi and the toxic elements found in nature.

This is basically my first time building an API, created with Express/Node.js, and the database was assembled using JavaScript with the Cheerio package.

In order to get the data, I first made a webscrapper to fetch some publically available info. Wikipedia has a lot of lists with different properties, so I had to trim down the data a bit to find one that had what I was looking for, mainly images and location data for each shroom. Two of these lists were of my interest, the deadly and poisonous fungi types.

After the scrapping, I did some clean up, like merging both lists into one and sorting it alphabetically, and also splitting the location string into an array - I'll try to do something with this data in the future.

### License
All the data was obtained from Wikipedia. Therefore, this project uses the Creative Commons Attribution-ShareAlike 3.0 Unported License.
