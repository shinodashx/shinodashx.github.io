(() => {
  const content = window.SITE_CONTENT;
  const profile = content.profile;
  const menuButton = document.querySelector(".navbar-toggler");
  const menu = document.getElementById("navbarResponsive");
  menuButton.addEventListener("click", () => {
    const expanded = menu.classList.toggle("show");
    menuButton.setAttribute("aria-expanded", String(expanded));
  });
  menu.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      menu.classList.remove("show");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.focus();
    }
  });

  document.querySelectorAll("[data-email-link]").forEach((link) => {
    link.href = `mailto:${profile.email}`;
    link.querySelector(".email-text").textContent = profile.email.replace("@", "(at)");
  });
  document.querySelectorAll("[data-github-link]").forEach((link) => {
    link.href = profile.github;
  });
  const bio = document.getElementById("bio-placeholder");
  if (bio && profile.bio) {
    bio.textContent = profile.bio;
    bio.hidden = false;
  }

  function publicationCard(item) {
    const article = document.createElement("article");
    article.className = "publication row no-gutters";
    if (item.image) {
      const media = document.createElement("div");
      media.className = "publication-media col-md-3 col-xl-2 p-md-3";
      const image = document.createElement("img");
      image.className = "publication-image rounded-sm";
      image.src = item.image;
      image.alt = item.imageAlt || "";
      image.loading = "lazy";
      image.decoding = "async";
      media.appendChild(image);
      article.appendChild(media);
    }

    const details = document.createElement("div");
    details.className = item.image
      ? "publication-content col-md-9 col-xl-10 p-3 pl-md-0"
      : "publication-content col p-3";
    const title = document.createElement("h3");
    title.className = "publication-title mt-0 mb-1 font-weight-normal";
    title.textContent = item.title;
    const authors = document.createElement("p");
    authors.className = "mt-0 mb-0 small";
    const authorText = item.authors;
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
    const venue = document.createElement("p");
    venue.className = "mt-0 mb-0 small text-muted";
    const venueName = document.createElement("i");
    venueName.textContent = item.venue;
    venue.appendChild(venueName);
    if (item.note) venue.append(` · ${item.note}`);
    details.append(title, authors, venue);

    const links = document.createElement("div");
    links.className = "publication-links small text-muted";
    item.links.forEach((itemLink) => {
      const link = document.createElement("a");
      link.href = itemLink.url;
      link.textContent = `[${itemLink.label}]`;
      link.target = "_blank";
      link.rel = "noreferrer";
      links.appendChild(link);
    });
    if (item.abstract) {
      const disclosure = document.createElement("details");
      disclosure.className = "publication-abstract";
      const summary = document.createElement("summary");
      summary.textContent = "[Abstract]";
      summary.setAttribute("aria-label", `Abstract for ${item.title}`);
      const abstract = document.createElement("p");
      abstract.textContent = item.abstract;
      disclosure.append(summary, abstract);
      links.appendChild(disclosure);
    }
    details.appendChild(links);
    article.appendChild(details);
    return article;
  }

  const publicationList = document.getElementById("publication-list");
  const publications = [...content.publications].sort((a, b) => a.order - b.order);
  if (!publicationList.hasAttribute("data-group-by-year")) {
    publications.forEach((item) => publicationList.appendChild(publicationCard(item)));
    return;
  }

  const yearNavigation = document.getElementById("navbar-year");
  const years = [...new Set(publications.map((item) => item.year))].sort((a, b) => b - a);
  const sections = years.map((year) => {
    const section = document.createElement("section");
    const id = year ? `year-${year}` : "under-review";
    section.setAttribute("aria-labelledby", id);
    const heading = document.createElement("h2");
    heading.className = "pt-4 publication-year";
    heading.id = id;
    heading.textContent = year || "Under Review";
    const list = document.createElement("div");
    list.className = "my-0 p-0 bg-white shadow-sm rounded-sm";
    publications.filter((item) => item.year === year).forEach((item) => list.appendChild(publicationCard(item)));
    section.append(heading, list);
    publicationList.appendChild(section);
    const link = document.createElement("a");
    link.className = "nav-link d-block";
    link.href = `#${id}`;
    link.textContent = heading.textContent;
    yearNavigation.appendChild(link);
    return { heading, link };
  });

  function updateYearNavigation() {
    let active = sections[0];
    sections.forEach((section) => {
      if (section.heading.getBoundingClientRect().top <= 110) active = section;
    });
    if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      active = sections[sections.length - 1];
    }
    sections.forEach((section) => {
      section.link.classList.toggle("active", section === active);
      if (section === active) section.link.setAttribute("aria-current", "location");
      else section.link.removeAttribute("aria-current");
    });
  }
  window.addEventListener("scroll", updateYearNavigation, { passive: true });
  window.addEventListener("resize", updateYearNavigation);
  window.addEventListener("load", updateYearNavigation);
  updateYearNavigation();
})();
