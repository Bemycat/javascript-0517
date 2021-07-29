window.onload = function () {
  var osearch = document.querySelector('.search');
  var osearch_btn = document.querySelector('.search-btn');
  osearch.onclick = function () {
    document.querySelector('.search-component').style.display = 'block'
  }
  osearch_btn.onclick = function () {
    window.location.href = "volume.html";
  }

  var oclassify_wrap = document.querySelector('.classify-wrap');
  /* console.log(oclassify_wrap); */
  var aoclassify = oclassify_wrap.children[0];
  /* console.log(aoclassify); */
  var startY = 0;
  var centerY = 0;
  var maxDown = 50;
  var maxUp = -(aoclassify.offsetHeight - oclassify_wrap.offsetHeight + maxDown);
  var maxUpBounce = 0;
  var maxDownBounce = -(aoclassify.offsetHeight - oclassify_wrap.offsetHeight);

  aoclassify.addEventListener('touchstart', function (e) {
    startY = e.changedTouches[0].clientY;
  })

  aoclassify.addEventListener('touchmove', function (e) {
    aoclassify.style.transition = 'none';
    var dy = e.changedTouches[0].clientY - startY;
    var tempY = centerY + dy;
    if (tempY > maxDown) {
      tempY = maxDown;
    } else if (tempY < maxUp) {
      tempY = maxUp;
    }
    aoclassify.style.transform = 'translateY(' + tempY + 'px)';
  })
  aoclassify.addEventListener('touchend', function (e) {
    var dy = e.changedTouches[0].clientY - startY;
    centerY = centerY + dy;
    if (centerY > maxUpBounce) {
      centerY = maxUpBounce;
    } else if (centerY < maxDownBounce) {
      centerY = maxDownBounce;
    }
    aoclassify.style.transition = 'transform .5s';
    aoclassify.style.transform = 'translateY(' + centerY + 'px)';

  });

  var ogoods_content_div = document.querySelector('.goods-content-main');
  var agoods_content_div = ogoods_content_div.children[0];

  var startY = 0;
  var centerY = 0;
  var maxDown = 50;
  var maxUp = -(agoods_content_div.offsetHeight - ogoods_content_div.offsetHeight + maxDown);
  var maxUpBounce = 0;
  var maxDownBounce = -(agoods_content_div.offsetHeight - ogoods_content_div.offsetHeight);

  agoods_content_div.addEventListener('touchstart', function (ev) {
    startY = ev.changedTouches[0].clientY;
  })

  agoods_content_div.addEventListener('touchmove', function (ev) {
    agoods_content_div.style.transition = 'none';
    var dy = ev.changedTouches[0].clientY - startY;
    var tempY = centerY + dy;
    if (tempY > maxDown) {
      tempY = maxDown;
    } else if (tempY < maxUp) {
      tempY = maxUp;
    }
    agoods_content_div.style.transform = 'translateY(' + tempY + 'px)';
  })
  agoods_content_div.addEventListener('touchend', function (ev) {
    var dy = ev.changedTouches[0].clientY - startY;
    centerY = centerY + dy;
    if (centerY > maxUpBounce) {
      centerY = maxUpBounce;
    } else if (centerY < maxDownBounce) {
      centerY = maxDownBounce;
    }
    agoods_content_div.style.transition = 'transform .5s';
    agoods_content_div.style.transform = 'translateY(' + centerY + 'px)';
  })
  /* 右侧菜单潮流女装数据 */
  axios.get('http://vueshop.glbuys.com/api/home/category/show?token=1ec949a15fb709370f').then((res) => {
    console.log(res.data.data[0].goods);
    var ogoods_wrap = document.querySelectorAll('.goods-wrap');
    let str1 = ''
    let str2 = ''
    let str3 = ''
    let str4 = ''
    str1 = `
          <div class="classify-name">${res.data.data[0].title}</div>
          <div class="goods-items-wrap">
             <ul>
             <li><img src="${res.data.data[0].goods[0].image}" alt=""></li>
             <li>${res.data.data[0].goods[0].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[0].goods[1].image}" alt=""></li>
             <li>${res.data.data[0].goods[1].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[0].goods[2].image}" alt=""></li>
             <li>${res.data.data[0].goods[2].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[0].goods[3].image}" alt=""></li>
             <li>${res.data.data[0].goods[3].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[0].goods[4].image}" alt=""></li>
             <li>${res.data.data[0].goods[4].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[0].goods[5].image}" alt=""></li>
             <li>${res.data.data[0].goods[5].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[0].goods[6].image}" alt=""></li>
             <li>${res.data.data[0].goods[6].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[0].goods[7].image}" alt=""></li>
             <li>${res.data.data[0].goods[7].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[0].goods[8].image}" alt=""></li>
             <li>${res.data.data[0].goods[8].title}</li>
             </ul>
          </div>
          `
    str2 = `
          <div class="classify-name">${res.data.data[1].title}</div>
          <div class="goods-items-wrap">
          <ul>
             <li><img src="${res.data.data[1].goods[0].image}" alt=""></li>
             <li>${res.data.data[1].goods[0].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[1].goods[1].image}" alt=""></li>
             <li>${res.data.data[1].goods[1].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[1].goods[2].image}" alt=""></li>
             <li>${res.data.data[1].goods[2].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[1].goods[3].image}" alt=""></li>
             <li>${res.data.data[1].goods[3].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[1].goods[4].image}" alt=""></li>
             <li>${res.data.data[1].goods[4].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[1].goods[5].image}" alt=""></li>
             <li>${res.data.data[1].goods[5].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[1].goods[6].image}" alt=""></li>
             <li>${res.data.data[1].goods[6].title}</li>
             </ul>
       </div>
          `
    str3 = `
          <div class="classify-name">${res.data.data[2].title}</div>
          <div class="goods-items-wrap">
          <ul>
             <li><img src="${res.data.data[2].goods[0].image}" alt=""></li>
             <li>${res.data.data[2].goods[0].title}</li>
            </ul>
             <ul>
             <li><img src="${res.data.data[2].goods[1].image}" alt=""></li>
             <li>${res.data.data[2].goods[1].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[2].goods[2].image}" alt=""></li>
             <li>${res.data.data[2].goods[2].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[2].goods[3].image}" alt=""></li>
             <li>${res.data.data[2].goods[3].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[2].goods[4].image}" alt=""></li>
             <li>${res.data.data[2].goods[4].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[2].goods[5].image}" alt=""></li>
             <li>${res.data.data[2].goods[5].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[2].goods[6].image}" alt=""></li>
             <li>${res.data.data[2].goods[6].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[2].goods[7].image}" alt=""></li>
             <li>${res.data.data[2].goods[7].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[2].goods[8].image}" alt=""></li>
             <li>${res.data.data[2].goods[8].title}</li>
             </ul>
       </div>
          `
    str4 = `
          <div class="classify-name">${res.data.data[3].title}</div>
          <div class="goods-items-wrap">
          <ul>
             <li><img src="${res.data.data[3].goods[0].image}" alt=""></li>
             <li>${res.data.data[3].goods[0].title}</li>
            </ul>
             <ul>
             <li><img src="${res.data.data[3].goods[1].image}" alt=""></li>
             <li>${res.data.data[3].goods[1].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[3].goods[2].image}" alt=""></li>
             <li>${res.data.data[3].goods[2].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[3].goods[3].image}" alt=""></li>
             <li>${res.data.data[3].goods[3].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[3].goods[4].image}" alt=""></li>
             <li>${res.data.data[3].goods[4].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[3].goods[5].image}" alt=""></li>
             <li>${res.data.data[3].goods[5].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[3].goods[6].image}" alt=""></li>
             <li>${res.data.data[3].goods[6].title}</li>
             </ul>
             <ul>
             <li><img src="${res.data.data[3].goods[7].image}" alt=""></li>
             <li>${res.data.data[3].goods[7].title}</li>
             </ul>
       </div>
          `
    ogoods_wrap[0].innerHTML = str1
    ogoods_wrap[1].innerHTML = str2
    ogoods_wrap[2].innerHTML = str3
    ogoods_wrap[3].innerHTML = str4

    
    var goods_items_wrap = document.querySelector('.goods-items-wrap');
    var agoods = goods_items_wrap.children;
    for (var i = 0; i < agoods.length; i++) {
      agoods[i].onclick = function () {
        window.localStorage.setItem('gid',res.data.data[0].goods)
        window.location.href = "details.html";
      }
    }

  })

}