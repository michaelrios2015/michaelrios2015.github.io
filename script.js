/* array of objects for home of website */

var projects = [
        {
        name: "FEND",
        link: "FEND/index.html"
    },
	{
        name: "C++ Projects",
        link: "cpp_projects/index.html"
    },
    {
        name: "Java Projects",
        link: "java_projects/index.html"
    },
    {
        name: "Web Animation",
        link: "Random_Javascript/index.html"
    },
    {
        name: "Android Basics",
        link: "Android_Basics/index.html"
    },
    {
        name: "Websites",
        link: "Web_sites/index.html"
    }

];

var length = projects.length;


var html = ""; //declaring string


//displays intial website

function displayContentHomePage(content){

for (var j = 0; j < length / 3; j++) { // we only want three project per row 

    html += '<div class="row">';//building string


	
    for (var i = (j * 3); i < 3 + (j * 3); i++) { // each row has three projects
        console.log(j);
        console.log(i);
        html += '<section class="col-md-4 col-sm-6 col-xs-12">' +
            '<img class="img-responsive" src="images/nyplPurple.jpg" alt="puppy" />' +
            '<a href=' + content[i].link + '>' +
            '<h3 class="project">' + content[i].name + '</h3>' +
            '</section>';

    }

    html += '</div>';

}

// append string to div
$("#content").append(html);
}

/* builds the rest of the pages */

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


