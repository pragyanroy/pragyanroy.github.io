var bio = { 
	        "name": "Pragyan Roy",
            "role": "CISCO UCCE/IVR/ICM and Web Developer",
             "contacts" : {
             "mobile": "2036454699",
             "email": "roy.pragyan@gmail.com",
             "github": "pragyanroy",
             "location": "San Francisco"
         },
         "welcomeMessage": " Welcome to Pragyan Roy's Resume",
         "skills": ["CiscoIVR","Cisco ICM","HTML-CSS-JavaScript","Cisco-UCCE"],
         "bioPic":"images/fry.jpg"
}

var education={
	"schools":[
	{
		"name": "Biju Patnaik Institute of Technology",
		"location": "Bhubaneswar India",
		"degree":"Masters in Computer Science Engineering",
		"majors":["Computer Science"],
		"dates":"2004",
		"url":"http://www.bput.ac.in/"
	},
	{
		"name": "ISC",
		"location": "Sunabeda India",
		"degree":"High School Diploma",
		"majors":["Science"],
		"dates":"2000",
		"url":"http://www.cisce.org/"
	
	}
	],
    "OnlineCourses":[
    {
    	"title":"Web Development",
    	"school":"Udacity",
    	"dates":"2016",
    	"url":"https://udacity.com"
    },
    {
    	"title":"CVP Training",
    	"school":"Sunset learning",
    	"dates":"2016",
    	"url":"https://udacity.com"
    },
    {
    	"title":"CCNA Voice",
    	"school":"Unitek Education",
    	"dates":"2016",
    	"url":"https://udacity.com"
    }


    ]
    }

var work={

	"jobs":[
	{
		"employer":"Esurance",
		"title":"Manager Development",
		"dates":"April 2014 -Future",
		"location":"San Fransciso,CA",
		"description":"Developed a team of CISCO UCCE IVR and CISCO ICM call routing proffesionals.Hands on Manager with Expertise in Cisco Call Studio application,Core Java,Integretion with Soap Webservices,Expertise in developing and troublshooting Cisco ICM"

	},
		{
		"employer":"Accenture UK",
		"title":"Consultant Service Transformation",
		"dates":"Sep 2010 -April 2012",
		"location":"London,UK",
		"description":"Responsible for migrating legacy IVR's and contact center of fortune 500 clients(RoyalBankofScotland) to state of art SIP based contact centers."
	},
	{
		"employer":"Accenture USA",
		"title":"Consultant Service Transformation",
		"dates":"Sep 2012 -April 2014",
		"location":"Bloomington,IL",
		"description":"Responsible for migrating legacy IVR's and contact center of fortune 500 clients(StateFarm) to state of art SIP based contact centers."
	},
 {
 	"employer":"TATA Communications",
		"title":"Assitant Manager Network Voice",
		"dates":"Oct 2009 -Sep 2010",
		"location":"Mumbai,India",
		"description":"Responsible for Designing,Planning and implementing 5000 seater Hosted Contact centers across India.Expertise in Cosmocom,Cisco and Avaya products.Responsible for Project management and execution of IVR and infrastructure projects."

 },
 {
 	"employer":"AVAYA",
		"title":"Software Engineer",
		"dates":"Oct 2008 -Oct 2009",
		"location":"Pune,India",
		"description":"Responsible for tier 3 and Development support for AVAYA Voice portal IVR for fortune 500 clients of AVAYA.Expertise in AVAYA Voice Portal and integretion with Cisco products"
 },
 {
 		"employer":"Virstra -I - Technology Services",
		"title":"Senior Customer Interaction Center Engineer",
		"dates":"Oct 2006 -Oct 2008",
		"location":"Tokyo,Japan",
		"description":"Responsible for Development of IVR and call Routing for Shinsei Bank Call centersin Tokyo.Responsible for planning ,designing and implementing SIP based Interative intelligence contact center"
 },
 {
 	"employer":"Servion Global Solutions",
		"title":"Software Engineer",
		"dates":"June 2005 -Oct 2006",
		"location":"Chennai, India",
		"description":"Responsible for Development of IVR and Routing for Banking and Insurance clients"
 },
 {
 	"employer":"ABN Amro Bank",
		"title":"Investment Banking officer",
		"dates":" December 2004 -June 2005",
		"location":"Chennai,India",
		"description":" Fixed Income and Derivatives back office "
 }
	]
}

var projects={

	"projects": [
	 {
     "title":"Portfolio Webpage",
     "dates":"2016 ",
     "description":" -Used HTML and CSS skills to develop my webpage.This project helped me learn the basics of HTML,CSS and responsive design fundamentals",
     "images":"images/portfolioimg.jpeg"
	},
		 {
     "title":"Online Resume Webpage",
     "dates":"2016 ",
     "description":" -Used HTML/CSS and JavaScript skills to develop my webpage.This project helped me learn Java Script and Jquery fundamentals",
     "images":"images/onlineresumeimg.png"
	},

	
    {
     "title":"Esurance IVR",
     "dates":"2014-2016 ",
     "description":"  -Responsible for designing,developing and maintaining IVR solutiosn in CVP call studio application and ICM call routing applications.",
     "images":"images/cvpivr.jpg"
	},
	{
     "title":"StateFarm Bank IVR",
     "dates":"2012-2014 ",
     "description":"  -Cisco UCCE Consultant for StateFarms's Natural Language IVR project which included Nuance,CVP and ICM call routing development.",
     "images":"images/cvpivr1.jpg"
	},
	{
     "title":"Royal Bank of Scotland",
     "dates":"2010-2012 ",
     "description":"  -Cisco ICM and CVP consultant for Royal Bank of Scotland's Network transformation project.",
     "images":"images/icm.jpg"
	}
	]
}



function inName(name){

	name=name.trim().split(" ");
	console.log(name);
	name[1]=name[1].toUpperCase();
	name[0].slice(0,1).toUpperCase();+name[0].slice(1).toLowerCase();
	return name[0] + " "+name[1];}



bio.display=function(){
/*function displayBio() {*/
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  /*var formattedNameRole = formattedName + formattedRole;
  $("#header").append(formattedNameRole);*/


 
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
 var formattedlocation= HTMLlocation.replace("%data%", bio.contacts.location);

  $('#topContacts').append(formattedMobile);
  $('#topContacts').append(formattedEmail);
  $('#topContacts').append(formattedGithub);
  $('#topContacts').append(formattedlocation);

  var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedbioPic);
/*var formattedContacts = formattedEmail + formattedMobile;
  $("#header").append(formattedContacts);*/
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
   $("#header").append(formattedwelcomeMsg);
  

	// append the 'HTMLskillStart' element
$("#header").append(HTMLskillsStart);
// For each skill in bio.skills
for (var i = 0; i < bio.skills.length; i++) {
  // create a new 'HTMLskills' element
  var formattedSkill=HTMLskills.replace("%data%",bio.skills[i]);
  // append formattedSkill to the '#skills' element
  $("#skills").append(formattedSkill);
	}

}


$(document).click(function(loc){
	var x=loc.pageX;
	var y=loc.pageY;
	logClicks(x,y);
});

function displayWork(){



for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle= formattedEmployer+formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry-last").append(formattedDates);
	var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
}



function displayProjects()
{

	for(project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription=HTMLprojectDates.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
	    if(projects.projects[project].images.length>0)
	    {
	      var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[project].images);
	      $(".project-entry:last").append(formattedImage);
	      
	    }
	}
}

function displayeducation()
{

	for (var i = 0; i < education.schools.length; i++) 
	{
		$("#education").append(HTMLschoolStart);
		var formattedschoolName=HTMLschoolName.replace("%data%",education.schools[i].name);
		$(".education-entry:last").append(formattedschoolName);
		var formattedschoolDates=HTMLschoolDates.replace("%data%",education.schools[i].dates);
		$(".education-entry:last").append(formattedschoolDates);

		var formattedHTMLschoolDegree=HTMLschoolDegree.replace("%data%",education.schools[i].degree);
		$(".education-entry:last").append(formattedHTMLschoolDegree);
		var formattedHTMLschoolMajor=HTMLschoolMajor.replace("%data%",education.schools[i].majors);
		$(".education-entry:last").append(formattedHTMLschoolMajor);
		var formattedTMLschoolLocation=HTMLschoolLocation.replace("%data%",education.schools[i].location);
		$(".education-entry:last").append(formattedTMLschoolLocation);
		var formattedHTMLonlineURL=HTMLonlineURL.replace("%data%",education.schools[i].url);
		$(".education-entry:last").append(formattedHTMLonlineURL);
	}
}
	function displayonline()
	{
		$(".education-entry:last").append(HTMLonlineClasses);
		for (var i = 0; i < education.OnlineCourses.length; i++) 
		{
			
		var formattedHTMLonlineTitle =HTMLonlineTitle .replace("%data%",education.OnlineCourses[i].title);
		$(".education-entry:last").append(formattedHTMLonlineTitle);
		var formattedschoolDates=HTMLonlineDates.replace("%data%",education.OnlineCourses[i].dates);
		$(".education-entry:last").append(formattedschoolDates);
		var formattedHTMLonlineSchool=HTMLonlineSchool.replace("%data%",education.OnlineCourses[i].school);
		$(".education-entry:last").append(formattedHTMLonlineSchool);
		var formattedHTMLonlineURL=HTMLonlineURL.replace("%data%",education.OnlineCourses[i].url);
		$(".education-entry:last").append(formattedHTMLonlineURL);
	  
	}
}
displayWork();
bio.display();
displayProjects();
displayeducation();
displayonline();
$("#mapDiv").append(googleMap);
/*displayBio();*/


/*projects.display();*/
