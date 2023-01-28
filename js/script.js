document.getElementsByClassName("cross")[0].addEventListener("click", function() {
    console.log("cross clicked")
    var x = document.getElementsByClassName("right")[0];
    if (!document.getElementById("nav").checked) {
      x.classList.remove("open");
      document.getElementsByClassName("navbar")[0].classList.remove("opennav");
    } else {
        x.classList.add("open");
        document.getElementsByClassName("navbar")[0].classList.add("opennav");
    }
});