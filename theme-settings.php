<?php
\Drupal::messenger()->addStatus(t('Set the Header Links, Secondary Site Title, MegaMenu and Footer Contents'));
function illinois_framework_theme_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface $form_state, $form_id = NULL)
{
  // Work-around for a core bug affecting admin themes. See issue #943212.
  if (isset($form_id)) {
    return;
  }
  $theme_path = \Drupal::theme()->getActiveTheme()->getPath();

  // Add Links to the upper right-hand corner of the website
  $form['if_header_links'] = array(
    '#type' => 'details',
    '#title' => t('Header Link List'),
    '#description' => t('Add up to 3 links in the upper right-hand corner of the header'),
    '#weight' => -105,
    '#open' => FALSE,
  );
  $form['if_header_links']['if_header_link_1_fieldset'] = array(
    '#type' => 'fieldset',
    '#title' => t('Link 1'),
  );
  $form['if_header_links']['if_header_link_1_fieldset']['if_header_text_1'] = array(
  '#type'          => 'textfield',
  '#placeholder' => 'Apply',
  '#title'         => t('Enter text to display for the link'),
  '#size'          => 128,
  '#default_value' => theme_get_setting('if_header_text_1'),
);
  $form['if_header_links']['if_header_link_1_fieldset']['if_header_link_1'] = array(
    '#type'          => 'url',
    '#placeholder' => 'https://illinois.edu',
    '#title'         => t('Enter the link'),
    '#default_value' => theme_get_setting('if_header_link_1'),
  );
  $form['if_header_links']['if_header_link_2_fieldset'] = array(
    '#type' => 'fieldset',
    '#title' => t('Link 2'),
  );
  $form['if_header_links']['if_header_link_2_fieldset']['if_header_text_2'] = array(
    '#type'          => 'textfield',
    '#placeholder' => 'Give',
    '#title'         => t('Enter text to display for the link'),
    '#size'          => 128,
    '#default_value' => theme_get_setting('if_header_text_2'),
  );
  $form['if_header_links']['if_header_link_2_fieldset']['if_header_link_2'] = array(
    '#type'          => 'url',
    '#placeholder' => 'https://illinois.edu',
    '#title'         => t('Enter the link'),
    '#default_value' => theme_get_setting('if_header_link_2'),
  );
  $form['if_header_links']['if_header_link_3_fieldset'] = array(
    '#type' => 'fieldset',
    '#title' => t('Link 3'),
  );
  $form['if_header_links']['if_header_link_3_fieldset']['if_header_text_3'] = array(
    '#type'          => 'textfield',
    '#placeholder' => 'Login',
    '#title'         => t('Enter text to display for the link'),
    '#size'          => 128,
    '#default_value' => theme_get_setting('if_header_text_3'),
  );
  $form['if_header_links']['if_header_link_3_fieldset']['if_header_link_3'] = array(
    '#type'          => 'url',
    '#placeholder' => 'https://illinois.edu',
    '#title'         => t('Enter the link'),
    '#default_value' => theme_get_setting('if_header_link_3'),
  );
  // Creates a section for the secondary site information
  $form['if_secondary_site'] = array(
      '#type' => 'details',
      '#title' => t('Secondary Site Title'),
      '#description' => t('Your Primary Site Title is managed in: Configuration > System > Basic Site Settings > Site name.  The optional Secondary Site Title (which can be linked) will show up above and smaller than the Primary Site Title.'),
      '#weight' => -101,
      '#open' => FALSE,
  );
  $form['if_secondary_site']['if_secondary_site_title'] = array(
      '#weight' => -100,
      '#type' => 'textfield',
      '#title' => t('Secondary Site Title'),
      '#default_value' => theme_get_setting('if_secondary_site_title'),
  );
  $form['if_secondary_site']['if_secondary_site_link'] = array(
      '#weight' => -99,
      '#default_value' => theme_get_setting('if_secondary_site_link'),
      '#type' => 'url',
      '#title' => t('Link'),
  );
  // Choose whether you display a simple menu or megamenu
  $form['if_megamenu'] = array(
      '#type' => 'details',
      '#title' => t('MegaMenu'),
      '#description' => t('By default, this theme is using a simple Drupal menu. However, you may enable the theme menu here, which offers a mega-menu (lite) style menu system, including many more options than the default Drupal menu system.'),
      '#weight' => -98,
      '#open' => FALSE,
  );
  $form['if_megamenu']['if_menu_select'] = array(
      '#type' => 'radios',
      '#title' => t('Pick a menu style'),
      '#default_value' => theme_get_setting('if_menu_select'),
      '#options' => array(
          'simple' => t('Simple Dropdown Menu'),
          'mega' => t('Mega Menu'),
      ),
      '#weight' => -97,
  );

  $form['if_megamenu']['if_megamenu_image_mega'] = array(
    '#type' => 'container',
    '#prefix' => '<div>',
    '#suffix' => '</div>',
    '#markup' => "<img src='/$theme_path/images/menu_example.png' alt='Example picture of a mega menu' style='width:300px;'>",
    '#title' => t('Menu Example'),
    '#weight' => -96,
    '#states' => array(
        'invisible' => array(
            ':input[name="if_menu_select"]' => array(
                'value' => 'simple',
            ),
        ),
    ),
);
  $form['if_megamenu']['if_megamenu_image_simple'] = array(
      '#type' => 'container',
      '#prefix' => '<div>',
      '#suffix' => '</div>',
      '#markup' => "<img src='/$theme_path/images/simple_menu.png' alt='Example picture of a simple dropdown menu' style='width:300px;'>",
      '#title' => t('Menu Example'),
      '#weight' => -95,
      '#states' => array(
          'invisible' => array(
              ':input[name="if_menu_select"]' => array(
                  'value' => 'mega',
              ),
          ),
      ),
  );

  // Create a section for the footer links
  $form['if_footer'] = array(
      '#type' => 'details',
      '#title' => t('Footer Contents'),
      '#description' => t('Example of where the following fields will appear in the footer:'),
      '#weight' => -94,
      '#open' => TRUE,
  );
  $form['if_footer']['if_footer_image'] = array(
      '#type' => 'markup',
      '#prefix' => '<div>',
      '#suffix' => '</div>',
      '#markup' => "<img src='/$theme_path/images/footer_example.png' alt='Screenshot of the Illinois footer' style='width:300px;'>",
      '#title' => t('Footer Example'),
      '#weight' => -93,
  );
  // Select Social Media to display in the footer
  $form['if_footer']['if_footer_social'] = array(
    '#type' => 'fieldset',
    '#title' => t('Social Media'),
  );
  $form['if_footer']['if_footer_social']['if_footer_social_facebook'] = array(
    '#type'          => 'url',
    '#placeholder' => 'https://facebook.com',
    '#title'         => t('Enter the link to your Facebook page'),
    '#size'          => 128,
    '#default_value' => theme_get_setting('if_footer_social_facebook'),
  );
  $form['if_footer']['if_footer_social']['if_footer_social_instagram'] = array(
    '#type'          => 'url',
    '#placeholder' => 'https://instagram.com',
    '#title'         => t('Enter the link to your Instagram page'),
    '#size'          => 128,
    '#default_value' => theme_get_setting('if_footer_social_instagram'),
  );
  $form['if_footer']['if_footer_social']['if_footer_social_twitter'] = array(
    '#type'          => 'url',
    '#placeholder' => 'https://twitter.com',
    '#title'         => t('Enter the link to your Twitter page'),
    '#size'          => 128,
    '#default_value' => theme_get_setting('if_footer_social_twitter'),
  );
  $form['if_footer']['if_footer_social']['if_footer_social_youtube'] = array(
    '#type'          => 'url',
    '#placeholder' => 'https://youtube.com',
    '#title'         => t('Enter the link to your YouTube page'),
    '#size'          => 128,
    '#default_value' => theme_get_setting('if_footer_social_youtube'),
  );
  $form['if_footer']['if_footer_social']['if_footer_social_linkedin'] = array(
    '#type'          => 'url',
    '#placeholder' => 'https://linkedin.com',
    '#title'         => t('Enter the link to your LinkedIn page'),
    '#size'          => 128,
    '#default_value' => theme_get_setting('if_footer_social_linkedin'),
  );

  // Start of Address Block
  $form['if_footer']['if_footer_address'] = array(
      '#type' => 'fieldset',
      '#title' => t('Address'),
  );
  $form['if_footer']['if_footer_address']['if_footer_address_unit'] = array(
      '#default_value' => theme_get_setting('if_footer_address_unit'),
      '#type' => 'textfield',
      '#description' => 'If not provided, the Site Title (Configuration > System > Basic Site Settings > Site name) will be used instead.',
      '#title' => t('Unit Name'),
  );
  $form['if_footer']['if_footer_address']['if_footer_address_street_one'] = array(
      '#default_value' => theme_get_setting('if_footer_address_street_one'),
      '#type' => 'textfield',
      '#title' => t('Street Address Line One'),
  );
  $form['if_footer']['if_footer_address']['if_footer_address_street_two'] = array(
      '#default_value' => theme_get_setting('if_footer_address_street_two'),
      '#type' => 'textfield',
      '#title' => t('Street Address Line Two'),
  );
  $form['if_footer']['if_footer_address']['if_footer_address_city'] = array(
      '#default_value' => theme_get_setting('if_footer_address_city'),
      '#type' => 'textfield',
      '#title' => t('City'),
  );
  $form['if_footer']['if_footer_address']['if_footer_address_state'] = array(
      '#default_value' => theme_get_setting('if_footer_address_state'),
      '#type' => 'textfield',
      '#title' => t('State'),
  );

  $form['if_footer']['if_footer_address']['if_footer_address_zip'] = array(
    '#default_value' => theme_get_setting('if_footer_address_zip'),
    '#type' => 'textfield',
    '#title' => t('Zip code'),
  );
  $form['if_footer']['if_footer_address']['if_footer_address_email'] = array(
    '#type' => 'email',
    '#default_value' => theme_get_setting('if_footer_address_email'),
    '#title' => t('Email Address'),
    '#required' => TRUE,
  );
  $form['if_footer']['if_footer_address']['if_footer_address_tel'] = array(
    '#type' => 'tel',
    '#default_value' => theme_get_setting('if_footer_address_tel'),
    '#title' => t('Phone Number'),
  );
  // End of Address Block
  // Start of Parent College Block
  $form['if_footer_colleges'] = array(
    '#type' => 'details',
    '#title' => t('Parent Colleges or Affiliated Organizations'),
    '#description' => t('Add up to 5 links to colleges or organizations affiliated with this website'),
    '#weight' => -97,
    '#open' => FALSE,
  );
  $form['if_footer_colleges']['if_footer_college_1_fieldset'] = array(
    '#type' => 'fieldset',
    '#title' => t('Link 1'),
  );
  $form['if_footer_colleges']['if_footer_college_1_fieldset']['if_footer_college_text_1'] = array(
    '#type'          => 'textfield',
    '#placeholder' => 'College of ACES',
    '#title'         => t('Enter the name of the college or organization'),
    '#size'          => 128,
    '#default_value' => theme_get_setting('if_footer_college_text_1'),
  );
  $form['if_footer_colleges']['if_footer_college_1_fieldset']['if_footer_college_link_1'] = array(
    '#type'          => 'url',
    '#placeholder' => 'https://aces.illinois.edu',
    '#title'         => t('Enter the URL'),
    '#default_value' => theme_get_setting('if_footer_college_link_1'),
  );
  $form['if_footer_colleges']['if_footer_college_2_fieldset'] = array(
    '#type' => 'fieldset',
    '#title' => t('Link 2'),
  );
  $form['if_footer_colleges']['if_footer_college_2_fieldset']['if_footer_college_text_2'] = array(
    '#type'          => 'textfield',
    '#placeholder' => 'College of ACES',
    '#title'         => t('Enter the name of the college or organization'),
    '#size'          => 128,
    '#default_value' => theme_get_setting('if_footer_college_text_2'),
  );
  $form['if_footer_colleges']['if_footer_college_2_fieldset']['if_footer_college_link_2'] = array(
    '#type'          => 'url',
    '#placeholder' => 'https://aces.illinois.edu',
    '#title'         => t('Enter the URL'),
    '#default_value' => theme_get_setting('if_footer_college_link_2'),
  );
  $form['if_footer_colleges']['if_footer_college_3_fieldset'] = array(
    '#type' => 'fieldset',
    '#title' => t('Link 3'),
  );
  $form['if_footer_colleges']['if_footer_college_3_fieldset']['if_footer_college_text_3'] = array(
    '#type'          => 'textfield',
    '#placeholder' => 'College of ACES',
    '#title'         => t('Enter the name of the college or organization'),
    '#size'          => 128,
    '#default_value' => theme_get_setting('if_footer_college_text_3'),
  );
  $form['if_footer_colleges']['if_footer_college_3_fieldset']['if_footer_college_link_3'] = array(
    '#type'          => 'url',
    '#placeholder' => 'https://aces.illinois.edu',
    '#title'         => t('Enter the URL'),
    '#default_value' => theme_get_setting('if_footer_college_link_3'),
  );
  $form['if_footer_colleges']['if_footer_college_4_fieldset'] = array(
    '#type' => 'fieldset',
    '#title' => t('Link 4'),
  );
  $form['if_footer_colleges']['if_footer_college_4_fieldset']['if_footer_college_text_4'] = array(
    '#type'          => 'textfield',
    '#placeholder' => 'College of ACES',
    '#title'         => t('Enter the name of the college or organization'),
    '#size'          => 128,
    '#default_value' => theme_get_setting('if_footer_college_text_4'),
  );
  $form['if_footer_colleges']['if_footer_college_4_fieldset']['if_footer_college_link_4'] = array(
    '#type'          => 'url',
    '#placeholder' => 'https://aces.illinois.edu',
    '#title'         => t('Enter the URL'),
    '#default_value' => theme_get_setting('if_footer_college_link_4'),
  );
  $form['if_footer_colleges']['if_footer_college_5_fieldset'] = array(
    '#type' => 'fieldset',
    '#title' => t('Link 5'),
  );
  $form['if_footer_colleges']['if_footer_college_5_fieldset']['if_footer_college_text_5'] = array(
    '#type'          => 'textfield',
    '#placeholder' => 'College of ACES',
    '#title'         => t('Enter the name of the college or organization'),
    '#size'          => 128,
    '#default_value' => theme_get_setting('if_footer_college_text_5'),
  );
  $form['if_footer_colleges']['if_footer_college_5_fieldset']['if_footer_college_link_5'] = array(
    '#type'          => 'url',
    '#placeholder' => 'https://aces.illinois.edu',
    '#title'         => t('Enter the URL'),
    '#default_value' => theme_get_setting('if_footer_college_link_5'),
  );

  // Start of footer menus
  $form['if_footer']['if_footer_menu_block_checkbox'] = array(
    '#type' => 'checkbox',
    '#title' => t('1 column footer layout'),
    '#description' => "Select this checkbox to make the footer area 1 column instead of 2 columns",
    '#default_value' => theme_get_setting('if_footer_menu_block_checkbox'),
  );
  $form['if_footer']['if_footer_menu'] = array(
    '#type' => 'vertical_tabs',
    '#default_tab' => 'edit-if-footer-menu-first-details',
  );
  // Footer Menu First
  $form['if_footer']['if_footer_menu_first_details'] = array(
      '#type' => 'details',
      '#title' => t('Footer Menu First'),
      '#group' => 'if_footer_menu',
  );
  $form['if_footer']['if_footer_menu_first_details']['if_footer_menu_first_fieldset'] = array(
      '#type' => 'fieldset',
      '#title' => t('Footer Menu First'),
    '#description' => 'You can also access the menu by going to Structure -> Menus -> Footer Menu First',
  );
  $markup_menu_first = "<a class=\"button button--primary\" role=\"button\" href='/admin/structure/menu/manage/footer-menu-first'>Edit Footer Menu First</a></button>";
  $form['if_footer']['if_footer_menu_first_details']['if_footer_menu_first_fieldset']['if_footer_menu_first_link'] = array(
    '#type' => 'markup',
    '#markup' =>  $markup_menu_first,
  );
  // Footer Menu Second
  $form['if_footer']['if_footer_menu_second_details'] = array(
      '#type' => 'details',
      '#title' => t('Footer Menu Second'),
      '#group' => 'if_footer_menu',
  );
  $form['if_footer']['if_footer_menu_second_details']['if_footer_menu_second_fieldset'] = array(
      '#type' => 'fieldset',
      '#title' => t('Footer Menu Second'),
    '#description' => 'You can also access the menu by going to Structure -> Menus -> Footer Menu Second',
  );
  $markup_menu_second = "<a class=\"button button--primary\" role=\"button\" href='/admin/structure/menu/manage/footer-menu-second'>Edit Footer Menu Second</a></button>";
  $form['if_footer']['if_footer_menu_second_details']['if_footer_menu_second_fieldset']['if_footer_menu_second_link'] = array(
    '#type' => 'markup',
    '#markup' =>  $markup_menu_second,
  );
  // Footer Menu Third
  $form['if_footer']['if_footer_menu_third_details'] = array(
    '#type' => 'details',
    '#title' => t('Footer Menu Third'),
    '#group' => 'if_footer_menu',
  );
  $form['if_footer']['if_footer_menu_third_details']['if_footer_menu_third_fieldset'] = array(
    '#type' => 'fieldset',
    '#title' => t('Footer Menu Third'),
    '#description' => 'You can also access the menu by going to Structure -> Menus -> Footer Menu Third',
  );
  $markup_menu_third = "<a class=\"button button--primary\" role=\"button\" href='/admin/structure/menu/manage/footer-menu-third'>Edit Footer Menu Third</a></button>";
  $form['if_footer']['if_footer_menu_third_details']['if_footer_menu_third_fieldset']['if_footer_menu_third_link'] = array(
    '#type' => 'markup',
    '#markup' =>  $markup_menu_third,
  );
  // Footer Menu Fourth
  $form['if_footer']['if_footer_menu_fourth_details'] = array(
    '#type' => 'details',
    '#title' => t('Footer Menu Fourth'),
    '#group' => 'if_footer_menu',
  );
  $form['if_footer']['if_footer_menu_fourth_details']['if_footer_menu_fourth_fieldset'] = array(
    '#type' => 'fieldset',
    '#title' => t('Footer Menu Fourth'),
    '#description' => t('You can also access the menu by going to Structure -> Menus -> Footer Menu Fourth'),
  );
  $markup_menu_fourth = "<a class=\"button button--primary\" role=\"button\" href='/admin/structure/menu/manage/footer-menu-fourth'>Edit Footer Menu Fourth</a></button>";
  $form['if_footer']['if_footer_menu_fourth_details']['if_footer_menu_fourth_fieldset']['if_footer_menu_fourth_link'] = array(
    '#type' => 'markup',
    '#markup' =>  $markup_menu_fourth,
  );
  // Start of subfooter
  $form['if_subfooter'] = array(
    '#type' => 'details',
    '#title' => t('Subfooter'),
    '#description' => t('Add links to the subfooter next to the copyright and privacy policy link.  You must add the text and link or the link will not appear in the footer.'),
    '#weight' => -92,
    '#open' => FALSE,
  );
  $form['if_subfooter']['if_subfooter_fieldset'] = array(
    '#type' => 'fieldset',
    '#title' => t('Subfooter'),
  );
  $form['if_subfooter']['if_subfooter_fieldset']['if_subfooter_text_1'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Enter text to display for the link'),
    '#size'          => 128,
    '#default_value' => theme_get_setting('if_subfooter_text_1'),
  );
  $form['if_subfooter']['if_subfooter_fieldset']['if_subfooter_link_1'] = array(
    '#type'          => 'url',
    '#placeholder' => 'https://illinois.edu',
    '#title'         => t('Enter the link'),
    '#default_value' => theme_get_setting('if_subfooter_link_1'),
  );
  $form['if_subfooter']['if_subfooter_fieldset']['if_subfooter_text_2'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Enter text to display for the link'),
    '#size'          => 128,
    '#default_value' => theme_get_setting('if_subfooter_text_2'),
  );
  $form['if_subfooter']['if_subfooter_fieldset']['if_subfooter_link_2'] = array(
    '#type'          => 'url',
    '#placeholder' => 'https://illinois.edu',
    '#title'         => t('Enter the link'),
    '#default_value' => theme_get_setting('if_subfooter_link_2'),
  );
  $form['if_subfooter']['if_subfooter_fieldset']['if_subfooter_text_3'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Enter text to display for the link'),
    '#size'          => 128,
    '#default_value' => theme_get_setting('if_subfooter_text_3'),
  );
  $form['if_subfooter']['if_subfooter_fieldset']['if_subfooter_link_3'] = array(
    '#type'          => 'url',
    '#placeholder' => 'https://illinois.edu',
    '#title'         => t('Enter the link'),
    '#default_value' => theme_get_setting('if_subfooter_link_3'),
  );
  $form['if_subfooter']['if_subfooter_fieldset']['if_subfooter_text_4'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Enter text to display for the link'),
    '#size'          => 128,
    '#default_value' => theme_get_setting('if_subfooter_text_4'),
  );
  $form['if_subfooter']['if_subfooter_fieldset']['if_subfooter_link_4'] = array(
    '#type'          => 'url',
    '#placeholder' => 'https://illinois.edu',
    '#title'         => t('Enter the link'),
    '#default_value' => theme_get_setting('if_subfooter_link_4'),
  );
  $form['if_subfooter']['if_subfooter_fieldset']['if_subfooter_text_5'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Enter text to display for the link'),
    '#size'          => 128,
    '#default_value' => theme_get_setting('if_subfooter_text_5'),
  );
  $form['if_subfooter']['if_subfooter_fieldset']['if_subfooter_link_5'] = array(
    '#type'          => 'url',
    '#placeholder' => 'https://illinois.edu',
    '#title'         => t('Enter the link'),
    '#default_value' => theme_get_setting('if_subfooter_link_5'),
  );
}
