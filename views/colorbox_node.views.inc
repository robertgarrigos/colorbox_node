<?php

/**
 * @file
 * colorbox_node.views.inc
 */

/**
 * Implementation of hook_views_data()
 */
function colorbox_views_data() {

  $data['colorbox']['table']['group'] = t('Colorbox');

  $data['colorbox']['table']['join'] = array(
    '#global' => array(),
  );

  $data['colorbox']['colorbox_node'] = array(
    'title' => t('Node in a Colorbox'),
    'help' => t('Displays a node inside of a colorbox'),
    'field' => array(
      'handler' => 'colorbox_node_handler_field_colorbox_node',
    ),
  );

  return $data;
}
