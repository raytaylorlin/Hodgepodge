var Hodgepodge = (function(hp) {
    //browser包
    var hp_browser = hp.browser = hp.browser || {};

    /**
     * 获取浏览器的标识信息
     * @return {String} 浏览器的标识信息
     */
    hp_browser.getBrowserIdentity = function() {
        return navigator.appName + ' ' + navigator.appVersion;
    };

    return hp;
}(Hodgepodge || {}));
