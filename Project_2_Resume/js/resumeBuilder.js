///Biography

var bio = {
    "name": "Mike Rios",
    "role": "Computery GUY or possibly gal",
    "contacts": {
        "mobile": "443-602-6012",
        "email": "michael.rios093@gmail.com",
        "github": "https://github.com/michaelrios2015",
        "twitter": "not here",
        "location": "News York, NY"
    },

    "welcomeMessage": "Greetings Earthlings",
    "skills": ["HTML", "CSS", "Javascript", "Java", "C++", "Nice guy"],
    "biopic": "../Project_1_generic_website/images/cat-smaller.jpg"
}

//Display Biography
bio.display = function() {

    //put info in formatted variables
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedHTMLcontactGeneric = formattedHTMLmobile + formattedHTMLemail + formattedHTMLgithub + formattedHTMLtwitter + formattedHTMLlocation;
	var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedHTMLwelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

	//append to page
	$("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
	$("#topContacts").append(formattedHTMLcontactGeneric);
    $("#footerContacts").append(formattedHTMLcontactGeneric);
    $("#header").append(formattedHTMLbioPic);
    $("#header").append(formattedHTMLwelcome);
    $("#header").append(HTMLskillsStart);

	for (skill in bio.skills) {

        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills:last").append(formattedSkills);

    }
}

bio.display();

//WORK!!
var work = {
    "jobs": [{ //array of objects with
            "employer": "NYPL",
            "title": "Librarian",
            "location": "Bronx, NY",
            "dates": "2014-2016",
            "description": "Helping the people"
        }, {
            "employer": "Enoch Pratt Free Library",
            "title": "Librarian",
            "location": "Baltimore, MD",
            "dates": "2003-2014",
            "description": "Helping people in Baltimore"
        },

    ]
 }

work.display = function() {

    for (job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
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
            "title": "Hangman C++",
            "dates": "2014",
            "description": "Made hangman with C++",
            "images": ["../Project_1_generic_website/images/cat-smaller.jpg", "../Project_1_generic_website/images/cat-smaller.jpg"]

        },
		{
            "title": "Poker C++",
            "dates": "2014",
            "description": "Poker made with C++",
            "images": ["../Project_1_generic_website/images/cat-smaller.jpg", "../Project_1_generic_website/images/cat-smaller.jpg"]
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
            "url": "http://www.udacity.com"
        },
        { //array with ?????? this maybe wrong
            "title": "FEND",
            "school": "Udacity",
            "date": 2016,
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
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        var formattedSchoolTitle = formattedTitle + formattedSchool;
        var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);

        $(".education-entry:last").append(formattedSchoolTitle);
        $(".education-entry:last").append(formattedDate);
        $(".education-entry:last").append(formattedUrl);
                $(".education-entry:last a").attr('href', education.onlineCourses[online].url );
    }
}

education.display();

$("#mapDiv").append(googleMap);