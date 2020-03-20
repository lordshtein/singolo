const anchors = document.querySelectorAll('.headermenu_link')

const menuClick = (event) => {
  anchors.forEach(e =>
    e.classList.remove("headermenu_link__active")
  )
  event.target.classList.add("headermenu_link__active");
};

document.querySelector(".headermenu").addEventListener('click', menuClick)

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    let windowPos = anchor.getAttribute('href')
    document.querySelector(windowPos).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

/* Observer */
const sections = document.querySelectorAll(".screen");

const config = {
  rootMargin: '-100px 0px -30% 0px',
  threshold: 0.5
};

const setActiveMenuBlock = (screen) => {
  let id = "."+screen.target.id+"Link";
  console.log(document.querySelector(id))
  if (document.querySelector(".headermenu_link__active")) {
  document.querySelector(".headermenu_link__active").classList.remove("headermenu_link__active");
  }
  document.querySelector(id).classList.add("headermenu_link__active");
}

let observer = new IntersectionObserver(function (screens, self) {
  screens.forEach(screen => {
    console.log(screen);
    if (screen.isIntersecting) {
      setActiveMenuBlock(screen);
    }
  });
}, config);

sections.forEach(section => {
  console.log(section)
  observer.observe(section);
});

/* portfolio*/

const portfolioTabClick = (event) => {
  event.preventDefault();
  shufflePics();
  document.querySelectorAll(".portfolio-menu_link").forEach(e =>
    e.classList.remove("portfolio-menu_link__active")
  );
  event.target.classList.add("portfolio-menu_link__active");
};

const shufflePics = () => {
  let pictures = Array.from(document.querySelectorAll(".portfolio-grid_item"))
  let parent = document.querySelector(".portfolio-grid")

  document.querySelectorAll(".portfolio-grid_item").forEach(e => e.remove())
  while (pictures.length) {

    parent.appendChild(pictures.splice(Math.floor(Math.random() * pictures.length), 1)[0])
  }
};




const pictureClick = (event) => {
  event.preventDefault();
  if (event.target.tagName === "IMG" && event.target.classList.contains("image__active")) {
    event.target.classList.remove("image__active")
  } else if (event.target.tagName === "IMG") {
    document.querySelectorAll(".image__active").forEach(e =>
      e.classList.remove("image__active")
    )
    event.target.classList.add("image__active");
  } else if (event.target.tagName != "IMG")  {
    document.querySelectorAll(".image__active").forEach(e =>
      e.classList.remove("image__active")
    )
  }
};



document.querySelector(".portfolio-grid").addEventListener('click', pictureClick);
document.querySelector(".portfolio-menu").addEventListener('click', portfolioTabClick);

/* form */
let name = document.querySelector("#name");
let mail = document.querySelector("#mail");
let subject;
let description;
let messageWindow = document.querySelector(".alert-window");

const checkInput = () => {

  if (document.querySelector("#subject").value) {
    subject = "Тема: ".concat(document.querySelector("#subject").value)
  } else {
    subject = "Без темы"
  }
  if (document.querySelector("#description").value) {
    description = "Описание: ".concat(document.querySelector("#description").value)
  } else {
    description = "Без описания"
  }
};


const subBtnClick = (event) => {
  checkInput();
  console.log(description, subject);
  document.querySelectorAll(".message-text").forEach(e =>
    e.remove()
  );
  if (name.validity.valid && mail.validity.valid) {
    messageWindow.insertAdjacentHTML("afterbegin", `<div class='message-text'> ${description}</div>`);
    messageWindow.insertAdjacentHTML("afterbegin", `<div class='message-text'>${subject}</div>`);
    messageWindow.insertAdjacentHTML("afterbegin", `<div class='message-text'> Письмо отправлено</div>`);
    messageWindow.classList.add("alert-window__active")
  }
};

const skipBtnClick = (event) => {
  messageWindow.classList.remove("alert-window__active")
  document.querySelectorAll(".forms").forEach( e => {
    if (!e.classList.contains("submit")) {
      e.value = ""
    }
  })

};


document.querySelector(".submit").addEventListener('click', subBtnClick)
document.querySelector(".skipbtn").addEventListener('click', skipBtnClick)

/* slider */

let slides = document.querySelectorAll(".slider-item");
let currentSlide = 0;
let toogle = true;

function counter(n) {
  currentSlide = (n + slides.length) % slides.length;
};

function previous(n) {

  hideSlide("to-right");
  counter(n - 1);
  showSlide("from-left");

};

function next(n) {
  hideSlide("to-left");
  counter(n + 1);
  showSlide("from-right");
};

function hideSlide(direction) {
  toogle = false;
  slides[currentSlide].classList.add(direction);
  slides[currentSlide].addEventListener("animationend", function () {
    this.classList.remove("slider-item__active", direction);
  });
};

function showSlide(direction) {
  slides[currentSlide].classList.add("nextSlide", direction);
  slides[currentSlide].addEventListener("animationend", function () {
    this.classList.remove("nextSlide", direction);
    this.classList.add("slider-item__active");
    toogle = true;
  });
};



document.querySelector(".slider-arrow.left").addEventListener("click", function () {
  if (toogle) {
  previous(currentSlide);
  }
});


document.querySelector(".slider-arrow.right").addEventListener("click", function () {
  if (toogle) {
  next(currentSlide);
  }
});


document.querySelector(".phone-h1").addEventListener("click", function () {
  document.querySelector(".disp-h1").classList.toggle("off");
});

document.querySelector(".phone-v1").addEventListener("click", function () {
  document.querySelector(".disp-v1").classList.toggle("off");
});
