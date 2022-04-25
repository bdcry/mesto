const autoprefixer = require("autoprefixer"); // добавляет префикс для старых браузеров
const cssnano = require("cssnano"); // минифицирует css

module.exports = {
  plugins: [autoprefixer, cssnano({ preset: "default" })],
};
