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
