document.addEventListener("scroll",function () {
    var pos = document.documentElement.scrollTop;
    var upbtn = document.getElementById("up_btn");
    if (pos >= 50) {
        upbtn.style.display = "block";
    } else {
        upbtn.style.display = "none";
    }
});