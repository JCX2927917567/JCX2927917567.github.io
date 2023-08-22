let toHide = () => {
    (window.event.cancelBubble = !0),
      document.getElementById("todayCard") &&
      document.getElementById("todayCard").classList.add("hide");
      document.getElementById("topGroup") &&
      document.getElementById("topGroup").classList.add("toScroll");
      console.log(document.getElementById("topGroup").classList);
  };