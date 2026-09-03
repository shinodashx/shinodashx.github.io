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
  const publications = [...(content.publications || [])].sort(
    (first, second) => (first.order ?? Number.MAX_SAFE_INTEGER) - (second.order ?? Number.MAX_SAFE_INTEGER)
  );
  publications.forEach((item) => {
    const article = document.createElement("article");
    article.className = "publication";

    if (item.image) {
      const media = document.createElement("figure");
      media.className = "publication-media";
      const image = document.createElement("img");
      image.src = item.image;
      image.alt = item.imageAlt || "";
      image.loading = "lazy";
      image.decoding = "async";
      image.width = 1200;
      image.height = 675;
      media.appendChild(image);
      article.appendChild(media);
    }

    const meta = document.createElement("div");
    meta.className = "publication-meta";
    const venue = document.createElement("span");
    venue.className = "venue";
    venue.textContent = item.venue || "Preprint";
    meta.appendChild(venue);

    if (item.note) {
      const note = document.createElement("span");
      note.className = "publication-note";
      note.textContent = item.note;
      meta.appendChild(note);
    }

    const details = document.createElement("div");
    details.className = "publication-content";
    const title = document.createElement("h3");
    title.textContent = item.title;
    const authors = document.createElement("p");
    authors.className = "publication-authors";
    const authorText = item.authors || "";
    const ownName = "Haoxuan Song";
    const ownNameIndex = authorText.indexOf(ownName);
    if (ownNameIndex >= 0) {
      authors.append(document.createTextNode(authorText.slice(0, ownNameIndex)));
      const highlightedName = document.createElement("strong");
      highlightedName.textContent = ownName;
      authors.append(highlightedName, document.createTextNode(authorText.slice(ownNameIndex + ownName.length)));
    } else {
      authors.textContent = authorText;
    }
    const links = document.createElement("div");
    links.className = "publication-links";
    (item.links || []).forEach((itemLink) => {
      const link = document.createElement("a");
      link.href = itemLink.url;
      link.textContent = `${itemLink.label} ↗`;
      link.target = "_blank";
      link.rel = "noreferrer";
      links.appendChild(link);
    });
    details.append(meta, title, authors);

    if (links.childElementCount) details.appendChild(links);

    if (item.abstract) {
      const disclosure = document.createElement("details");
      disclosure.className = "publication-abstract";
      const summary = document.createElement("summary");
      summary.textContent = "Abstract";
      const abstract = document.createElement("p");
      abstract.textContent = item.abstract;
      disclosure.append(summary, abstract);
      details.appendChild(disclosure);
    }

    article.appendChild(details);
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
