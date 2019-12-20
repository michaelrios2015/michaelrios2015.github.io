///Biography object
var bio = {
    name: "Mike Rios",
    role: "Computer Person",
    //object within an object
    contacts: {
        //mobile: "443-602-6012",
        email: "michael.rios093@gmail.com",
		github: "michaelrios2015",
        githubLink: "https://github.com/michaelrios2015",
        instgram: "michael_rios2001",
		instgramLink: "https://www.instagram.com/michael_rios2001/",
        location: "News York, NY"
    },

    welcomeMessage: "Greetings Earthlings",
    //array
    skills: ["HTML", "CSS", "Javascript", "Java", "C++", "Nice guy"],
    //biopic: "images/cat-smaller.jpg"
};


//varibles for formating

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr/>';


//var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
//var HTMLmobile = '<div class="col-md-4 col-sm-6"><span class="orange-text">mobile</span><span>%data%</span></div>';
var HTMLemail = '<div class="col-md-3 col-sm-6"><span class="orange-text">email</span><a href="mailto:%data%"><span>%data%</span></a></div>';
var HTMLinstgram = '<div class="col-md-3 col-sm-6"><span class="orange-text">instagram</span><a href="%data%"><span>%data%</span></a></div>';
var HTMLgithub = '<div class="col-md-3 col-sm-6"><span class="orange-text">github</span><a href="%data%"><span>%data%</span></a></div>';
var HTMLblog = '<div class="col-md-3 col-sm-6"><span class="orange-text">blog</span><span>%data%</span></div>';
var HTMLlocation = '<div class="col-md-3 col-sm-6"><span class="orange-text">location</span><span>%data%</span></div>';

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span>%data%</span></li>';


//Display Biography function
bio.displayBS = function() {

    //put info in formatted variables
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    
	//var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
	formattedHTMLemail = formattedHTMLemail.replace("%data%", bio.contacts.email);
    var formattedHTMLinstagram = HTMLinstgram.replace("%data%", bio.contacts.instgramLink);
	formattedHTMLinstagram = formattedHTMLinstagram.replace("%data%", bio.contacts.instgram);
    var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.githubLink);
    formattedHTMLgithub = formattedHTMLgithub.replace("%data%", bio.contacts.github);
	var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedHTMLcontactGeneric = '<div class = row>'  + formattedHTMLemail + formattedHTMLgithub + formattedHTMLinstagram + formattedHTMLlocation + '</div>';
	//var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    //var formattedHTMLwelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);





	//append to page
	$("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
	$("#topContacts").append(formattedHTMLcontactGeneric);
    $("#footerContacts").append(formattedHTMLcontactGeneric);
    //$("#header").append(formattedHTMLbioPic);
    //$("#header").append(formattedHTMLwelcome);
    $("#header").append(HTMLskillsStart);

	for (skill in bio.skills) {

        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills:last").append(formattedSkills);

    }

    $("#header").append('<hr/>');
  
}

bio.displayBS();

//WORK!!
var work = {
    "jobs": [{ //array of objects with
            "employer": "NYPL",
            "title": "Librarian",
            "location": "Bronx, NY",
            "dates": "2014-Present",
            "url": "https://www.NYPL.org",
            "description": "Helping the people"
        }, {
            "employer": "Enoch Pratt Free Library",
            "title": "Librarian",
            "location": "Baltimore, MD",
            "dates": "2003-2014",
            "url": "https://www.prattlibrary.org",
            "description": "Helping people in Baltimore"
        },

    ]
 }

work.display = function() {

    for (job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployerUrl = HTMLworkEmployerUrl.replace("%data%", work.jobs[job].url);    
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployerUrl + formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		
        //console.log(formattedEmployerTitle);

        $(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
	
	}

}

work.display();

//PROJECTS

var projects = { //array of objects with
    "projects": [{
            "title": "Hangman",
            "dates": "2014",
            "description": "Made hangman with C++",
            "url": "https://github.com/michaelrios2015/Hangman-Project-5",
            "images": ["images/cat-smaller.jpg"]

        },
		{
            "title": "Poker",
            "dates": "2014",
            "description": "Poker made with Java",
            "url": "https://github.com/michaelrios2015/Poker",
            "images": ["images/cat-smaller.jpg"]
        }		 				 
    ]
}

//DISPLAY EDUCATION!!
projects.display = function() {
//    console.log("hello");
    for (project in projects.projects) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        $(".project-entry:last a").attr('href', projects.projects[project].url)

        for (image in projects.projects[project].images) {

            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            //console.log("images");

            $(".project-entry:last").append(formattedImage);
        }
    }
}

projects.display();

//EDUCATION!!

var education = {
    "schools": [ //array of objects with
        {
            "name": "Quuens College",
            "location": "Queens, NY",
            "degree": "MLS",
            "majors": ["Library Science"],
            "dates": "2001-2003",
            "url": "http://www.qc.cuny.edu/"
        },

        {
            "name": "Columbia College",
            "location": "New York, NY",
            "degree": "BA",
            "majors": ["Art"],
            "dates": "1995-1999",
            "url": "http://www.columbia.edu/"
        },
    ],
    "onlineCourses": [{ //array with ?????? this maybe wrong
            "title": "FEND",
            "school": "Udacity",
            "date": 2016,
            "classUrl": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
            "url": "http://www.udacity.com"
        },
        { //array with ?????? this maybe wrong
            "title": "Android Basics by Google Nanodegree Program",
            "school": "Udacity",
            "date": 2018,
            "classUrl": "https://www.udacity.com/course/android-basics-nanodegree-by-google--nd803",
            "url": "http://www.udacity.com"
        }              
    ]
    //display: function taking no parameters
}


//DISPLAY EDUCATION!!
education.display = function() {

    for (school in education.schools) {

        $("#education").append(HTMLschoolStart);
    
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var url = education.schools[school].url;
        
        $(".education-entry:last").append(formattedNameDegree);
        $(".education-entry:last a").attr('href', url);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);

        for (major in education.schools[school].majors) {

            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
            //console.log(formattedMajor);

            $(".education-entry:last").append(formattedMajor);
        }
    }

    //$("#education").append(HTMLschoolStart);
        $("#education").append(HTMLonlineClasses);
        

    for (online in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedTitleUrl = HTMLonlineTitleUrl.replace("%data%", education.onlineCourses[online].classUrl);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        var formattedSchoolTitle = formattedTitleUrl + formattedTitle + formattedSchool;
        var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);

        $(".education-entry:last").append(formattedSchoolTitle);
        $(".education-entry:last").append(formattedDate);
        $(".education-entry:last").append("<br>");
        //$(".education-entry:last").append(formattedUrl);
        //$(".education-entry:last a").attr('href', education.onlineCourses[online].url );
    }
}

education.display();

$("#mapDiv").append(googleMap);