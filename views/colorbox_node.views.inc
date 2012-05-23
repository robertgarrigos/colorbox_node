<?php

/**
 * @file
 * colorbox_node.views.inc
 */

/**
 * Implementation of hook_views_data()
 */
function colorbox_node_views_data_alter(&$views_data) {
  // We are going to override our views_handler_field_node
  $views_data['node']['nid']['field']['handler'] = 'colorbox_node_handler_field_colorbox_node';
  $views_data['node']['title']['field']['handler'] = 'colorbox_node_handler_field_colorbox_node';
}
