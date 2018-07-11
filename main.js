/*function getfile(file,callback){
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == "200") {
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}

getfile("file.json", function(text){
  var data = JSON.parse(text);
  console.log(data);
})*/
function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error('error'));
      }
    })
  })
}
var newFile=loadJSON("data.json");
newFile.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
  achi(data.achievements);
})
var childtwo=document.querySelector(".childtwo");
function career(obj){
var careerHeading=document.createElement("h2");
careerHeading.textContent="career Objective";
childtwo.appendChild(careerHeading);
var hr=document.createElement("hr");
careerHeading.appendChild(hr);
var careerP=document.createElement("p");
careerP.textContent=obj.info;
careerHeading.appendChild(careerP);
}
function education(edu){
  var eduHeading=document.createElement("h2");
  eduHeading.textContent="career Objective";
  childtwo.appendChild(eduHeading);
  var hr=document.createElement("hr");
  childtwo.appendChild(hr);
  for(var i=0;i<edu.length;i++){
  var  eduH3=document.createElement("h3")
    eduH3.textContent=edu[i].degree;
    childtwo.appendChild(eduH3);
    var eduU1=document.createElement("ul");
    var eduLi=document.createElement("li");
    eduLi.textContent=edu[i].institution;
    eduU1.appendChild(eduLi);
    childtwo.appendChild(eduU1);
    var eduDi=document.createElement("ul");
    var eduFi=document.createElement("li");
    eduFi.textContent=edu[i].data;
    eduDi.appendChild(eduFi);
    childtwo.appendChild(eduDi);
  }
}

function skills(skillInfo){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="TECHNICAL SKILLS";
  childtwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  var skillTable=document.createElement("table");
    skillTable.border = "1";
  childtwo.appendChild(skillTable);

  var tableData="";
  for(var i=0;i<skillInfo.length;i++){
  tableData+="<tr><td>"+skillInfo[i].title+"</td><td>"+skillInfo[i].info+"</td></tr>"
}
  skillTable.innerHTML=tableData;
}

function achi(ach){
  var achHeading=document.createElement("h2");
  achHeading.textContent="achievements";
  childtwo.appendChild(achHeading);
  var hr=document.createElement("hr");
  childtwo.appendChild(hr);
  var Ul = document.createElement("ul");
childtwo.appendChild(Ul);
var li="";
console.log(ach);
  for(var i=0;i<ach.length;i++){
li+="<li>"+ach[i].title;+"</li>";
    Ul.innerHTML=li;
  }



}
