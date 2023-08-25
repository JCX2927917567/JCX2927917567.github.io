// 鼠标移出隐藏推荐卡片
// var topGroup = document.querySelector(".topGroup");
// var todayCard = document.getElementById("todayCard");
// if (topGroup && todayCard) {
//   topGroup.addEventListener("mouseleave", function () {
//     console.log("开始执行了");
//     todayCard.classList.remove("hide");
//     topGroup.classList.remove("toScroll");
//     todayCard.style.zIndex = 1;
//     console.log("成功监听了");
//   });
// }

// 原生监听不会自动判断监听元素是否存在

function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

$(".topGroup").hover(
  function() {
    // 鼠标进入时的处理逻辑
  },
  function() {
    var prevScrollTop = $('#topGroup').scrollTop();

    // 修改 top 值
    document.getElementById("todayCard").style.top = prevScrollTop + 'px';

    $('#topGroup').off('scroll'); // 移除之前的滚动监听

    // 使用防抖添加滚动监听
    $('#topGroup').on('scroll', debounce(function() {
      var currentScrollTop = $('#topGroup').scrollTop();
      prevScrollTop = currentScrollTop;
    }, 100)); // 100 毫秒防抖延迟，可以根据需要调整

    // 使用 requestAnimationFrame 等待 DOM 渲染完成
    requestAnimationFrame(function() {
      // 移除 hide 和 toScroll 类名
      document.getElementById("todayCard").classList.remove("hide");
      document.getElementById("topGroup").classList.remove("toScroll");
      document.getElementById("todayCard").style.zIndex = 1;
    });
  }
);

