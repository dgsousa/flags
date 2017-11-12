var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: __dirname + "/app",
	entry: {
		app: "./app.js",
		vendor: ['d3']
	},
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendor.js"})
	]
}