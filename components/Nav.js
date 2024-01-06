import html from "html-literal";
export default links => html`

  <nav class="navbar">
    <a href="home.html"><img src="corn_kernel.png" alt="Bitcorns" width="50" height="50">
    <a href="home.html">Home</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
    <a href="bitmap.html">Bitmap</a>

    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          link =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
  </nav>
`;

{
  /*  */
}
