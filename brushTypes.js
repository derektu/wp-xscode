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

function clearSelection() {
    if (window.getSelection) {
        if (window.getSelection().empty) {  // Chrome
            window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges) {  // Firefox
            window.getSelection().removeAllRanges();
        }
    } else if (document.selection) {  // IE?
        document.selection.empty();
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
            var success = false;
            try {
                // copy text
                success = document.execCommand('copy');
            }
            catch (err) {
                success = false;
            }

            if (success) {
                clearSelection();
                alert('程式碼已經成功複製到剪貼簿。');
            }
            else {
                alert('請按Ctrl+C來複製程式碼。');
            }
        }
    }
};

SyntaxHighlighter.all();
