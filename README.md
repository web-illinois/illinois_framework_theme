# Illinois Framework Theme

The Illinois Framework Theme is a subtheme of the [Bootstrap4 Drupal Theme](https://www.drupal.org/project/bootstrap4).

### Customizations

Since this theme is based off Bootstrap, you will want to use a SASS compiler to make customizations. The SASS files are located in the `scss` directory. Instructions for installing SASS can be found at https://sass-lang.com/install. Using the command-line, you can compile the theme's SASS file by running the command `sass --source-map style.scss ../css/style.css` in the `scss` directory.

See [Theming Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/theming/) for information on getting started customizing Bootstrap 4.

To customize look and feel of the IL Framework Theme, you'll want to override SCSS variables. Full list of variables is in `[path to themes/contrib]/bootstrap4/dist/bootstrap/4.4.1/scss/_variables.scss` or `[path to themes/contrib]/bootstrap4/scss/_theme_variables.scss`.
* Bootstrap 4 variables for font-face, font-sizes, colours, etc [Read more](https://getbootstrap.com/docs/4.5/getting-started/theming/#variable-defaults)
* Bootstrap 4 Theme specific variables `scss/_theme_variables.scss` for site logo image size, region paddings, etc

There is a style guide available at `style-guide/index.html`. The link will be available on `Manage theme` configuration page. If you get a 404 error, add `index.html` to the URL.

# Contributing
The WIGG Drupal group is welcoming contributions from anyone on campus. Please see the [WIGG Drupal webpage](https://webguidelines.web.illinois.edu/subcommittees/drupal/) for more information.
