const aujDate = new Date();
const semaine = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const j = aujDate.getDay();
const heure= aujDate.getHours();
const minute= aujDate.getMinutes();
const seconde= aujDate.getSeconds();
const jour= semaine[j];
var format;

if (heure < 12){
  format= "AM"
}else{
  format= "PM"
}

console.log("Today is: ",jour);
console.log("Current time is: ",heure," ",format,":",minute,":",seconde);
