var mySwiper = new Swiper('.swiper-container', {
    autoplay: true, //启动自动切换
    loop: true, // 循环模式选项
    speed: 100, //切换速度
    /*   effect: "flip", //实现3D效果 */
    //initialSlide :1,//设置为1后，Swiper初始化时activeSlide成了第2个

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
})