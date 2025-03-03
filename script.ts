//Get referance to the form and displayarea
const Form = document.getElementById('resume-form') as HTMLFormElement;
const resumedisplayElement = document.getElementById('resume-display') as HTMLDivElement;

//handle form submision
Form.addEventListener('submit' ,(event: Event) =>{
    event.preventDefault(); //prevent page reload
    //collection input value
    const name = (document.getElementById("Name") as HTMLInputElement).value
    const email = (document.getElementById("Email") as HTMLInputElement).value
    const phone = (document.getElementById("Phone") as HTMLInputElement).value
    const education = (document.getElementById("Education") as HTMLInputElement).value
    const experience = (document.getElementById("Experience") as HTMLInputElement).value
    const skills = (document.getElementById("Skills") as HTMLInputElement).value

    //genrate the resume content dynamically
    const resumHTML=`
    <h2><b></h2>
    <h3>Personal Information</h3>
    <p><b>Name : </b>${name}</p>
     <p><b>Email : </b>${email}</p>
      <p><b>Phone : </b>${phone}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
      <h3>Skills</h3>
      <p>${skills}</p>`;
      //Display the genrated resume
      if(resumedisplayElement){
        resumedisplayElement.innerHTML = resumHTML;
      }else{
        console.error("The resume display elementis missing.");
      }
});