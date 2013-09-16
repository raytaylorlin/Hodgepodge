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
        return (year % 4 === 0 && !(year % 100 === 0)) || year % 400 === 0;
    };

    return hp;
}(Hodgepodge || {}));