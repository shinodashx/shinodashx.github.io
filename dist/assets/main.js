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
    placeholder.hidden = false;
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
    const actions = document.createElement("div");
    actions.className = "publication-actions";
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

    if (item.authorNote) {
      const authorNote = document.createElement("p");
      authorNote.className = "publication-authors";
      authorNote.textContent = item.authorNote;
      details.appendChild(authorNote);
    }

    if (links.childElementCount) actions.appendChild(links);

    if (item.abstract) {
      const disclosure = document.createElement("details");
      disclosure.className = "publication-abstract";
      const summary = document.createElement("summary");
      summary.textContent = "Abstract";
      summary.setAttribute("aria-label", `Abstract for ${item.title}`);
      const abstract = document.createElement("p");
      abstract.textContent = item.abstract;
      disclosure.append(summary, abstract);
      actions.appendChild(disclosure);
    }

    if (actions.childElementCount) details.appendChild(actions);
    article.appendChild(details);
    publicationList.appendChild(article);
  });
  if (!publications.length) document.getElementById("publications").hidden = true;

  const navigation = [...document.querySelectorAll(".site-nav a")].map((link) => ({
    link,
    section: document.querySelector(link.getAttribute("href"))
  }));
  navigation.forEach(({ link, section }) => { link.hidden = section.hidden; });
  const updateNavigation = () => {
    const visible = navigation.filter(({ section }) => !section.hidden);
    let current = visible[0];
    for (const item of visible) {
      if (item.section.getBoundingClientRect().top <= 150) current = item;
    }
    if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      current = visible[visible.length - 1];
    }
    navigation.forEach((item) => {
      if (item === current) item.link.setAttribute("aria-current", "location");
      else item.link.removeAttribute("aria-current");
    });
  };
  let scheduled = false;
  window.addEventListener("scroll", () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      updateNavigation();
      scheduled = false;
    });
  }, { passive: true });
  window.addEventListener("resize", updateNavigation);
  window.addEventListener("load", updateNavigation);
  updateNavigation();
})();
