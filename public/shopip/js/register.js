var oinputs = document.querySelector('.inputs');
var ocellphone = document.querySelector('.cellphone');
var ocode_btn = document.querySelector('.code-btn');
var ovan_switch_node = document.querySelector('.van-switch__node');
var ovan_switch = document.querySelector('.van-switch');
var ovan_toast = document.querySelector('.van-toast');

var otext = document.querySelector('#text');
var oduanx = document.querySelector('#duanx');
var opass = document.querySelector('#pass');

var ovan_toast = document.querySelector('#van_toast');
var ovan_toast__text = document.querySelector('.van-toast__text');
var osure_btn = document.querySelector('.sure-btn');
/* 
var isError = true;
var pattern = /^1[3|4|5|7|8][0-9]{9}$/;
osure_btn.onclick = function () {

    if (otext.value == 0) {
        ovan_toast__text.innerHTML = "请输入验证码";
        ovan_toast.style.display = 'block'
        isError = false;
        return;
    } else {

    }
    if (obtnn.value.length > 11) {
        ovan_toast__text.innerHTML = "您输入的手机号格式不正确";
        isError = false;
        return;
    } else if (obtnn.value.length == "") {
        ovan_toast__text.innerHTML = "请输入手机号";
    } else if (obtnn.value.length > 20 || obtnn.value.length < 6) {
        ovan_toast__text.innerHTML = "您输入的用户名或密码不正确"
        isError = false;
        return;
    }
}
 */

/* 验证手机号 */
function checkMobile(strMobile) {
    var regu = /^[1][345678][0-9]{9}$/;
    var re = new RegExp(regu);
    if (re.test(strMobile)) {
        return true;
    } else {
        return false;
    }
};

function phoneCheck() {
    var phone = document.getElementById("phone").value;
    var phone_hint = document.querySelector(".van-toast__text");
    var flag = checkMobile(phone);
    if (flag) {
        ovan_toast.style.display = 'block'
        setTimeout(function () {
            ovan_toast.style.display = 'none'
        }, 2000);
        phone_hint.innerHTML = "请输入短信验证码";
        ocode_btn.style.border = '1px solid red';
        ocode_btn.style.background = '#fff'
        return true;
    } else {
        ovan_toast.style.display = 'block'
        setTimeout(function () {
            ovan_toast.style.display = 'none'
        }, 2000);
        phone_hint.innerHTML = "手机号格式错误";
        clearTimeout(timer); //清除定时器 
        return false;
    }
}

/* 校验密码*/
function checkPass() {
    var value = document.getElementById("pass").value;
    var hint = document.querySelector(".van-toast__text");
    if (value.length < 6) {
        ovan_toast.style.display = 'block'
        setTimeout(function () {
            ovan_toast.style.display = 'none'
        }, 2000);
        hint.innerHTML = "密码太短";
        return false;
    } else {
        ovan_toast.style.display = 'block'
        ovan_toast.style.display = 'block'
        setTimeout(function () {
            ovan_toast.style.display = 'none'
        }, 2000);
        hint.innerHTML = "密码格式合格";
        clearTimeout(timer); //清除定时器 
        return true;
    }
}

function pass_hide() {
    var hint = document.querySelector(".van-toast__text");
    hint.innerHTML = "";
}



ocode_btn.onclick = function () {
    var time = 10;
    var timer = null;
    ocode_btn.innerHTML = '重新获取' + '(' + time + ')';
    ocode_btn.style.border = '1px solid red';
    ocode_btn.style.background = '#fff'
    setTimeout(function () {
        ocode_btn.style.border = '1px solid #eaeaea'
        ocode_btn.style.background = '#eaeaea'
    }, 10000);
    ocode_btn.disabled = true;
    clearInterval(timer);
    timer = setInterval(function () {
        if (time == 1) {
            ocode_btn.innerHTML = '获取短信验证码';
            ocode_btn.disabled = false;
        } else {
            time--;
            ocode_btn.innerHTML = '重新获取' + '(' + time + ')';
        }
    }, 1000);

}

var off = true;
var num = 0;
ovan_switch.onclick = function () {
    if (off && num == 0) {
        opass.type = 'text';
        ovan_switch.className = 'van-switch--on van-switch';
    } else {
        ovan_switch.className = 'van-switch';
        opass.type = 'password';
    }
    off = !off;
}