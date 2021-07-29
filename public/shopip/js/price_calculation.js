/* 导航 */
var ocart_back = document.querySelector('.cart_back');
ocart_back.onclick = function () {
    window.location.href = "details.html";
}

var odel = document.querySelectorAll('.del');
var cart_list = document.querySelectorAll('.cart-list');
/* console.log(cart_list);
console.log(odel); */
for (var k = 0; k < odel.length; k++) {
    odel[k].index = k
    odel[k].onclick = function () {
        for (var i = 0; i < cart_list.length; i++) {
            cart_list[this.index].remove(); //删除全部
            document.getElementById('money').innerHTML = 0;
        }
    }

}

document.querySelector('.settlement').onclick = function () {
    window.location.href = 'Confirm_order.html'
}


/* 底部 */
document.querySelector('.home_page').onclick = function () {
    window.location.href = "shopipng1.html";
}
document.querySelector('.Shopping_Cart').onclick = function () {
    window.location.href = "Shopping_Cart.html";
}
document.querySelector('.Personal_Center').onclick = function () {
    window.location.href = "personal1.html";
}