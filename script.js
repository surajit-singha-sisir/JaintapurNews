print = console.log;
window.onload = function () {
  openNav();
  subMenu();
  navSlider();
};
function openNav() {
  const hamburger = document.getElementById("hamburger");
  const line1 = document.querySelector(".hamburger .line-1");
  const line2 = document.querySelector(".hamburger .line-2");
  const line3 = document.querySelector(".hamburger .line-3");

  const resNav = document.querySelector(".parentResNav");
  const resNav2 = document.querySelectorAll(".parentResNav > div");
  const childNav = document.querySelector(".parentResNav .childResNav");
  let isOpen = true;

  // ONCLICK EVENT
  hamburger.onclick = function () {
    if (isOpen) {
      line1.style =
        "margin-left: -0.1rem; margin-top: 0.6rem; transform: rotate(45deg); transition: all 0.3s ease;";
      line2.style = "width: 0; opacity: 0;";
      line3.style =
        "margin-left: -0.1rem; margin-top: -0.8rem; transform: rotate(-45deg); transition: all 0.3s ease;";

      // RESPONSIVE NAVBAR SHOW
      resNav.style.display = "flex";
    } else {
      // AGAIN CLICK HAMBURGER IT DISAPPEAR
      line1.style = "";
      line2.style = "";
      line3.style = "";
      // RESPONSIVE NAVBAR SHOW
      resNav.style.display = "none";
    }
    isOpen = !isOpen;
  };
}
// function navSlider() {
//   let isOpen = true;

//   hamburger.onclick = function () {
//     if (isOpen) {
//       childNav.style.width = "50%";
//     } else {
//       childNav.style.width = "0%";
//     }
//     isOpen = !isOpen;
//   };
// }

function subMenu() {
  const menuName = document.querySelectorAll(".resNav2MenuName");

  menuName.forEach(function (item) {
    item.onclick = function () {
      print(item);
      const iconRotate = item.querySelector(
        ".resNav2MenuName .bi-chevron-right"
      );
      iconRotate.classList.toggle("iconRotate");
    };
  });

  //   SHOW/HIDE MENUBAR TRANSITION
  const allMenu = document.querySelectorAll(".resNav2Menu");
  allMenu.forEach(function (item) {
    item.onclick = function () {
      const subItem = item.querySelector(".resNavSubMenuBar");

      if (subItem.style.height && subItem.style.height !== "0px") {
        subItem.style.opacity = 0;
        subItem.style.height = "0px";
        subItem.style.transition = "all 0.3s ease";
      } else {
        subItem.style.height = subItem.scrollHeight + "px";
        subItem.style.opacity = 1;
        subItem.style.transition = "all 0.3s ease";
      }
    };

    // Add event listener to submenu items to stop event propagation
    const subMenuItems = item.querySelectorAll(".resNavSubMenuBar li");
    subMenuItems.forEach(function (subMenuItem) {
      subMenuItem.onclick = function (event) {
        event.stopPropagation();
      };
    });
  });
}
