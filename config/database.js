var url = 'mongodb://piu:piu@mongo.onmodulus.net:27017/ryte2jaG';

var connectionHandler = function (err, res) {
  if (err)
  	console.log ('ERROR connecting to the database.');
}

module.exports = {
	url : url,
	connectionHandler : connectionHandler
}