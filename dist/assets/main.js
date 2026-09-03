(() => {
  const content = window.SITE_CONTENT || {};
  const profile = content.profile || {};

  document.getElementById("year").textContent = new Date().getFullYear();

  if (profile.email) {
    document.querySelectorAll("[data-email-link]").forEach((link) => {
      link.href = `mailto:${profile.email}`;
    });
  }

  if (profile.github) {
    document.querySelectorAll("[data-github-link]").forEach((link) => {
      link.href = profile.github;
      link.target = "_blank";
      link.rel = "noreferrer";
    });
  }

  if (profile.bio) {
    const placeholder = document.getElementById("bio-placeholder");
    placeholder.textContent = profile.bio;
    placeholder.classList.remove("muted");
  }

  const researchList = document.getElementById("research-list");
  (content.research || []).forEach((item) => {
    const tag = document.createElement("span");
    tag.className = "research-tag";
    tag.textContent = item.title;
    if (item.description) tag.title = item.description;
    researchList.appendChild(tag);
  });

  const publicationList = document.getElementById("publication-list");
  const publications = content.publications || [];
  publications.forEach((item) => {
    const article = document.createElement("article");
    article.className = "publication";
    const meta = document.createElement("div");
    meta.className = "venue";
    meta.textContent = item.venue || "Preprint";

    const details = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = item.title;
    const authors = document.createElement("p");
    authors.textContent = item.authors || "";
    const links = document.createElement("div");
    (item.links || []).forEach((itemLink) => {
      const link = document.createElement("a");
      link.href = itemLink.url;
      link.textContent = `${itemLink.label} ↗`;
      link.target = "_blank";
      link.rel = "noreferrer";
      links.appendChild(link);
    });
    details.append(title, authors, links);
    article.append(meta, details);
    publicationList.appendChild(article);
  });
  if (publications.length) document.getElementById("publications-empty").hidden = true;

  const newsList = document.getElementById("news-list");
  const news = content.news || [];
  news.forEach((item) => {
    const row = document.createElement("li");
    const date = document.createElement("time");
    date.textContent = item.date;
    const text = document.createElement("p");
    text.textContent = item.text;
    row.append(date, text);
    newsList.appendChild(row);
  });
  if (news.length) document.getElementById("news-empty").hidden = true;
})();
