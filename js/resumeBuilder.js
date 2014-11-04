// BIO SECTION
var bio = {
    "name": "Jeremy Lindstrom",
    "role" : "Front End Developer",
    "contacts" : {
    "email" : "jeremy@jeremylindstrom.com",
    "github" : "dekard",
    "mobile" : "972-963-0890",
    "twitter": "@jeremylindstrom",
    "location": "Flower Mound, Texas"
     },
    "skills" : ["Design & Development", "HTML/CSS/Javascript/JQuery/JSON"],
    "picture" : "images/webshot.png",
    "welcomeMsg" : "Currently looking for new opportunties in Front End Web Development!"
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var contactsMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var contactsEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var contactsGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var contactsTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var contactsLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var displayWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
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
        "employer" : "Overall Parts Solutions",
        "title" : "Mobile Developer/Support Analyst",
        "location" : "Grand Prairie, Texas",
        "dates" : "2013-2014",
        "website" : "http://www.overallpartssolutions.com",
        "description" : "Web & Mobile (Android and iOS) software development including: Application code and database query optimization, mock-up, UI and UX design and implementation of user interfaces. Creation, design and development of new features and enhancements. Provide support with installation, configuration and ongoing usability of desktop/mobile applications, peripheral equipment and software."
    },
    {
        "employer" : "Fellowship Church",
        "title" : "Mobile Developer/Support Analyst",
        "location" : "Grapevine, Texas",
        "dates" : " 2011-2013",
        "website" : "http://www.fellowshipchurch.com",
        "description" : "Create mobile applications from start to finish including design through development for smartphones using Expression Engine, XCode & Photoshop. Design graphics and maintain content for fellowshipchurch.com, edyoung.com, fellowshiplive.com, myc3global.com, c3conference.com, and various micro-sites. Design & distribute multiple ministry-specific e-mail newsletters to approximately 40,000 subscribers. Design, update, maintain and test our iPhone/Android app with the latest audio/video sermons, daily devotionals, and promotions. Installs, troubleshoots, and maintains products and equipment. Troubleshoot, support and repair LAN connectivity issues including managed switches and wireless networks. Perform network administration including installing, configuring and supporting file and print services, email administration and user account management."
    },
    {
        "employer" : "Cornered Rat Software",
        "title" : "Game Artist",
        "location" : "Bedford, Texas",
        "dates" : "2008-2010",
        "website" : "http://www.battlegroundeurope.com",
        "description" : "Published Title: WWIIOL:Battleground Europe. Design and create assets that make up the WWIIOL Universe. Create various 3d models including LOD's and collision models. Create diffuse, normal, spec maps. Work with other artists to define the art style of WWIIOL."
    }
  ]
};
work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
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
        "name" : "Sanford Brown",
        "location" : "Tampa, Florida",
        "degree" : "Bachelor of Fine Arts",
        "majors" : ["Computer Animation"],
        "dates" : "2008",
        "website" : "http://www.sanfordbrown.edu/",
    }
  ],
    "onlineCourses" : [
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

    if (education.onlineCourses.length > 0) {  
        $("#education").append(HTMLonlineClasses); 

        for (var course in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
            formattedOnlineTitle = formattedOnlineTitle.replace("#",education.onlineCourses[course].website);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
            var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            $(".education-entry:last").append(formattedOnlineTitleSchool);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
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
// displayBio();
// displayWork();
// displayEducation();
// displayProjects();
$("#mapDiv").append(googleMap);
$('#footerContacts').append(internationalizeButton);
