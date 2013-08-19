$(document).ready(function() { 
    $('#pageTypesBlurb').hover(function() {
        highlightFiles(["indexHtml", "layoutsListHtml", "layoutsPageHtml", "layoutsPostHtml"]);
    }, function() { 
        unhighlightFiles(["indexHtml", "layoutsListHtml", "layoutsPageHtml", "layoutsPostHtml"]) 
    });
    $('#includeDefaultBlurb').hover(function() {
        highlightFiles(["includesDefaultHtml"]);
    }, function() { 
        unhighlightFiles(["includesDefaultHtml"]) 
    });
    $('#contentBlurb').hover(function() {
        highlightFiles(["indexHtml", "layoutsListHtml", "layoutsPageHtml", "layoutsPostHtml", "includesDefaultHtml"]);
    }, function() { 
        unhighlightFiles(["indexHtml", "layoutsListHtml", "layoutsPageHtml", "layoutsPostHtml", "includesDefaultHtml"]) 
    });
    $('#mockupsBlurb').hover(function() {
        highlightFiles(["mockups"]);
    }, function() { 
        unhighlightFiles(["mockups"]) 
    });
    $('#mogBlurb').hover(function() {
        highlightFiles(["mog"]);
    }, function() { 
        unhighlightFiles(["mog"]) 
    });
    $('#stylingCounterpartsBlurb').hover(function() {
        highlightFiles(["mogIndexHtml", "mogListHtml", "mogPageHtml", "mogPostHtml"]);
    }, function() { 
        unhighlightFiles(["mogIndexHtml", "mogListHtml", "mogPageHtml", "mogPostHtml"]) 
    });
    $('#mogDefaultBlurb').hover(function() {
        highlightFiles(["mogDefaultHtml"]);
    }, function() { 
        unhighlightFiles(["mogDefaultHtml"]) 
    });
    $('.mainPagesMention').hover(function() {
        highlightFilesLight(["indexHtml", "layoutsListHtml", "layoutsPageHtml", "layoutsPostHtml"]);
    }, function() { 
        unhighlightFiles(["indexHtml", "layoutsListHtml", "layoutsPageHtml", "layoutsPostHtml"]) 
    });
    $('.themedMainPagesMention').hover(function() {
        highlightFilesLight(["mogIndexHtml", "mogListHtml", "mogPageHtml", "mogPostHtml"]);
    }, function() { 
        unhighlightFiles(["mogIndexHtml", "mogListHtml", "mogPageHtml", "mogPostHtml"]) 
    });
    $('.includesDefaultMention').hover(function() {
        highlightFilesLight(["includesDefaultHtml"]);
    }, function() { 
        unhighlightFiles(["includesDefaultHtml"]) 
    });
    $('#mainCtsBlurb').hover(function() {
        highlightFiles(["indexCts", "listCts", "pageCts", "postCts"]);
    }, function() { 
        unhighlightFiles(["indexCts", "listCts", "pageCts", "postCts"]) 
    });
    $('#defaultCtsBlurb').hover(function() {
        highlightFiles(["defaultCts"]);
    }, function() { 
        unhighlightFiles(["defaultCts"]) 
    });
    $('.themedDefaultMention').hover(function() {
        highlightFilesLight(["mogDefaultHtml"]);
    }, function() { 
        unhighlightFiles(["mogDefaultHtml"]) 
    });
    $('#mogCtsBlurb').hover(function() {
        highlightFiles(["mogCts"]);
    }, function() { 
        unhighlightFiles(["mogCts"]) 
    });
    $('#listGenBlurb').hover(function() {
        highlightFiles(["listGen"]);
    }, function() { 
        unhighlightFiles(["listGen"]) 
    });
    
    
    var unhighlightFiles = function(files) {
        for (var i = 0; i<files.length; i++) {
            $('#'+files[i]).css('background-color','transparent');
        }
    }
    
    var highlightFiles = function(files) {
        for (var i = 0; i<files.length; i++) {
            $('#'+files[i]).css('background-color','rgba(0, 85, 128, .5)');
        }
    }
    var highlightFilesLight = function(files) {
        for (var i = 0; i<files.length; i++) {
            $('#'+files[i]).css('background-color','rgba(0, 85, 128, .2)');
        }
    }
    
    $('.fileListing a').tooltip({"placement":"left"});
});