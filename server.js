const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/weather', (request, response) => {
});
app.get('/location', (request, response) => {
    try{
    const geoData = require('./data/geo.json');
    const location = new Location(request.query.location, geoData);
    response.send(location);
    } catch(error){
        response.status(500).send("Sorry we done fucked up.");
    }
})
function Location(query, geoData){
    this.search_query = query;
    this.formatted_query = geoData.results[0].formatted_address;
    this.latitude = geoData.results[0].geometry.location.lat;
    this.longitude = geoData.results[0].geometry.location.lng;
}
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('yeah! servers bitch!');
});
