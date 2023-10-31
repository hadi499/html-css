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

// Dapatkan semua tautan dalam navbar
var navLinks = document.querySelectorAll(".navbar-menu a");
// Dapatkan URL halaman saat ini
var currentURL = window.location.href;
console.log(currentURL);

// Iterasi melalui tautan dan tambahkan kelas "active" ke tautan yang sesuai dengan URL saat ini
for (var i = 0; i < navLinks.length; i++) {
  var linkURL = navLinks[i].href;
  if (currentURL === linkURL) {
    navLinks[i].classList.add("active");
  }
}
