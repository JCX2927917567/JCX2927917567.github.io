// $(".topGroup").hover((function() {}
// ), (function() {
//         document.getElementById("todayCard").classList.remove("hide"),
//         document.getElementById("todayCard").style.zIndex = 1
//     }
// ))

var topGroup = document.querySelector(".topGroup");
var todayCard = document.getElementById("todayCard");

topGroup.addEventListener("mouseleave", function() {
  todayCard.classList.remove("hide");
  todayCard.style.zIndex = 1;
});
