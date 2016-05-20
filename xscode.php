<?php
/*
    Copyright (C) 2015  SysJust Co.

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/*
Plugin Name: XSCode
Plugin URI: https://github.com/derektu/xscode
Description: Highlight XS script code using the Syntax Highlighter tool from <a href="http://alexgorbatchev.com/wiki/SyntaxHighlighter">http://alexgorbatchev.com/wiki/SyntaxHighlighter</a>
Version: 1.0.0
Author: Derek Tu
Author URI: https://github.com/derektu
*/

$xs_pluginVersion = '1.0.0';

$themes = array(
    "Default" => "shThemeDefault.css",
    "Django" => "shThemeDjango.css",
    "Eclipse" => "shThemeEclipse.css",
    "Emacs" => "shThemeEmacs.css",
    "FadeToGrey" => "shThemeFadeToGrey.css",
    "MDUltra" => "shThemeMDUltra.css",
    "Midnight" => "shThemeMidnight.css",
    "RDark" => "shThemeRDark.css");

register_activation_hook(__FILE__, 'add_defaults_fn');
// Define default option settings
function add_defaults_fn() {
    $arr = array("theme"=>"Default");
    update_option('mtsh_plugin_options', $arr);
}

function xssh_enqueue_scripts()
{
    $options = get_option('mtsh_plugin_options');
    global $themes;
    global $xs_pluginVersion;
    wp_enqueue_script( 'xs', plugins_url('xsHighlights.js', __FILE__), array('jq'), $xs_pluginVersion);
    /*
    wp_enqueue_script( 'xs-xregexp', plugins_url('src/xregexp.js', __FILE__), array('xs'), $xs_pluginVersion);
    wp_enqueue_script( 'xs-shcore', plugins_url('src/shCore.js', __FILE__), array('xs-xregexp'), $xs_pluginVersion);
    wp_enqueue_script( 'xs-shautoloader', plugins_url('src/shAutoloader.js', __FILE__), array('xs-shcore'), $xs_pluginVersion);
    */

    wp_enqueue_script( 'xs-shcore', plugins_url('scripts/shCore.js', __FILE__), array('xs'), $xs_pluginVersion);
    wp_enqueue_script( 'xs-shautoloader', plugins_url('scripts/shAutoloader.js', __FILE__), array('xs-shcore'), $xs_pluginVersion);

    wp_enqueue_script( 'jq', 'https://code.jquery.com/jquery-1.11.3.js', array(), $xs_pluginVersion);
    wp_enqueue_script( 'xs-brushtypes', plugins_url('brushTypes.js', __FILE__), array('jq'), $xs_pluginVersion, true);
    wp_localize_script( 'xs-brushtypes', 'MTBrushParams', array('baseUrl' => plugins_url('', __FILE__)) );

    wp_enqueue_style( 'xs-shcore-style', plugins_url('styles/shCore.css', __FILE__), array(), $xs_pluginVersion);
    $selectedTheme = $themes['Default'];
    foreach ($themes as $k => $v) {
        if ($options['theme']== $k) {
            $selectedTheme = $v;
        }
    }
    wp_enqueue_style( 'xs-theme-style', plugins_url("styles/$selectedTheme", __FILE__), array('xs-shcore-style'), $xs_pluginVersion);
    wp_enqueue_style( 'xs-style', plugins_url("styles/xs-style.css", __FILE__), array('xs-theme-style'), $xs_pluginVersion);
}

add_action( 'wp_enqueue_scripts', 'xssh_enqueue_scripts' );

function xs_register_shortcodes(){
    add_shortcode('xscode', 'xscode_shortcode');
    add_shortcode('xqlite', 'xqlite_shortcode');
}
add_action('init', 'xs_register_shortcodes');


/* Add output_log function for debugging */
if (!function_exists('output_log')) {
    function output_log($log)
    {
        if (true === WP_DEBUG) {
            if (is_array($log) || is_object($log)) {
                error_log(print_r($log, true));
            } else {
                error_log($log);
            }
        }
    }
}

// 編輯流程:
//  用<pre>把程式碼包起來
//  save時更改內容, 把<pre>的class貼上去
//
function xs_beautify($content) {
    // output_log('xxxxxx' . $content . 'xxxxxx');
    $content = str_replace( "<pre>", "<pre class='brush:xs'>", $content );
    return $content;
}

//add_filter('the_content', 'xs_beautify', 10);
add_filter( 'content_save_pre', 'xs_beautify', 10, 1 );

// Disable wptexturize (only within shortcode): so that double quote char remains double quote char !!
//
add_filter('no_texturize_shortcodes', 'shortcodes_to_exempt_from_wptexturize' );
function shortcodes_to_exempt_from_wptexturize( $shortcodes ) {
    $shortcodes[] = 'xscode';
    return $shortcodes;
}


function xscode_shortcode($atts, $content = null) {
    // <pre class="brush:xs"> $content </pre>
    //
    $breaks = array("</p>");
    $content = str_ireplace($breaks, "\r\n", $content);
    $content = strip_tags($content);

    $return_string = '<pre class="brush:xs">'.$content.'</pre>';
    return $return_string;
}

function xqlite_shortcode($atts, $content = null) {
    $return_string =
'<a href="http://www.xq.com.tw/?utm_campaign=xstrader&utm_medium=banner&utm_source=xstrader.net00">' .
'<img style="display:block" src="http://goo.gl/u8BPAh" width="980">' .
'</a>';
    return $return_string;
}

