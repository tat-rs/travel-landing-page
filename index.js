const page = document.querySelector(".page")
const btnBurger = document.querySelector(".btn-burger");
const btnsLines =  Array.from(document.querySelectorAll(".btn-burger__line"));
const nav = document.querySelector(".nav-full");

function open() {
  btnBurger.classList.add("btn-burger_opened");
  btnsLines[0].classList.add("btn-burger__line_left");
  btnsLines[1].classList.add("btn-burger__line_hidden");
  btnsLines[2].classList.add("btn-burger__line_right");

  nav.classList.add("nav-full_opened");
  page.style.overflow = 'hidden';
  
  nav.addEventListener("click", (evt) => closeOverlay(evt));
  window.addEventListener("keydown", (evt) => closeByEsc(evt));
  window.addEventListener("resize", () => updateWidthWindow());
}

function close() {
  btnBurger.classList.remove("btn-burger_opened")
  btnsLines[0].classList.remove("btn-burger__line_left");
  btnsLines[1].classList.remove("btn-burger__line_hidden");
  btnsLines[2].classList.remove("btn-burger__line_right");

  nav.classList.remove("nav-full_opened");
  page.style.overflow = 'scroll';
  
  nav.removeEventListener("click", (evt) => closeOverlay(evt));
  window.removeEventListener("keydown", (evt) => closeByEsc(evt));
};

function changeVisibleNav() {
  if(btnBurger.classList.contains("btn-burger_opened")) {
    close();
  } else {
    open();
  }
};

function closeOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    close();
  }
};

function closeByEsc(evt) {
  if(evt.key === "Escape") {
    close();
  }
}

function updateWidthWindow() {
  if(window.innerWidth > 630 && btnBurger.classList.contains("btn-burger_opened")) {
    close();
  }
}

btnBurger.addEventListener("click", () => changeVisibleNav());