  const text = "Olá, eu sou Thiago Augusto!";
  const delay = 80;

  function typeText() {
    for (let i = 0; i <= text.length; i++) {
      setTimeout(() => {
        document.querySelector(".my-name").textContent = text.slice(0, i);
      }, i * delay);
    }
  }
  

  window.addEventListener("load", typeText);