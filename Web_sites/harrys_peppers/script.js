function displayPics (content){

	var html = ""; //declaring string

	var length = content.length;
	
	
	

	
	
	
	for (var i=0; i < length/3; i++){
	
	    html += '<section class="row" style="text-align:center;"> ';//building string
    for (var j = (i*3); j < 3 + (i*3); j++) { // each row has three projects
        html += '<div class="col-md-4">' 
                 + '<img class="img-responsive" src="' + content[j].link + '" alt='+ content[j].name + 'style="display:inline-block;">'
            + '</div>';

    };

    html += '</section>';
	
	};
	


	$("#pics").append(html);
	
	console.log(html);
	
}