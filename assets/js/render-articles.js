document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("articles-grid");

  try {
    const res = await fetch("data/articles.json");
    const articles = await res.json();

    articles.forEach((article) => {
      const card = document.createElement("div");
      card.className =
        "bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition";

      card.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">${article.title}</h3>
        <div class="text-sm text-gray-500 mb-2">
          <span>${article.date_created}</span>
          <span class="mx-2">·</span>
          <span>${article.estimated_read_time}</span>
        </div>
        <p class="text-gray-600 mb-4">${article.description}</p>
        <a href="${article.link}" class="text-blue-600 hover:underline">Read more →</a>
      `;

      container.appendChild(card);
    });
  } catch (err) {
    container.innerHTML =
      "<p class='text-red-600'>Failed to load articles.</p>";
  }
});
