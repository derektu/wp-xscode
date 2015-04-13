=== Plugin Name ===
Tags: xsscript, highlight, code, syntax, code highlight
Requires at least: 2.7.1
Tested up to: 4.1.0
License: LGPLv3/MIT
License URI: http://www.gnu.org/licenses/lgpl.html|http://opensource.org/licenses/MIT

Highlight XS script code via Syntax Highlighter tool from http://alexgorbatchev.com/wiki/SyntaxHighlighter

== Description ==

This plugin is used to syntax highlight XS script code.

== Installation ==

1. Unzip the `xscode` directory and upload it to `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress

== Advanced Usage ==

= Changing the appearance of code =
There are many options that can be applied inline to control how your formatted code is displayed. These are appended to the class definition after the brush declaration.

= auto-links =

*Enabled* by default. Disabling this turns off link detection in the highlighted section, making URLs non-clickable.

    <pre class="brush: java; auto-links: false">
    String link = "http://www.megatome.com";
    </pre>

= class-name =

Use this to specify one or more classes that should be applied to the generated highlight element.

= collapse =

*False* by default. Forces the highlighted code to be collapsed by default.

= first-line =

1 by default. Change the starting line number for a section of highlighted code.

    <pre class="brush: java; first-line: 20">
    String link = "http://www.megatome.com";
    </pre>

= gutter =

*Enabled* by default. Turn the line numbers on and off.

    <pre class="brush: java; gutter: false">
    String link = "http://www.megatome.com";
    </pre>

= highlight =

Specify one or more lines to be highlighted.

    <pre class="brush: java; highlight: [1, 3]">
    String link = "http://www.megatome.com";
    System.out.println("Hello World");
    System.out.println("Goodbye World");
    </pre>

= toolbar =

*Enabled* by default. Toggle the toolbar.

    <pre class="brush: java; toolbar: false">
    String link = "http://www.megatome.com";
    </pre>

= title =

Allows a title to be set for a block of code. This is not in the class, but in the `<pre/>` or `<script/>` tags.

    <pre class="brush: java" title="Here is some Java">
    String link = "http://www.megatome.com";
    </pre>

Take a look at [http://alexgorbatchev.com/wiki/SyntaxHighlighter](http://alexgorbatchev.com/wiki/SyntaxHighlighter) for the documentation on using the Syntax Highlighter tool.

== Frequently Asked Questions ==

= Highlighting code =
The basic usage is: `<pre class="brush:brush_name">...code...</pre>` where `brush_name` is one of the available brushes.

== Changelog ==

= 1.0.0 =
* Initial Version

