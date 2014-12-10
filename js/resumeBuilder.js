// BIO SECTION
var bio = {
    "name": "Kobestarr",
    "role" : "Front End Developer, Trainee Polymath",
    "contacts" : {
    "email" : "kobestarr@gmail.com",
    "github" : "kobestarr",
    "mobile" : "+44 562378277",
    "twitter": "@kobestarr",
    "facebook": "facebook.com/kobestarrdotcom",
    "locale": "London, England"
     },
    "skills" : ["Trainee Ninja", "Trainee RoR Wrangler", "Placid Casual", "Learning HTML, CSS, JavaScript and jQuery, Ruby, Rails and Python - too much really!"],
    "face" : "images/webshot.png",
    "welcome" : "Hi there. If you are looking for a new website you may have come to the right place!"
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var contactsMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var contactsEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var contactsGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var contactsTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var contactsFacebook = HTMLtwitter.replace("%data%", bio.contacts.facebook);
    var contactsLocation = HTMLlocation.replace("%data%", bio.contacts.locale);
    var displayWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcome);
    var displayImage = HTMLbioPic.replace("%data%",bio.picture);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(displayImage);
    $("#header").append(displayWelcomeMsg);
    $("#topContacts").append(contactsEmail);
    $("#topContacts").append(contactsGithub);
    $("#topContacts").append(contactsMobile);
    $("#topcontacts").append(contactsTwitter);
    $("#topContacts").append(contactsLocation);
    $("#footerContacts").append(contactsEmail);
    $("#footerContacts").append(contactsGithub);
    $("#footerContacts").append(contactsMobile);
    $("#footercontacts").append(contactsTwitter);
    $("#footerContacts").append(contactsLocation);
    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      $("#skills").append(formattedSkill);
      // formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      // $("#skills").append(formattedSkill);
      // formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
      // $("#skills").append(formattedSkill);
    }
}
// WORK SECTION
var work = {
    "jobs" : [
    {
        "company" : "Mum",
        "title" : "Saturday Shop Boy",
        "location" : "Manchester, England",
        "dates" : "1997-1998",
        "website" : "http://www.theInternetDidNotExistThen.com",
        "description" : "Lackey for my mum and I had to be grateful. I really was - no acting involved.Honest!"
    },
    {
        "company" : "The 4th Emergency Service",
        "title" : "Car Breakdown Seller",
        "location" : "Manchester, England",
        "dates" : " Summers 1998-2003",
        "website" : "http://www.theaa.com/",
        "description" : "Answer the phones and sell breakdown cover for the good folks that would be driving round Europe and having more fun than me."
    },
    {
        "company" : "The Norwegian Peeps",
        "title" : "Chemical Engineer Bod",
        "location" : "Bergen, Norway",
        "dates" : "2010-2013",
        "website" : "http://www.KanfaAragon.com",
        "description" : "I basically made Oil and gas things you know??"
    }
  ]
};
work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].company);
    formattedEmployer = formattedEmployer.replace("#", work.jobs[job].website);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title)
    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation;
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
}
//Education Section
var education = {
    "schools" : [
    {
        "name" : "Life",
        "location" : "Earth, The Universe",
        "degree" : "This and that",
        "majors" : ["Chemical Reaction Engineering"],
        "dates" : "1998-2003",
        "website" : "http://www.Sheffield.ac.uk/",
    }
  ],
    "online" : [
    {
        "title" : "Intro to HTML and CSS",
        "school" : "Udacity",
        "dates" : "2014",
        "website" : "https://www.udacity.com/course/ud304",
    },
    {
        "title" : "Front-End Web Developer Nanodegree",
        "school" : "Udacity",
        "dates" : "2014-2015",
        "website" : "https://www.udacity.com/course/nd001"
    }
  ]
};
education.display = function() {
    for (var school in education.schools) {
        // create new div for education
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
        formattedSchoolName = formattedSchoolName.replace("#",education.schools[school].website);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedSchoolNameDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolMajor); 
    }

    if (education.online.length > 0) {  
        $("#education").append(HTMLonlineClasses); 

        for (var course in education.online) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.online[course].title);
            formattedOnlineTitle = formattedOnlineTitle.replace("#",education.online[course].website);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.online[course].school);
            var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            $(".education-entry:last").append(formattedOnlineTitleSchool);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.online[course].dates);
            $(".education-entry:last").append(formattedOnlineDates);
       }
    }
};
// PROJECTS AREA
var projects = {
    "projects" : [
    {
    "title" : "Overall Part Solution - Mobile Applications",
    "dates" : "2014",
    "description" : "Branding, Design and Development",
    "images" : ["images/opsapps.png"]
    },
        {
    "title" : "Fellowship Church - Mobile Applications",
    "dates" : "2014",
    "description" : "Branding, Design & Development, Objective-C, HTML/CSS",
    "images" : ["images/c3app.png", "images/lfkapps.png"]
    }
  ]
};
projects.display = function() {
    for (var project in projects.projects) {
        var displayProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        var displayProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        var displayProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(displayProjectTitle);
        $(".project-entry:last").append(displayProjectDates);
        $(".project-entry:last").append(displayProjectDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]); 
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

//Locationizer for GoogleMap
function locationizer(work_obj) {
    var locationArray = [];
    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}
//Internationalizer Uppercase Name Generator (TODO look at ways to undo it)
function inName() {
    var name1 = bio.name.trim().split(" ");
    name1[0] = name1[0].slice(0,1).toUpperCase() + name1[0].slice(1).toLowerCase();
    name1[1] = name1[1].toUpperCase();
    return name1[0] + " " + name1[1];
}

//Document Clicks in console Rubric item
$(document).click(function (loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

//Kick off the display functions
bio.display();
work.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap);
$('#footerContacts').append(internationalizeButton);
