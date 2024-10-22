<?php
/*
Plugin Name: Elementor Phone Number Auto-Format
Description: Automatically formats phone numbers in the 000-000-0000 format on Elementor forms.
Version: 1.0
Author: WebTheory Media LLC
*/

// Hook to enqueue the custom JavaScript
function epw_enqueue_phone_auto_format_script() {
    // Only load the script on pages with Elementor forms
    if ( ! is_admin() && has_shortcode( get_post()->post_content, 'elementor' ) ) {
        wp_enqueue_script( 'epw-phone-auto-format', plugin_dir_url( __FILE__ ) . 'phone-auto-format.js', array(), '1.1', true );
    }
}
add_action( 'wp_enqueue_scripts', 'epw_enqueue_phone_auto_format_script' );
?>
