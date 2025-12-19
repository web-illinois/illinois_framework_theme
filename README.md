# Illinois Drupal Framework Theme

**NOTE:** This theme is intended to be used as part of the Illinois Drupal Framework Distribution. Using this theme without the profile and core module is not supported. Instructions on how to set up the Illinois Drupal Framework Distribution within cPanel can be found at https://github.com/web-illinois/illinois_framework_project.

# Customizing your site by creating a sub-theme

If you wish to customize the look and feel of your Illinois Drupal Framework website, creating a sub-theme is recommended. To create a sub-theme, follow the steps below. This is assuming a site is set-up using the steps found at https://github.com/web-illinois/illinois_framework_project

* Open a terminal and `cd` into `~/illinois_framework`
* Run the command `drush generate theme` which will step you through creating a new sub-theme. See the screenshot below as an example.
* The third prompt should be `Base theme [classy]`, enter `illinois_framework_theme`. This is what sets your custom theme as a sub-theme of the Illinois Framework.
* Answer the rest of the prompts as you see fit. The defaults are OK in most instances.

![image](https://user-images.githubusercontent.com/56594946/155361524-e709a6b9-264a-4643-be67-de69fa224041.png)

After generating your sub-theme with Drush, you'll need to modify the regions of your theme to match the Illinois Framework Theme. Replace "MY_THEME" with the machine name of your sub-theme.

* Edit the file `~/illinois_framework/docroot/themes/MY_THEME/MY_THEME.info.yml
* Replace the `regions:` section of the file with:

```
regions:
  header: Header
  nav_main: 'Main navigation region'
  breadcrumb: Breadcrumbs
  highlighted: Highlighted
  help: Help Information
  tabs: 'Tabs'
  content: 'Main content'
  sidebar_first: 'Sidebar first'
  sidebar_second: 'Sidebar second'
  footer: Footer
  hidden: 'Hidden region for referenced blocks'
```

After your sub-theme is created, you'll need to set it as your site's theme. To do that, follow these steps:

* Login to your site as an administrator
* Click "Appearance" in the admin toolbar
* Scroll down to "Uninstalled Themes"
* Find your sub-theme and click the "Install and set as default" button

# Contributing to the Illinois Framework Theme

If you encounter any issues with the Illinois Framwork, please feel free to submit an issue to our [issue queue](https://github.com/web-illinois/illinois_framework_theme/issues).

The WIGG Drupal group is welcoming contributions from anyone on campus. Please see the [WIGG Drupal webpage](https://webguidelines.web.illinois.edu/subcommittees/drupal/) for more information.

# Configuring the Sidebar Menu Block
- To get the sidebar menu to work correctly go to /admin/structure/block
- Sidebar first: Main navigation block
- display title - toggle off
- under html and style options change to: menu__side_bar_first

## Developing the theme

### CSS Methodology
The theme utilizes the **ITCSS** (Inverted Triangle CSS) architecture and follows **BEM** (Block Element Modifier) naming conventions.

#### ITCSS Structure
Styles are imported in `css/style.css` following specificity layers:
1.  **Generic/Base:** `base/reset.css`, `base/elements.img.css` (Resets and base HTML elements)
2.  **Objects/Layout:** `layout/layout.css` (Grid and structural classes)
3.  **Components:**
    *   `base/buttons.css` (Button components)
    *   `component/` (Drupal components like `messages.css`, `search.css`)
    *   `paragraphs/` (Specific paragraph styles like `paragraphs.accordion.css`)
    *   `regions/` (Region-specific styles like `region.footer.css`)

#### BEM Naming Examples
*   **Block:** `.paragraph--type--contact`, `.messages`
*   **Element:** `.paragraph--type--contact__title`, `.field__items`
*   **Modifier:** `.messages--status`, `.messages--warning`

- **Plain CSS Only:** All styles must be written in plain CSS. **Do not use SCSS or SASS.** While an `scss/` directory exists for legacy purposes, it is not used for compilation.

### How to Contribute
1. **Branching:** Create a new branch from the latest dev branch, currently `5.x`. Use descriptive prefixes such as `feature/`, `fix/`, or `refactor/`.
2. **Coding Standards:** Follow Drupal's [CSS](https://www.drupal.org/docs/develop/standards/css-coding-standards) and [Twig](https://www.drupal.org/docs/develop/standards/twig-coding-standards) coding standards. Use the included `.editorconfig` to maintain formatting.
3. **Preprocessing:** Keep Twig templates clean by moving complex logic into the `illinois_framework_theme.theme` file using preprocess functions.
4. **Testing:** Verify changes across various content types and layout modes (e.g., with and without sidebars).
5. **Pull Requests:** Submit a pull request to the `main` branch with a clear description of the problem solved or feature added.

## Twig Templating with Twig Tweak
If you are looking to modify the twig templates there are some shortcuts provided by the [Twig Tweak Module](https://www.drupal.org/project/twig_tweak).  See the [cheat sheet](https://www.drupal.org/docs/contributed-modules/twig-tweak/cheat-sheet).

