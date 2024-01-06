import html from "html-literal";
export default links => html`
  <nav class="navbar">
    ${links
      .map(
        link =>
          `<a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a>`
      )
      .join("")}
  </nav>
`;
