async function fetchArticles() {
  try {
    const response = await fetch("data/articles.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Could not fetch articles:", error);
    return [];
  }
}

function renderMostRecentArticles(articles) {
  const mostRecentContainer = document.getElementById("most-recent-articles-container");
  if (!mostRecentContainer) {
    console.warn("Most recent articles container not found.");
    return;
  }

  // The articles are already sorted by date in descending order.
  const mostRecent = articles.slice(0, 3);

  if (mostRecent.length === 0) {
    mostRecentContainer.innerHTML = "<p>No articles found.</p>";
    return;
  }

  const articlesHtml = mostRecent.map(article => `
    <div class="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-bold mb-2">
        <a href="${article.link}" class="hover:underline">${article.title}</a>
      </h3>
      <p class="text-gray-600">${article.date_created} &middot; ${article.estimated_read_time}</p>
    </div>
  `).join("");

  mostRecentContainer.innerHTML = articlesHtml;
}

document.addEventListener("DOMContentLoaded", async () => {
  const articles = await fetchArticles();
  renderMostRecentArticles(articles);
});
