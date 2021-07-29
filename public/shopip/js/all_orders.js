document.querySelector('.back').onclick = function () {
    window.location.href = 'personal1.html'
}

var otags_wrap = document.querySelector('.tags-wrap');
var otags = otags_wrap.children;
console.log(otags);
for (var i = 0; i < otags.length; i++) {
    otags[i].index = i;
    otags[i].onclick = function () {
        for (var j = 0; j < otags.length; j++) {
            otags[j].className = 'tags';
        }
        this.className = 'tags active';
        document.querySelector('.load').style.display = 'block'
        setTimeout(function () {
            document.querySelector('.load').style.display = 'none'
        }, 100);
    }

}