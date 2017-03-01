<?php
    header('Content-Type:text/html');
?>
<!--------------顶部隐藏导航条----------------------->
<div class="topNav ">
  <div id="topNav" class="container">
    <ul>
      <li><a href="rent.html" class="fade">首页</a></li>
      <li><a href="loan_single.html">注册</a></li>
      <li><a href="#">博客</a></li>
      <li><a href="#">条款</a></li>
      <li><a href="#">隐私</a></li>
      <li><a href="#">联系</a></li>
      <li class="fade"></li>
    </ul>
  </div>
</div>
<!---------------------头部1------------------------>
<div id="header">
  <!--注册成功遮罩层-->

  <div id="register_mask" class="register_mask hidden">
    <div class="mask_main">
      <span>&times;</span>

      <h3>注册成功,点击 <a href="#" class="login">登录</a></h3>
    </div>
  </div>

  <div id="login_mask" class="login_mask hidden">
    <div class="mask_main">
      <span class="close">&times;</span>

      <div id="login_tip" class="tip">
        <h5 class="hidden">用户名或密码错误</h5>
      </div>

      <form id="login_form">
        <div>
          <label for="uname">用户名</label>
          <input type="text" id="uname"/>
        </div>
        <div>
          <label for="upwd">密码</label>
          <input type="password" id="upwd"/>
        </div>
        <div>
          <a href="#" id="login" class="green_through login"><span>登录</span></a>
          <a href="loan_single.html" class="green_through register"><span>注册</span></a>
        </div>
      </form>

    </div>
  </div>


  <div class="header1">
    <div class="container">
      <span class="lf">REAL HOME</span>
      <ul class="rt">
        <li id="header_login"><a href="#"><span class="us"><img src="images/rentou.jpg">Login</span></a></li>
        <li><a href="loan_single.html">Register</a></li>
        <li><a href="#topNav"><span class="list"><img src="images/list.jpg"></span></a></li>
      </ul>
    </div>
  </div>
</div>

<!-------------------------------------------------->
<!-------------------头部2---------------------->
<div class="header2">
  <div class="container">
    <div class="header2_us">
      <h3>我们的<span>产品</span></h3>
    </div>
  </div>
</div>
<!----------------------------------------------------->