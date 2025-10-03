import os
import json
import re
from datetime import datetime

ARTICLES_DIR = os.path.join(os.path.dirname(__file__), "content", "articles")
DATA_FILE = os.path.join(os.path.dirname(__file__), "data", "articles.json")
# Rough estimate for read time based on lines.
LINES_PER_MINUTE = 30

def _get_article_data(file_path):
    """Extracts all necessary metadata from a single article file."""
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    stats = os.stat(file_path)
    date_created = datetime.fromtimestamp(stats.st_birthtime)

    title_match = re.search(r"^#\s+(.*)", content)
    title = title_match.group(1) if title_match else "Untitled"

    line_count = len(content.splitlines())
    read_time = max(1, round(line_count / LINES_PER_MINUTE))

    # The post ID for the URL is the original filename without extension.
    post_slug = os.path.splitext(os.path.basename(file_path))[0]

    return {
        "title": title,
        "description": "",
        "date_created": date_created.strftime("%d-%m-%Y"),
        "estimated_read_time": f"{read_time} min read",
        "link": f"article.html?post={post_slug}",
    }

def main():
    """
    Generates the articles.json file from markdown files
    in the content/articles directory.
    """
    try:
        # Get all markdown files and their paths.
        md_files = [
            os.path.join(ARTICLES_DIR, f)
            for f in os.listdir(ARTICLES_DIR)
            if f.endswith(".md")
        ]

        # Create a list of article data dictionaries.
        articles = [_get_article_data(fp) for fp in md_files]

        # Sort articles by date, most recent first.
        articles.sort(key=lambda x: x["date_created"], reverse=True)

        # Assign a simple integer ID to each article after sorting.
        for i, article in enumerate(articles, 1):
            article["post_id"] = i

        # Write the final list to the JSON file.
        with open(DATA_FILE, "w", encoding="utf-8") as f:
            json.dump(articles, f, indent=2)

        print(f"Successfully generated articles.json with {len(articles)} articles.")

    except FileNotFoundError:
        print(f"Error: The directory '{ARTICLES_DIR}' was not found.")
    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    main()
