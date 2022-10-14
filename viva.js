var count = document.getElementById("counter");
var increase = document.getElementById("inc");
var decrease = document.getElementById("dec");
var reboot = document.getElementById("reset");

var number = 0;
increase.addEventListener("click", 
function(){
    number++;
    count.innerHTML = number;
}
);

decrease.addEventListener("click", 
function(){
    number--;
    count.innerHTML = number;
}
);

reboot.addEventListener("click", 
function(){
    number = 0;
    count.innerHTML = number;
}
);