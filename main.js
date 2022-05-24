var rate = 0;
[...document.querySelectorAll(".rate li")].forEach(function(ele) {
    ele.addEventListener("click", function() {
        [...document.querySelectorAll(".rate li")].forEach(function(e) {
            if( e != ele ) {
                e.style.backgroundColor = "rgb(48, 55, 65)";
                e.style.color = "hsl(217deg 7% 43%)";
            }
        });
        if(getComputedStyle(ele).backgroundColor == "rgb(48, 55, 65)" || getComputedStyle(ele).backgroundColor == "rgb(124, 136, 152)") {
            ele.style.backgroundColor = "hsl(25, 97%, 53%)";
            ele.style.color = "hsl(0, 0%, 100%)";
            rate = ele.textContent;
        }
        else {
            ele.style.color = "hsl(217deg 7% 43%)";
            ele.style.backgroundColor = "rgb(48, 55, 65)";
        }
    })
});

document.querySelector("button").onclick = function() {
    document.getElementsByClassName("rate")[0].style.display = "none";
    document.querySelector(".thanks p").textContent = "You selected "+ rate +" out of 5";
    document.getElementsByClassName("thanks")[0].style.display = "block";
}