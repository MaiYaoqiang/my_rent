//顶部导航条
$('#header').load('data/header.php');
$('#footer').load('data/footer.php');
(function () {
  if (sessionStorage['uname']) {
    $('#header_login').html("Hi! " + sessionStorage['uname']);
  }
})();

  $("#header").on("click",".header1 li span.list",function (e) {
    e.preventDefault;
    $(`${$(this).parent().attr("href")}`).toggleClass("show");
  });

  $("#header").on("mouseover", "#topNav ul li:not(:last-child)", function () {
    var i;
    switch ($(this).index()) {
      case 0:
        i = "0px";
        break;
      case 1:
        i = "100px";
        break;
      case 2:
        i = "200px";
        break;
      case 3:
        i = "300px";
        break;
      case 4:
        i = "400px";
        break;
      case 5:
        i = "500px";
        break;
    }
    ;
    $(this).siblings(":last").css("left", i);
    $(this).children("a").addClass("fade");
    $(this).siblings().find("a.fade").removeClass("fade");
  });

///////////////////////////////////////////轮播小点
  var slider = {
    timer: null,
    delay: 3000,
    url: ['images/4.jpg', 'images/2.jpg', 'images/5.jpg'],
    now: 0,
    onloadImage: function () {
      var img = new Image();
      for (var i = 0; i < this.url.length; i++) {
        img.src = this.url[i];
      }
    },
    clear: function (index) {
      clearInterval(this.timer);
      this.now = index;
    },
    start: function () {
      this.timer = setInterval(function () {
        this.now++;
        if (this.now > 2) {
          this.now = 0
        }
        this.show(this.now);
      }.bind(this), this.delay);
    },
    show: function (index) {
      var $index = $(".header2 .slider_index li");
      $index.eq(index).addClass("active").siblings(".active").removeClass("active");
      $(".header2").css("background-image", `url(${this.url[index]})`);
    }
  }
  slider.onloadImage();
  slider.start();
  $(".header2 .slider_index").on("click", "li", function () {
    slider.clear($(this).index());
    slider.show($(this).index());
    slider.start();
  });

////////////////////////////////////////////////////
//注册正则验证
  var formTest = {
    phone: function (phoneValue) {
      var reg = /^(\+86|0086)?\s*1[34578]\d{9}$/;
      return reg.test(phoneValue);
    },
    email: function (emailValue) {
      var reg = /^\w+@[a-zA-Z0-9]{2,}(.[a-zA-Z0-9]{2,3}){1,2}$/;
      return reg.test(emailValue);
    },
    //6-12位数字或字母
    password: function (passwordValue) {
      var reg = /^([a-zA-Z]|[0-9]){6,12}$/;
      return reg.test(passwordValue);
    }
  }

  var allTest = {
    testName: function () {
      $(this).next().css("display", "inline-block");
      if ($(this).val() == "") {
        $(this).next().html("姓名不能为空").css("color", "#F95959");
        return false;
      } else {
        $(this).next().html("姓名输入正确").css("color", "#27DA93");
        return true;
      }
    },
    testPwd: function () {
      $(this).next().css("display", "inline-block");
      if ($(this).val() == "") {
        $(this).next().html("密码不能为空").css("color", "#F95959");
        return false;
      } else if (!formTest.password($(this).val())) {
        $(this).next().html("密码是6-12位数字或字母组合").css("color", "#F95959");
        return false;
      } else {
        $(this).next().html("密码输入正确").css("color", "#27DA93");
        return true;
      }
    },
    testPhone: function () {
      $(this).next().css("display", "inline-block");
      if ($(this).val() == "") {
        $(this).next().html("手机号不能为空").css("color", "#F95959");
        return false;
      } else if (!formTest.phone($(this).val())) {
        $(this).next().html("手机号格式不对").css("color", "#F95959");
        return false;
      } else {
        $(this).next().html("手机号输入正确").css("color", "#27DA93");
        return true;
      }
    },
    testEmail: function () {
      $(this).next().css("display", "inline-block");
      if ($(this).val() == "") {
        $(this).next().html("邮箱不能为空").css("color", "#F95959");
        return false;
      } else if (!formTest.email($(this).val())) {
        $(this).next().html("邮箱格式不对").css("color", "#F95959");
        return false;
      } else {
        $(this).next().html("邮箱输入正确").css("color", "#27DA93");
        return true;
      }
    },
    testCity: function () {
      $(this).next().css("display", "inline-block");
      if ($(this).val() == "") {
        $(this).next().html("城市不能为空").css("color", "#F95959");
        return false;
      } else {
        $(this).next().html("城市输入正确").css("color", "#27DA93");
        return true;
      }
    }
  }
//表单绑定焦点移除事件

  $("#msg_upwd").on("keyup", allTest.testPwd);
  $("#msg_ucity").on("keyup", allTest.testCity);
//注册按钮验证 通过了再异步请求·························
  $("#btn_register").on("click", function (e) {
    e.preventDefault();
    if (allTest.testName.call($("#msg_uname")) && allTest.testPwd.call($("#msg_upwd")) && allTest.testPhone.call($("#msg_uphone")) && allTest.testEmail.call($("#msg_uemail")) && allTest.testCity.call($("#msg_ucity"))) {
      var form = $("#form_apply").serialize();
      $.ajax({
        type: "POST",
        url: "data/register.php",
        data: form,
        success: function (obj) {
          $("#register_mask").removeClass("hidden")
        }
      });
    }
  });
//注册申请异步请求验证
  var nameTimer = null;
  var phoneTimer = null;
  var emailTimer = null;
  $("#msg_uname").on("keyup", function () {
    clearTimeout(nameTimer);
    nameTimer = setTimeout(function () {
      $.ajax({
        type: 'POST',
        url: 'data/check_uname.php',
        data: {uname: $("#msg_uname").val()},
        success: function (data) {
          if (data.msg) {
            $("#msg_uname").next().html(data.msg).css("color", "#F95959");
          }
        },
        error: function (data) {
          allTest.testName.call($("#msg_uname"));
        }
      });
    }, 300);
  });
  $("#msg_uphone").on("keyup", function () {
    clearTimeout(phoneTimer);
    phoneTimer = setTimeout(function () {
      $.ajax({
        type: 'POST',
        url: 'data/check_uphone.php',
        data: {uphone: $("#msg_uphone").val()},
        success: function (data) {
          if (data.msg) {
            $("#msg_uphone").next().html(data.msg).css("color", "#F95959");
          }
        },
        error: function (data) {
          allTest.testPhone.call($("#msg_uphone"));
        }
      });
    }, 300);
  });
  $("#msg_uemail").on("keyup", function () {
    clearTimeout(emailTimer);
    emailTimer = setTimeout(function () {
      $.ajax({
        type: 'POST',
        url: 'data/check_uemail.php',
        data: {uemail: $("#msg_uemail").val()},
        success: function (data) {
          if (data.msg) {
            $("#msg_uemail").next().html(data.msg).css("color", "#F95959");
          }
        },
        error: function (data) {
          allTest.testEmail.call($("#msg_uemail"));
        }

      });
    }, 300);
  });


//登录和注册遮罩层
  var mask = {
    showRegister: function () {
      $("#register_mask").removeClass("hidden");
    },
    hideRegister: function () {
      $("#register_mask").addClass("hidden");
    },
    showLogin: function () {
      $("#login_mask").removeClass("hidden");
    },
    hideLogin: function () {
      $("#login_mask").addClass("hidden");
    }
  };
  $("#header").on("click","#register_mask span",function(e){
    e.preventDefault();
    mask.hideRegister();
  });
  $("#header").on("click","#register_mask a.login",function(e){
    e.preventDefault();
    mask.hideRegister();
    mask.showLogin();
  });
  $("#header").on("click","#login_mask span.close",function(e){
    e.preventDefault();
    mask.hideLogin();
  });
  $("#header").on("click","#header_login",function (e) {
    e.preventDefault();
    mask.showLogin();
  });
  $("#btn_login").click(function (e) {
    e.preventDefault();
    mask.showLogin();
  });
//////点击登录/////
  $("#header").on("click","#login",function(e){
    e.preventDefault();
    var name = $('#uname').val();
    var pwd = $('#upwd').val();
    console.log(name=="");
    if ((name != "") && (pwd != "")) {
      $.ajax({
        type: 'POST',
        url: 'data/login.php',
        data: {uname: name, upwd: pwd},
        success: function (msg) {
          if (msg.code == 3) {
            $('#login_tip h5').removeClass("hidden").html("用户名或密码有误");
            $('#login_tip h5').addClass("hidden");
            sessionStorage['uname'] = name;
            $('#header_login').html("Hi! " + name);
            location.href = 'rent.html';
          }
        }
      });
    } else {
      $('#login_tip h5').removeClass("hidden").html("请输入用户名和密码");
    }
  });



/////////////////





