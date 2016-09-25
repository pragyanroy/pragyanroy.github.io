var bio = { 
	        "name": "Pragyan Roy",
            "role": "CISCO UCCE-IVR and Call routing Engineer and Web Developer",
             "contacts" : {
             "mobile": "2036454699",
             "email": "roy.pragyan@gmail.com",
             "github": "pragyanroy",
             "location": "San Francisco"
         },
         "welcomeMessage": "Contact Center transformation consultant in Cisco,AVAYA,Interactive Intelligence wih 12 years of experieance in US,UK,Japan and India",
         "skills": ["CiscoIVR","Cisco CVP","Cisco ICM","HTML-CSS-JavaScript","Cisco-UCCE","Core Java"],
         "biopic":"images/roypic.jpg"
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
    "onlineCourses":[
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
     "images":["images/portfolioimg.jpeg"]
	},
		 {
     "title":"Online Resume Webpage",
     "dates":"2016 ",
     "description":" -Used HTML/CSS and JavaScript skills to develop my webpage.This project helped me learn Java Script and Jquery fundamentals",
     "images":["images/onlineresumeimg.png"]
	},

	
    {
     "title":"Esurance IVR",
     "dates":"2014-2016 ",
     "description":"  -Responsible for designing,developing and maintaining IVR solutiosn in CVP call studio application and ICM call routing applications.",
     "images":["images/cvpivr.jpg"]
	},
	{
     "title":"StateFarm Bank IVR",
     "dates":"2012-2014 ",
     "description":"  -Cisco UCCE Consultant for StateFarms's Natural Language IVR project which included Nuance,CVP and ICM call routing development.",
     "images":["images/cvpivr1.jpg"]
	},
	{
     "title":"Royal Bank of Scotland",
     "dates":"2010-2012 ",
     "description":"  -Cisco ICM and CVP consultant for Royal Bank of Scotland's Network transformation project.",
     "images":["images/icm.jpg"]
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

  $('#topContacts').append(formattedMobile,formattedEmail,formattedGithub,formattedlocation);
  /*$('#topContacts').append(formattedEmail);
  $('#topContacts').append(formattedGithub);
  $('#topContacts').prepend(formattedlocation);*/
  $('#footerContacts').append(formattedMobile,formattedEmail,formattedGithub,formattedlocation);

  var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
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

work.display=function(){



/*for (job in work.jobs)*/
for ( i=0; i< work.jobs.length;i++)

{
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
	var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[i].title);
	var formattedEmployerTitle= formattedEmployer+formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates=HTMLworkDates.replace("%data%",work.jobs[i].dates);
	$(".work-entry-last").append(formattedDates);
	var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[i].description);
	$(".work-entry:last").append(formattedDescription);
		var formattedloc=HTMLworkLocation.replace("%data%",work.jobs[i].location);
	$(".work-entry:last").append(formattedloc);

}
}


projects.display=function()
/*function displayProjects()*/
{

	for(i=0; i< projects.projects.length;i++)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);
	    if(projects.projects[i].images.length>0)
	    {
	      var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[i].images);
	      $(".project-entry:last").append(formattedImage);
	    }
	
	  /*or(j=0;j<projects.images.length;j++)
	  	
	      {
          var formattedImage=HTMLprojectImage.replace("%data%",projects.images[j]);
	      $(".project-entry:last").append(formattedImage);
	     }*/
}
}
education.display=function()
/*function displayeducation()*/
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
/*--------------------------------------online COurses---------------------------*/
		$(".education-entry:last").append(HTMLonlineClasses);
		for (var i = 0; i < education.onlineCourses.length; i++) 
		{
			
		var formattedHTMLonlineTitle =HTMLonlineTitle .replace("%data%",education.onlineCourses[i].title);
		$(".education-entry:last").append(formattedHTMLonlineTitle);
		var formattedschoolDates=HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
		$(".education-entry:last").append(formattedschoolDates);
		var formattedHTMLonlineSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
		$(".education-entry:last").append(formattedHTMLonlineSchool);
		var formattedHTMLonlineURL=HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
		$(".education-entry:last").append(formattedHTMLonlineURL);
	}
}
	/*function displayonline()
	{
		$(".education-entry:last").append(HTMLonlineClasses);
		for (var i = 0; i < education.onlineCourses.length; i++) 
		{
			
		var formattedHTMLonlineTitle =HTMLonlineTitle .replace("%data%",education.onlineCourses[i].title);
		$(".education-entry:last").append(formattedHTMLonlineTitle);
		var formattedschoolDates=HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
		$(".education-entry:last").append(formattedschoolDates);
		var formattedHTMLonlineSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
		$(".education-entry:last").append(formattedHTMLonlineSchool);
		var formattedHTMLonlineURL=HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
		$(".education-entry:last").append(formattedHTMLonlineURL);
	  
	}*/

work.display();
bio.display();
projects.display();
education.display();
/*displayonline();*/
$("#mapDiv").append(googleMap);
/*displayBio();*/


/*projects.display();*/
