
var bigImg = document.getElementById("bigImg");
document.addEventListener("click", function (e) {
    var t = e.target;
    if (t.parentElement.id == "smallImg") {
        bigImg.setAttribute("src", t.getAttribute("src"));
    }
})