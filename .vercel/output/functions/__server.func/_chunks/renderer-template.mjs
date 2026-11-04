import { b as HTTPResponse } from "../_libs/h3.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
const rendererTemplate = () => new HTTPResponse('<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <title>CVify.AI — Build ATS-Friendly Resumes in Minutes</title>\n    <meta\n      name="description"\n      content="Smart AI-powered resume builder for students and freshers. Get ATS scores, AI suggestions, and instant PDF download."\n    />\n    <meta property="og:title" content="CVify.AI — Build ATS-Friendly Resumes in Minutes" />\n    <meta\n      property="og:description"\n      content="Smart AI-powered resume builder for students and freshers. Get ATS scores, AI suggestions, and instant PDF download."\n    />\n    <link rel="icon" type="image/png" href="/favicon.png" />\n    <script type="module" crossorigin src="/assets/index-GshFZqaf.js"><\/script>\n    <link rel="stylesheet" crossorigin href="/assets/index-yZ4n3zEm.css">\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>\n', { headers: { "content-type": "text/html; charset=utf-8" } });
function renderIndexHTML(event) {
  return rendererTemplate(event.req);
}
export {
  renderIndexHTML as default
};
