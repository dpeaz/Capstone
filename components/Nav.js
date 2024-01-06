import html from "html-literal";
export default links => html`
  <nav class="navbar">
    ${links
      .map(
        link =>
          `<a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a>`
      )
      .join("")}

    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          link =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
    <ul class="hidden--mobile nav-links"></ul>
  </nav>
`;
