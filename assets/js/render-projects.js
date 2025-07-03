document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("project-grid");

  try {
    const res = await fetch("data/projects.json");
    const projects = await res.json();

    projects.forEach((project) => {
      const card = document.createElement("div");
      card.className =
        "bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition";

      card.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
        <p class="text-gray-600 mb-4">${project.description}</p>
        <a href="${project.link}" class="text-blue-600 hover:underline" target="_blank">View on GitHub →</a>
      `;

      container.appendChild(card);
    });
  } catch (err) {
    container.innerHTML =
      "<p class='text-red-600'>Failed to load projects.</p>";
  }
});
