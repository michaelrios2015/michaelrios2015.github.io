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


//make this is a function so I can re-use it??

function displayContent (content){

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
displayContent(projects);

console.log("HELLO!!");
//make this is a function so I can re-use it??


