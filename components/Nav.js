import html from "html-literal";
import cornKernel from "../assets/corn_kernel.png";

export default links => html`
  <nav class="navbar">
    <a href="/" title="Home">
      <img src="${cornKernel}" alt="" width="50em" height="50em" />
    </a>
    ${links
      .map(
        link =>
          `<a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a>`
      )
      .join("")}
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
  </nav>
`;
