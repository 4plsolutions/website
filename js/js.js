window.onscroll = function() {shrinkUp()};

function shrinkUp() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("main-logo").className = "main-logo invisible";
    document.getElementById("nav-img").className = "nav-img visible";
    document.getElementById("navbar").className = "navbar invisible";
  } else {
    document.getElementById("main-logo").className = "main-logo visible ";
    document.getElementById("nav-img").className = "nav-img invisible";
    document.getElementById("navbar").className = "navbar visible";


  }
}
