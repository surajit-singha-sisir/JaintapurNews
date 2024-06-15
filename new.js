print = console.log;

window.onload = function () {
  openNav();
  subMenu();
  fixedNav();
  searchBarAnimation();
  newsGallery(); // Make sure you have defined this function somewhere
};

let isOpen = false;

function openNav() {
  const hamburger = document.getElementById("hamburger");
  const line1 = document.querySelector(".hamburger .line-1");
  const line2 = document.querySelector(".hamburger .line-2");
  const line3 = document.querySelector(".hamburger .line-3");
  const resNav = document.querySelector(".parentResNav");
  const parentResNavBG = document.querySelector(".parentResNav .parentResNavBG");

  function openMenu() {
    line1.style.transform = "rotate(45deg)";
    line1.style.marginTop = "0.6rem";
    line1.style.transition = "all 0.3s ease";

    line2.style.width = "0";
    line2.style.opacity = "0";
    line2.style.transition = "all 0.3s ease";

    line3.style.transform = "rotate(-45deg)";
    line3.style.marginTop = "-0.8rem";
    line3.style.transition = "all 0.3s ease";

    resNav.style.display = "flex";
    resNav.style.marginLeft = "0";
    resNav.style.transition = "margin-left 0.3s ease";

    document.body.style.overflow = "hidden";
    isOpen = true;
  }

  function closeMenu() {
    line1.style.transform = "";
    line1.style.marginTop = "";
    line1.style.transition = "";

    line2.style.width = "";
    line2.style.opacity = "";
    line2.style.transition = "";

    line3.style.transform = "";
    line3.style.marginTop = "";
    line3.style.transition = "";

    resNav.style.marginLeft = "-100%";
    resNav.style.transition = "margin-left 0.3s ease";

    setTimeout(() => {
      resNav.style.display = "none";
    }, 300); // Wait for the transition to complete before hiding

    document.body.style.overflow = "auto";
    isOpen = false;
  }

  hamburger.onclick = function () {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  parentResNavBG.onclick = function () {
    if (isOpen) {
      closeMenu();
    }
  };
}

function subMenu() {
  const menuNames = document.querySelectorAll(".resNav2MenuName");

  menuNames.forEach(function (item) {
    item.onclick = function () {
      print(item);
      const iconRotate = item.querySelector(".resNav2MenuName .bi-chevron-right");
      iconRotate.classList.toggle("iconRotate");
    };
  });

  const allMenus = document.querySelectorAll(".resNav2Menu");

  allMenus.forEach(function (item) {
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

    const subMenuItems = item.querySelectorAll(".resNavSubMenuBar li");
    subMenuItems.forEach(function (subMenuItem) {
      subMenuItem.onclick = function (event) {
        event.stopPropagation();
      };
    });
  });
}

function fixedNav() {
  const topContainer = document.querySelector(".topContainer");
  const resNav = document.querySelector(".parentResNav");
  print(topContainer);

  window.onscroll = function () {
    if (window.pageYOffset > 500) {
      topContainer.classList.remove("sticky");
      topContainer.classList.add("fixed");
      resNav.classList.add("navMarginFixed");
    } else {
      topContainer.classList.remove("fixed");
      topContainer.classList.add("sticky");
      resNav.classList.remove("navMarginFixed");
    }
  };
}

function searchBarAnimation() {
  const searchBar = document.querySelector(".searchBar");
  const searchBox = document.querySelector(".searchBar .searchBox");
  const darkBackground = document.querySelector(".darkBackground");
  const cross = document.querySelector(".searchBar .bi-x");
  const search = document.querySelector(".searchBar .bi-search");

  searchBar.onclick = function () {
    if (isOpen) {
      searchBox.classList.remove("visible");
      darkBackground.style.top = "-100%";
      cross.style.display = "none";
      search.style.display = "block";
    } else {
      searchBox.classList.add("visible");
      darkBackground.style.top = "0";
      cross.style.display = "block";
      search.style.display = "none";
    }
    isOpen = !isOpen;
  };

  searchBox.onclick = function (event) {
    event.stopPropagation();
  };

  darkBackground.onclick = function () {
    searchBox.classList.remove("visible");
    darkBackground.style.top = "-100%";
    search.style.display = "block";
    cross.style.display = "none";
    isOpen = !isOpen;
  };
}

function newsGallery() {
  // Define your newsGallery function here
}
