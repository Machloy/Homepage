let btn = document.querySelector (".js-theme__button");
let body = document.querySelector (".body")

btn.addEventListener("click", () => {
    body.classList.toggle("nightMode");
    if (body.classList.contains("nightMode")) {
      btn.innerText = "Wyłącz szary motyw";
    } else {
      btn.innerText = "Włącz szary motyw";
    }
  });