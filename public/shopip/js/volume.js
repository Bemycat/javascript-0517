var oorder_item = document.querySelector('.order-item');
var oorder_text = document.querySelector('.order-text');
var oorder_menu = document.querySelector('.order-menu');
var oscreen_btn = document.querySelector('.screen-btn');
var oorder_icon = document.querySelector('.order-icon');
var off = true;
oorder_text.onclick = function () {
    if (off) {
        oorder_menu.style.display = 'block'
    } else {
        oorder_menu.style.display = 'none'
    }
    off = !off;

}
oorder_icon.onclick = function () {
    if (off) {
        oorder_menu.style.display = 'block'
        URL: '../images/images/home/goods/down.png'
    } else {
        oorder_menu.style.display = 'none'
    }
    off = !off;

}
oscreen_btn.onclick = function () {
    if (off) {
        document.querySelector('.screen').className = 'screen move'
        document.querySelector('.mask').style.display = 'block'
    } else {
        document.querySelector('.screen').className = 'screen unmove'
    }
    off = !off;
}
document.querySelector('.mask').onclick = function () {
    if (off) {
        document.querySelector('.screen').style.display = 'none'
        document.querySelector('.mask').style.display = 'none'
    } else {
        document.querySelector('.screen').style.display = 'block'
        document.querySelector('.mask').style.display = 'block'
    }
    off = !off;
}