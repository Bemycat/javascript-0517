var ouli1 = document.querySelector('#uli1');
ouli1.onclick = function(){
   document.querySelector('.van-overlay').style.display = 'block'
   document.querySelector('.van-popup').style.display = 'block'
   document.querySelector('body').className = 'van-overflow-hidden'
}

document.querySelector('#van-action-sheet__close').onclick = function(){
    document.querySelector('.van-popup').style.display = 'none'
    document.querySelector('.van-overlay').style.display = 'none'
    document.querySelector('body').className = ''
}

document.querySelector('.back').onclick = function(){
    window.location.href = 'personal1.html'
}