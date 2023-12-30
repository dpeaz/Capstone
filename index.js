import { Nav, Main, Footer } from "./components";

function render() {
  document.querySelector("#root").innerHTML = `
      ${Nav()}
      ${Main()}
      ${Footer()}
    `;
}

render();
