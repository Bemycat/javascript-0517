// const { default: axios } = require("axios");

var ocart = document.querySelector('.cart');
var cart_panel = document.querySelector('.cart-panel');
var oclose = document.querySelector('.close');
ocart.onclick = function () {
    cart_panel.style.display = 'block';
    document.querySelector('.mask').style.display = 'block';
    cart_panel.className = 'cart-panel up'
}

oclose.onclick = function () {
    cart_panel.style.display = 'none';
    document.querySelector('.mask').style.display = 'none';
    cart_panel.className = 'cart-panel down'
}

document.querySelector('.fav').onclick = function () {
    document.querySelector('.van-toast').style.display = 'block'
    setTimeout(function(){
        document.querySelector('.van-toast').style.display = 'none';
    },2000);
}

var otab_wrap = document.querySelector('.tab-wrap');
var osub_page = document.querySelectorAll('.sub-page');
var atab_wrap1 = otab_wrap.children;
/* console.log(atab_wrap1.length); */
for (var i = 0; i < atab_wrap1.length; i++) {
    atab_wrap1[i].index = i;
    atab_wrap1[i].onclick = function () {
        for (var j = 0; j < atab_wrap1.length; j++) {
            atab_wrap1[j].className = '';
            osub_page[j].style.display = "none";
        }
        this.className = "active";
        osub_page[this.index].style.display = "block";
    }
}


/* 颜色 尺寸 */
/* var oval_wrap1 = document.querySelector('.val-wrap');
var oval = oval_wrap1.children;
console.log(oval.length);
var off = true;
for (var i = 0; i < oval.length; i++) {
    oval[i].index = i;
    oval[i].onclick = function () {
        for (var j = 0; j < oval.length; j++) {
            oval[j].className = 'val';
        }
        this.className = "active val";
    }
} */
/* document.querySelector('#val').onclick = function () {
    document.querySelector('#val').className = 'val active';
} */
/* document.querySelector('#cart-icon').onclick = function () {
    window.location.href = "Shopping_Cart.html";
} */

var odec = document.querySelector('.dec');
var oinc = document.querySelector('.inc');
var otel = document.querySelector('.tel');
var i = 1;
odec.onclick = function () {
    i--;
    if (i < 1) {
        i = 1;
    }
    otel.value = i;
}

oinc.onclick = function () {
    i++
    otel.value = i;
}



