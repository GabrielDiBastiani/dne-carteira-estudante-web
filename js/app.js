const defaults = {
  cie: "DD2O0R",
  nasc: "1999-11-13",
  nome: "Larissa Loranna Alencar de Sousa",
  instituicao: "Universidade Paulista",
  curso: "Pedagogia",
  documento: "000000395456034",
  emissor: "UNE",
  foto: "https://st3.depositphotos.com/2024219/31793/i/450/depositphotos_317939792-stock-photo-young-woman-isolated-yellow-background.jpg",
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
