function openNav() {
  document.getElementById("mySidepanel").style.width = "100%";
};

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
};
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
};