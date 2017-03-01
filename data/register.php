<?php
    header('Content-Type:application/json');
    @$uname=$_REQUEST['uname'] or die('{"msg":"uname required"}');
    @$upwd=$_REQUEST['upwd'] or die('{"msg":"upwd required"}');
    @$uphone=$_REQUEST['uphone'] or die('{"msg":"uphone required"}');
    @$uemail=$_REQUEST['uemail'] or die('{"msg":"uemail required"}');
    @$ucity=$_REQUEST['ucity'] or die('{"msg":"ucity required"}');
    require('init.php');
    $sql="INSERT INTO rent_user VALUES(null,'$uname','$upwd','$uphone','$uemail','$ucity')";
    $result=mysqli_query($conn,$sql);
    if($result){
        echo ('{"msg":"注册成功"}');
    }else{
        echo ('{"msg":"注册失败"}');
    }