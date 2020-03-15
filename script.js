
/* Header menu*/
const menuClick = (event) => {

  document.querySelectorAll(".headermenu_link").forEach ( e =>
    e.classList.remove("headermenu_link__active")
    )
  event.target.classList.add("headermenu_link__active");
}

document.querySelector(".headermenu").addEventListener('click', menuClick)

/* portfolio*/

const portfolioTabClick = (event) => {
  event.preventDefault();
  shuflePics();
  document.querySelectorAll(".portfolio-menu_link").forEach ( e =>
    e.classList.remove("portfolio-menu_link__active")
    )


  event.target.classList.add("portfolio-menu_link__active");
}

const shuflePics = () => {
  let pictures = Array.from(document.querySelectorAll(".portfolio-grid_item"))
  let parent = document.querySelector(".portfolio-grid")

  document.querySelectorAll(".portfolio-grid_item").forEach( e => e.remove())
  while (pictures.length) {

    parent.appendChild(pictures.splice(Math.floor(Math.random() * pictures.length),1)[0])
  }
}




const pictureClick = (event) => {
  event.preventDefault();
  console.log(event.target.tagName)
  if (event.target.tagName === "IMG") {
  document.querySelectorAll(".image__active").forEach ( e =>
    e.classList.remove("image__active")
    )
  event.target.classList.add("image__active");
  } else {
    document.querySelectorAll(".image__active").forEach ( e =>
      e.classList.remove("image__active")
    )
  }

}



document.querySelector(".portfolio-grid").addEventListener('click', pictureClick)
document.querySelector(".portfolio-menu").addEventListener('click', portfolioTabClick)

/* form */
let name = document.querySelector("#name");
let mail = document.querySelector("#mail");
let subject
let description
let messageWindow = document.querySelector(".alert-window")

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
}


const subBtnClick = (event) => {
  checkInput();
  console.log(description, subject);
  document.querySelectorAll(".message-text").forEach ( e =>
    e.remove()
  );
  if (name.validity.valid && mail.validity.valid) {
    messageWindow.insertAdjacentHTML("afterbegin",`<div class='message-text'> ${description}</div>`);
    messageWindow.insertAdjacentHTML("afterbegin",`<div class='message-text'>${subject}</div>`);
    messageWindow.insertAdjacentHTML("afterbegin",`<div class='message-text'> Письмо отправлено</div>`);
    messageWindow.classList.add("alert-window__active")
  }
}

const skipBtnClick = (event) => {

  messageWindow.classList.remove("alert-window__active")

}


document.querySelector(".submit").addEventListener('click', subBtnClick)
document.querySelector(".skipbtn").addEventListener('click', skipBtnClick)
