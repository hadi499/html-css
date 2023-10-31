document.getElementById("navbar-toggle").addEventListener("click", function () {
  var menu = document.getElementById("navbar-menu");
  var icon = document.querySelector(".navbar-toggle i");

  menu.classList.toggle("active");

  // Toggle ikon burger menjadi ikon close dan sebaliknya
  if (icon.classList.contains("bi-list")) {
    icon.classList.remove("bi-list");
    icon.classList.add("bi-x-lg");
  } else {
    icon.classList.remove("bi-x-lg");
    icon.classList.add("bi-list");
  }
});
