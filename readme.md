## Description

This plugin is used to syntax highlight XS script code.
The code is modified from [https://wordpress.org/plugins/syntax-highlighter-mt/](Syntax Highlighter MT plugin).

## Installation

### Recommended Method

1. Install the plugin from with Wordpress from "Plugins->Add New"

### Alternate Method

1. Unzip the `xscode` directory and upload it to `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress

## Usage

### Highlighting XS code
The basic usage is: `<pre class="brush:xs">...code...</pre>`.

### Changing the appearance of code
There are many options that can be applied inline to control how your formatted code is displayed. These are appended to the class definition after the brush declaration.

#### `auto-links`

*Enabled* by default. Disabling this turns off link detection in the highlighted section, making URLs non-clickable.

    <pre class="brush: java; auto-links: false">
    String link = "http://www.megatome.com";
    </pre>

#### `class-name`

Use this to specify one or more classes that should be applied to the generated highlight element.

#### `collapse`

*False* by default. Forces the highlighted code to be collapsed by default.

#### `first-line`

1 by default. Change the starting line number for a section of highlighted code.

    <pre class="brush: java; first-line: 20">
    String link = "http://www.megatome.com";
    </pre>

#### `gutter`

*Enabled* by default. Turn the line numbers on and off.

    <pre class="brush: java; gutter: false">
    String link = "http://www.megatome.com";
    </pre>

#### `highlight`

Specify one or more lines to be highlighted.

    <pre class="brush: java; highlight: [1, 3]">
    String link = "http://www.megatome.com";
    System.out.println("Hello World");
    System.out.println("Goodbye World");
    </pre>

#### `toolbar`

*Enabled* by default. Toggle the toolbar.

    <pre class="brush: java; toolbar: false">
    String link = "http://www.megatome.com";
    </pre>

#### `title`

Allows a title to be set for a block of code. This is not in the class, but in the `<pre/>` or `<script/>` tags.

    <pre class="brush: java" title="Here is some Java">
    String link = "http://www.megatome.com";
    </pre>

Take a look at [http://alexgorbatchev.com/wiki/SyntaxHighlighter](http://alexgorbatchev.com/wiki/SyntaxHighlighter) for the documentation on using the Syntax Highlighter tool.

