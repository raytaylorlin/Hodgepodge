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

        this.LEVEL_TRACE = 1;
        this.LEVEL_DEBUG = 2;
        this.LEVEL_INFO = 3;
        this.LEVEL_WARN = 4;
        this.LEVEL_ERROR = 5;
        this.LEVEL_FATEL = 6;

        this.LEVEL_TRACE_COLOR = 'a0a000';
        this.LEVEL_DEBUG_COLOR = '64c864';
        this.LEVEL_INFO_COLOR = '000000';
        this.LEVEL_WARN_COLOR = '0000ff';
        this.LEVEL_ERROR_COLOR = 'ff8c00';
        this.LEVEL_FATEL_COLOR = 'ff0000';
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
     * 显示跟踪级别的日志
     * @param  {String} message 日志内容
     */
    hp_debug.DivLogger.prototype.trace = function(message) {
        if (this.shouldBeLogged(this.logLevel) && this.targetDiv) {
            this.targetDiv.innerHTML +=
                "<div style='color:#" + this.LEVEL_TRACE_COLOR + ";'>" +
                "[TRACE] " + message + "</div>";
        }
    };

    return hp;
}(Hodgepodge || {}));