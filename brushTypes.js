SyntaxHighlighter.autoloader(
  'xs                     ' + MTBrushParams.baseUrl + '/shBrushXSScript.js'
);


// disable double click to select
SyntaxHighlighter.defaults['quick-code'] = false;

// add toolbar related code
//
function selectElementText(el, win) {
    win = win || window;
    var doc = win.document, sel, range;
    if (win.getSelection && doc.createRange) {
        sel = win.getSelection();
        range = doc.createRange();
        range.selectNodeContents(el);
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (doc.body.createTextRange) {
        range = doc.body.createTextRange();
        range.moveToElementText(el);
        range.select();
    }
}

SyntaxHighlighter.config["strings"]["copy"] = "複製程式碼";
SyntaxHighlighter.toolbar["items"]["list"] = ['copy'];
SyntaxHighlighter.toolbar["items"]["copy"] = {
    execute: function(highlighter) {
        var div = $("#highlighter_" + highlighter.id);
        var container = div.find(".container");
        if (container) {
            selectElementText(container[0]);
        }
    }
};

SyntaxHighlighter.all();
