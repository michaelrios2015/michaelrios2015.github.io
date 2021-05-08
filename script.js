/* array of objects for home of website
not really needed but I wanted to understand objects more */

var projects = [
    {
        name: "Full Stack",
        link: "fullstack/index.html"
    },
    {
        name: "Android Basics",
        link: "Android_Basics/index.html"
    },
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
    }
    
];




//displays intial website

function displayContentHomePage(content){

var length = projects.length;


var html = ""; //declaring string

    html += '<div class="row">';//building string

for (var i = 0; i < length; i++) { //apperently I did not need to worry about only having three in each row 


        html += '<section class="col-md-4 col-sm-6 col-xs-12">' +
            '<a href=' + content[i].link + '>' +
            '<img class="img-responsive" src="images/nyplPurple.jpg" alt="police guy from nypl digital" />' +
            '<h3 class="project">' + content[i].name + '</h3> </a>' +
            '</section>';

}

    html += '</div>';
// append string to div
$("#content").append(html);
}
/* builds the rest of the pages is it good to have it here*/

function displayProjects(contents) {

    var length = contents.length;


    var html = ""; //declaring string


    for (var i = 0; i < length; i++) { 

		//adds info for each project
        console.log(i);
        html += '<div class="row">' +
                    '<div class="col-md-12 col-sm-12 col-xs-12">' +
                    '<hr />' +
                    '</div>' +
                '</div>' +
			//the projects
            '<section class="row">' +
                '<div class="col-md-12 col-sm-12 col-xs-12">' +
                '<h3><a href=' + contents[i].link + '>' + contents[i].name + '</a></h3>' +
                '<p>' + contents[i].description + '</p>' +
                '</div>' +
            '</section>'

    }

    html += '</div>';

    console.log(html)

    // append string to div
    $("#content").append(html);
}


						