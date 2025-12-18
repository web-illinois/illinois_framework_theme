# Illinois Framework Theme - GEMINI Context

## Project Overview
This directory contains the `illinois_framework_theme`, a custom Drupal 9/10 theme designed for the Illinois Drupal Framework Distribution. It is a sub-theme of `stable9` and Illinois branding standards.

**Type:** Drupal Theme
**Core:** 9/10
**Base Theme:** `stable9`

## Key Architecture

### 1. File Structure
*   **`illinois_framework_theme.theme`**: Contains all PHP logic for preprocessing variables, suggestions, and theme settings.
*   **`css/`**: The CSS directory contains all the styling for the theme.
*   **`scss/`**: IGNORE THE SCSS DIRECTORY. THIS THEME DOES NOT USE SCSS OR SASS, IT IS THERE FOR LEGACY PURPOSES.
*   **`templates/`**: Twig templates organized by entity type (block, node, paragraph, etc.).
*   **`js/`**: Drupal behaviors, mostly specific to paragraph types (e.g., `paragraph-accordion.js`).
*   **`illinois_framework_theme.libraries.yml`**: Defines asset libraries, including external CDNs (Toolkit, Font Awesome).

### 2. Critical Logic (Hidden Knowledge)
*   **Sidebar Paragraph Splitting (`preprocess_page`)**:
    *   The theme implements custom logic to split paragraphs into "Sidebar" and "Full Width" sections.
    *   **Trigger:** Node has `field_sidebar` set to `'sidebar'`.
    *   **Mechanism:** It reads `field_sidebar_paragraphs` (integer) to determine how many paragraphs go into the sidebar. The rest are rendered full-width below.
*   **Authentication (`preprocess_page`)**:
    *   Dynamically switches between standard Drupal login and Shibboleth (SimpleSAMLphp) based on the `if_shibboleth_login_direct` theme setting.
*   **Icon Mapping (`preprocess_paragraph`)**:
    *   A hardcoded array in the `.theme` file maps internal icon keys (e.g., `il-icon-admissions`) to specific CSS classes (e.g., `admissions-line`).

## Development & Usage

### CSS
*   **Methodology:** ITCSS + BEM.
*   **Compilation:** This theme only relies on CSS. There is no SCSS or SASS compilation needed
*   **CKEditor 5:** Uses `css/ck5style.css`.

### External Dependencies
*   **Toolkit:** Loads JS/CSS from `cdn.toolkit.illinois.edu`.
*   **Font Awesome 4.7.0:** Local copy in `fonts/`.

### Common Tasks
*   **Adding a Region:** Update `.info.yml`, add logic in `.theme` (if needed), and update `page.html.twig`.
*   **Modifying Icons:** Update the `$icon_map` array in `illinois_framework_theme_preprocess_paragraph`.
*   **Sub-theming:** The `README.md` provides specific instructions for generating a sub-theme using Drush (`drush generate theme`).

## "Gotchas"
*   **Menu Rendering:** The Sidebar First menu is heavily preprocessed to handle active states and hierarchy (`illinois_framework_theme_preprocess_menu`).
*   **Paragraph Backgrounds:** Background colors for `bb_content` and `icon_row` paragraphs are often inherited from their parent entities via custom preprocess logic.
