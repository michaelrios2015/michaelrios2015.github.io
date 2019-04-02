
function displayProjects(contents) {

    var length = contents.length;


    var html = ""; //declaring string


    for (var i = 0; i < length; i++) { 

        console.log(i);
        html += '<div class="row">' +
            '<div class="col-md-12">' +
            '<hr />' +
            '</div>' +
            '</div>' +
			//the projects
            '<section class="row">' +
            '<div class="col-md-12">' +
            '<p><a href=' + contents[i].link + '>' + contents[i].name + '</a></p>' +
            '<p>' + contents[i].description + '</p>' +
            '</div>' +
            '</section>'

    }

    html += '</div>';

    // append string to div
    $("#content").append(html);
}
