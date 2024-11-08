//Get referance to the form and displayarea
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//handle form submision
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collection input value
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var phone = document.getElementById("Phone").value;
    var education = document.getElementById("Education").value;
    var experience = document.getElementById("Experience").value;
    var skills = document.getElementById("Skills").value;
    //genrate the resume content dynamically
    var resumHTML = "\n    <h2><b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name : </b>".concat(name, "</p>\n     <p><b>Email : </b>").concat(email, "</p>\n      <p><b>Phone : </b>").concat(phone, "</p>\n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n      <h3>Experience</h3>\n      <p>").concat(experience, "</p>\n      <h3>Skills</h3>\n      <p>").concat(skills, "</p>");
    //Display the genrated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumHTML;
    }
    else {
        console.error("The resume display elementis missing.");
    }
});
