for(let i = 1000; i >= 0; i-=2) {
    console.log (i);
}
for(let i= 0; i<=10000; i++) {
    if(i===2500){alert ("A quarter of the way there!")} 
    else if (i===5000) {alert ("Halfway there!")
} else if (i===10000) {alert ("The loop is done!")}
}
var x= 1

const favShowsArr = ["Dynasty", "King the Land", "Criminal Minds", "Horimiya", "Supernatural"]
for(let i = 0; i < favShowsArr.length; i){
console.log ("My #"+(x++) +" favorite TV show is " +favShowsArr[i++])}