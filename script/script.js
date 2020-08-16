console.log("hi");
var icon = document.getElementById ("open");
var transparentList = document.getElementById("list");

icon.addEventListener("click", function(e) {
    e.preventDefault();
    transparentList.style.display ="block";
});