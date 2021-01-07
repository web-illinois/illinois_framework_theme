<?php

function illinois_framework_theme_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface $form_state, $form_id = NULL)
{
  // Work-around for a core bug affecting admin themes. See issue #943212.
  if (isset($form_id)) {
    return;
  }

  // Create a section for the secondary site information
  $form['if_secondary_site'] = array(
      '#type' => 'details',
      '#title' => t('Secondary Site Title'),
      '#description' => t('Your Primary Site Title is managed in: Configuration > System > Basic Site Settings > Site name.  The optional Secondary Site Title (which can be linked) will show up above and smaller than the Primary Site Title.'),
      '#weight' => -101,
      '#open' => TRUE,
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
  // Create a section for toggling megamenu on or off
//  $if_megamenu_states = array(
//      'visible' => array(
//          ':input[name="if_menu_select"]' => array(
//              'value' => t('Mega Menu'),
//          ),
//      ),
//  );
  $form['if_megamenu'] = array(
      '#type' => 'details',
      '#title' => t('MegaMenu'),
      '#description' => t('By default, this theme is using a simple Drupal menu. However, you may enable the theme menu here, which offers a mega-menu (lite) style menu system, including many more options than the default Drupal menu system.'),
      '#weight' => -98,
      '#open' => TRUE,
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
    '#markup' => '<img src="/sites/'.\Drupal::request()->getHost().'/themes/sitetheme/images/menu_example.png" alt="picture" style="width:300px;">',
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
      '#markup' => '<img src="/sites/'.\Drupal::request()->getHost().'/themes/sitetheme/images/simple_menu.png" alt="picture" style="width:300px;">',
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

//  $form['if_megamenu']['if_navigation_menu_type'] = array(
//      '#weight' => -95,
//      '#default_value' => theme_get_setting('if_navigation_menu_type'),
//      '#type' => 'checkbox',
//      '#title' => t('Enable an Illinois branded MegaMenu'),
//  );

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
      '#markup' => '<img src="/sites/dev.aces.illinois.edu/themes/sitetheme/images/footer_example.png" alt="picture" style="width:300px;">',
      '#title' => t('Footer Example'),
      '#weight' => -93,
  );
  $form['if_footer']['if_footer_address'] = array(
      '#type' => 'fieldset',
      '#title' => t('Address'),
  );
  $form['if_footer']['if_footer_address']['if_footer_address_unit'] = array(
      '#type' => 'textfield',
      '#description' => 'If not provided, the Site Title (Configuration > System > Basic Site Settings > Site name) will be used instead.',
      '#title' => t('Unit Name'),
  );
  $form['if_footer']['if_footer_address']['if_footer_address_unit_link'] = array(
      '#type' => 'url',
      '#description' => 'If not provided, the site title will link to this site\'s homepage.',
      '#title' => t('Link for Unit Name'),
  );
  $form['if_footer']['if_footer_address']['if_footer_address_street_one'] = array(
      '#type' => 'textfield',
      '#title' => t('Street Address Line One'),
  );
  $form['if_footer']['if_footer_address']['if_footer_address_street_two'] = array(
      '#type' => 'textfield',
      '#title' => t('Street Address Line Two'),
  );
  $form['if_footer']['if_footer_address']['if_footer_address_city'] = array(
      '#type' => 'textfield',
      '#title' => t('City'),
  );
  $form['if_footer']['if_footer_address']['if_footer_address_state'] = array(
      '#type' => 'textfield',
      '#title' => t('State'),
  );
  $form['if_footer']['if_footer_address']['if_footer_address_zip'] = array(
      '#type' => 'textfield',
      '#title' => t('Zip code'),
  );
  $form['if_footer']['if_footer_address']['if_footer_address_email'] = array(
      '#type' => 'email',
      '#default_value' => theme_get_setting('if_footer_address_email'),
      '#description' => 'University policy requires all web sites hosted on university provided equipment or services must provide a contact email address that users may report problems, concerns or violations to. Sites that fail to provide a valid email address that is monitored by a site administrator risk having their sites taken down.',
      '#title' => t('Email'),
      '#required' => TRUE,
  );
  $form['if_footer']['if_footer_menu'] = array(
    '#type' => 'vertical_tabs',
    '#default_tab' => 'edit-if-footer-menu-left-details',
  );
  $form['if_footer']['if_footer_menu_left_details'] = array(
      '#type' => 'details',
      '#title' => t('Left Footer Menu'),
      '#group' => 'if_footer_menu',
  );
  $form['if_footer']['if_footer_menu_left_details']['if_footer_menu_left_fieldset'] = array(
      '#type' => 'fieldset',
      '#title' => t('Left Menu'),
  );

  $form['if_footer']['if_footer_menu_right_details'] = array(
      '#type' => 'details',
      '#title' => t('Right Footer Menu'),
      '#group' => 'if_footer_menu',
  );
  $form['if_footer']['if_footer_menu_right_details']['if_footer_menu_right_fieldset'] = array(
      '#type' => 'fieldset',
      '#title' => t('Right Menu'),
  );
}
