# Styling

This project uses a Sass preprocessor to handle styling. If you are using VSCode, you will need [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass) to convert sass to CSS.

Main style file located at `app.scss` includes style from all pages. This file will only load stylesheets usign `@use` rule.

## Directories

### Tools

Contains stylesheets which include `breakpoints`, `mixins`, `variables` and `global` styles.

### Pages

Contains a different stylesheet for each page. They are loaded into `app.scss`.
