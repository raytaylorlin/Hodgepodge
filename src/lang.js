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