// 鼠标移出隐藏推荐卡片
var topGroup = document.querySelector(".topGroup");
var todayCard = document.getElementById("todayCard");
topGroup.addEventListener("mouseleave", function () {
  todayCard.classList.remove("hide");
  topGroup.classList.remove("toScroll");
  todayCard.style.zIndex = 1;
});


let toHide = () => {
  (window.event.cancelBubble = !0),
    document.getElementById("todayCard") &&
    document.getElementById("todayCard").classList.add("hide");
    document.getElementById("topGroup") &&
    document.getElementById("topGroup").classList.add("toScroll");
    console.log(document.getElementById("topGroup").classList);
};
