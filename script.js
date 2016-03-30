var data = [ ["we don't win", '83.2', 'Donald Trump'] , ['you have to', '72.8', 'Donald Trump'] , ["it's going to be", '61', 'Donald Trump'] , ['eminent domain', '55.5', 'Donald Trump'] , ['that I can tell you', '55.5', 'Donald Trump'] , ["you wouldn't have", '54.1', 'Donald Trump'] , ['give me a break', '49.9', 'Donald Trump'] , ['going to bring jobs back', '48.5', 'Donald Trump'] , ["look at what's", '45.7', 'Donald Trump'] , ['all over the place', '44.4', 'Donald Trump'] , ['just so you understand', '44.4', 'Donald Trump'] , ['a lot of money', '44.4', 'Donald Trump'] , ["we're going to make", '44.4', 'Donald Trump'] , ['I have to say', '44.4', 'Donald Trump'] , ['one of the worst', '44.4', 'Donald Trump'] , ['we have no idea who', '41.6', 'Donald Trump'] , ['tens of thousands of people', '41.6', 'Donald Trump'] , ['we have a country', '38.8', 'Donald Trump'] , ['he beats the rest of the field', '38.8', 'Donald Trump'] , ['Atlantic City', '38.8', 'Donald Trump'] , ['I would note', '74.9', 'Ted Cruz'] , ['business flat tax', '58.2', 'Ted Cruz'] , ['right to keep and bear arms', '58.2', 'Ted Cruz'] , ['simple flat tax', '58.2', 'Ted Cruz'] , ['the fight', '58.2', 'Ted Cruz'] , ['religious liberty', '52.7', 'Ted Cruz'] , ['we need a president', '44.4', 'Ted Cruz'] , ['the gang of eight', '44.4', 'Ted Cruz'] , ['working men and women', '44.4', 'Ted Cruz'] , ['we are one jsutice away from a Supreme Court that', '41.6', 'Ted Cruz'] , ['Jeff Sessions and Steve King', '41.6', 'Ted Cruz'] , ['will repeal every word of Obamacare', '41.6', 'Ted Cruz'] , ['who do you know will', '41.6', 'Ted Cruz'] , ['if I am elected president', '41.6', 'Ted Cruz'] , ['radical Islamic terrorism', '39.5', 'Ted Cruz'] , ['the Bill of Rights', '38.8', 'Ted Cruz'] , ['a commander in chief', '38.8', 'Ted Cruz'] , ['I was proud to lead that fight when millions of Americans rose up against', '38.8', 'Ted Cruz'] , ['the next thing I intend to do is intruct the department of justice', '36', 'Ted Cruz'] , ['young people coming out of school with student loans up to their eyeballs', '36', 'Ted Cruz'] , ["when I'm president", '99.8', 'Marco Rubio'] , ['to reach more people and change more lives than ever before', '76.2', 'Marco Rubio'] , ['the 21st century', '66.5', 'Marco Rubio'] , ['like the rest of the world', '58.2', 'Marco Rubio'] , ['the world is safer and a better place when America is the strongest', '58.2', 'Marco Rubio'] , ['we are going to be', '55.5', 'Marco Rubio'] , ['in the history of the', '55.5', 'Marco Rubio'] , ['see what the American people are willing to support', '49.9', 'Marco Rubio'] , ['under control', '49.9', 'Marco Rubio'] , ['the greatest country in the', '41.6', 'Marco Rubio'] , ['legal immigration system', '41.6', 'Marco Rubio'] , ['will not be able to', '41.6', 'Marco Rubio'] , ["this fiction that Barack Obama doesn't know what he's doing he knows exactly what", '38.8', 'Marco Rubio'] , ['once and for all', '38.8', 'Marco Rubio'] , ['you for your vote', '38.8', 'Marco Rubio'] , ['be defeated on the ground by ground forces made up primarily of Sunni', '38.8', 'Marco Rubio'] , ['not to defend the Second Ammendment but figure out ways to undermine it', '38.8', 'Marco Rubio'] , ['paycheck to paycheck', '37.4', 'Marco Rubio'] , ['in San Bernardino was an American citizen born and raised in this country', '36', 'Marco Rubio'] , ['this is an important', '33.3', 'Marco Rubio'] , ['fact of the matter is', '55.5', 'John Kasich'] , ["they have not commited a crime since they've been here", '55.5', 'John Kasich'] , ['in Ohio', '52.7', 'John Kasich'] , ['of Ohio', '47.1', 'John Kasich'] , ['a balanced budget', '45.7', 'John Kasich'] , ['the first 100 days', '44.4', 'John Kasich'] , ['when I was in Washington', '41.6', 'John Kasich'] , ['from an 8 billion hole to a 2 billion surplus', '41.6', 'John Kasich'] , ['"if you\'re in the business of selling things, you\'re not going to sell"', '38.8', 'John Kasich'] , ['to make sure that', '38.8', 'John Kasich'] , ['but at the end of the day', '38.8', 'John Kasich'] , ['for 18 years', '37.4', 'John Kasich'] , ['our wages are growing faster than the national average', '37.4', 'John Kasich'] , ['stay in their own home rather than being forced into a nursing home', '36', 'John Kasich'] , ['the budget', '34.7', 'John Kasich'] , ['go back to Washington', '33.3', 'John Kasich'] , ['tax cuts', '33.3', 'John Kasich'] , ['from 8 billion in the hole to 2 billion in the black', '33.3', 'John Kasich'] , ["I've done it", '31.2', 'John Kasich'] , ['you have to', '29.1', 'John Kasich'] , ]
/*
for (var i = 0; i < data.length; i++){
    var svgContainer = d3.select("body").append("svg")
        .attr("width", 42)
        .attr("height", 42);
    var circle = svgContainer.append("circle")
        .attr("cx", 21)
        .attr("cy", 21)
        .attr("r", 20);
    var title = svgContainer.append("title")
	.text(data[i][0])
	.style('darkOrange');
}
*/
var svg = d3.select("body").append("svg")
    .attr("width", 1250)
    .attr("height", 1500);

var pre_x = 0;
var pre_r = 0;

var x_for_y = 0;
var r_for_y = 0;
var row = 0;

svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("stroke", "black")
    .attr("cx", function(d){
				if ( (((pre_x + pre_r) + 25 + Number(d[1]) ) / 1100) >= 1){
						var ret_x = (( (pre_x + pre_r) + 25 +  Number(d[1]) ) % 1100 ) + 40;
				}
				else {
						var ret_x = ( (pre_x + pre_r) + 25  + Number(d[1]) ) % 1100;
				}
				pre_x = ret_x;
				pre_r = Number(d[1]);
				return ret_x})
		.attr("cy", function(d){
				if  ((((x_for_y + r_for_y) + 25 + Number(d[1]) ) / 1100 ) >= 1){
						console.log("new");
						row++;
				}
				//var x_coor = ( (x_for_y + r_for_y) + 25 + Number(d[1]) )%1100;
				if ( (((x_for_y + r_for_y) + 25 + Number(d[1]) ) / 1100) >= 1){
						var x_coor = (( (x_for_y + r_for_y) + 25 +  Number(d[1]) ) % 1100 ) + 40;
				}
				else {
						var x_coor = ( (x_for_y + r_for_y) + 25  + Number(d[1]) ) % 1100;
				}

				x_for_y = x_coor;
				r_for_y = Number(d[1]);
				return row*160 + 100})
		.attr("fill", function(d){
				if (d[2] == 'John Kasich')
						return "red";
				if (d[2] == 'Marco Rubio')
						return "green";
				if (d[2] == 'Ted Cruz')
						return "yellow";
				if (d[2] == 'Donald Trump')
						return "orange";
	      
		})
		.attr("r", function(d){return d[1]})
    .append("text")
    .attr("dx", function(d){return 10})
    .text(function(d){return d[0]});
