var Hodgepodge = (function(hp) {
    //storage包
    var hp_storage = hp.storage = hp.storage || {};

    /**
     * 设置cookie
     * @param {String} key cookie的键
     * @param {String} value cookie的值
     * @param {Date} expiry cookie的过期时间
     */
    hp_storage.setCookie = function(key, value, expiry) {
        if (typeof expiry === 'Date') {
            expiry = expiry.toGMTString();
        } else if (expiry === undefined) {
            expiry = new Date();
            expiry.setDate(expiry.getDate() + 1);
            expiry = expiry.toGMTString();
        }
        document.cookie = key + '=' + escape(value) + ';expires=' + expiry;
    };

    /**
     * 获取cookie
     * @param {String} key cookie的键
     * @return {String} cookie的值
     */
    hp_storage.getCookie = function(key) {
        var cookie = document.cookie,
            index = cookie.indexOf(key + '='),
            endIndex;
        if (index === -1) {
            return null;
        }
        index = cookie.indexOf('=', index) + 1;
        endIndex = cookie.indexOf(';', index);
        if (endIndex === -1) {
            endIndex = cookie.length;
        }
        return unescape(cookie.substring(index, endIndex));
    };

    /**
     * 删除指定的cookie值
     * @param  {String}} key 要删除的cookie的键
     */
    hp_storage.deleteCookie = function(key) {
        if (this.getCookie(key)) {
            this.setCookie(key, null, 'Thu, 01-Jan-1970 00:00:01 GMT');
        }
    };

    return hp;
}(Hodgepodge || {}));