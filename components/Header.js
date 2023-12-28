import html from "html-literal";
() =>
  html`
    HTML template literal
  `;

export { default as Header } from "./Header";

export default st => `
<header>
<h1>${statusbar.header}</h1>
</header>`;
