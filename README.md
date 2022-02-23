# Illinois Drupal Framework Theme

**NOTE:** This theme is intended to be used as part of the Illinois Drupal Framework Distribution. Using this theme without the profile and core module is not supported. Instructions on how to set up the Illinois Drupal Framework Distribution within cPanel can be found at https://github.com/web-illinois/illinois_framework_project. 

# Customizing your site by creating a sub-theme

If you wish to customize the look and feel of your Illinois Drupal Framework website, creating a sub-theme is recommended. To create a sub-theme, follow the steps below. This is assuming a site is set-up using the steps found at https://github.com/web-illinois/illinois_framework_project

* Open a terminal and `cd` into `~/illinoiss_framework`
* Run the command `drush generate theme` which will step you through creating a new sub-theme. See the screenshot below as an example.
* The third prompt should be `Base theme [classy]`, enter `illinois_framework_theme`. This is what sets your custom theme as a sub-theme of the Illinois Framework.
* Answer the rest of the prompts as you see fit. The defaults are OK in most instances.

![image](https://user-images.githubusercontent.com/56594946/155361524-e709a6b9-264a-4643-be67-de69fa224041.png)

After your sub-theme is created, you'll need to set it as your site's theme. To do that, follow these steps:

* Login to your site as an administrator
* Click "Appearance" in the admin toolbar
* Scroll down to "Uninstalled Themes"
* Find your sub-theme and click the "Install and set as default" button 

# Contributing to the Illinois Framework Theme

If you encounter any issues with the Illinois Framwork, please feel free to submit an issue to our [issue queue](https://github.com/web-illinois/illinois_framework_theme/issues). 

The WIGG Drupal group is welcoming contributions from anyone on campus. Please see the [WIGG Drupal webpage](https://webguidelines.web.illinois.edu/subcommittees/drupal/) for more information.

## Developing the theme

Since this theme is a subtheme of Bootstrap, you will want to use a SASS compiler to make customizations. The SASS files are located in the `scss` directory. Instructions for installing SASS can be found at https://sass-lang.com/install. Using the command-line, you can compile the theme's SASS file by running the command `sass --source-map style.scss ../css/style.css` in the `scss` directory.

See [Theming Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/theming/) for information on getting started customizing Bootstrap 4.

To customize look and feel of the IL Framework Theme, you'll want to override SCSS variables. Full list of variables is in `[path to themes/contrib]/bootstrap4/dist/bootstrap/4.4.1/scss/_variables.scss` or `[path to themes/contrib]/bootstrap4/scss/_theme_variables.scss`.
* Bootstrap 4 variables for font-face, font-sizes, colours, etc [Read more](https://getbootstrap.com/docs/4.5/getting-started/theming/#variable-defaults)
* Bootstrap 4 Theme specific variables `scss/_theme_variables.scss` for site logo image size, region paddings, etc

There is a style guide available at `style-guide/index.html`. The link will be available on `Manage theme` configuration page. If you get a 404 error, add `index.html` to the URL.

## Twig Templating with Twig Tweak
If you are looking to modify the twig templates there are some shortcuts provided by the [Twig Tweak Module](https://www.drupal.org/project/twig_tweak).  See the [cheat sheet](https://www.drupal.org/docs/contributed-modules/twig-tweak/cheat-sheet).

