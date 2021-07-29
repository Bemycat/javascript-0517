var onav_header = document.getElementsByClassName('nav_header')[0];
window.onscroll = function () {
    var getScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (getScrollTop > 100) {
        onav_header.className = 'drop_down nav_header';
    } else {
        onav_header.className = 'nav_header';
    }
}