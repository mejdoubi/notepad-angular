function wrapText(elementID, openTag, closeTag) { 
    var textArea = $('#' + elementID); 
    var len = textArea.val().length; 
    var start = textArea[0].selectionStart; 
    var end = textArea[0].selectionEnd; 
    var selectedText = textArea.val().substring(start, end); 
    var replacement = openTag + selectedText + closeTag; 
    textArea.val(textArea.val().substring(0, start) + replacement + textArea.val().substring(end, len)); 
} 

$('#tag').click(function() { 
    wrapText("content", "<tag>", "</tag>"); 
});