let displayComments = document.getElementById("comments");
let displayMain = document.getElementById("main");
let mainBtn = document.getElementById("navItems");
let commentsBtn = document.getElementById("navComments");
document.getElementById("navComments").addEventListener("click", function () {
  displayMain.classList.replace("d-inherate", "d-none");
  displayComments.classList.replace("d-none", "d-flex");

  mainBtn.classList.remove("icon-active");
  commentsBtn.classList.add("icon-active");
});

document.getElementById("navItems").addEventListener("click", function () {
  displayMain.classList.replace("d-none", "d-inherate");
  displayComments.classList.replace("d-flex", "d-none");

  mainBtn.classList.add("icon-active");
  commentsBtn.classList.remove("icon-active");
});
