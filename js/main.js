document.getElementById("first_id").textContent = "My first JS move!";
function getInfo(){
    var secondid = document.getElementById("second-id").vaule;
    if(secondid !== 'My name') {
        console.log("Jose Morelos!");
        document.getElementById("second-id").innerHTML = "I think i got this";
    }
}
var specialId = document.getElementById("specialId").value;
    if (specialId == "I hate JS"){
        document.getElementById("specialId").textContent = "I love JS!";
}
    else {
        document.getElementById("specialId").textContent = "I love JS";
    }

var names = ["Marla", "Joshua", "Amanda", "Richy"]
    for(var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
var person ={firstName:"Jose", lastName:"Morelos", weight:"152lbs"};

