// Api documentation found here https://geocoder.opencagedata.com/api
// We're doing reverse

// I've generated a key so you can start right away
var api_key = '614bd81902a73f0d3f6db088fdab4f68'; 

// The end point is the url you request to get data
var endpoint = 'http://api.opencagedata.com/geocode/v1/json?q=';

// The full url will be constructed like this
// http://api.opencagedata.com/geocode/v1/json?q=PLACENAME&key=YOUR-API-KEY

function findLocation(){
	var query = $('#location').val();;

	//The query needs to be encoded for URLs - ie replaces spaces with %20's
 	var encodedQuery = encodeURIComponent(query);

 	// Now we can construct the url
	var url = endpoint + encodedQuery + '&key=' + api_key;
	// https://api.opencagedata.com/geocode/v1/json?q=Wellington,+New%20Zealand&key=614bd81902a73f0d3f6db088fdab4f68&pretty=1
	// It should look like that - try opening that in your browser

	// Now we can use Jquery to make a GET request
	$.get(url, function(data) {
		// Check your browser javascript console to look through the data
		console.log(data);

		$('#address').text('Address: ' + data.results[0].formatted);
		$('#lat').text('Lattitude: ' + data.results[0].geometry.lat);
		$('#lng').text('Longitude: ' + data.results[0].geometry.lng);
		
	});
}