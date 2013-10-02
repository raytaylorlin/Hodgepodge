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
