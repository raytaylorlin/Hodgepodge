var Hodgepodge = (function(hp) {
    //array包
    var hp_array = hp.array = hp.array || {};

    /**
     * 将一个数组的内容复制到另一个数组
     * @param  {Array} srcArray 源数组
     * @param  {Array} desArray 目标数组
     * @return {Array}          复制了内容的数组
     */
    hp_array.copyArray = function(srcArray, desArray) {
        var i;
        for (i = 0; i < srcArray.length; i++) {
            desArray.push(srcArray[i]);
        }
        return desArray;
    };

    /**
     * 在一个数组中查找指定的元素
     * @param  {Array} array 要查找元素的数组
     * @param  {Object} value 指定的元素
     * @return {Integer}       元素在数组中的索引，查找不到则为-1
     */
    hp_array.findInArray = function(array, value) {
        var i;
        for (i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return i;
            }
        }
        return -1;
    };

    /**
     * 计算一个数值数组中所有元素的平均值
     * @param  {Array} array 求平均的数值数组
     * @return {Number}       所有元素的平均值
     */
    hp_array.arrayAverage = function(array) {
        var accumulator = 0,
            i;
        for (i = 0; i < array.length; i++) {
            accumulator += array[i];
        }
        return accumulator / array.length;
    };

    return hp;
}(Hodgepodge || {}));

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

var Hodgepodge = (function(hp) {
    //datetime包
    var hp_datetime = hp.datetime = hp.datetime || {};

    /**
     * 获取给定年份和月份的天数
     * @param  {Integer} year  年份
     * @param  {Integer} month 月份
     * @return {Integer}       天数
     */
    hp_datetime.getNumberDaysInMonth = function(year, month) {
        month = month - 1;
        var leapYear = this.isLeapYear(year) ? 1 : 0;
        if (month === 3 || month === 5 || month === 8 || month === 10) {
            return 30;
        } else if (month === 1) {
            return 28 + leapYear;
        } else {
            return 31;
        }
    };

    /**
     * 判断给定年份是否为闰年
     * @param  {Integer}  year 给定的年份
     * @return {Boolean}      是否为闰年
     */
    hp_datetime.isLeapYear = function(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };

    return hp;
}(Hodgepodge || {}));

var Hodgepodge = (function(hp) {
    //debug包
    var hp_debug = hp.debug = hp.debug || {};

    /**
     * 列出一个对象的所有属性
     * @param  {Object} obj 要查看属性的对象
     * @return {String} 对象的属性和值
     */
    hp_debug.enumProps = function(obj) {
        var props = '',
            i;
        for (i in obj) {
            props += (i + '=' + obj[i] + '\n');
        }
        console.log(props);
        return props;
    };

    /**
     * Div日志记录类。该类的实例提供日志记录的功能，并显示在特定的div上
     * @param {HTMLElement} targetDiv 要绑定的显示日志的div
     */
    hp_debug.DivLogger = function(targetDiv) {
        this.targetDiv = targetDiv;
        this.logLevel = 3;
    };

    hp_debug.DivLogger.prototype.LOG_LEVEL_MAP = {
        trace: {
            level: 1,
            color: '#27ae60',
            tag: '[TRACE]'
        },
        debug: {
            level: 2,
            color: '#34495e',
            tag: '[DEBUG]'
        },
        info: {
            level: 3,
            color: '#3498db',
            tag: '[INFO]'
        },
        warn: {
            level: 4,
            color: '#f1c40f',
            tag: '[WARN]'
        },
        error: {
            level: 5,
            color: '#e67e22',
            tag: '[ERROR]'
        },
        fatel: {
            level: 6,
            color: '#c0392b',
            tag: '[FATEL]'
        },
    };

    /**
     * 设置日志级别
     * @param {Integer} level 日志级别，大于等于该级别的日志记录将被显示
     */
    hp_debug.DivLogger.prototype.setLevel = function(level) {
        this.logLevel = level;
    };

    /**
     * 设置要绑定的显示日志的div
     * @param {HTMLELement} target 要绑定的显示日志的div
     */
    hp_debug.DivLogger.prototype.setTargetDiv = function(target) {
        this.targetDiv = target;
        this.targetDiv.innerHTML = '';
    };

    /**
     * 判断给定的日志级别时候应该被显示
     * @param  {Integer} level 日志级别
     * @return {Boolean} 给定的日志级别时候应该被显示
     */
    hp_debug.DivLogger.prototype.shouldBeLogged = function(level) {
        return level >= this.logLevel;
    };

    /**
     * 显示各种级别的日志
     * @param  {String} message 日志内容
     */
    hp_debug.DivLogger.prototype.trace = logFuncFacotry('trace');
    hp_debug.DivLogger.prototype.debug = logFuncFacotry('debug');
    hp_debug.DivLogger.prototype.info = logFuncFacotry('info');
    hp_debug.DivLogger.prototype.warn = logFuncFacotry('warn');
    hp_debug.DivLogger.prototype.error = logFuncFacotry('error');
    hp_debug.DivLogger.prototype.fatel = logFuncFacotry('fatel');

    //显示级别日志的方法工厂
    function logFuncFacotry(logLevelName) {
        var logLevelInfo = hp_debug.DivLogger.prototype.LOG_LEVEL_MAP[logLevelName];
        return function(message) {
            if (this.shouldBeLogged(logLevelInfo.level) && this.targetDiv) {
                this.targetDiv.innerHTML +=
                    "<div style='color:" + logLevelInfo.color + ";'>" +
                    logLevelInfo.tag + " " + message + "</div>";
            }
        };
    }

    return hp;
}(Hodgepodge || {}));

var Hodgepodge = (function(hp) {
    //lang包
    var hp_lang = hp.lang = hp.lang || {};

    /**
     * 将一个对象的属性复制到另一个对象
     * @param {Object} srcObj 要复制的对象
     * @param {Object} destObj 目标对象
     * @param {Boolean} isOverride 是否覆盖目标对象的属性
     */
    hp_lang.copyProperties = function(srcObj, destObj, isOverride) {
        var prop;
        for (prop in srcObj) {
            if (isOverride || !destObj[prop]) {
                destObj[prop] = srcObj[prop];
            }
        }
        return destObj;
    };

    return hp;
}(Hodgepodge || {}));

var Hodgepodge = (function(hp) {
    //math包
    var hp_math = hp.math = hp.math || {};

    /**
     * 获取一个范围内的随机数
     * @param {Integer} min 最小的数
     * @param {Integer} max 最大的数
     * @param {Integer} 指定范围内的随机数
     */
    hp_math.getRandomNumber = function(min, max) {
        if (min > max) {
            return 0;
        }
        return min + (max - min) * Math.random();
    };

    return hp;
}(Hodgepodge || {}));

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
