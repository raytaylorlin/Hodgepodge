var Hodgepodge = (function(hp) {
    //array包
    var hp_browser = hp.browser = hp.browser || {};

    hp_browser.getBrowserIdentity = function() {
        return navigator.appName + ' ' + navigator.appVersion;
    };

    return hp;
}(Hodgepodge || {}));