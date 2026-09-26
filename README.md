# Haoxuan Song — Academic Homepage

Live site: <https://shinodashx.github.io/>

A compact, responsive academic homepage for Haoxuan Song (宋昊轩), PhD candidate at the Chinese Academy of Sciences.

The homepage and publications page use the [Songxin Lei homepage](https://thunderlrr.github.io/songxinlei.github.io/) version of Shitong Luo's [Academic Homepage](https://github.com/luost26/academic-homepage) template. The original MIT notice is preserved in `dist/assets/TEMPLATE-LICENSE.txt`. Bootstrap 4.6.0 and Font Awesome 6.5.1 are served locally with their license notices, so rendering does not depend on external CDNs.

## Update content

Edit `dist/assets/data.js` to update profile links and publications. `order` controls the homepage order; `year` groups papers on `dist/publications.html` (use `null` for undated work under review). Edit the introduction and education in `dist/index.html`. Update the footer date in both HTML pages when publishing content changes.

Only existing personal information is displayed; the reference author's news, work experience, awards, and affiliations are not copied. The standalone `dist/CADRec/` project page is unchanged.

## Preview locally

Run `python3 -m http.server 8000 --directory dist`, then open the server in a browser. No build step is needed.

## Publishing

The included GitHub Actions workflow publishes `dist/` to GitHub Pages on every push to `main`.
