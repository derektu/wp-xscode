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
    wp_enqueue_script( 'xs', plugins_url('scripts/xsHighlights.js', __FILE__), array(), $xs_pluginVersion);
    wp_enqueue_script( 'xs-shcore', plugins_url('scripts/shCore.js', __FILE__), array('xs'), $xs_pluginVersion);
    wp_enqueue_script( 'xs-shautoloader', plugins_url('scripts/shAutoloader.js', __FILE__), array('xs-shcore'), $xs_pluginVersion);

    wp_enqueue_script( 'xs-brushtypes', plugins_url('brushTypes.js', __FILE__), array(), $xs_pluginVersion, true);
    wp_localize_script( 'xs-brushtypes', 'MTBrushParams', array('baseUrl' => plugins_url('', __FILE__)) );

    wp_enqueue_style( 'xs-shcore-style', plugins_url('styles/shCore.css', __FILE__), array(), $xs_pluginVersion);
    $selectedTheme = $themes['Default'];
    foreach ($themes as $k => $v) {
        if ($options['theme']== $k) {
            $selectedTheme = $v;
        }
    }
    wp_enqueue_style( 'xs-theme-style', plugins_url("styles/$selectedTheme", __FILE__), array('xs-shcore-style'), $xs_pluginVersion);
}

add_action( 'wp_enqueue_scripts', 'xssh_enqueue_scripts' );


function xs_register_shortcodes(){
    add_shortcode('xscode', 'xscode_shortcode');
}
add_action('init', 'xs_register_shortcodes');

function xscode_shortcode($atts, $content = null) {
    // <pre class="brush:xs"> $content </pre>
    //
    $return_string = '<pre class="brush:xs">'.$content.'</pre>';
    return $return_string;
}

/*
add_action('admin_menu', 'mtsh_plugin_settings_page');
function mtsh_plugin_settings_page()
{
    add_options_page('Syntax Highlighter MT', 'Syntax Highlighter MT', 'manage_options', 'mtsh_plugin', 'mtsh_plugin_options_page');
}

function mtsh_plugin_options_page()
{
    ?>
<div>
    <h2>SyntaxHighlighter MT Options</h2>
    <form action="options.php" method="post">
        <?php settings_fields('mtsh_plugin_options'); ?>
        <?php do_settings_sections(__FILE__); ?>
        <br/>
        <input name="Submit" type="submit" value="<?php esc_attr_e('Save Changes'); ?>"/>
    </form>
    <br/>
    <hr/>
    For more information about this plugin, please see <a href="http://megatome.com/syntaxhighlighter">http://megatome.com/syntaxhighlighter</a><br/>
    For more information about the code this plugin is built upon, go to <a href="http://alexgorbatchev.com/wiki/SyntaxHighlighter">http://alexgorbatchev.com/wiki/SyntaxHighlighter</a>
</div>
<?php

}

add_action('admin_init', 'plugin_admin_init');
function plugin_admin_init()
{
    register_setting('mtsh_plugin_options', 'mtsh_plugin_options');
    add_settings_section('plugin_main', 'Highlighting Theme', 'mtsh_settings_theme', __FILE__);
    add_settings_field('theme', 'Theme', 'mtsh_settings_theme_dropdown', __FILE__, 'plugin_main');
}

function mtsh_settings_theme() {
    echo "<strong>Select the desired coloring theme for highlighting code. This will affect all highlighted code.</strong>";
}

function  mtsh_settings_theme_dropdown() {
	$options = get_option('mtsh_plugin_options');
	global $themes;
	echo "<select id='drop_down1' name='mtsh_plugin_options[theme]'>";
	foreach($themes as $k => $v) {
		$selected = ($options['theme']== $k) ? 'selected="selected"' : '';
		echo "<option value='$k' $selected>$k</option>";
	}
	echo "</select>";
}
?>
*/
