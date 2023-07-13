{
  const welcome = () => {
    console.log(
      "Jak już tu jesteś, opowiem Ci kawał :) Dresiarz idzie do lasu a jakiś człowiek go pyta: gdzie idziesz? A dresiarz odpowiada: po ziomki"
    );
  };

  welcome();

  const toggleBackground = () => {
    const body = document.querySelector(".body");
    body.classList.toggle("backgroundBodyDark");
  };

  const init = () => {
    const changeBackgroundColor = document.querySelector(
      ".js-changeBackgroundColor"
    );
    changeBackgroundColor.addEventListener("click", toggleBackground);
  };

  init();
}
