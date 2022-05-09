var menu_icon = document.querySelectorAll("h2 > i")[0];
var menu = document.getElementsByTagName("nav")[0];

menu_icon.onclick = function () {
  showMenu();
};
object.addEventListener("click", showMenu);

function showMenu() {
  menu.style.display = "block";
}
