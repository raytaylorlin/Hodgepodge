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
        alert(props);
        return props;
    };

    return hp;
}(Hodgepodge || {}));