<?php

/**
 * @file
 * Post update functions for Illinois Framework Core Module.
 */

/**
 * Hide the field_cta_icon on the CTA paragraph form display.
 */
function illinois_framework_core_post_update_hide_cta_icon(&$sandbox) {
  // Load the specific form display config entity.
  $form_display = \Drupal::entityTypeManager()
    ->getStorage('entity_form_display')
    ->load('paragraph.cta.default');

  if ($form_display) {
    // The removeComponent method completely strips the field's widget settings
    // from the 'content' array and automatically registers it in 'hidden'.
    $form_display->removeComponent('field_cta_icon')
      ->save();

    return 'The field_cta_icon has been hidden on the CTA paragraph form display.';
  }

  return 'The CTA paragraph form display was not found.';
}

function illinois_framework_core_post_update_cta_title_optional(&$sandbox) {
  getStorage('field_storage_config')
    ->load('paragraph.field_cta_title');

  if ($field_storage instanceof FieldStorageConfigInterface) {
    // Set required to false.
    $field_storage->set('required', FALSE);
    $field_storage->save();
  }
}
