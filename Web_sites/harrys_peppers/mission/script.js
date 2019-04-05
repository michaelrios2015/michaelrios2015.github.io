						var images = [
    {
        name: "Peppers",
        link: "../images/peppers_roof.jpg"
    },
	{
        name: "Peppers",
        link: "../images/platted_peppers.jpg"
    },
    {
        name: "Peppers",
        link: "../images/pepper_parking.jpg"
    }
	];

	
function displayPics (content){

	var html = ""; //declaring string

	var length = content.length;
	
	
	
    html += '<section class="row" style="text-align:center;"> ';//building string
	
	
	
    for (var i = 0; i < content.length; i++) { // each row has three projects
        html += '<div class="col-md-4">' 
                 + '<img class="img-responsive" src="' + content[i].link + '" alt='+ content[i].name + 'style="display:inline-block;">'
            + '</div>';

    };

    html += '</section>';

	$("#pics").append(html);
	
	console.log(html);
	
}

displayPics(images);		
		