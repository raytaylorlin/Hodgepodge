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
