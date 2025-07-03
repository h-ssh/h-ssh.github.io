document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll("[data-include]");
  includes.forEach((el) => {
    const file = el.getAttribute("data-include");
    fetch(file)
      .then((response) => {
        if (!response.ok) throw new Error("404");
        return response.text();
      })
      .then((data) => (el.innerHTML = data))
      .catch((err) => (el.innerHTML = "<!-- Component not found -->"));
  });
});
