var button = document.getElementById("hi");
var h1 =document.getElementById("monkey");
var body = document.body;

body.setAttribute("style", "background-color:red");
body.setAttribute("style", "color:black");

button.addEventListener("click", function(){
body.setAttribute("style", "background-color: red; color: white;");


});
