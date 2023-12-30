/* eslint-disable prettier/prettier */

import html from "html-literal";
import * as views from "./views";

export default () => html`
${views[Home]()},
${views[About]()},
${views[Bitmap]()},
${views[Contact]()},
`
