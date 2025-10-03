document.addEventListener("DOMContentLoaded", async () => {
  const content = document.getElementById("article-content");
  const urlParams = new URLSearchParams(window.location.search);
  const articlePath = urlParams.get("post");

  // Configure marked to use highlight.js for syntax highlighting
  marked.setOptions({
    highlight: function (code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  });

  if (articlePath) {
    try {
      const res = await fetch(`content/articles/${articlePath}.md`);
      if (!res.ok) throw new Error("Article not found");
      const markdown = await res.text();
      content.innerHTML = marked.parse(markdown);
    } catch (err) {
      content.innerHTML =
        "<p class='text-red-600'>Failed to load article.</p>";
    }
  } else {
    content.innerHTML = "<p class='text-red-600'>No article specified.</p>";
  }
});
