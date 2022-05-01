const browserSync = require("browser-sync");
const BASE_URL = "https://tas-devtest.myshopify.com";
const PREVIEW_QUERY = "?preview_theme_id=130564325555";

browserSync({
  proxy: `${BASE_URL}${PREVIEW_QUERY}`,
  files: "browserUpdate.js"
});
