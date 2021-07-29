window.onload = function () {
    var obotton_btn = document.querySelector(".botton-btn");
    var ototal = document.getElementsByClassName("total");
    console.log(obotton_btn);
    var abotton_btn = obotton_btn.children;
    console.log(abotton_btn);
    for (var i = 0; i < abotton_btn.length; i++) {
        abotton_btn[i].index = i;
        abotton_btn[i].onclick = function () {
            for (var j = 0; j < abotton_btn.length; j++) {
                abotton_btn[j].className = '';
                ototal[j].style.display = "none";
            }
            abotton_btn[j].className = "active11";
            ototal[this.index].style.display = "block";
        }
    }
}