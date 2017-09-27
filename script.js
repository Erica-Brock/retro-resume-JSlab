var myName;
myName= "Erica M. Brock".toUpperCase();
console.log("Name:"+ myName);
console.log("Career: Front End Web Developer");
console.log("Description: I am a super nerd who likes to read, write, code, and occasionally play video games.");
console.log(" ");
console.log("My Interest:");
console.log("* YA Fiction");
console.log("* Fantasy Novels");
console.log("* Steampunk");
console.log("* Virtual Reality");
console.log("My Previous Experience:");
console.log(" ");
var company, jobTitle, jobDescribtion;
company=["* AmerisourceBergen", "* ARD Logistics", "* OfficeMax"];
jobTitle=["Order filler", " Data Sp[ecialist", " Export Specialist"];
jobDescribtion=[ "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", " Lorem ipsum dolor sit, amet consectetur adipisicing elit.", " Lorem ipsum dolor sit, amet consectetur adipisicing elit."];
function displayPosition(company,jobTitle, jobDescribtion){
    console.log(company);
    console.log(jobTitle);
    console.log(jobDescribtion);
}
displayPosition(company[0],jobTitle[0],jobDescribtion[0]);
console.log(" ");
displayPosition(company[1],jobTitle[1], jobDescribtion[1]);
console.log(" ");
displayPosition(company[2],jobTitle[2],jobDescribtion[2]);
var skillName;
skillName=["Microsoft Office Suite","Customer Service", "Writing Poetry","Drawing Portraits","Writing Fantasy Novels"]
console.log("My Skills:");
function displaySkills(skillName, isCool){
    if( isCool===true){
        console.log("*Check it: "+ skillName);
    }
    else{
        console.log("*" +skillName);
    }
    
    
}

displaySkills(skillName[0], false);
displaySkills(skillName[1],false);
displaySkills(skillName[2], true);
displaySkills(skillName[3], true);
displaySkills(skillName[4],true);




