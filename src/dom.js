var Hodgepodge = (function(hp) {
    //dom包
    var hp_dom = hp.dom = hp.dom || {};

    /**
     * 将一个DOM元素垂直居中
     * @param  {HTMLElement} element 要垂直居中的DOM元素
     */
    hp_dom.layerCenterH = function(element) {
        var windowW, elementW, windowOffsetW, ieBody, elementLeft;
        windowW = window.innerWidth || document.body.clientWidth;
        elementW = element.offsetWidth;
        windowOffsetW = (Math.round(windowW / 2)) - (Math.round(elementW / 2));
        ieBody = (document.compatMode && document.compatMode != 'BackCompat') ?
            document.documentElement : document.body;
        elementLeft = document.all ? ieBody.scrollLeft : window.pageXOffset;
        element.style.left = windowOffsetW + elementLeft + 'px';
    };

    /**
     * 将一个DOM元素垂直居中
     * @param  {HTMLElement} element 要垂直居中的DOM元素
     */
    hp_dom.layerCenterV = function(element) {
        var windowH, elementH, windowOffsetH, ieBody, elementTop;
        windowH = window.innerHeight || document.body.clientHeight;
        elementH = element.offsetHeight;
        windowOffsetH = (Math.round(windowH / 2)) - (Math.round(elementH / 2));
        ieBody = (document.compatMode && document.compatMode != 'BackCompat') ?
            document.documentElement : document.body;
        elementTop = document.all ? ieBody.scrollTop : window.pageYOffset;
        element.style.top = windowOffsetH + elementTop + 'px';
    };

    

    return hp;
}(Hodgepodge || {}));