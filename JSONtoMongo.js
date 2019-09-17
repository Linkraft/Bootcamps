'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js');
/* Connect to your database using mongoose - remember to keep your key secret*/
//see https://mongoosejs.com/docs/connections.html
//See https://docs.atlas.mongodb.com/driver-connection/

mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.connect(config.db.uri, {useNewUrlParser: true});

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
  //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

  Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
*/

fs.readFile('listings.json', 'utf8', function(err, data) {
  var listings = JSON.parse(data);
  for (var i = 0; i < listings.entries.length; i++) {
    var location = new Listing({
      code: listings.entries[i].code,
      name: listings.entries[i].name,
      coordinates: listings.entries[i].coordinates,
      address: listings.entries[i].address,
    });
    location.save(function(err) { if (err) throw err; });
    if (err) throw err;
  }
});

/*  
  Check to see if it works: Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */