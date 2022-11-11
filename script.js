const products = document.getElementById("products");
var topB = document.getElementById("topB");
const newI = document.querySelectorAll("figure#products img");
const next = document.getElementById("next");
var left = document.getElementById("left");
var plength = document.getElementById("firstImg")

slide();
window.addEventListener('resize', function (event) {
    slide();
});

function slide() {
    products.style.left = "0px";
    var topBWidth = topB.getBoundingClientRect().width;
    var widthp = plength.getBoundingClientRect().width;
    var fit = Math.floor(topBWidth / widthp);
    var len = newI.length;
    var wi;
    products.style.width = len * widthp + "px";
    len = len - fit;
    var d, up = len;
    var le = 0;
    next.addEventListener("click", () => {
        if (len >= 3) {
            wi = 3 * widthp;
            le = le + wi;
            len = len - 3;
        }
        else if (len < 3 && len != 0) {
            wi = len * widthp;
            le = le + wi;
            len = len - len;
        }

        products.style.left = "-" + le + "px";
    })
    left.addEventListener("click", () => {
        if (len + 3 <= up && len != up) {
            wi = 3 * widthp;
            le = le - wi;
            len = len + 3;
        }
        else if (len + 3 > up && len != up) {
            wi = (up - len) * widthp;
            le = le - wi;
            len = up;
        }
        products.style.left = "-" + le + "px";
    })
}










































// responsive
var list = document.getElementById("list")
var back = document.getElementById("back");
var opt = document.getElementsByClassName("opt")[0];
back.addEventListener("click", () => {
    opt.style.left = "-70vw";
})
list.addEventListener("click", () => {
    opt.style.left = "-7vw";
})


