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

function renderRecentArticles(articles) {
  const recentArticlesContainer = document.getElementById("recent-articles-container");
  if (!recentArticlesContainer) {
    console.warn("Recent articles container not found.");
    return;
  }

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const recentArticles = articles.filter(article => {
    const [day, month, year] = article.date_created.split('-').map(Number);
    const articleDate = new Date(year, month - 1, day);
    return articleDate >= thirtyDaysAgo;
  });

  if (recentArticles.length === 0) {
    recentArticlesContainer.innerHTML = "<p>No recent articles in the last 30 days.</p>";
    return;
  }

  const articlesHtml = recentArticles.map(article => `
    <div class="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-bold mb-2">
        <a href="${article.link}" class="hover:underline">${article.title}</a>
      </h3>
      <p class="text-gray-600">${article.date_created} &middot; ${article.estimated_read_time}</p>
    </div>
  `).join("");

  recentArticlesContainer.innerHTML = articlesHtml;
}

document.addEventListener("DOMContentLoaded", async () => {
  const articles = await fetchArticles();
  renderRecentArticles(articles);
});
