// ==UserScript==
// @name         eToro Copy & Paste
// @namespace    Disable Etoro C&P Restrictions
// @version      1.1
// @description  eToro Copy & Paste is a TamperMonkey script to enable copy & paste functionality to eToro
// @author       S99
// @match        https://www.etoro.com/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);
//Credits to: https://github.com/Shampra/myEtoro
waitForKeyElements("div.table-body.market",pageLoaded);
waitForKeyElements("div.user-head-content-ph",pageLoaded);
waitForKeyElements("portfolio-list-view",pageLoaded);
waitForKeyElements("div.portfolio-history-grid",pageLoaded);
waitForKeyElements("div.portfolio-table-view",pageLoaded);


function enableSelect() {
    $('body').css({
        '-moz-user-select': 'auto',
        '-webkit-user-select': 'auto',
        '-ms-user-select: all': 'auto',
        'user-select': 'auto'
    });
    $('a').each( function( index, element ){
        $(this).css({
            '-moz-user-select': 'auto',
            '-webkit-user-select': 'auto',
            '-ms-user-select: all': 'auto',
            'user-select': 'auto'
        });
    });
}
function pageLoaded(jNode) {
    enableSelect();
}
