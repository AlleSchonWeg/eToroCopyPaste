// ==UserScript==
// @name         eToro Copy & Paste
// @namespace    Disable Etoro C&P Restrictions
// @version      1.2
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
waitForKeyElements("body > ui-layout > div > div > div.main-app-view.ng-scope > div > div.w-portfolio-table.portfolio-open-trades-inner.head > div > div > div.e-btn.light.i-ptc-action.edit-extended.dropdown-menu.ng-scope.ng-isolate-scope",settingsVisible);

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
function settingsVisible(jNode) {
    angular.element("body > ui-layout > div > div > div.main-app-view.ng-scope > div > div.w-portfolio-table.portfolio-open-trades-inner.head > div > div > div.e-btn.light.i-ptc-action.edit-extended.dropdown-menu.ng-scope.ng-isolate-scope").click();
    angular.element("body > ui-layout > div > div > div.main-app-view.ng-scope > div > div.w-portfolio-table.portfolio-open-trades-inner.head > div > div > div.e-btn.light.i-ptc-action.edit-extended.dropdown-menu.ng-scope.ng-isolate-scope.open > div > div > div.drop-select-box-option.pointer.one-click-trading.ng-scope > span").click();
    angular.element("body > ui-layout > div > div > div.main-app-view.ng-scope > div > div.w-portfolio-table.portfolio-open-trades-inner.head > div > div > div.e-btn.light.i-ptc-action.edit-extended.dropdown-menu.ng-scope.ng-isolate-scope.open").click();
    
}
