window.location = function () {
    // 设置cookie
    function setCookie(key, value, iday) {
        var dateobj = new Date();
        dateobj.setDate(dateobj.getDate() + iday)
        document.cookie = key + "=" + value + ";expires=" + dateobj;
    }
    // 删除cookie
    function removeCookie(key) {
        var dateobj = new Date();
        dateobj.setDate(dateobj.getDate - 1);
        document.cookie = key + "=;expires=" + dateobj;
    }

    // 获取
    function getCookie(key) {
        var cookieData = document.cookie
        // console.log(cookieData)
        // password=123456; username=aoao
        // 按;号分割
        var arr = cookieData.split(';');
        for (var i = 0; i < arr.length; i++) {
            // 按=分割
            var arr1 = arr[i].split('=');
            if (arr1[0].replace(/^(\s)/g, '') == key) {
                return arr1[1]
            }
        }
        return '';
    }

    setCookie('btn', '17716616978', 30)
    setCookie('pass', '123456', 30)

    var username = getCookie('btn');
    document.getElementById('btn').value = btn
    var password = getCookie('pass');
    document.getElementById('pass').value = pass
}