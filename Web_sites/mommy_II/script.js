function displayPics(content) {

	var html = ""; //declaring string
	var length = content.length;

	for (var i = 0; i < length / 3; i++) {

		html += '<section class="row" style="text-align:center;"> '; //building string
		for (var j = (i * 3); j < 3 + (i * 3); j++) { // each row has three projects
			html += '<div class="col-md-4">' +
				'<img class="img-responsive" src="' + content[j].link + '" alt=' + content[j].name + 'style="display:inline-block;">' +
				'</div>';

		};

		html += '</section>';

	};

	$("#pics").append(html);
	//console.log(html);

}

var navigations = [{
		name: "About Me",
		link: "index.html"
	},
	{
		name: "Trip One",
		link: "place_one/index.html"
	},
	{
		name: "Trip Two",
		link: "index.html"
	},
	{
		name: "Trip Three",
		link: "index.html"
	},
	{
		name: "Contact Me",
		link: "mailto:bigwalruss@gmail.com?Subject=Peppers"
	}
];


function displayNav(content) {

	var html = ""; //declaring string
	html += '<nav class="row"> <div class="col-md-1 text-center"> </div>'; //building string

	for (var i = 0; i < content.length; i++) { // each row has three projects
		html += '<div class=\"col-md-2 text-center\">' +
			'<h1><a href=\"' + content[i].link + '\">' + content[i].name + '</a></h1>' +
			'</div>';
	};

	html += '<div class="col-md-1 text-center"> </nav>';

	$("#nav").append(html);
	//console.log(html);

}