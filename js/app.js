const defaults = {
  cie: "D2LASB",
  nasc: "1999-01-25",
  nome: "Gabriel Di Bastiani do Amaral",
  instituicao: "FIAP",
  curso: "Engenharia de Computação",
  documento: "43108177850",
  emissor: "UNE",
};

function readParams() {
  const params = new URLSearchParams(window.location.search);
  const data = { ...defaults };

  Object.keys(defaults).forEach((key) => {
    const value = params.get(key);
    if (value && value.trim()) {
      data[key] = value.trim();
    }
  });

  return data;
}

function fillPage(data) {
  document.querySelectorAll("[data-field]").forEach((el) => {
    const key = el.getAttribute("data-field");
    const value = data[key];
    if (!value) return;

    if (el.tagName === "IMG") {
      el.src = value;
    } else {
      el.textContent = value;
    }
  });
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("main-nav");

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".has-dropdown > button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const item = button.parentElement;
      const wasOpen = item.classList.contains("open");
      document.querySelectorAll(".has-dropdown.open").forEach((el) => {
        el.classList.remove("open");
      });
      if (!wasOpen) {
        item.classList.add("open");
      }
    });
  });
}

fillPage(readParams());
setupMenu();
