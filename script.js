{
  const backgroundToggle = () => {
    const btn = document.querySelector(".js-theme__button");
    const body = document.querySelector(".body");
    body.classList.toggle("nightMode");

    btn.innerText = body.classList.contains("nightMode")
      ? "Wyłącz szary motyw"
      : "Włącz szary motyw";
  };

  const init = () => {
    const btn = document.querySelector(".js-theme__button");
    btn.addEventListener("click", backgroundToggle);
  };

  init();
}
