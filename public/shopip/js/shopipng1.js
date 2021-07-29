
document.querySelector('.nav_three').onclick = function(){
    window.location.href = 'member_login.html'
}

var goods_row_1 = document.getElementsByClassName('goods-row-1');
var goods_row_2 = document.getElementsByClassName('goods-row-2');
axios.get('/string2').then((res) => {
    /* console.log(res.data); */
    mes1 = res.data.list.data[0].items;
    mes2 = res.data.list.data[1].items
    mes3 = res.data.list.data[2].items
    let str1 = ''
    let str2 = ''
    let str3 = ''
    let str4 = ''
    let str5 = ''
    let str6 = ''
    str1 = `
     <div class="goods-column good">
         <div class="goods-title">
             ${mes1[0].title}
         </div>
         <div class="goods-tip">精品打折</div>
         <div class="goods-price bg-color-0">${mes1[0].price}元</div>
         <div class="goods-image">
             <img src="${mes1[0].image}" alt="" />
         </div>
     </div>
     <div class="goods-column">
         <div class="goods-list good">
             <div class="goods-list-title">
             ${mes1[1].title}
             </div>
             <div class="goods-list-tip">品质精挑</div>
             <div class="goods-list-image">
                 <img src="${mes1[1].image}" alt="" />
             </div>
         </div>
         <div class="goods-list good">
             <div class="goods-list-title">
             ${mes1[2].title}
             </div>
             <div class="goods-list-tip">品质精挑</div>
             <div class="goods-list-image">
                 <img src="${mes1[2].image}" alt="" />
             </div>
         </div>
     </div>
     `
    for (i = 3; i < mes1.length; i++) {
        str2 += `
         <div class="goods-list good">
             <div class="goods-title">
                 ${mes1[i].title}
             </div>
             <div class="goods-image">
                 <img src="${mes1[i].image}" alt="" />
                 <div class="price">￥${mes1[i].price}</div>
                 <div class="price line">￥576</div>
             </div>
         </div>
         `
    }
    for (i = 0; i < 2; i++) {
        str3 += `
         <div class="goods-column-2 good1">
             <div class="goods-title">
                 ${mes2[i].title}
             </div>
             <div class="goods-tip">火爆开售</div>
             <div class="goods-image">
                 <img src="${mes2[i].image}" alt="" />
             </div>
         </div>
         `
    }
    for (i = 2; i < mes2.length; i++) {
        str4 += `
         <div class="goods-list good1">
             <div class="goods-title">
                 ${mes2[i].title}
             </div>
             <div class="goods-image">
                 <img src="${mes2[i].image}" alt="" />
                 <div class="price">￥${mes2[i].price}</div>
                 <div class="price line">￥138</div>
             </div>
         </div>
         `
    }
    str5 = `
     <div class="goods-column good2">
         <div class="goods-title">
             ${mes3[0].title}
         </div>
         <div class="goods-tip">精品打折</div>
         <div class="goods-price bg-color-0" style="background:#5fc600">${mes3[0].price}元</div>
         <div class="goods-image">
             <img src="${mes3[0].image}" alt="" />
         </div>
     </div>
     <div class="goods-column">
         <div class="goods-list good2">
             <div class="goods-list-title">
             ${mes3[1].title}
             </div>
             <div class="goods-list-tip">品质精挑</div>
             <div class="goods-list-image">
                 <img src="${mes3[1].image}" alt="" />
             </div>
         </div>
         <div class="goods-list good2">
             <div class="goods-list-title">
             ${mes3[2].title}
             </div>
             <div class="goods-list-tip">品质精挑</div>
             <div class="goods-list-image">
                 <img src="${mes3[2].image}" alt="" />
             </div>
         </div>
     </div>
     `
    for (i = 3; i < mes3.length; i++) {
        str6 += `
         <div class="goods-list good2">
             <div class="goods-title">
                 ${mes3[i].title}
             </div>
             <div class="goods-image">
                 <img src="${mes3[i].image}" alt="" />
                 <div class="price">￥${mes3[i].price}</div>
                 <div class="price line">￥576</div>
             </div>
         </div>
         `
    }
    goods_row_1[0].innerHTML = str1
    goods_row_1[1].innerHTML = str3
    goods_row_1[2].innerHTML = str5
    goods_row_2[0].innerHTML = str2
    goods_row_2[1].innerHTML = str4
    goods_row_2[2].innerHTML = str6

    var ogoods_main = document.querySelectorAll('.good');
    /* console.log(ogoods_main.length);
    console.log(res)
    console.log(res.data.list.data[0].items[0].gid); */
    for (let i = 0; i < ogoods_main.length; i++) {
        ogoods_main[i].onclick = function () {
            window.localStorage.setItem('gid', res.data.list.data[0].items[i].gid);
            window.location.href = "details.html";
        }
    }

    var ogoods_main = document.querySelectorAll('.good1');
    /* console.log(ogoods_main.length);
    console.log(res)
    console.log(res.data.list.data[1].items[1].gid); */
    for (let i = 0; i < ogoods_main.length; i++) {
        ogoods_main[i].onclick = function () {
            window.localStorage.setItem('gid', res.data.list.data[1].items[i].gid);
            window.location.href = "details.html";
        }
    }

    var ogoods_main = document.querySelectorAll('.good2');
   /*  console.log(ogoods_main.length);
    console.log(res)
    console.log(res.data.list.data[2].items[2].gid); */
    for (let i = 0; i < ogoods_main.length; i++) {
        ogoods_main[i].onclick = function () {
            window.localStorage.setItem('gid', res.data.list.data[2].items[i].gid);
            window.location.href = "details.html";
        }
    }
});

document.querySelector('.search-top').onclick = function () {
    window.location.href = "search_menu.html";
}

var onav_one = document.querySelector('.nav_one');
onav_one.onclick = function () {
    window.location.href = "./search_menu.html";
    document.querySelector('.load').style.display = 'block'
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