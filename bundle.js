webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

(function diplayHeatMap() {
'use strict'

var height = 1000;
var  width = 1500;
var padding = 100;



var canvas = d3.select(".diagram")
			   .append("svg")
			   .attr("height", height + padding * 2)
			   .attr("width", width + padding * 2)
			   
			   

		
	d3.json("https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json", function(data) {



		var nodes = data.nodes;

		var links = data.links;	


		var force = d3.layout.force()
					  		 .size([width, height])
					  		 .nodes(nodes)
					  		 .links(links)
						     
		force.linkDistance(25);
		force.linkStrength(.1);
		force.charge(-150)


		var link = canvas.selectAll(".link")
					  	 .data(links)
					  	 .enter()
					 	 .append("line")
					 	 .attr("class", "link")
					 	 .attr('x1', function(d, i) { return 20 * d.source })
		        		 .attr('y1', function(d, i) { return 30 * d.source })
		        		 .attr('x2', function(d, i) { return 20 * d.target })
		        		 .attr('y2', function(d, i) { return 30 * d.target });


		var node = canvas.selectAll(".node")
						 .data(nodes)
					  	 .enter()
					  	 .append("g")
					  	 .append("rect")
					  	 .attr("class", "node")
					  	 .attr("width", 25)
					  	 .attr("height", 15)
					  	 .attr("x", function(d, i) {return 20 * i})
						 .attr("y", function(d, i) {return 30 * i})


		var images = d3.select(".diagram")
					   .selectAll("img")
					   .data(nodes)
					   .enter()
					   .append("img")
					   .attr("class", function(d) { return "flags flag flag-" + d.code})
					   .style("position", "absolute")
					   .style("top", function(d, i) {return (20 * i) + "px"})
					   .style("left", function(d, i) {return (30 * i) + "px"})



		


		force.on("tick", function() {

			node.transition().ease('linear').duration(300)
				.attr("x", function(d) {return d.x})
				.attr("y", function(d) {return d.y})


			link.transition().ease('linear').duration(300)
				.attr('x1', function(d) { return d.source.x; })
		        .attr('y1', function(d) { return d.source.y; })
		        .attr('x2', function(d) { return d.target.x; })
		        .attr('y2', function(d) { return d.target.y; });

		    images.transition().ease('linear').duration(300)
		    	  .style("top", function(d) {return d.y + "px"})
		    	  .style("left", function(d) {return d.x + "px"})
			
		


		})

		force.start();




	})


}())

/***/ })
],[1]);